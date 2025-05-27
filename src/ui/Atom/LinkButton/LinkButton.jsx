import Link from "next/link";
import { LuMoveRight, LuHouse, LuTicket } from "react-icons/lu";

import { linkButtonStyles } from "./LinkButton.styles";
import { clsx } from "clsx";

const LinkButton = ({
  linkText,
  icon,
  href,
  ticketIcon,
  variant,
  size,
  className,
  houseIcon,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={clsx(linkButtonStyles({ variant, size }), className)}
      {...props}
    >
      {ticketIcon && <LuTicket className="text-bw-50  w-[24px] h-[24px]" />}
      {houseIcon && <LuHouse className="text-current  w-[24px] h-[24px]" />}
      <p className="font-medium text-nowrap">{linkText}</p>
      {icon && (
        <LuMoveRight className="text-bw-50 w-[24px] h-[24px] hover:scale-110 transition" />
      )}
    </Link>
  );
};

export default LinkButton;
