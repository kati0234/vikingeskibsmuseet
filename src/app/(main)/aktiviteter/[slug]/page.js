import Image from "next/image";

import { getSingleActivity } from "@/lib/api";

import BuyTicketSection from "@/ui/Molekyle/BuyTicketSection/BuyTicketSection";
import UdstillingerCarousel from "@/ui/Organisme/Swiper/UdstillingerCarosel";

export default async function AktivitetPage({ params }) {
  const { slug } = await params;
  const aktivitet = await getSingleActivity(slug);

  if (!aktivitet) {
    return <p>Ingen aktivitet fundet</p>;
  }

  return (
    <div className="pb-12 mt-[128px] md:mt-[160px]">
      <div className="relative h-[500px] w-full">
        <Image
          src={aktivitet.image_hero}
          alt={aktivitet.alt_hero}
          className="object-cover"
          fill
          priority
          sizes="
          (max-width: 640px) 100vw, 
          (max-width: 1024px) 90vw,
          (max-width: 1600px) 80vw,
          2760px
        "
        />
        <div className="bg-black/15 absolute w-full h-full"></div>
        <div className="absolute bottom-0 left-0  text-bw-50 p-4">
          <h1 className="text-2xl md:text-[32px]  font-semibold uppercase">
            {aktivitet.title}
          </h1>
          <p className="text-bw-50 text-base">{aktivitet.description}</p>
        </div>
      </div>
      <div className="md:mx-10 pt-6">
        <div className="md:mx-0 mx-3">
          <div className="grid  md:grid-cols-2 gap-3  md:gap-6">
            <h2 className="font-semibold text-[26px]  md:text-right ">
              {aktivitet.h2}
            </h2>

            <div>
              {aktivitet.text_1.split("\n").map((line, index) => (
                <p key={index} className="mb-4">
                  {line}
                </p>
              ))}
            </div>
          </div>
          <div className="grid  md:grid-cols-2 gap-3  md:gap-6 ">
            <h3 className="font-semibold text-[26px] md:text-right  ">
              Praktisk info
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-xl">Tid</p>
                <p>{aktivitet.tid}</p>
              </div>
              <div>
                <p className="text-xl">Sted</p>
                <p>{aktivitet.sted}</p>
              </div>
              <div>
                <p className="text-xl">Pris</p>
                <p>{aktivitet.pris}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 pt-24">
          {aktivitet.image_1 && (
            <div className="w-full aspect-[167/111] overflow-hidden  md:rounded-lg relative">
              <Image
                src={aktivitet.image_1}
                alt={aktivitet.alt_1}
                fill
                className="object-cover"
                sizes="(max-width: 960px) 100vw, 5760px"
              />
            </div>
          )}
          {aktivitet.image_2 && (
            <div className="w-full aspect-square overflow-hidden  md:rounded-lg relative">
              <Image
                src={aktivitet.image_2}
                alt={aktivitet.alt_2}
                fill
                className="object-cover"
                sizes="(max-width: 960px) 100vw, 5760px"
              />
            </div>
          )}
          {aktivitet.image_3 && (
            <div className="w-full aspect-[167/188] overflow-hidden md:rounded-lg relative">
              <Image
                src={aktivitet.image_3}
                alt={aktivitet.alt_3}
                fill
                className="object-cover"
                sizes="(max-width: 960px) 100vw, 5760px"
              />
            </div>
          )}
          {aktivitet.image_4 && (
            <div className="w-full aspect-[167/94] overflow-hidden  md:rounded-lg relative">
              <Image
                src={aktivitet.image_4}
                alt={aktivitet.alt_4}
                fill
                className="object-cover"
                sizes="(max-width: 960px) 100vw, 5760px"
              />
            </div>
          )}
        </div>
        {aktivitet.image_full && (
          <div className="w-full aspect-[167/94] overflow-hidden  md:rounded-lg relative">
            <Image
              src={aktivitet.image_full}
              alt={aktivitet.alt_full}
              fill
              className="object-cover"
              sizes="(max-width: 960px) 100vw, 5760px"
            />
          </div>
        )}
      </div>
      <h4 className="font-semibold text-[26px] mx-3 md:mx-10 uppercase pt-[64px]">
        Se også
      </h4>

      <UdstillingerCarousel />
      <BuyTicketSection />
    </div>
  );
}
