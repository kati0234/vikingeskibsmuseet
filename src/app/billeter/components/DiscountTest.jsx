// // Discount.js

// import { useEffect, useState } from "react";
// import InputField from "@/ui/Atom/InputField/InputField";
// import Button from "@/ui/Atom/Button/Button";

// const validCodes = ["katinka", "vsm"];

// const Discount = ({
//   discountCode,
//   setDiscountCode,
//   setDiscount,
//   trigger,
//   register,
//   setValue,
//   getValues,
//   errors,
// }) => {
//   const [localError, setLocalError] = useState("");
//   const [applied, setApplied] = useState(false);

//   const handleApply = () => {
//     const trimmedCode = discountCode.trim().toLowerCase();

//     if (validCodes.includes(trimmedCode)) {
//       setDiscount(0.15); // 15% rabat
//       setValue("discountApplied", true);
//       trigger(); // genvalider formen
//       setApplied(true);
//       setLocalError("");
//     } else {
//       setDiscount(0);
//       setValue("discountApplied", false);
//       setApplied(false);
//       setLocalError("Ugyldig kode");
//     }
//   };

//   // Nulstil apply-status hvis brugeren ændrer koden manuelt
//   useEffect(() => {
//     if (applied) {
//       setValue("discountApplied", false);
//       setApplied(false);
//     }
//   }, [discountCode]);

//   return (
//     <div className="mt-4">
//       <InputField
//         name="discountCode"
//         label="Rabatkode"
//         type="text"
//         placeholder="Indtast rabatkode"
//         register={register}
//         error={localError ? { message: localError } : errors.discountCode}
//         success={!localError && applied}
//       />
//       <Button
//         type="button"
//         size="sm"
//         variant="secondary"
//         className="mt-2"
//         onClick={handleApply}
//       >
//         Apply
//       </Button>
//     </div>
//   );
// };

// export default Discount;

// "use client";
// import { useFormContext } from "react-hook-form";
// import InputField from "@/ui/Atom/InputField/InputField";
// import Button from "@/ui/Atom/Button/Button";
// import { useState, useEffect } from "react";

// const Discount = ({ discountCode, setDiscountCode, setDiscount }) => {
//   const {
//     register,
//     setValue,
//     getValues,
//     trigger,
//     formState: { errors, touchedFields },
//   } = useFormContext();

//   const [hasTriedApplying, setHasTriedApplying] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [tryValidate, setTryValidate] = useState(false);

//   // Når brugeren klikker på "Anvend kode"
//   const handleApplyDiscount = () => {
//     setHasTriedApplying(true);
//     setIsLoading(true);
//     setValue("hasAppliedDiscount", true);
//     setTryValidate(true);
//   };

//   // Effekt der kører validering og rabatberegning når "Anvend kode" trykkes
//   useEffect(() => {
//     if (tryValidate) {
//       trigger(["discountCode", "hasAppliedDiscount"]);

//       const code = getValues("discountCode")?.toLowerCase();

//       if (code === "katinka") {
//         setDiscount(0.5);
//       } else if (code === "vsm") {
//         setDiscount(0.25);
//       } else {
//         setDiscount(0);
//       }

//       setIsLoading(false);
//       setTryValidate(false);
//     }
//   }, [tryValidate]);

//   return (
//     <div className="pt-6">
//       <p className="text-lg font-semibold pb-1">Har du en rabatkode?</p>

//       <div className="flex gap-2">
//         <div className="flex-1">
//           <InputField
//             name="discountCode"
//             placeholder="Indtast rabatkode"
//             register={register}
//             error={
//               (hasTriedApplying || touchedFields.discountCode) &&
//               errors.discountCode
//             }
//             success={
//               (hasTriedApplying || touchedFields.discountCode) &&
//               !errors.discountCode
//             }
//           />
//         </div>
//         <Button
//           type="button"
//           size="sm"
//           variant="secondary"
//           className="shrink-0"
//           onClick={handleApplyDiscount}
//           isLoading={isLoading}
//         >
//           Anvend kode
//         </Button>
//       </div>

//       {errors.hasAppliedDiscount && (
//         <p className="text-red-500 text-sm mt-1">
//           {errors.hasAppliedDiscount.message}
//         </p>
//       )}
//     </div>
//   );
// };

// export default Discount;

"use client";

import { useFormContext, Controller } from "react-hook-form";
import InputField from "@/ui/Atom/InputField/InputField";
import { useState, useEffect } from "react";
import { LuTicket } from "react-icons/lu";
import Button from "@/ui/Atom/Button/Button";

