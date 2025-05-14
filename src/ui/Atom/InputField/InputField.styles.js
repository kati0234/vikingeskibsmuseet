import { tv } from "tailwind-variants";

export const inputFieldStyles = tv({
  base: "w-full px-3 py-2 border rounded-lg text-base transition focus:border-blue-400 active:border-blue-400 !bg-bw-50 autofill:bg-bw-50  focus:outline-none   ",
  variants: {
    intent: {
      default: "border-bw-600",
      error: "border-error",
      success: "border-success",
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
// ring-bw-500 focus:ring-bw-500
