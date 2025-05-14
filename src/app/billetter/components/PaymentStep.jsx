"use client";
import { useForm, FormProvider } from "react-hook-form";
import { useState, useEffect } from "react";
import InputField from "@/ui/Atom/InputField/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import CheckboxField from "@/ui/Atom/CheckboxField/CheckboxField";
import { paymentSchema } from "./Validation";
import { postTicket } from "@/lib/api";
import Button from "@/ui/Atom/Button/Button";
import { LuCreditCard } from "react-icons/lu";
import Ordreoversigt from "./Ordreoversigt";
import { OrdreoversigtTest } from "./Ordre";

const PaymentStep = ({ onNext, onBack, formData }) => {
  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    watch,
    // getValues,
    control,
    formState: { errors, touchedFields, isValid },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onSubmit",
    resolver: zodResolver(paymentSchema),
    // resolver: zodResolver(paymentSchema.merge(dicountSchemma)),
    defaultValues: formData,
  });

  // til dicount section
  const discountCode = watch("discountCode");
  const enteredCode = (formData.discountCode || "").toLowerCase();
  const isValidDiscount = ["katinka", "vsm"].includes(
    discountCode?.trim().toLowerCase()
  );
  const discount = isValidDiscount ? 0.2 : 0;

  // const [discountCode, setDiscountCode] = useState("");
  // const [discount, setDiscount] = useState(0);

  const calculateTotalPrice = () => {
    return formData?.tickets?.reduce((total, ticket) => {
      return total + ticket.price * ticket.quantity;
    }, 0);
  };
  const totalPrice = calculateTotalPrice();
  const discountAmount = totalPrice * discount;
  const finalPrice = totalPrice - discountAmount;
  // const [hasTriedApplyingCode, setHasTriedApplyingCode] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  // til at formatert udløbsdato og kort nummer

  const formatExpireDate = (value) => {
    const cleanedValue = value.replace(/\D/g, ""); // Fjern ikke-cifre
    if (cleanedValue.length <= 2) return cleanedValue; // Returnér som det er, hvis der er to eller færre cifre
    return cleanedValue.slice(0, 2) + "/" + cleanedValue.slice(2, 4); // Indsæt '/' efter de første to cifre
  };

  const formatCardNumber = (value) => {
    const cleanedValue = value.replace(/\D/g, ""); // Remove non-digits
    const formatted = cleanedValue.replace(/(\d{4})(?=\d)/g, "$1 "); // Add spaces after every 4 digits
    return formatted;
  };

  console.log(formData);

  // til at subitte data efter loding anaimaton

  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleButtonClick = () => {
    setIsLoading(true);
    setWasSubmitted(true); // vi har forsøgt at sende

    setTimeout(() => {
      trigger().then((isValid) => {
        if (isValid) {
          handleSubmit(onSubmit)(); // send formen
        } else {
          setIsLoading(false); // vis fejl efter loader-delay
        }
      });
    }, 800); // matcher delay fra <Button delay={800}>
  };

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
          onNext(submittedData); // fortsæt kun hvis det lykkes
        })
        .catch((err) => {
          console.error("Fejl ved post:", err);
          // evt. vis fejl til bruger her
        });
    }
  }, [submittedData]);

  const onSubmit = (data) => {
    setSubmittedData(data); // trigger useEffect
  };

  return (
    <div className="mx-8">
      <button type="button" onClick={onBack}>
        går tilbage
      </button>

      <FormProvider {...{ register, handleSubmit, errors }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col md:flex-row flex-wrap gap-8"
        >
          <div className="flex-1 md:w-[411px] ">
            <div className="flex items-center pb-3  gap-3">
              <div className="aspect-square w-8 h-8 flex items-center justify-center rounded-full bg-bw-950">
                <p className="text-bw-50 text-center">2</p>
              </div>
              <h1 className=" font-semibold text-3xl  ">Dine informationer</h1>
            </div>

            <div className="space-y-3">
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

          <OrdreoversigtTest
            formData={formData}
            totalPrice={totalPrice}
            discountAmount={discountAmount}
            finalPrice={finalPrice}
            register={register}
            errors={errors}
          />

          <div className="md:w-[411px] ">
            <div className="flex items-center pb-3 gap-3">
              <div className="aspect-square w-8 h-8 flex items-center justify-center rounded-full bg-bw-950">
                <p className="text-bw-50 text-center">3</p>
              </div>
              <h2 className=" font-semibold  text-3xl">Betaling</h2>
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
              Ved at trykke på knappen ‘Bekræft og betal’ nedenfor, acceptere du
              Handelsbetingelserne samt Fortrolighedspolitikken.
            </p>

            <Button
              type="button"
              variant="primary"
              size="md"
              isLoading
              delay={800}
              className="w-full "
              iconOnly={false}
              iconAndText={true}
              iconStart={<LuCreditCard />}
              onClick={handleButtonClick}
            >
              fuldfør betaling
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default PaymentStep;

{
  /* <div className="flex-1">
            <Ordreoversigt
              formData={formData}
              discount={discount}
              discountCode={discountCode}
              setDiscountCode={setDiscountCode}
              setDiscount={setDiscount}
              totalPrice={totalPrice}
              discountAmount={discountAmount}
              finalPrice={finalPrice}
              errors={errors}
              trigger={trigger}
              register={register}
              setValue={setValue}
              control={control}
              // getValues={getValues}
            />
          </div> */
}

// const handleButtonClick = () => {
//   setIsLoading(true);
//   setWasSubmitted(true);

//   // Tjek om rabatkoden er tom, og hvis det er tilfældet, tillad submit
//   setTimeout(() => {
//     trigger().then((isValid) => {
//       if (isValid && discountCode === "") {
//         // Hvis rabatkoden er tom, fortsæt submit
//         handleSubmit(onSubmit)();
//       } else if (!discountCode) {
//         setIsLoading(false); // Hvis rabatkoden ikke er anvendt, lad være med at submit
//       } else {
//         setIsLoading(false);
//       }
//     });
//   }, 800);
// };
// const handleButtonClick = () => {
//   setIsLoading(true);
//   setWasSubmitted(true);

//   setTimeout(() => {
//     trigger().then((isValid) => {
//       if (isValid && discountCode === "") {
//         handleSubmit(onSubmit)();
//       } else {
//         setIsLoading(false);
//       }
//     });
//   }, 800);
// };
// const handleButtonClick = () => {
//   setIsLoading(true);
//   setWasSubmitted(true);

//   // Valider rabatkode, hvis der ikke er en aktiv rabat
//   setTimeout(() => {
//     trigger().then((isValid) => {
//       if (isValid && discountCode === "") {
//         handleSubmit(onSubmit)(); // Hvis rabatkoden ikke er indtastet, fortsæt med submission
//       } else {
//         setIsLoading(false); // Hvis rabatkoden ikke er korrekt, afbryd
//       }
//     });
//   }, 800); // Matcher delay fra <Button delay={800}>
// };
