import LinkButton from "@/ui/Atom/LinkButton/LinkButton";

const FooterMain = () => {
  return (
    <div className="py-3 md:py-10 md:px-10 px-3  bg-beige-400 ">
      <div className="flex  flex-col md:flex-row  gap-14  md:justify-between  ">
        <div>
          <ul className="space-y-6">
            <li>
              <LinkButton
                href="/praktiskinfo"
                linkText="Besøg os"
                variant="simpel"
                size="no"
              />
            </li>
            <li>
              <LinkButton
                href="/udstillinger"
                linkText="Udstillinger"
                variant="simpel"
                size="no"
              />
            </li>
            <li>
              <LinkButton
                href="/aktiviteter"
                linkText="Det sker"
                variant="simpel"
                size="no"
              />
            </li>

            <li>
              <LinkButton
                href="/ommuseet"
                linkText="Om museet"
                variant="simpel"
                size="no"
              />
            </li>
          </ul>
        </div>
        <div className=" text-bw-950 flex gap-6 flex-col">
          <div>
            <p className="text-lg font-semibold">ÅBNINGSTIDER</p>
            <p>Alle dage fra 10.00 - 17.00</p>
          </div>
          <div>
            <p className="text-lg font-semibold">FØLG OS</p>
            <ul className="text-base">
              <li className="underline">Instagram</li>
              <li className="underline">Facebook</li>
              <li className="underline">LinkedIn</li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-semibold">PERSONDATA</p>
            <p className="underline">Cookies</p>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-bw-600 pt-8 mt-8 flex gap-3 flex-col md:items-center">
        <div>
          <p className="font-lg font-semibold">VIKINGESKIBSMUSEET</p>
        </div>

        <div className="flex gap-1  md:flex-row flex-col md:gap-8">
          <p>Vindeboder 12, 4000 Roskilde</p>
          <p>museum@vikingeskibsmuseet.dk</p>
          <p>+45 46 300 200</p>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
