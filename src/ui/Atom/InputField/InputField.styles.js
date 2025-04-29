import { tv } from "tailwind-variants";

export const inputFieldStyles = tv({
  base: "w-full px-3 py-2 border rounded-lg text-base transition focus:outline-none focus:ring-2 focus:ring-blue-500",
  variants: {
    intent: {
      default: "border-gray-300",
      error: "border-red-500 ring-red-500 focus:ring-red-500",
    },
    readOnly: {
      true: "bg-gray-200 cursor-not-allowed", // Readonly style
      false: "",
    },
    inputType: {
      number: "appearance-none", // Fjerner pilene på number inputs
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
