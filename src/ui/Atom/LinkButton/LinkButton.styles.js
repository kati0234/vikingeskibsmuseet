import { tv } from "tailwind-variants";

export const linkButtonStyles = tv({
  base: " font-medium text-nowrap  transition-colors",
  variants: {
    variant: {
      simpel: "hover:underline  text-bw-950",
      transparent:
        "bg-transparent   text-bw-50  flex items-center justify-center text-center gap-6  ",
      blue: "bg-blue-500  text-bw-50  hover:bg-blue-800 rounded-3xl flex items-center gap-2  justify-center text-center   active:bg-blue-800 leading-tight disabled:bg-bw-700 disabled:cursor-not-allowed disabled:hover:bg-bw-700 ",
      outline: "border border-bw-50 text-bw-50 hover:bg-bw-800",
      beige:
        "text-bw-950 border-2 bg-bw-50 border-beige-500  hover:bg-beige-500 rounded-3xl flex items-center gap-2  justify-center text-center",
    },
    size: {
      sm: "text-base font-normal",
      md: "text-base px-4 py-3",
      lg: "text-lg px-5 py-3",
      no: "text-2xl md:text-[32px]",
    },
  },
  defaultVariants: {
    variant: "transparent",
    size: "md",
  },
});
