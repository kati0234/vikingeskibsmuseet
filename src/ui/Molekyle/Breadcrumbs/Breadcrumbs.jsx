"use client"; // for app-router

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuDot } from "react-icons/lu";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="text-sm text-bw-950 ">
      <ul className="flex md:flex-nowrap flex-wrap items-center md:justify-center">
        <li>
          <Link href="/" className=" hover:underline">
            Forside
          </Link>
        </li>
        {segments.map((segment, i) => {
          const path = "/" + segments.slice(0, i + 1).join("/");
          // Gør segmentet læsbart ved at gøre første bogstav stort
          const label = decodeURIComponent(
            segment.charAt(0).toUpperCase() + segment.slice(1)
          );

          return (
            <li key={path} className="flex  items-center">
              <span className="mx-1 ">
                <LuDot className="w-5 h-5" />
              </span>
              <Link href={path} className=" hover:underline">
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
