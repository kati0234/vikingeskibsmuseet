import { LogoFillIcon } from "@/assets/Icons/logo-fill-icon";
import Link from "next/link";

import { LuMoveUp } from "react-icons/lu";

const FooterTicket = () => {
  return (
    <section className="bg-bw-100 px-12-271 space-y-7 py-11">
      <div className="flex justify-between">
        <Link className="flex gap-1 pt-5 md:pt-6 " href="/">
          <LogoFillIcon />
          <p className="uppercase font-semibold leading-[100%]   text-xl ">
            VIKINGESKIBS <br /> MUSEET
          </p>
        </Link>

        <Link className="flex items-center font-semibold" href="#top">
          <p>Top </p> <LuMoveUp />
        </Link>
      </div>
      <p>
        Spørgsmål? Skriv til museum@vikingeskibsmuseet.dk eller ring til +45 46
        300 200.
      </p>

      <div className="flex flex-wrap gap-3">
        <Link className="flex items-center" href="/">
          Billetter
        </Link>
        <Link className="flex items-center" href="/">
          Indløs gavekort
        </Link>
        <Link className="flex items-center" href="/">
          Fortrolighedspolitiken
        </Link>

        <Link className="flex items-center" href="/">
          Handelsbetingelserne
        </Link>
      </div>

      <ul className="space-y-2">
        <li>Vikingeskibsmuseet</li>
        <li>Vindeboder 12</li>
        <li>4000 Roskilde</li>
        <li>CVR 27853528</li>
      </ul>
    </section>
  );
};

export default FooterTicket;
