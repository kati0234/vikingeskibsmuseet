import { z } from "zod";

export const discountCodes = ["katinka", "vsm", "sommer2025", "kea", "mmd"];

export const paymentSchema = z.object({
  name: z.string().min(1, { message: "Påkrævet" }),
  email: z.string().email({
    message:
      "Det ser ikke ud til at være en gyldig e-mail. Husk at tjekke, at din e-mail indeholder @",
  }),
  newsletter: z.boolean().optional(), // Nyhedsbrev er valgfrit

  cardNumber: z.preprocess(
    (value) => String(value).replace(/\s/g, ""), // Fjern mellemrum
    z
      .string()
      .regex(
        /^\d{16}$/,
        "Ugyldigt kortnummer. Kortnummeret skal være 16 cifre langt."
      )
  ),
  cardCVC: z.string().length(3, {
    message: "Ugyldig CVC-kode. Tjek de 3 cifre på bagsiden af kortet.",
  }),
  expiryDate: z
    .string()
    .length(5, "Ugyldig udløbsdato. Brug formatet MM/ÅÅ.")
    .regex(/^\d{2}\/\d{2}$/, "Ugyldig udløbsdato. Brug formatet MM/ÅÅ."),

  discountCode: z
    .string()
    .optional()
    .transform((val) => val?.toLowerCase())
    .refine((val) => !val || discountCodes.includes(val), {
      message: "Ugyldig rabatkode",
    }),
});
