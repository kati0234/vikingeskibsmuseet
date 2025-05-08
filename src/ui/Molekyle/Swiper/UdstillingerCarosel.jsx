"use client";
// import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, FreeMode } from "swiper/modules";
// import "swiper/css/pagination";
import "swiper/css";

// import clsx from "clsx";
import CardUdstillinger from "@/ui/Atom/CardUdstillinger/CardUdstillinger";

const slides = [
  {
    image: "https://picsum.photos/id/19/200/300",
    title: "OPSLUGT AF HAVET",
    description: "- to skibe, der aldrig nåede havn",
    linkText: "Læs mere & køb billet",
    herf: "/",
  },
  {
    image: "https://picsum.photos/id/20/200/300",
    title: "STIG OMBORD",
    description: "- en grundfortælling om rejsen over åbent havn",
    linkText: "Læs mere & køb billet",
    herf: "/",
  },
  {
    image: "https://picsum.photos/id/21/200/300",
    title: "I VIKINGERNES KØLVAND",
    description: "- særudstilling, arkæologi under vand",
    linkText: "Læs mere & køb billet",
    herf: "/",
  },
  {
    image: "https://picsum.photos/id/22/200/300",
    title: "VIKINGEMAD",
    description: "- særudstilling, arkæologi under vand",
    linkText: "Læs mere & køb billet",
    herf: "/",
  },
  {
    image: "https://picsum.photos/id/23/200/300",
    title: "BØRNEAKTIVITETER",
    description: "- særudstilling, arkæologi under vand",
    linkText: "Læs mere & køb billet",
    herf: "/",
  },
];

export default function UdstillingerCarousel() {
  return (
    // <div className="flex w-full overflow-visible gap-3 md:gap-6 bg-bw-50  flex-col py-12 px-4">
    //   <h2 className="text-bw-950 text-center font-semibold text-2xl uppercase">
    //     UDSTILLINGER
    //   </h2>
    <div className="w-full z-10 py-6">
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        // pagination={{
        //   clickable: true,
        // }}
        freeMode={true}
        // mousewheel={true}
        // allowTouchMove={true}
        // simulateTouch={true}
        // Mousewheel,
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
              href="/"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
