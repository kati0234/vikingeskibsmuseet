"use client";

import { useRouter } from "next/navigation";
import { LuMoveLeft } from "react-icons/lu";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className=" rounded flex gap-2 items-center hover:text-bw-700 justify-center flex-row text-bw-950"
    >
      <LuMoveLeft className="w-6 h-6" />
      <p className="font-semibold text-base">Tilbage </p>
    </button>
  );
}
