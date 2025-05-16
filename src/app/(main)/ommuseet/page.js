import LinkButton from "@/ui/Atom/LinkButton/LinkButton";
import BuyTicketSection from "@/ui/Molekyle/BuyTicketSection/BuyTicketSection";
import NewsSection from "@/ui/Molekyle/NewsSection/NewsSection";
import NewsSignup from "@/ui/Molekyle/NewsSection/NewsSignup";
import Image from "next/image";

export default function OmMuseetPage() {
  return (
    <div className="flex mb-16 flex-col gap-[32px] mt-[130px] md:mt-[150px] ">
      <div className=" mx-3 md:mx-10">
        <div className="pb-12">
          <h1 className=" uppercase text-4xl font-semibold pt-6 md:pt-20 ">
            Om museet
          </h1>
          <p>
            Vi er Danmarks museum for mennesket, skibet og havet i oldtid og
            middelalder. 
          </p>
        </div>

        <div className="relative w-full overflow-hidden h-[468px] rounded-lg  md:mx-0 ">
          <Image
            src="/assets/images/opslugtafhavet/opslugtafhavet_hero.webp"
            fill
            alt="billed af vikinge skib"
            sizes="(max-width: 1608px) 100vw, 668px"
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="md:space-y-16 space-y-11 py-11">
        <div className="grid  md:grid-cols-2 gap-2  md:gap-6 mx-3 md:mx-10">
          <div className="space-y-2 md:col-start-2">
            <p>
              Vikingeskibsmuseet i Roskilde er Danmarks museum for skibe, søfart
              og bådebygningskultur i oldtid og middelalder. Den ældste del af
              museet, Vikingeskibshallen, åbnede i 1969.
            </p>
            <p>
              Dette er hallen, tegnet af arkitekt Erik Christian Sørensen og
              bygget som en stor montre omkring de fem vikingeskibe fra
              Skuldelev. Her vises også skiftende særudstillinger og film om
              udgravningen af skibene.
            </p>
            <p>
              I 1997 blev museet udvidet med Museumsøen. Her ligger museets
              bådeværft, der bygger rekonstruktioner af vikingeskibe og
              traditionelle nordiske træbåde. Størstedelen af året kan museets
              omfattende bådsamling ses i Museumshavnen.
            </p>
            <p>
              Derudover udfører vi også marinarkæologiskeundersøgelser forud for
              anlægsarbejder til søs, eller når naturens egne kræfter afdækker
              havbundens fortidsminder.
            </p>
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

        <div className="grid md:grid-cols-2 gap-6  md:mx-10">
          <div className="w-full aspect-[167/111] overflow-hidden  md:rounded-lg relative">
            <Image
              src="/assets/images/rundvisning/rundvisning_1.webp"
              alt="skib"
              fill
              sizes="(max-width: 1608px) 100vw, 668px"
              className="object-cover"
            />
          </div>

          <div className="w-full aspect-square overflow-hidden  md:rounded-lg relative">
            <Image
              src="/assets/images/rundvisning/rundvisning_2.webp"
              alt="papire"
              fill
              sizes="(max-width: 1608px) 100vw, 668px"
              className="object-cover"
            />
          </div>
        </div>
        <div className="grid  md:grid-cols-2 md:mx-10 mx-3 m">
          <h2 className="text-[26px] font-semibold uppercase">
            Nyt fra museet
          </h2>
          <div className="space-y-2">
            <p>
              Vil du vide mere om nye tiltag, udstillinger og spændende
              forskning?
            </p>
            <p className="pb-2">Hold øje med nyheder fra Vikingeskibsmuseet.</p>
            <LinkButton
              href="/"
              variant="blue"
              className="w-fit"
              linkText="Nyheder"
              icon
            />
          </div>
        </div>
        <h3 className="text-[26px] md:mx-10 mx-3 font-semibold uppercase">
          Planlæg dit besøg
        </h3>
        <div className="grid md:grid-cols-2 gap-6  md:mx-10">
          <div className="flex flex-col ">
            <div className="w-full aspect-[167/188] overflow-hidden  md:rounded-lg relative">
              <Image
                src="/assets/images/defemrekonstruktioner/defemrekonstruktioner_2.webp"
                alt="Katinka"
                fill
                sizes="(max-width: 1608px) 100vw, 668px"
                className="object-cover"
              />
            </div>
            <div className="md:mx-10 mx-3">
              <p className="py-4 ">Se vores åbningstider og billetpriser.</p>
              <LinkButton
                href="/praktiskinfo"
                variant="blue"
                className="w-fit"
                linkText="Læs mere"
                icon
              />
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="w-full aspect-[167/94] overflow-hidden  md:rounded-lg relative">
              <Image
                src="/assets/images/defemrekonstruktioner/defemrekonstruktioner_3.webp"
                alt="Katinka"
                fill
                sizes="(max-width: 1608px) 100vw, 668px"
                className="object-cover"
              />
            </div>
            <div className="md:mx-10 mx-3">
              <p className="py-4">
                Vil du besøge museet med børn eller er du interesseret i vores
                tilgængelighed?
              </p>
              <LinkButton
                href="/praktiskinfo"
                variant="blue"
                className="w-fit"
                linkText="Læs mere"
                icon
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" md:mx-10 mx-3">
        <NewsSection />
      </div>
      <BuyTicketSection />
    </div>
  );
}
