"use client";
import { useForm, FormProvider } from "react-hook-form";
import { IoPricetagOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import InputField from "@/ui/Atom/InputField/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import CheckboxField from "@/ui/Atom/CheckboxField/CheckboxField";
import DiscountSection from "./Discount";
import { paymentSchema } from "./Validation";
import { postTicket } from "@/lib/api";

const PaymentStep = ({ onNext, onBack, formData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(paymentSchema),
    defaultValues: formData || { name: "", email: "" }, // Brug defaultValues hvis de er tilgængelige
  });

  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const calculateTotalPrice = () => {
    return formData?.tickets?.reduce((total, ticket) => {
      return total + ticket.price * ticket.quantity;
    }, 0);
  };

  const totalPrice = calculateTotalPrice();
  const discountAmount = totalPrice * discount;
  const finalPrice = totalPrice - discountAmount;

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

  const [submittedData, setSubmittedData] = useState(null);

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
      <h1 className="text-stor font-medium text-payCol">Billetter</h1>
      <FormProvider {...{ register, handleSubmit, errors }}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* <CustomerInfo /> */}
          <div className="grid grid-cols-2">
            <div className="col-span-1 ">
              <p className="font-medium text-2xl">Dine oplysinger</p>
              <InputField
                name="name"
                label="Navn"
                register={register}
                error={errors.name}
              />
              <InputField
                name="email"
                label="Email"
                type="email"
                register={register}
                error={errors.email}
              />
              <CheckboxField
                name="terms"
                label="Jeg accepterer handelsbetingelserne"
                register={register}
                error={errors.terms}
              />
              <CheckboxField
                name="newsletter"
                label="Tilmeld nyhedsbrev"
                register={register}
                error={errors.newsletter}
              />
              <div>
                <h2 className="text-2xl font-medium">betaling</h2>
                <InputField
                  name="cardHolder"
                  label="Kortindehaverens navn"
                  register={register}
                  error={errors.cardHolder}
                />
                <InputField
                  name="cardNumber"
                  label="Kortnummer"
                  type="text"
                  maxLength="19"
                  register={register}
                  error={errors.cardNumber}
                  onInput={(e) =>
                    (e.target.value = formatCardNumber(e.target.value))
                  }
                />
                <InputField
                  name="cardCVC"
                  label="CVC"
                  maxLength="3"
                  register={register}
                  error={errors.cardCVC}
                />
                <InputField
                  name="expiryDate"
                  label="Udløbsdato (MM/YY)"
                  type="text"
                  maxLength="5"
                  register={register}
                  error={errors.expiryDate}
                  onInput={(e) =>
                    (e.target.value = formatExpireDate(e.target.value))
                  }
                />
              </div>
            </div>
            <div className="w-[400px] mx-12 col-span-1 col-start-2 h-[600px] bg-amber-500">
              <ul className="space-y-2">
                {formData.tickets.map((ticket, index) => {
                  const total = ticket.price * ticket.quantity;
                  const discountAmount = discount > 0 ? total * discount : 0;
                  const finalTotal = total - discountAmount;

                  return (
                    <li key={index} className="flex flex-col gap-1">
                      <div className="flex justify-between">
                        <span>
                          {ticket.type} x {ticket.quantity}
                        </span>
                        {discount > 0 ? (
                          <span className="line-through text-gray-500">
                            {total} kr
                          </span>
                        ) : (
                          <span>{total} kr</span>
                        )}
                      </div>
                      {discount > 0 && (
                        <>
                          <div className="flex justify-between text-green-700 text-sm">
                            <span>Rabat (katinka)</span>
                            <span>-{discountAmount.toFixed(0)} kr</span>
                          </div>
                          <div className="flex justify-between font-semibold">
                            <span>Ny pris</span>
                            <span>{finalTotal.toFixed(0)} kr</span>
                          </div>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>

              <DiscountSection
                discount={discount}
                discountCode={discountCode}
                setDiscountCode={setDiscountCode}
                setDiscount={setDiscount}
              />
              <div className="mt-6 font-semibold text-xl">
                {/* Total pris */}
                <div className="flex justify-between">
                  <span>Total pris</span>
                  <span>{totalPrice.toFixed(0)} kr</span>
                </div>

                {/* Hvis rabat er aktiv, vis rabatbeløb og den nye pris */}
                {discount > 0 && (
                  <>
                    <div className="flex justify-between text-green-700 text-sm">
                      <span>Rabat ({discount * 100}%)</span>
                      <span>-{discountAmount.toFixed(0)} kr</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Ny pris</span>
                      <span>{finalPrice.toFixed(0)} kr</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <button type="button" onClick={onBack}>
            går tilbage
          </button>
          <button
            type="submit"
            className="bg-payCol active:bg-gray-800 py-2 px-3 self-end place-self-end  text-black text-lg mt-4"
          >
            fuldfør betaling
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default PaymentStep;
