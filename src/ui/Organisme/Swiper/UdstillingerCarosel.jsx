"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import { data } from "@/lib/data/udstillingsCaroselData";
import CardUdstillinger from "@/ui/Atom/CardUdstillinger/CardUdstillinger";

export default function UdstillingerCarousel() {
  return (
    <div className="w-full z-10 py-6 mx-3 md:mx-10">
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
      >
        {data.map((udstilling, i) => (
          <SwiperSlide key={i} className="max-w-[366px] md:max-w-[437px]">
            <CardUdstillinger
              alt={udstilling.alt}
              title={udstilling.title}
              src={udstilling.image}
              description={udstilling.description}
              linkText={udstilling.linkText}
              href={udstilling.herf}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
