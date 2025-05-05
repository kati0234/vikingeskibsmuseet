// import { z } from "zod";

// const schema = z.object({
//   name: z.string().min(1, { message: "Name is required" }),
//   email: z.string().email({ message: "Invalid email format" }),
//   terms: z.boolean().refine((val) => val === true, {
//     message: "You must accept the terms and conditions", // Ja til betingelser
//   }),
//   newsletter: z.boolean().optional(), // Nyhedsbrev er valgfrit

//   cardHolder: z.string().min(1, { message: "Card holder's name is required" }),

//   cardNumber: z.preprocess(
//     (value) => String(value).replace(/\s/g, ""), // Fjern mellemrum
//     z.string().regex(/^\d{16}$/, "Card number must be exactly 16 digits")
//   ),
//   cardCVC: z.string().length(3, { message: "CVC must be 3 digits" }),
//   expiryDate: z
//     .string()
//     .length(5, "Expiry date must be in MM/YY format (e.g. 04/25)")
//     .regex(/^\d{2}\/\d{2}$/, "Expiry date must be in MM/YY format"),
// });
import { useFormContext } from "react-hook-form";
import { z } from "zod";

const validDiscountCodes = ["katinka", "vsm"];

export const paymentSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  // terms: z.boolean().refine((val) => val === true, {
  //   message: "You must accept the terms and conditions", // Ja til betingelser
  // }),
  newsletter: z.boolean().optional(), // Nyhedsbrev er valgfrit

  // cardHolder: z.string().min(1, { message: "Card holder's name is required" }),

  cardNumber: z.preprocess(
    (value) => String(value).replace(/\s/g, ""), // Fjern mellemrum
    z.string().regex(/^\d{16}$/, "Card number must be exactly 16 digits")
  ),
  cardCVC: z.string().length(3, { message: "CVC must be 3 digits" }),
  expiryDate: z
    .string()
    .length(5, "Expiry date must be in MM/YY format (e.g. 04/25)")
    .regex(/^\d{2}\/\d{2}$/, "Expiry date must be in MM/YY format"),

  // discountCode: z
  //   .string()
  //   .optional()
  //   .refine(
  //     (val) => {
  //       if (!val || val.trim() === "") return true; // Feltet er tomt = ok
  //       return ["katinka", "vsm"].includes(val.trim().toLowerCase()); // Tjek om det er gyldig kode
  //     },
  //     { message: "Ugyldig rabatkode" }
  //   ),

  // hasAppliedDiscount: z
  //   .boolean()
  //   .optional()
  //   .refine(
  //     (val, ctx) => {
  //       const code = ctx?.parent?.discountCode?.trim();
  //       if (!code) return true; // ok hvis tom
  //       if (!val) return false; // rabatkode skrevet men ikke "anvendt"
  //       return true;
  //     },
  //     {
  //       message: "Du skal trykke 'Anvend kode'",
  //     }
  //   ),
});
export const dicountSchemma = z.object({
  discountCode: z
    .string()
    .optional()
    .refine(
      (val) => {
        // Hvis val er undefined eller null, så returner false
        if (val == null) return true; // betyder, at val er tomt eller null
        return val === "" || val.toLowerCase() === "katinka";
      },
      {
        message: "Ugyldig rabatkode",
      }
    ),
});

// export const dicountSchemma = z.object({
//   discountCode: z
//     .string()
//     .optional()
//     .refine(
//       (value, ctx) => {
//         // Tjek om rabatkoden er tom
//         if (!value) {
//           return true; // Det er ok, hvis rabatkoden er tom
//         }

//         // Tjek om rabatkoden er blevet anvendt korrekt
//         const isDiscountChecked = ctx.parent?.discountChecked;

//         if (value && !isDiscountChecked) {
//           return false; // Fejl, hvis rabatkoden ikke er blevet anvendt
//         }

//         return true; // Hvis rabatkoden er korrekt anvendt
//       },
//       {
//         message: "Du skal anvende rabatkoden først!", // Fejlmeddelelse
//       }
//     ),
// });

// z.object({
//   discountCode: z.string().optional(),
//   discountChecked: z.boolean().optional(),
//   discount: z.number().optional(),
// }).superRefine((data, ctx) => {
//   if (data.discountCode && !data.discountChecked) {
//     ctx.addIssue({
//       path: ["discountCode"],
//       code: z.ZodIssueCode.custom,
//       message: "Klik på 'Anvend' for at bruge rabatkoden",
//     });
//   }
// });
