import { tv } from "tailwind-variants";

export const inputFieldStyles = tv({
  base: "w-full px-3 py-2 border rounded-lg text-base transition  !bg-bw-50 autofill:bg-bw-50  focus:outline-none focus:ring-2  focus:ring-bw-950",
  variants: {
    intent: {
      default: "border-bw-600",
      error:
        "border-error ring-bw-500 focus:ring-bw-500 focus:border-bw-950 active:border-black",
      success:
        "border-success   ring-bw-500 focus:ring-bw-500 focus:border-bw-950   ",
      focus: "",
    },
    readOnly: {
      true: "bg-gray-200 cursor-not-allowed", // Readonly style
      false: "",
    },
    inputType: {
      number:
        "appearance-none  [&::-webkit-outer-spin-button]:appearance-none ", // Fjerner pilene på number inputs
      text: "",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    intent: "default",
    size: "md",
    readOnly: "false",
    inputType: "text",
  },
});
