"use client";
import { getUdstillinger } from "@/lib/api";
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";

export default function Udstillinger() {
  const [udstillinger, setUdstillinger] = useState([]);
  const [hoveredSlug, setHoveredSlug] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getUdstillinger();
      setUdstillinger(data);
      if (data.length > 0) setHoveredSlug(data[0].slug);
    }
    fetchData();
  }, []);

  return (
    <div className="relative h-[500px] md:h-[700px] mt-[110px] md:mt-[150px] w-full overflow-hidden">
      {/* Alle billeder med smooth skift */}
      {udstillinger.map((udstilling) => (
        <Image
          key={udstilling.slug}
          src={udstilling.image}
          alt={udstilling.alt}
          fill
          sizes="(max-width: 5760px) 100vw, 5760px"
          className={clsx(
            "object-cover absolute transition-opacity duration-500 ease-in-out",
            hoveredSlug === udstilling.slug
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
          )}
        />
      ))}

      {/* Tekstlinks */}
      <div className="relative z-20 md:px-20 md:pt-30 mx-3 pt-30 flex gap-3 justify-center flex-col text-white">
        {udstillinger.map((udstilling) => (
          <p
            key={udstilling.slug}
            onMouseEnter={() => setHoveredSlug(udstilling.slug)}
            className={clsx(
              "md:text-5xl text-2xl font-semibold cursor-pointer mb-4",
              hoveredSlug === udstilling.slug && "underline"
            )}
          >
            <Link href={`/udstillinger/${udstilling.slug}`} className="">
              {udstilling.title}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
}
