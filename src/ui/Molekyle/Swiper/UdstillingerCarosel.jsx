"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, FreeMode } from "swiper/modules";

import "swiper/css";

import CardUdstillinger from "@/ui/Atom/CardUdstillinger/CardUdstillinger";

const slides = [
  {
    image: "/assets/images/udstillingskort/opslugtafhavet_card.webp",
    title: "OPSLUGT AF HAVET",
    description: "- to skibe, der aldrig nåede havn",
    linkText: "Læs mere & køb billet",
    herf: "/udstillinger/opslugtafhavet",
  },
  {
    image: "/assets/images/udstillingskort/stigombord_card.webp",
    title: "STIG OMBORD",
    description: "- en grundfortælling om rejsen over åbent havn",
    linkText: "Læs mere & køb billet",
    herf: "/udstillinger/sigombord",
  },
  {
    image: "/assets/images/udstillingskort/ivikingerneskolvand_card.webp",
    title: "I VIKINGERNES KØLVAND",
    description: "- særudstilling, arkæologi under vand",
    linkText: "Læs mere & køb billet",
    herf: "/udstillinger/ivikingerneskølevand",
  },
  {
    image: "/assets/images/udstillingskort/defemrekonstruktioner_card.webp",
    title: "DE FEM REKONSTRUKTIONER",
    description: "- særudstilling, arkæologi under vand",
    linkText: "Læs mere & køb billet",
    herf: "/udstillinger/defemrekonstruktioner",
  },
  {
    image: "/assets/images/udstillingskort/defemvikingeskibe_card.webp",
    title: "DE FEM VIKINGESKIBE",
    description: "- særudstilling, arkæologi under vand",
    linkText: "Læs mere & køb billet",
    herf: "/udstillinger/defemvikingeskibe",
  },
];

export default function UdstillingerCarousel() {
  return (
    <div className="w-full z-10 py-6 mx-3 md:mx-10">
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode]}
        className=""
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="!w-[366px] md:!w-[437px]">
            <CardUdstillinger
              title={slide.title}
              src={slide.image}
              description={slide.description}
              linkText={slide.linkText}
              href={slide.herf}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
