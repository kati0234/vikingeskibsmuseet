import Button from "@/ui/Atom/Button/Button";
import InputField from "@/ui/Atom/InputField/InputField";
import { IoPricetagOutline } from "react-icons/io5";
import { LuTicket } from "react-icons/lu";
import { useState } from "react";

import { useFormContext, useWatch } from "react-hook-form";
const DiscountSection = ({
  discountCode,
  setDiscountCode,
  setDiscount,
  discount,
  errors,
  trigger,
}) => {
  const { setValue, clearErrors, register, setError, getValues } =
    useFormContext();

  const [errorMessage, setErrorMessage] = useState("");
  const [isDiscountApplied, setIsDiscountApplied] = useState(false); // Ny state til at holde styr på om rabatkoden er anvendt

  // const applyDiscount = () => {
  //   setValue("discountChecked", true); // Vi markerer, at rabatkoden er forsøgt brugt

  //   if (discountCode.toLowerCase() === "katinka") {
  //     setDiscount(0.2); // 20% rabat
  //     clearErrors("discountCode");
  //     setErrorMessage(""); // Fjern fejlmeddelelse, hvis rabatkoden er korrekt
  //     setIsDiscountApplied(true); // Markér at rabatkoden er anvendt
  //   } else {
  //     setDiscount(0); // Sæt rabat til 0, hvis ugyldig kode
  //     setError("discountCode", {
  //       type: "manual",
  //       message: "Ugyldig rabatkode",
  //     });
  //     setErrorMessage("Ugyldig rabatkode");
  //     setIsDiscountApplied(false); // Hvis rabatkoden er ugyldig, skal vi reset tilstand
  //   }
  // };
  const applyDiscount = () => {
    setValue("discountChecked", true); // Markerer rabatkoden som brugt i formularens state

    if (discountCode.toLowerCase() === "katinka") {
      setDiscount(0.2); // 20%
      clearErrors("discountCode");
      setErrorMessage("");
    } else {
      setDiscount(0); // Set rabat til 0, hvis rabatkoden er ugyldig
      setError("discountCode", {
        type: "manual",
        message: "Ugyldig rabatkode",
      });
      setErrorMessage("Ugyldig rabatkode");
    }
  };

  // const applyDiscount = () => {
  //   if (discountCode.toLowerCase() === "katinka") {
  //     setDiscount(0.2); // 20%
  //     setErrorMessage(""); // Fjern fejlmeddelelse, hvis rabatkoden er korrekt
  //   } else {
  //     setErrorMessage("Ugyldig rabatkode"); // Sæt fejlmeddelelse, hvis rabatkoden er forkert
  //     setDiscount(0); // Reset rabat, hvis ugyldig
  //   }
  // };

  return (
    <div className="mt-6 border-t pt-6">
      <label className="font-medium flex items-center gap-2 mb-1">
        <IoPricetagOutline />
        Indtast rabatkode
      </label>
      <div className="flex gap-2">
        {/* <input
          type="text"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          className="border bg-bw-50 border-bw-600 rounded-xl p-2 w-full"
          placeholder="f.eks. katinka"
        /> */}
        <InputField
          // {...register("discountCode")}
          register={register}
          type="text"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          className="border h-2 bg-bw-50 border-bw-600 rounded-xl p-2 w-full"
          placeholder="f.eks. katinka"
        />
        {/* <input
          {...register("discountCode")}
          type="text"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          className="border bg-bw-50 border-bw-600 rounded-xl p-2 w-full"
          placeholder="f.eks. katinka"
        /> */}

        <Button
          onClick={applyDiscount}
          delay={800}
          size="md"
          isLoading
          iconOnly={false}
          variant="secondary"
          iconAndText
          iconStart={<LuTicket />}
        >
          Anvend
        </Button>
      </div>

      {errors.discountCode && (
        <p className="text-error text-sm mt-1">{errors.discountCode.message}</p>
      )}

      {discount > 0 && (
        <p className="text-success text-sm mt-1">
          Rabatkode aktiveret: -{discount * 100}%
        </p>
      )}

      {!isDiscountApplied && discountCode && (
        <p className="text-error text-sm mt-1">
          Du skal anvende rabatkoden først!
        </p>
      )}
      {/* {formErrors.discountCode && (
        <p className="text-error text-sm mt-1">
          {formErrors.discountCode.message}
        </p>
      )} */}

      {/* {discount > 0 && (
        <p className="text-success text-sm mt-1">
          Rabatkode aktiveret: -{discount * 100}%
        </p>
      )} */}

      {/* Hvis rabatkoden ikke er blevet anvendt korrekt, vis en fejl */}
      {/* {!isDiscountApplied && discountCode && (
        <p className="text-error text-sm mt-1">
          Du skal anvende rabatkoden først!
        </p>
      )} */}
      {/* {formErrors.discountCode && (
        <p className="text-error text-sm mt-1">
          {formErrors.discountCode.message}
        </p>
      )} */}
      {/* {errorMessage && (
        <p className="text-error text-sm mt-1">{errorMessage}</p>
      )} */}
      {/* {discount > 0 && (
        <p className="text-success text-sm mt-1">
          Rabatkode aktiveret: -{discount * 100}%
        </p>
      )} */}
    </div>
  );
};
export default DiscountSection;
// Discount.js
// import { useEffect } from "react";
// import InputField from "@/ui/Atom/InputField/InputField";
// import Button from "@/ui/Atom/Button/Button";

