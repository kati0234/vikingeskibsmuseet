// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { getActivity } from "@/lib/api";

// export default function Aktivitet() {
//   return (
//     <div>
//       <h1 className=" text-9xl text-blue-800 mt-20">enkelt aktivitet</h1>
//     </div>
//   );
// }

import { getSingleActivity } from "@/lib/api"; // justér stien hvis nødvendigt
import Image from "next/image";

export default async function AktivitetPage({ params }) {
  const { slug } = await params;
  const aktivitet = await getSingleActivity(slug);

  if (!aktivitet) {
    return <p>Ingen aktivitet fundet</p>;
  }

  return (
    <div className="">
      <div className="relative h-[500px] w-full">
        <Image
          src={aktivitet.image_url}
          alt="Katinka"
          className="object-cover"
          fill
        />

        <div className="absolute bottom-0 left-0  text-bw-50 p-4">
          <h1 className="text-2xl md:text-3xl  font-bold uppercase">
            {aktivitet.title}
          </h1>
          <p className="text-bw-50 text-base">
            Oplev en guided rundvisning på 45 min.
          </p>
        </div>
      </div>
      <div className="md:mx-10 pt-6">
        <div className="md:mx-0 mx-3">
          <div className="grid  md:grid-cols-2 gap-3  md:gap-6">
            <h2 className="font-semibold text-[26px]  md:text-right ">
              Vores omviser dykker ned i historien bag ét af de fem originale
              vikingeskibe:
            </h2>

            <div>
              {aktivitet.full_text.split("\n").map((line, index) => (
                <p key={index} className="mb-4">
                  {line}
                </p>
              ))}
            </div>
          </div>
          <div className="grid  md:grid-cols-2 gap-3  md:gap-6 ">
            <p className="font-semibold text-[26px] md:text-right  ">
              Praktisk info
            </p>
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
            <div className="w-full aspect-[167/111] relative">
              <Image
                src={aktivitet.image_1}
                alt="Katinka"
                fill
                className="object-cover"
              />
            </div>
          )}
          {aktivitet.image_2 && (
            <div className="w-full aspect-square relative">
              <Image
                src={aktivitet.image_2}
                alt="Katinka"
                fill
                className="object-cover"
              />
            </div>
          )}
          {aktivitet.image_3 && (
            <div className="w-full aspect-[167/188] relative">
              <Image
                src={aktivitet.image_3}
                alt="Katinka"
                fill
                className="object-cover"
              />
            </div>
          )}
          {aktivitet.image_4 && (
            <div className="w-full aspect-[167/94] relative">
              <Image
                src={aktivitet.image_4}
                alt="Katinka"
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* <div className="grid grid-cols-2 gap-6">
          {aktivitet.image_1 && (
            <Image
              src={aktivitet.image_1}
              alt="Katinka"
              width={668}
              height={444}
            />
          )}
          {aktivitet.image_2 && (
            <Image
              src={aktivitet.image_2}
              alt="Katinka"
              width={668}
              height={668}
            />
          )}
          {aktivitet.image_3 && (
            <Image
              src={aktivitet.image_3}
              alt="Katinka"
              width={668}
              height={752}
            />
          )}
          {aktivitet.image_4 && (
            <Image
              src={aktivitet.image_4}
              alt="Katinka"
              width={668}
              height={376}
            />
          )}
        </div> */}

        {/* <div className="flex gap-2 flex-wrap mb-4">
          {aktivitet.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-amber-200 rounded-2xl px-3 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div> */}
      </div>
    </div>
  );
}
