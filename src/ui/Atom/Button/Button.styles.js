import { tv } from "tailwind-variants";

export const buttonStyles = tv({
  base: "rounded-3xl   text-base font-medium transition-colors text-nowrap",
  variants: {
    variant: {
      primary:
        "bg-blue-500 text-blue-50 hover:bg-blue-800  active:bg-blue-800 leading-tight disabled:bg-bw-700 disabled:cursor-not-allowed disabled:hover:bg-bw-700 ",
      secondary:
        " text-bw-950 border-2 bg-bw-50 border-beige-500  hover:bg-beige-500  ",
      danger:
        "bg-red-500 text-white hover:bg-red-600 active:bg-beige-500 active:text-bw-950 ",
      tertiary:
        " border-bw-950 border-2 text-bw-950 hover:bg-bw-950 active:bg-bw-50 active:text-bw-950 hover:text-bw-50 disabled:cursor-not-allowed disabled:text-bw-700 disabled:border-bw-700 disabled:bg-bw-50 ",
      link: "bg-transparent text-bw-950 hover:underline",
    },
    size: {
      header: "text-lg font-semibold",
      md: "px-6 py-3",
      lg: "text-lg",
      as: "p-2",
    },
    selected: {
      // Skift tilbage til 'selected' for konsistens
      true: "",
      false: "",
    },
    iconAndText: {
      true: "flex items-center justify-center leading-tight  gap-2",
      false: "inline-flex",
    },
    iconOnly: {
      true: "p-2 aspect-square justify-center",
    },
  },
  compoundVariants: [
    //  icon og text
    { size: "sm", iconOnly: false, iconAndText: true, className: "px-3 px-3" },

    {
      size: "md",
      iconOnly: false,
      iconAndText: true,
      className: "py-[12px] px-[24px] items-center ",
    },
    {
      size: "lg",
      iconOnly: false,
      iconAndText: true,
      className: "h-[32px] min-w-[70px] px-3 text-sm",
    },

    //  Icon-only

    {
      size: "sm",
      iconOnly: true,
      iconAndText: false,
      className: " [&>svg]:w-[16px] [&>svg]:h-[16px] ",
    },
    {
      size: "md",
      iconOnly: true,
      iconAndText: false,
      className: " w-[24px] [&>svg]:w-[24px]  p-4",
    },

    {
      size: "lg",
      iconOnly: true,
      iconAndText: false,
      className: "h-[32px] min-w-[70px] px-3 text-sm",
    },

    // Selected + Secondary
    {
      variant: "secondary",
      selected: true,
      className: "bg-beige-500 text-bw-950   ", // Blå accent uden at skifte variant
    },
  ],

  defaultVariants: {
    variant: "primary",
    hasIcon: "false",
    iconAndText: "false",
    iconOnly: "false",
    selected: false,
  },
});
