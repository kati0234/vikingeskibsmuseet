"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import { useRef, useState } from "react";
import clsx from "clsx";

const slides = [
  {
    image: "/assets/images/aktivitetskarrusel/aktivitet_1.webp",
    title: "SEJLADSER",
    description:
      "Tag med på en af de daglige sejladser til 30. september og oplev, hvordan det var at være viking ombord.",
  },
  {
    image: "/assets/images/aktivitetskarrusel/aktivitet_2.webp",
    title: "HÅNDVÆRK",
    description:
      "Oplev vikingernes gamle håndværk – smedning, træskæring og vævning i autentiske omgivelser.",
  },
  {
    image: "/assets/images/aktivitetskarrusel/aktivitet_3.webp",
    title: "FORTÆLLINGER",
    description:
      "Lyt til spændende fortællinger om vikingernes rejser, myter og heltefortællinger for hele familien.",
  },
  {
    image: "/assets/images/aktivitetskarrusel/aktivitet_4.webp",
    title: "VIKINGEMAD",
    description:
      "Smag på ægte vikingemad tilberedt over åben ild – fra grød til røget fisk og mjød.",
  },
  {
    image: "/assets/images/aktivitetskarrusel/aktivitet_5.webp",
    title: "BØRNEAKTIVITETER",
    description:
      "Lad børnene prøve vikingekampe, bueskydning og sjove lege – alt i trygge omgivelser.",
  },
];

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
          {slides.map((slide, i) => (
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
                    src={slide.image}
                    alt={`Slide ${i}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <div className="text-beige-500 ">
                  <p className="font-semibold text-lg md:text-xl uppercase">
                    {slide.title}
                  </p>
                  <p className="text-sm md:text-base">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom navigation */}
      <div className="flex gap-10  z-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="text-4xl text-beige-500 hover:scale-110 transition"
        >
          <LuMoveLeft />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="text-4xl text-beige-500 hover:scale-110 transition"
        >
          <LuMoveRight />
        </button>
      </div>
    </div>
  );
}