const Discount = ({ setDiscount, setDiscountCode }) => {
  const {
    control,
    trigger,
    watch,
    formState: { errors },
  } = useFormContext();

  const [isLoading, setIsLoading] = useState(false);

  // Rabatkode fra formularen
  const discountCode = watch("discountCode");

  // Håndter rabatansøgning via useEffect
  useEffect(() => {
    const applyDiscount = async () => {
      setIsLoading(true);

      // Trigger validering af rabatkodefelt
      const isValid = await trigger("discountCode");

      if (isValid) {
        const trimmedCode = discountCode.trim().toLowerCase();

        if (trimmedCode === "katinka") {
          setDiscount(0.5); // 50% rabat
          setDiscountCode("katinka");
        } else if (trimmedCode === "vsm") {
          setDiscount(0.25); // 25% rabat
          setDiscountCode("vsm");
        } else {
          setDiscount(0); // Ingen rabat
          setDiscountCode("");
        }
      }

      setIsLoading(false); // Stop loading når processen er færdig
    };

    if (discountCode) {
      applyDiscount(); // Kald applyDiscount når rabatkoden ændres
    } else {
      setDiscount(0); // Hvis rabatkoden er tom, fjern rabatten
      setDiscountCode("");
    }
  }, [discountCode, trigger, setDiscount, setDiscountCode]);

  return (
    <div className="pt-6">
      <p className="text-lg font-semibold pb-1">Har du en rabatkode?</p>

      <div className="flex gap-2">
        <div className="flex-1">
          <Controller
            name="discountCode"
            control={control}
            render={({ field }) => (
              <InputField
                {...field}
                placeholder="Indtast rabatkode"
                error={errors.discountCode?.message} // Fejlmeddelelse
              />
            )}
          />
        </div>
        <button
          onClick={() => trigger("discountCode")} // Trigger validering af rabatkode manuelt
          disabled={isLoading}
          className="btn" // Stil din knap her
        >
          {isLoading ? "Loader..." : "Anvend kode"}
        </button>
      </div>
    </div>
  );
};

export default Discount;

// const Discount = ({ setDiscount, setDiscountCode }) => {
//   const {
//     control,
//     handleSubmit,
//     setValue,
//     trigger,
//     watch,
//     formState: { errors },
//   } = useFormContext();
//   //   const [discountCode, setLocalDiscountCode] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   //   const handleApplyDiscount = () => {
//   //     setIsLoading(true);
//   //     setError(""); // Nulstil fejl

//   //     // Check hvilken rabatkode der er indtastet
//   //     if (discountCode === "katinka") {
//   //       setDiscount(0.5); // 50% rabat
//   //       setDiscountCode("katinka");
//   //     } else if (discountCode === "vsm") {
//   //       setDiscount(0.25); // 25% rabat
//   //       setDiscountCode("vsm");
//   //     } else {
//   //       setDiscount(0); // Ingen rabat
//   //       setDiscountCode("");
//   //       setError("Rabatkoden er ikke gyldig");
//   //     }

//   //     setIsLoading(false); // Stop loading
//   //   };

//   const discountCode = watch("discountCode"); // Får rabatkoden direkte fra formularen

//   // Håndter rabatansøgning via useEffect
//   useEffect(() => {
//     const applyDiscount = async () => {
//       setIsLoading(true);

//       // Trigger validering af rabatkodefelt
//       const isValid = await trigger("discountCode");

//       if (isValid) {
//         const trimmedCode = discountCode.trim().toLowerCase();

//         if (trimmedCode === "katinka") {
//           setDiscount(0.5); // 50% rabat
//           setDiscountCode("katinka");
//         } else if (trimmedCode === "vsm") {
//           setDiscount(0.25); // 25% rabat
//           setDiscountCode("vsm");
//         } else {
//           setDiscount(0); // Ingen rabat
//           setDiscountCode("");
//         }
//       }

//       setIsLoading(false); // Stop loading når processen er færdig
//     };

//     if (discountCode) {
//       applyDiscount(); // Kald applyDiscount når rabatkoden ændres
//     } else {
//       setDiscount(0); // Hvis rabatkoden er tom, fjern rabatten
//       setDiscountCode("");
//     }
//   }, [discountCode, trigger, setDiscount, setDiscountCode]);

//   return (
//     <div className="pt-6">
//       <p className="text-lg font-semibold pb-1">Har du en rabatkode?</p>

//       <div className="flex gap-2">
//         <div className="flex-1">
//           {/* <input
//             type="text"
//             value={discountCode}
//             onChange={(e) => setLocalDiscountCode(e.target.value)}
//             placeholder="Indtast rabatkode"
//             className="input" // Stil din input her
//             error={errors.discountCode}
//           /> */}
//           <Controller
//             name="discountCode"
//             control={control}
//             render={({ field }) => (
//               <InputField
//                 {...field}
//                 value={discountCode}
//                 placeholder="Indtast rabatkode"
//                 error={errors.discountCode?.message} // Fejlmeddelelse
//               />
//             )}
//           />
//         </div>
//         <button
//           onClick={handleApplyDiscount}
//           disabled={isLoading}
//           className="btn" // Stil din knap her
//         >
//           {isLoading ? "Loader..." : "Anvend kode"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Discount;
