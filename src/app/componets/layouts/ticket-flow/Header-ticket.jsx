import { LogoFillIcon } from "@/assets/Icons/logo-fill-icon";
import Link from "next/link";

const HeaderTicket = () => {
  return (
    <header className="fixed left-0  px-12-271 py-5 md:py-6  top-0 z-10 border-b border-bw-300  bg-bw-50 w-full ">
      <Link className="flex gap-1 " href="/">
        <LogoFillIcon />
        <h1 className="uppercase font-semibold leading-[100%]  text-xl ">
          VIKINGESKIBS <br /> MUSEET
        </h1>
      </Link>
    </header>
  );
};

export default HeaderTicket;
