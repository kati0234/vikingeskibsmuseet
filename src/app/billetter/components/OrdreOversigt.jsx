"use client";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { LuTicket } from "react-icons/lu";
import InputField from "@/ui/Atom/InputField/InputField";
import Button from "@/ui/Atom/Button/Button";
import { discountCodes } from "./Validation";
const OrdreOversigt = ({
  formData,
  totalPrice,
  discountAmount,
  finalPrice,
}) => {
  const {
    register,
    watch,
    trigger,
    formState: { errors, touchedFields, isSubmitted },
  } = useFormContext();

  const [isApplyingDiscount, setIsApplyingDiscount] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);

  const discountCode = watch("discountCode");

  const handleApplyDiscount = () => {
    setIsApplyingDiscount(true);
    setShowDiscount(false); // Skjul rabatten indtil vi har tjekket

    setTimeout(async () => {
      const isValid = await trigger("discountCode");

      if (
        isValid &&
        discountCode &&
        discountCodes.includes(discountCode.trim().toLowerCase())
      ) {
        setShowDiscount(true);
      } else {
        setShowDiscount(false);
      }
      setIsApplyingDiscount(false);
    }, 800);
  };

  return (
    <div className="space-y-4  p-4 w-full md:w-[375px] rounded-lg bg-bw-100">
      <p className="font-semibold text-[28px]">Ordreoversigt</p>
      <ul className=" border-b pb-3">
        {formData.tickets.map((ticket) => (
          <li key={ticket.type} className="py-1 flex justify-between">
            <span>
              {ticket.quantity}x {ticket.type}
            </span>
            <span className="font-semibold">
              {ticket.price * ticket.quantity} kr
            </span>
          </li>
        ))}
      </ul>

      <div className="flex gap-2 flex-col  justify-center">
        <InputField
          name="discountCode"
          label="Rabatkode"
          type="text"
          placeholder="Indtast rabatkode"
          register={register}
          error={
            (isSubmitted || touchedFields.discountCode) && errors.discountCode
          }
          success={
            (isSubmitted || touchedFields.discountCode) && !errors.discountCode
          }
          isLoading={isApplyingDiscount}
        />

        <Button
          onClick={handleApplyDiscount}
          delay={800}
          size="md"
          isLoading={handleApplyDiscount}
          type="button"
          iconOnly={false}
          variant="secondary"
          iconAndText
          aria-label="anvend rabatkoden"
          iconStart={<LuTicket />}
        >
          {isApplyingDiscount ? "Anvendt" : "Anvend"}
        </Button>
      </div>
      <div className="pt-4 space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{totalPrice} kr</span>
        </div>

        {/* vil kun vise det hvis det er rigit */}
        {showDiscount && (
          <div className="flex justify-between">
            <span>Rabat ({discountCode || "Ingen kode"})</span>
            <span>-{discountAmount} kr</span>
          </div>
        )}

        <div className="flex justify-between font-bold text-lg">
          <span>Pris i alt</span>
          <span>{finalPrice} kr</span>
        </div>
      </div>
    </div>
  );
};
export default OrdreOversigt;
