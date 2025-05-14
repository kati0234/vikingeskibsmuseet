import MyDisclosure from "@/ui/Atom/Disclosure/Disclosure";
import LinkButton from "@/ui/Atom/LinkButton/LinkButton";
import BilletInfo from "@/ui/Molekyle/BilletInfo/BilletInfo";
import BuyTicketSection from "@/ui/Molekyle/BuyTicketSection/BuyTicketSection";
import OpeningHours from "@/ui/Molekyle/OpeningHours/OpeningHours";
import Image from "next/image";
import { GoStarFill } from "react-icons/go";

export default function PraktiskInfoPage() {
  return (
    <div className="flex  flex-col mb-16 gap-11 mt-[150px] py-10 mx-3 md:mx-10">
      <div>
        <h1 className=" uppercase text-4xl font-semibold pt-6 md:pt-10 ">
          Planlæg dit besøg
        </h1>
        <p>Find vores åbningstider og køb billetter</p>
      </div>
      <div>
        <div className="flex overflow-x-auto border-t pt-3 pb-3 border-bw-600 w-full max-w-full whitespace-nowrap gap-6  ">
          <LinkButton
            size="sm"
            href="#Billetpriser"
            linkText="Billetpriser"
            variant="simpel"
          />
          <LinkButton
            size="sm"
            href="#åbningstider"
            linkText="Åbningstider"
            variant="simpel"
          />

          <LinkButton
            size="sm"
            href="#Transport"
            linkText="Transport & parkering"
            variant="simpel"
          />
          <LinkButton
            size="sm"
            href="#Anmeldelser"
            linkText="Anmeldelser"
            variant="simpel"
          />
          <LinkButton
            size="sm"
            href="#Caféknarr"
            linkText="Café Knarr"
            variant="simpel"
          />
          <LinkButton
            size="sm"
            href="#faq"
            linkText="Ofte stillede spørgsmål"
            variant="simpel"
          />
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
      <section
        id="Billetpriser"
        className="flex justify-between md:flex-row flex-col scroll-mt-[130px]  w-full border-b-1 border-bw-600 py-20"
      >
        <h2 className="text-3xl font-semibold pb-6 uppercase">Billetpriser</h2>
        <div>
          <p className="pb-6">
            Billetter til Vikingeskibsmuseet kan købes på forhånd eller i
            billetsalget på museet.
          </p>
          <BilletInfo />
        </div>
      </section>
      <section
        id="åbningstider"
        className="flex md:flex-row flex-col  justify-between scroll-mt-[130px] w-full border-b-1 border-bw-600 py-20"
      >
        <h2 className="text-3xl font-semibold pb-6 uppercase">Åbningstider</h2>
        <div>
          <p className="pb-6">Museet er åbent alle ugens dage hele året.</p>
          <OpeningHours />
        </div>
      </section>
      <section
        id="Transport"
        className="flex justify-between md:flex-row flex-col scroll-mt-[130px] w-full border-b-1 border-bw-600 py-20"
      >
        <h2 className="text-3xl font-semibold pb-6 uppercase">
          Transport & parkering
        </h2>
        <div className="space-y-6 md:w-[668px] ">
          <div>
            <p className="text-lg font-semibold uppercase">Adresse</p>
            <p>Vindeboder 12, 4000 Roskilde.</p>
          </div>
          <p>Du har mulighed for at besøge os i bil og offentlig transport. </p>
          <div>
            <p className="text-lg font-semibold uppercase">Bil</p>
            <p>
              Det tager ca. 45 min i bil af København. Museet har en stor,
              gratis parkeringsplads ved Museumsøen. Der kan også findes
              ladepladser til elbiler samt handicappakering. 
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold uppercase">Tog</p>
            <p>
              Der går flere afgange med regionalttogene til Roskilde Station.
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold uppercase">Bus</p>
            <p>Fra Roskilde station kører der Bus 203 direkte til museet.</p>
          </div>
          <div>
            <p className="text-lg font-semibold uppercase">Gå</p>
            <p>Det tager ca. 20-25 min. at gå fra Roskilde Station.</p>
          </div>
        </div>
      </section>

      <section
        id="Anmeldelser"
        className=" w-full border-b-1 border-bw-600 py-20 scroll-mt-[130px] text-bw-50 "
      >
        <div className="bg-blue-500 rounded-lg  p-6">
          <h2 className="text-3xl font-semibold pb-6  uppercase ">
            Hvad siger andre om os
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-2 flex-col">
              <div className="flex gap-1">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
              <p className="">
                “Museum i verdensklasse! Et Museum med forskningsmiljø, hvor
                håndværkere, akademikere og sejlere tilsammen udforsker
                fortidens maritime kulturhistorie. Et sted for hele familjen
                hvor man dukker ind i Vikingernes verden igennem deres
                forkærlighed for skibs byggeri og farten.”
              </p>
              <p>- JaPi K.</p>
            </div>

            <div className="flex gap-2 flex-col">
              <div className="flex gap-1">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
              <p className="italic">
                “Super godt museum med rundvisning forskellige tidspunkter i
                døgnet. Det er som en lille tidslomme tilbage til Vikingetiden.”
              </p>
              <p>- JaPi K.</p>
            </div>
            <div className="flex gap-2 flex-col">
              <div className="flex gap-1">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
              <p className="italic">
                “Helt sikkert et besøg værd i efterårsferien! Der er til mange
                timers underholdning for hele familien samt utrolig flot udsigt
                over Roskilde Fjord.”
              </p>
              <p>- Kenneth S.</p>
            </div>
            <div className="flex gap-2 flex-col">
              <div className="flex gap-1">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
              <p className="italic">
                “Meget interessant vikingetidsudstilling, som giver et godt
                indblik i livet til søs som viking i let forståeligt sprog.”
              </p>
              <p>- Tina E.</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="Caféknarr"
        className="flex md:flex-row flex-col scroll-mt-[130px] justify-between w-full border-b-1 border-bw-600 py-20"
      >
        <h2 className="text-3xl font-semibold pb-6 uppercase ">Café knarr</h2>
        <div className="w-full md:w-[668px] space-y-6">
          <div className="aspect-[3/2] rounded-lg overflow-hidden relative">
            <Image
              src="/assets/images/bygetskib/bygetskib_2.webp"
              sizes="(max-width: 768px) 100vw, 668px"
              fill
              alt="cafen"
              className="object-cover"
            />
          </div>
          <p>
            Kombinér dit besøg med kaffe og kage i caféen, Café Knarr. Her kan
            du nyde velsmagende frokostanretninger, desserter, kaffe og andre
            gode drikkevarer med udsigt til Vinterhaven.
          </p>
          <div className="bg-blue-500 px-6 py-4 rounded-4xl hover:bg-blue-800 cursor-not-allowed text-bw-50 h-fit w-fit">
            <p>Læs mere</p>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="flex justify-between md:flex-row flex-col scroll-mt-[130px]  w-full border-b-1 border-bw-600 py-20"
      >
        <h2 className="text-3xl font-semibold pb-6 uppercase">
          Ofte stillede spørgsmål
        </h2>
        <div className=" md:w-[668px] space-y-6">
          <MyDisclosure question="Hvad koster det at komme ind på Vikingeskibsmuseet?">
            <p>
              Børn under 18 år kan komme ind gratis. Vokse koster 160 kr. men
              kan variere efter vores tilbud.
            </p>
          </MyDisclosure>
          <MyDisclosure question="Må jeg komme ind med presse kort?">
            <p>
              Journalister med gyldigt pressekort har gratis adgang til museet,
              hvis besøget er arbejdsrelateret.
            </p>
            <p>
              Har du som journalist ikke pressekort, men et relevant ærinde på
              museet, bedes du kontakte Museumsdirektør, Tinna Damgård-Sørensen.
            </p>
          </MyDisclosure>
          <MyDisclosure question="Kan man komme rund med kørestol eller barnevogn?">
            <p>
              Kontakt informationen ved ankomst for at få adgang til
              Vikingeskibshallen i kørestol. Der er begrænset adgang til
              Vikingeskibshallen for gæster i kørestol grundet
              Vikingeskibshallens mange trapper.
            </p>
            <p>
              Museumsøen og - havnen er tilgængelig for kørestolsbrugere og
              her findes et handicaptoilet.
            </p>
          </MyDisclosure>
          <MyDisclosure question="Kan jeg få opbevaret min bagage?">
            <p>
              I kælderen i Vikingeskibshallen er der mulighed for at opbevare
              tasker/bagage i aflåste bokse. Det er gratis at låne en boks, mod
              et depositum på 10,00 kr.
            </p>
          </MyDisclosure>
          <MyDisclosure question="Kan jeg medbringe egen madpakke?">
            <p>
              Medbragt mad kan nydes udendørs ved bordene på Museumsøen eller på
              plænen omkring museet.
            </p>
          </MyDisclosure>
          <MyDisclosure question="Må jeg tage billeder på museet?">
            <p>
              Vikingeskibsmuseets gæster er velkomne til at fotografere og filme
              til privat brug (fx feriefotos, fotos du deler på internettet
              etc.). Ønsker du at dele dine billeder med os eller andre
              besøgende, kan du tagge dem med #Vikingeskibsmuseet eller
              #VikingShipMuseum.
            </p>
            <p className="font-medium">Læs mere om vores regler her</p>
          </MyDisclosure>

          <MyDisclosure question="Andre spørgsmål?">
            <p>
              Du er velkommen til at kontakte os på{" "}
              <a
                href="mailto:museum@vikingeskibsmuseet.dk"
                className=" px-1 text-nowrap  underline"
              >
                museum@vikingeskibsmuseet.dk
              </a>
              eller på
              <a href="tel:+4546300200" className="px-1 underline text-nowrap">
                tlf. +45 46 300 200
              </a>
              (Telefontid mandag-fredag: kl. 10.00 - 17.00).
            </p>
            <p className="pt-3">
              Læs mere under
              <a href="#åbningstider" className=" underline">
                Åbningstider
              </a>
              .
            </p>
          </MyDisclosure>
        </div>
      </section>
      <BuyTicketSection />
    </div>
  );
}
