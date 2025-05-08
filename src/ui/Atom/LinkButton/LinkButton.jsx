import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";
const LinkButton = ({ linkText, icon, href, ...props }) => {
  return (
    <Link href={href} className="flex items-center gap-6">
      <p className="text-bw-50 font-semibold text-base ">{linkText}</p>
      {icon && <LuMoveRight className="text-bw-50 w-[24px] h-[24px]" />}
    </Link>
  );
};

export default LinkButton;
