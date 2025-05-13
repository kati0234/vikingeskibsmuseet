"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";

import { Switch } from "@headlessui/react";
import { useRef, useState } from "react";
import clsx from "clsx";

const slides = [
  {
    image: "/assets/images/landogvand/land_1.webp",
    title: "BESØG BÅDEVÆRFTET",
    tag: "landet",
    description: "Hverdage | Hele museets åbningstid",
    dato: "1. april - 31. december",
  },
  {
    image: "/assets/images/landogvand/land_2.webp",
    title: "RUNDVISNING I VIKINGSKIBS-HALLEN",
    tag: "landet",
    description: "Hverdage | Hele museets åbningstid",
    dato: "1. april - 1. maj",
  },
  {
    image: "/assets/images/landogvand/land_3.webp",
    title: "BYG ET MINI VIKINGESKIB",
    tag: "landet",
    description: "Hverdage | 10.00 - 12.00",
    dato: "1. april - 31. juli",
  },
  {
    image: "/assets/images/landogvand/land_4.webp",
    title: "VIKINGERNES VÆRKSTED",
    tag: "landet",
    description: "Hverdage | 10.00 - 12.00",
    dato: "1. april - 31. december",
  },
  {
    image: "/assets/images/landogvand/vand_1.webp",
    title: "SEJL UD PÅ ROSKILDE FJORD SOM EN VIKING",
    tag: "vandet",
    description: "Hverdage | Hele dagen",
    dato: "1. april - 1. september",
  },
  {
    image: "/assets/images/landogvand/vand_2.webp",
    title: "Flydende formidling og rå muskelkraft",
    tag: "vandet",
    description: "Hverdage | 10.00 - 12.00",
    dato: "1. april - 31. juli",
  },
  {
    image: "/assets/images/landogvand/vand_3.webp",
    title: "Sejl ind i fjordens solnedgangen",
    tag: "vandet",
    description: "Weekender | 18.00 - 19.00",
    dato: "1. april - 31. december",
  },
  {
    image: "/assets/images/landogvand/vand_4.webp",
    title: "WORKSHOP: SKIBETS TOVVÆRK og skrog",
    tag: "vandet",
    description: "Hverdage | 13.00 - 14.00",
    dato: "1. april - 31. december",
  },
];

export default function ActivitiesSection() {
  const swiperRef = useRef(null);

  const [enabled, setEnabled] = useState(false);
  const filteredSlides = slides.filter((slide) =>
    enabled ? slide.tag === "vandet" : slide.tag === "landet"
  );
  return (
    <div className="w-full flex items-center justify-center gap-3 md:gap-6 flex-col px-3 md:px-11 ">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={
          " relative inline-flex h-[52px] w-[208px] items-center rounded-full bg-yellow-100"
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
          className={`${
            enabled
              ? "translate-x-[104px] bg-blue-200 "
              : " bg-yellow-300 translate-x-1"
          } inline-block h-[44px] w-[100px] text-center transform rounded-full  transition`}
        ></span>
      </Switch>
      {/* </div> */}
      <div className="w-full rounded-2xl  flex items-center justify-center md:flex-nowrap flex-wrap gap-3 md:gap-6 flex-row  ">
        {filteredSlides.map((slide, i) => (
          <div
            key={i}
            className="md:h-[415px] md:w-[322px] rounded-2xl overflow-hidden flex  w-[177px] h-[265px]  transition-all duration-300 relative"
          >
            <Image
              src={slide.image}
              alt={`Slide ${i}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover"
            />

            <div className="text-beige-50 p-3 md:p-4 z-20  flex md:items-start justify-between flex-col ">
              <div>
                <p className="font-semibold text-lg md:text-xl uppercase">
                  {slide.title}
                </p>
                <p className="text-sm md:text-base">{slide.description}</p>
              </div>
              <div
                className={clsx(
                  "px-4 py-2 rounded-3xl text-bw-950 text-[10px] text-center text-nowrap",
                  slide.tag === "vandet" ? "bg-blue-200" : "bg-yellow-100"
                )}
              >
                {slide.dato}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
