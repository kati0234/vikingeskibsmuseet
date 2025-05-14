import InputField from "@/ui/Atom/InputField/InputField";
import { useFormContext } from "react-hook-form";

const CustomerInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const validationRules = {
    name: {
      required: "Navn er påkrævet",
    },
    email: {
      required: "Email er påkrævet",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Ugyldigt email-format",
      },
    },
  };

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold">Modtager</h2>

      <InputField
        name="name"
        label="Navn"
        register={register}
        error={errors.name}
        rules={validationRules.name}
      />
      <InputField
        name="email"
        label="Email"
        type="email"
        register={register}
        error={errors.email}
        rules={validationRules.email}
      />
    </div>
  );
};

export default CustomerInfo;
<div className="w-[400px] p-4 col-span-1 col-start-2 bg-bw-100 rounded-xl">
  <p className="text-2xl font-semibold pb-2">ordreoversigt</p>

  <ul className="space-y-2">
    {formData.tickets.map((ticket, index) => {
      const total = ticket.price * ticket.quantity;

      const discountAmount = discount > 0 ? total * discount : 0;
      const finalTotal = total - discountAmount;

      return (
        <li key={index} className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span>
              {ticket.quantity} x {ticket.type}
            </span>

            <span
              className={clsx({
                "line-through font-normal text-base text-gray-500":
                  discount > 0, // Rabat aktiv - pris gennemstreget
                "font-semibold text-base": discount === 0, // Ingen rabat - almindelig fed tekst
              })}
            >
              {total} kr
            </span>
          </div>
          {discount > 0 && (
            <>
              <div className="flex justify-between text-sm">
                <span>Rabat (katinka)</span>
                <span>-{discountAmount.toFixed(0)} kr</span>
                <span className="font-semibold">
                  {finalTotal.toFixed(0)} kr
                </span>
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
  <div className="mt-6  text-xl">
    {/* Total pris */}
    <div className="flex justify-between">
      <span className="font-semibold">Sub Total</span>
      <span
        className={
          discount > 0
            ? "line-through font-normal text-bw-950"
            : "font-semibold"
        }
      >
        {totalPrice.toFixed(0)} kr.
      </span>
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
</div>;
