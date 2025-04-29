"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getActivity } from "@/lib/api";

export default function Aktiviteter() {
  const [aktiviteter, setAktiviteter] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getActivity();
      setAktiviteter(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1 className=" text-9xl text-blue-800 mt-20">Aktiviteter</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {aktiviteter.map((aktivitet) => (
          <div
            key={aktivitet.id}
            className="bg-white p-4 rounded-2xl shadow-md"
          >
            <p className="text-black">{aktivitet.date}</p>
            <Image
              src={aktivitet.image_url || "https://via.placeholder.com/300"}
              alt={aktivitet.title}
              width={300}
              height={300}
              className="rounded-xl"
            />
            <h2 className="text-xl font-semibold mt-2">{aktivitet.title}</h2>
            <p className="text-gray-600">{aktivitet.description}</p>
            <Link href={`/aktiviteter/${aktivitet.slug}`}>
              <h2>{aktivitet.title}</h2>
            </Link>
            {aktivitet.tag &&
            Array.isArray(aktivitet.tag) &&
            aktivitet.tag.length > 0 ? (
              aktivitet.tag.map((tag, index) => (
                <span
                  key={index}
                  className="bg-amber-200 rounded-2xl px-3 py-1 text-sm"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="text-gray-400">Ingen tags</span> // Fallback hvis ingen tags findes
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
