import ActivitiesSection from "@/ui/Molekyle/ActivitiesSection/ActivitiesSection";
import BilletInfo from "@/ui/Molekyle/BilletInfo/BilletInfo";
import HeroVideo from "@/ui/Molekyle/Herovideo/HeroVideo";
import OpeningHours from "@/ui/Molekyle/OpeningHours/OpeningHours";
import ActivitiesCarousel from "@/ui/Molekyle/Swiper/ActivitiesCarousel";
import UdstillingerCarousel from "@/ui/Molekyle/Swiper/UdstillingerCarosel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex  flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <HeroVideo />

      <div className="flex items-center w-full flex-row justify-center">
        <p className="text-center max-w-[538px] text-lg md:text-[32px] font-semibold">
          5 vikingeskibe. 1.000 års historie. Daglige rundvisninger og sejlture.
          Et museum på vand og på land.
        </p>
      </div>

      <ActivitiesSection />

      <h2 className=" text-2xl md:text-[32px]  px-3 md:px-10  pt-16 font-bold uppercase">
        UDSTILLINGER
      </h2>

      <UdstillingerCarousel />
      <div className="grid md:grid-cols-2 mx-3 md:mx-10 pb-16">
        <div>
          <h2 className="pb-6 font-semibold text-2xl md:text-[32px]">OM OS</h2>
        </div>
        <div>
          <div className="flex flex-col space-y-14 max-w-[668px] ">
            <div>
              <p className="text-base pb-4">
                Vikingeskibsmuseet i Roskilde er Danmarks museum for skibe,
                søfart og bådebygningskultur i oldtid og middelalder. Den ældste
                del af museet, Vikingeskibshallen, åbnede i 1969.
              </p>
              <p className="text-base">
                I 1997 blev museet udvidet med Museumsøen. Her ligger museets
                bådeværft, der bygger rekonstruktioner af vikingeskibe og
                traditionelle nordiske træbåde. Størstedelen af året kan museets
                omfattende bådsamling ses i Museumshavnen.
              </p>
            </div>
          </div>
          <div>
            <p className="text-9xl leading-0.5 pt-20">“</p>
            <p className="text-4xl">
              Det levende møde med historiske håndværk og de samtaler, det
              vækker, er afgørende for at bevare og videreføre vores
              immaterielle kulturarv.
            </p>
          </div>
        </div>
      </div>
      <ActivitiesCarousel />
      <div className="grid md:grid-cols-2 mx-3 md:mx-10 pt-16">
        <h2 className="font-semibold text-2xl md:text-[32px]">
          PRAKTISK INFORMATION
        </h2>

        <div className="flex flex-col text-xl space-y-14 pb-16 ">
          <div>
            <h3 className="text-xl  font-semibold pb-3">ADRESSE</h3>
            <p>Vindeboder 12, 4000 Roskilde</p>
          </div>
          <div>
            <h3 className="pb-6 font-semibold">ÅBNINGSTIDER</h3>
            <OpeningHours />
          </div>
          <BilletInfo />
        </div>
      </div>
    </div>
  );
}
