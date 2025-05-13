import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";
import { LuTicket } from "react-icons/lu";
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
  ...props
}) => {
  return (
    <Link
      href={href}
      className={clsx(linkButtonStyles({ variant, size }), className)}
      {...props}
    >
      {ticketIcon && <LuTicket className="text-bw-50  w-[24px] h-[24px]" />}
      <p className="font-medium ">{linkText}</p>
      {icon && <LuMoveRight className="text-bw-50 w-[24px] h-[24px]" />}
    </Link>
  );
};

export default LinkButton;
