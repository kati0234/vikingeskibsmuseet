import { tv } from "tailwind-variants";

export const buttonStyles = tv({
  base: "rounded px-4 py-2 font-medium transition-colors",
  variants: {
    variant: {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-200 text-black hover:bg-gray-300",
      danger: "bg-red-500 text-white hover:bg-red-600",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
