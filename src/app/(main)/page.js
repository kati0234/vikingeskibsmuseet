import ActivitiesCarousel from "@/ui/Molekyle/Swiper/ActivitiesCarousel";
import UdstillingerCarousel from "@/ui/Molekyle/Swiper/UdstillingerCarosel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <h1 className=" text-9xl text-blue-800">hey</h1>
      <Link href="/test"> går til prktisk info</Link>
      <Link href="/billeter"> går til billeter</Link>
      <ActivitiesCarousel />
      <UdstillingerCarousel />
    </main>
  );
}
