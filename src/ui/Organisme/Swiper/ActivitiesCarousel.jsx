"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import { useRef, useState } from "react";
import clsx from "clsx";
import { data } from "@/lib/data/aktivitetsliderData";

export default function ActivitiesCarousel() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex items-center justify-center gap-3 md:gap-6 bg-blue-700 flex-col py-12 px-4">
      <h2 className="text-beige-500 font-semibold text-2xl md:text-[32px] uppercase">
        Aktiviteter
      </h2>
      <div className="md:w-[600px] w-full relative">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            0: {
              slidesPerView: "auto",
            },
            768: {
              slidesPerView: 3,
            },
          }}
          centeredSlides
          loop
          className="transition-all  duration-300 overflow-x-visible"
        >
          {data.map((aktivitet, i) => (
            <SwiperSlide key={i} className="!flex items-center justify-center">
              <div
                className={clsx(
                  "w-[200px] md:w-[300px] h-[450px] md:h-[500px] flex justify-center items-center flex-col gap-5 text-center transition-all duration-300 relative",
                  i === activeIndex
                    ? " scale-100 opacity-100 z-100"
                    : " scale-90 opacity-70 z-0"
                )}
              >
                <div
                  className={clsx(
                    "w-[180px] md:w-[200px] rounded-t-full relative overflow-hidden transition-all duration-300",
                    i === activeIndex
                      ? "h-[280px] md:h-[328px] "
                      : "h-[250px] md:h-[300px]  "
                  )}
                >
                  <Image
                    src={aktivitet.image}
                    alt={aktivitet.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <div className="text-beige-500 ">
                  <p className="font-semibold text-lg md:text-xl uppercase">
                    {aktivitet.title}
                  </p>
                  <p className="text-sm md:text-base">
                    {aktivitet.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex gap-10 z-10">
        <button
          type="button"
          aria-label="slide til venstre"
          aria-labelledby="labelvenstre"
          onClick={() => swiperRef.current?.slidePrev()}
          className="text-4xl text-beige-500 hover:scale-110 transition"
        >
          <span id="labelvenstre" className="sr-only">
            swip til venstre
          </span>
          <LuMoveLeft />
        </button>
        <button
          type="button"
          aria-label="slide til højre"
          aria-labelledby="labelhøjre"
          onClick={() => swiperRef.current?.slideNext()}
          className="text-4xl text-beige-500 hover:scale-110 transition"
        >
          <span className="sr-only" id="labelhøjre">
            swip til højre
          </span>
          <LuMoveRight />
        </button>
      </div>
    </div>
  );
}
