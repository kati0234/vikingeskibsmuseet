import { LogoFillIcon } from "@/assets/Icons/logo-fill-icon";
import Link from "next/link";

const HeaderTicket = () => {
  return (
    <header className="fixed left-0  px-12-271 top-0   w-full ">
      <Link className="flex gap-1 pt-5 md:pt-6 " href="/">
        <LogoFillIcon />
        <h1 className="uppercase font-semibold leading-[100%]  text-xl ">
          VIKINGESKIBS <br /> MUSEET
        </h1>
      </Link>
    </header>
  );
};

export default HeaderTicket;
