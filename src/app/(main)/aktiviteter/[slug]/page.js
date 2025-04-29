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

export default async function AktivitetPage({ params }) {
  const { slug } = await params;
  const aktivitet = await getSingleActivity(slug);

  if (!aktivitet) {
    return <p>Ingen aktivitet fundet</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{aktivitet.title}</h1>

      <img
        src={aktivitet.image_url}
        alt={aktivitet.title}
        className="w-full max-w-md rounded-xl mb-4"
      />

      <p className="text-gray-700 mb-4">{aktivitet.description}</p>

      <div className="flex gap-2 flex-wrap mb-4">
        {aktivitet.tags?.map((tag, index) => (
          <span
            key={index}
            className="bg-amber-200 rounded-2xl px-3 py-1 text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-sm text-gray-500">
        Tidspunkt: {new Date(aktivitet.datetime).toLocaleString("da-DK")}
      </p>
    </div>
  );
}