// const DiscountSection = ({
//   discountCode,
//   setDiscountCode,
//   setDiscount,
//   errors,
//   register,
//   setValue,
//   clearErrors,
//   setError,
//   trigger,
//   setValue,
//   // hasTriedApplyingCode,
//   // setHasTriedApplyingCode,
// }) => {
//   const handleApplyDiscount = () => {
//     setHasTriedApplyingCode(true);

//     if (discountCode.trim().toLowerCase() === "katinka") {
//       setDiscount(0.1); // 10% rabat
//       clearErrors("discountCode");
//     } else {
//       setDiscount(0);
//       setError("discountCode", {
//         type: "manual",
//         message: "Ugyldig rabatkode",
//       });
//     }
//   };

//   useEffect(() => {
//     if (!hasTriedApplyingCode) {
//       setDiscount(0); // Fjern rabat hvis ikke forsøgt
//     }
//   }, [hasTriedApplyingCode]);

//   return (
//     <div className="mt-6">
//       <InputField
//         name="discountCode"
//         label="Rabatkode"
//         placeholder="Indtast rabatkode"
//         value={discountCode}
//         onChange={(e) => {
//           setDiscountCode(e.target.value);
//           setValue("discountCode", e.target.value); // sync med react-hook-form
//         }}
//         register={register}
//         error={errors.discountCode}
//       />
//       <Button
//         type="button"
//         onClick={handleApplyDiscount}
//         className="mt-2"
//         variant="secondary"
//       >
//         Anvend rabatkode
//       </Button>
//     </div>
//   );
// };

// // export default DiscountSection;
// // import React, { useState } from "react";
// // import clsx from "clsx";

// // const DiscountSection = ({
// //   discount,
// //   discountCode,
// //   setDiscountCode,
// //   setDiscount,
// //   errors,
// //   setValue,
// //   trigger,
// // }) => {
// //   const [localCode, setLocalCode] = useState(discountCode || "");

// //   const handleApplyDiscount = () => {
// //     const trimmed = localCode.trim().toLowerCase();

// //     if (trimmed === "katinka") {
// //       setDiscountCode(trimmed);
// //       setDiscount(0.2); // 20% rabat
// //       setValue("discountValidated", true);
// //       trigger("discountValidated");
// //     } else {
// //       setDiscountCode(trimmed);
// //       setDiscount(0); // Ingen rabat
// //       setValue("discountValidated", false);
// //       trigger("discountValidated");
// //     }
// //   };

// //   return (
// //     <div className="mt-4">
// //       <label htmlFor="discountCode" className="block mb-1 font-medium">
// //         Rabatkode
// //       </label>
// //       <div className="flex gap-2">
// //         <input
// //           id="discountCode"
// //           type="text"
// //           value={localCode}
// //           onChange={(e) => setLocalCode(e.target.value)}
// //           className={clsx(
// //             "border rounded px-3 py-2 w-full",
// //             errors?.discountValidated && "border-red-500"
// //           )}
// //         />
// //         <button
// //           type="button"
// //           onClick={handleApplyDiscount}
// //           className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
// //         >
// //           Anvend
// //         </button>
// //       </div>
// //       {errors?.discountValidated && (
// //         <p className="text-red-500 text-sm mt-1">
// //           Ugyldig rabatkode – prøv igen.
// //         </p>
// //       )}
// //     </div>
// //   );
// // };

// // export default DiscountSection;
