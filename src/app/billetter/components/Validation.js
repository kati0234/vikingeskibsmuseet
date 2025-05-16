import { z } from "zod";

const discountCodes = ["katinka", "vsm"];
export const paymentSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  newsletter: z.boolean().optional(), // Nyhedsbrev er valgfrit

  cardNumber: z.preprocess(
    (value) => String(value).replace(/\s/g, ""), // Fjern mellemrum
    z.string().regex(/^\d{16}$/, "Card number must be exactly 16 digits")
  ),
  cardCVC: z.string().length(3, { message: "CVC must be 3 digits" }),
  expiryDate: z
    .string()
    .length(5, "Expiry date must be in MM/YY format (e.g. 04/25)")
    .regex(/^\d{2}\/\d{2}$/, "Expiry date must be in MM/YY format"),

  discountCode: z
    .string()
    .optional()
    .transform((val) => val?.toLowerCase())
    .refine((val) => !val || discountCodes.includes(val), {
      message: "Ugyldig rabatkode",
    }),
});
