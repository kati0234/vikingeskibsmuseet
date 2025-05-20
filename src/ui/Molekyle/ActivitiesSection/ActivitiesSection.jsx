"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Switch } from "@headlessui/react";
import clsx from "clsx";

import { data } from "@/lib/data/vandoglandData";

export default function ActivitiesSection() {
  const [isWater, setIsWater] = useState(false);
  const filteredSlides = data.filter((card) =>
    isWater ? card.tag === "vandet" : card.tag === "landet"
  );
  return (
    <div className="w-full flex items-center justify-center gap-3 md:gap-6 flex-col px-3 md:px-11 ">
      <Switch
        checked={isWater}
        onChange={setIsWater}
        className={
          "relative inline-flex h-[52px] w-[208px] items-center rounded-full bg-yellow-100"
        }
      >
        <div className="absolute w-[208px] px-5 flex justify-between font-semibold text-base z-10">
          <p className="transition-colors duration-200 text-yellow-950">
            PÅ LAND
          </p>
          <p className="transition-colors duration-200 text-blue-500 ">
            PÅ VAND
          </p>
        </div>
        <span className="sr-only">Enable notifications</span>
        <span
          className={clsx(
            "inline-block h-[44px] w-[100px] text-center transform rounded-full transition",
            isWater
              ? "translate-x-[104px] bg-blue-200"
              : "translate-x-1 bg-yellow-300"
          )}
        ></span>
      </Switch>

      <div className="w-full rounded-2xl  flex items-center justify-center md:flex-nowrap flex-wrap gap-3 md:gap-6 flex-row  ">
        {filteredSlides.map((card, i) => (
          <div
            key={i}
            className="md:h-[415px] md:w-[322px] rounded-2xl overflow-hidden flex  w-[177px] h-[265px]  transition-all duration-300 relative"
          >
            <Image
              src={card.image}
              alt={card.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover"
            />

            <div className="text-beige-50 p-3 md:p-4 z-20  flex md:items-start justify-between flex-col ">
              <div>
                <p className="font-semibold text-lg md:text-xl uppercase">
                  <Link
                    href={card.href}
                    className="after:absolute after:inset-0 after:z-10"
                  >
                    {card.title}
                  </Link>
                </p>
                <p className="text-sm md:text-base">{card.description}</p>
              </div>
              <div
                className={clsx(
                  "px-4 py-2 rounded-3xl text-bw-950 text-[10px] text-center text-nowrap",
                  isWater ? "bg-blue-200" : "bg-yellow-100"
                )}
              >
                {card.dato}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
