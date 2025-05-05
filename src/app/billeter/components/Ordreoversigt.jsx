// OrderHistory.js

import React from "react";
import clsx from "clsx";
import DiscountSection from "./Discount";
import Discount from "./DiscountTest";
import InputField from "@/ui/Atom/InputField/InputField";
import { LuTicket } from "react-icons/lu";
import Button from "@/ui/Atom/Button/Button";
import { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
const Ordreoversigt = ({
  formData,
  discount,
  discountCode,
  setDiscountCode,
  setDiscount,
  totalPrice,
  finalPrice,
  discountAmount,
  errors,
  // getValues,
  setValue,
  control,
  register,

  trigger,
}) => {
  const [tempCode, setTempCode] = useState(discountCode || "");

  const validateDiscount = () => {
    trigger("discountCode").then((isValid) => {
      if (!isValid) return;

      const code = tempCode.trim().toLowerCase();
      setDiscountCode(code);

      if (code === "katinka") {
        setDiscount(0.1);
      } else if (code === "vsm") {
        setDiscount(0.2);
      } else {
        setDiscount(0);
      }
      setValue("hasAppliedDiscount", true); // Marker at rabatkoden er blevet anvendt
    });
  };

  return (
    <div className="w-[400px] md:col-start-2 col-span-1 p-4 bg-bw-100 rounded-xl mx-auto">
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

      <label htmlFor="discountCode">Rabatkode</label>
      {/* <input
        id="discountCode"
        name="discountCode"
        type="text"
        value={tempCode}
        onChange={(e) => setTempCode(e.target.value)}
        onBlur={validateDiscount}
        className="w-full p-2 border rounded-md"
        placeholder="Indtast rabatkode"
      /> */}
      {/* {errors.discountCode && (
        <span className="text-red-500">{errors.discountCode.message}</span>
      )} */}
      {/* <input
        id="discountCode"
        type="text"
        {...register("discountCode")}
        value={tempCode}
        onChange={(e) => setTempCode(e.target.value)}
        onBlur={validateDiscount}
        className="w-full p-2 border rounded-md"
        placeholder="Indtast rabatkode"
      />
      {errors.discountCode && (
        <span className="text-red-500">{errors.discountCode.message}</span>
      )} */}

      {/* <input
        id="discountCode"
        type="text"
        {...register("discountCode", {
          validate: (value) => {
            const code = value.trim().toLowerCase();
            if (!code) return true;
            if (["katinka", "vsm"].includes(code)) return true;
            return "Ugyldig rabatkode";
          },
        })}
        value={tempCode}
        onChange={(e) => setTempCode(e.target.value)}
        onBlur={validateDiscount}
        className="w-full p-2 border rounded-md"
        placeholder="Indtast rabatkode"
      /> */}
      <Controller
        name="discountCode"
        control={control}
        defaultValue=""
        rules={{
          validate: (value) => {
            const code = value.trim().toLowerCase();
            if (!code) return "Indtast en rabatkode";
            if (!["katinka", "vsm"].includes(code)) return "Ugyldig rabatkode";
            return true;
          },
        }}
        render={({ field }) => (
          <input
            {...field}
            id="discountCode"
            value={tempCode}
            onChange={(e) => {
              setTempCode(e.target.value);
              field.onChange(e); // Vigtigt: RHF skal også få besked
            }}
            onBlur={() => {
              validateDiscount();
              field.onBlur(); // RHF trigger validering
            }}
            className="w-full p-2 border rounded-md"
            placeholder="Indtast rabatkode"
          />
        )}
      />
      {errors.discountCode && (
        <span className="text-red-500">{errors.discountCode.message}</span>
      )}
      {/* <input
        id="discountCode"
        {...register("discountCode", {
          validate: (value) => {
            const code = value.trim().toLowerCase();
            if (!code) return true;
            if (["katinka", "vsm"].includes(code)) return true;
            return "Ugyldig rabatkode";
          },
        })}
        value={tempCode}
        onChange={(e) => setTempCode(e.target.value)}
        onBlur={validateDiscount}
        className="w-full p-2 border rounded-md"
        placeholder="Indtast rabatkode"
      />
      {errors.discountCode && (
        <span className="text-red-500">{errors.discountCode.message}</span>
      )} */}
      {/* {errors.discountCode && (
        <span className="text-red-500">{errors.discountCode.message}</span>
      )} */}
      <div className="mt-6 text-xl">
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
    </div>
  );
};

export default Ordreoversigt;

// useEffect(() => {
//   // Update the price when discount or tickets change
//   setDiscountCode(tempCode);
//   setDiscount(discountAmountCalculated > 0 ? discountAmountCalculated : 0);
// }, [formData, discount, tempCode]);
// const validateDiscount = async () => {
//   const isValid = await trigger("discountCode");
//   if (!isValid) return; // Stop hvis feltet ikke er gyldigt

//   const code = tempCode.trim().toLowerCase();
//   setDiscountCode(code); // Gem den validerede kode

//   if (code === "katinka") {
//     setDiscount(0.1);
//   } else if (code === "vsm") {
//     setDiscount(0.2);
//   } else {
//     setDiscount(0);
//   }
// };

{
  /* <div className="mt-6">
        <InputField
          name="discountCode"
          label="Indtast rabatkode"
          type="text"
          placeholder="Indtast din rabatkode"
          register={register}
          error={errors.discountCode}
          success={discountCode && !errors.discountCode}
          value={tempCode}
          onBlur={validateDiscount}
          trigger={trigger}
          onChange={(e) => setTempCode(e.target.value)}
        />
        <Button
          onClick={validateDiscount}
          delay={800}
          size="md"
          type="button"
          isLoading
          iconOnly={false}
          variant="secondary"
          iconAndText
          iconStart={<LuTicket />}
        >
          Anvend
        </Button>
      </div> */
}

{
  /* <DiscountSection
        discount={discount}
        discountCode={discountCode}
        setDiscountCode={setDiscountCode}
        setDiscount={setDiscount}
        errors={errors}
        // setValue={setValue} // NYT
        trigger={trigger}
      /> */
}

{
  /* <Discount
        discountCode={discountCode}
        setDiscountCode={setDiscountCode}
        setDiscount={setDiscount}
        register={register}
        trigger={trigger}
        setValue={setValue}
        getValues={getValues}
        errors={errors}
      /> */
}

// const validateDiscount = () => {
//   trigger("discountCode").then((isValid) => {
//     if (!isValid) return;

//     const code = tempCode.trim().toLowerCase();
//     setDiscountCode(code);

//     if (code === "katinka") {
//       setDiscount(0.1);
//     } else if (code === "vsm") {
//       setDiscount(0.2);
//     } else {
//       setDiscount(0);
//     }

//     setValue("hasAppliedDiscount", true);
//   });
// };

// const [tempCode, setTempCode] = useState(discountCode || "");

// // const validateDiscount = () => {
// //   const code = tempCode.trim().toLowerCase();
// //   setDiscountCode(code);

// //   if (code === "katinka") {
// //     setDiscount(0.1);
// //   } else if (code === "vsm") {
// //     setDiscount(0.2);
// //   } else {
// //     setDiscount(0);
// //   }
// // };
// const validateDiscount = () => {
//   trigger("discountCode").then((isValid) => {
//     if (!isValid) return;

//     const code = tempCode.trim().toLowerCase();
//     setDiscountCode(code);

//     if (code === "katinka") {
//       setDiscount(0.1);
//     } else if (code === "vsm") {
//       setDiscount(0.2);
//     } else {
//       setDiscount(0);
//     }

//     // ✅ MARKÉR at rabatkoden er blevet anvendt
//     setValue("hasAppliedDiscount", true);
//   });
// };
