"use client";
import { useForm, FormProvider } from "react-hook-form";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentSchema, discountCodes } from "./Validation";
import { postTicket } from "@/lib/api";
import { LuCreditCard, LuMoveLeft } from "react-icons/lu";

// Komponenter
import InputField from "@/ui/Atom/InputField/InputField";
import CheckboxField from "@/ui/Atom/CheckboxField/CheckboxField";
import Button from "@/ui/Atom/Button/Button";
import OrdreOversigt from "./OrdreOversigt";

const PaymentStep = ({ onNext, onBack, formData }) => {
  // Formular konfiguration
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onSubmit",
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      ...formData,
      discountCode: formData.discountCode || "",
    },
  });

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, touchedFields },
  } = methods;

  // State til indsendelse
  const [isLoading, setIsLoading] = useState(false);
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Rabatkode logik
  const discountCode = watch("discountCode");
  const normalizedCode = discountCode?.trim().toLowerCase() || "";
  const isValidDiscount = discountCodes.includes(normalizedCode);
  const discountRate = isValidDiscount ? 0.2 : 0;

  // Prisberegninger
  const calculateTotalPrice = () => {
    return formData?.tickets?.reduce((total, ticket) => {
      return total + ticket.price * ticket.quantity;
    }, 0);
  };

  const totalPrice = calculateTotalPrice();
  const discountAmount = totalPrice * discountRate;
  const finalPrice = totalPrice - discountAmount;

  // Formateringsfunktioner
  const formatExpireDate = (value) => {
    const cleanedValue = value.replace(/\D/g, "");
    if (cleanedValue.length <= 2) return cleanedValue;
    return cleanedValue.slice(0, 2) + "/" + cleanedValue.slice(2, 4);
  };

  const formatCardNumber = (value) => {
    return value.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1 ");
  };
  const generateOrderNumber = () => {
    return Math.floor(10000000 + Math.random() * 90000000); // 8-cifret tal
  };

  // Håndter indsendelse
  const handleButtonClick = () => {
    setIsLoading(true);
    setWasSubmitted(true);

    setTimeout(() => {
      trigger().then((isValid) => {
        if (isValid) {
          handleSubmit(onSubmit)();
        } else {
          setIsLoading(false);
        }
      });
    }, 800);
  };

  const onSubmit = (data) => {
    setSubmittedData(data);
  };
  const orderNumber = generateOrderNumber();
  // Effekt for at håndtere dataindsendelse
  useEffect(() => {
    if (submittedData) {
      const ticketPayload = {
        name: submittedData.name,
        email: submittedData.email,
        tickets: formData.tickets.map(({ type, quantity }) => ({
          type,
          quantity,
        })),
      };

      postTicket(ticketPayload)
        .then((res) => {
          console.log("Sendt til Supabase:", res);
          onNext({
            ...submittedData,
            discountAmount,
            finalPrice,
            totalPrice,
            discountCode,
            orderNumber,
          });
        })
        .catch((err) => {
          console.error("Fejl ved post:", err);
        })
        .finally(() => setIsLoading(false));
    }
  }, [submittedData]);

  return (
    <div className="mx-8">
      <div className="w-[100px] fixed top-5 md:top-6 z-20 right-12-271 ">
        <p className="whitespace-nowrap text-center text-base">
          Trin 2 ud af 2
        </p>
        <div className="mt-1 flex gap-1">
          <div className="w-full h-1 bg-black rounded"></div>
          <div className="flex w-full h-1 overflow-hidden rounded">
            <div className="w-1/2 bg-black"></div>
            <div className="w-1/2 bg-gray-300"></div>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={onBack}
        aria-label="gå tilbage"
        className="mb-6 flex gap-2 items-center text-bw-950 font-medium hover:text-bw-900"
      >
        <LuMoveLeft /> <p> Gå tilbage </p>
      </button>

      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:flex-row flex-wrap gap-8"
        >
          <div className=" w-full md:w-[411px]">
            <div className="flex items-center pb-3 gap-3">
              <div className="aspect-square w-8 h-8 flex items-center justify-center rounded-full bg-bw-950">
                <p className="text-bw-50 text-center">2</p>
              </div>
              <h1 className="font-semibold text-3xl">Dine informationer</h1>
            </div>

            <div className="space-y-3 w-full">
              <InputField
                name="name"
                label="Fulde navn"
                type="text"
                placeholder="Indtast dit fulde navn"
                register={register}
                error={(wasSubmitted || touchedFields.name) && errors.name}
                success={(wasSubmitted || touchedFields.name) && !errors.name}
                isLoading={isLoading}
              />

              <InputField
                name="email"
                label="E-mail"
                type="email"
                className="flex-1"
                placeholder="Indtast din e-mailadresse"
                register={register}
                error={(wasSubmitted || touchedFields.email) && errors.email}
                success={(wasSubmitted || touchedFields.email) && !errors.email}
                isLoading={isLoading}
              />

              <CheckboxField
                name="newsletter"
                label="Tilmeld nyhedsbrev"
                register={register}
                error={errors.newsletter}
              />
            </div>
          </div>

          <OrdreOversigt
            formData={formData}
            totalPrice={totalPrice}
            discountAmount={discountAmount}
            finalPrice={finalPrice}
          />

          {/* Betalingsinformation */}
          <div className=" w-full md:w-[411px] ">
            <div className="flex items-center pb-3 gap-3">
              <div className="aspect-square w-8 h-8 flex items-center justify-center rounded-full bg-bw-950">
                <p className="text-bw-50 text-center">3</p>
              </div>
              <h2 className="font-semibold text-3xl">Betaling</h2>
            </div>

            <div className="space-y-3">
              <InputField
                name="cardNumber"
                label="Kortnummer"
                type="text"
                maxLength="19"
                placeholder="4560 8903 3290 5921"
                register={register}
                isLoading={isLoading}
                error={
                  (wasSubmitted || touchedFields.cardNumber) &&
                  errors.cardNumber
                }
                success={
                  (wasSubmitted || touchedFields.cardNumber) &&
                  !errors.cardNumber
                }
                onInput={(e) =>
                  (e.target.value = formatCardNumber(e.target.value))
                }
              />

              <div className="flex gap-6 justify-between">
                <InputField
                  name="expiryDate"
                  label="Udløbsdato"
                  placeholder="MM / YY"
                  type="text"
                  maxLength="5"
                  className="flex-1"
                  register={register}
                  isLoading={isLoading}
                  error={
                    (wasSubmitted || touchedFields.expiryDate) &&
                    errors.expiryDate
                  }
                  success={
                    (wasSubmitted || touchedFields.expiryDate) &&
                    !errors.expiryDate
                  }
                  onInput={(e) =>
                    (e.target.value = formatExpireDate(e.target.value))
                  }
                />

                <InputField
                  name="cardCVC"
                  label="CVC"
                  placeholder="456"
                  maxLength="3"
                  className="flex-1"
                  register={register}
                  isLoading={isLoading}
                  error={
                    (wasSubmitted || touchedFields.cardCVC) && errors.cardCVC
                  }
                  success={
                    (wasSubmitted || touchedFields.cardCVC) && !errors.cardCVC
                  }
                />
              </div>
            </div>

            <p className="text-bw-700 font-normal pt-6 pb-6 text-sm leading-5">
              Ved at trykke på knappen 'Bekræft og betal' accepterer du
              Handelsbetingelserne samt Fortrolighedspolitikken.
            </p>

            <Button
              type="button"
              variant="primary"
              size="md"
              isLoading={handleButtonClick}
              delay={800}
              className="w-full"
              iconOnly={false}
              iconAndText={true}
              aria-label="fuldfør betalingen"
              iconStart={<LuCreditCard />}
              onClick={handleButtonClick}
            >
              Fuldfør betaling
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default PaymentStep;
