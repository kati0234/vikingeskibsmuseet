import LinkButton from "@/ui/Atom/LinkButton/LinkButton";
import NewsSignup from "@/ui/Molekyle/NewsSection/NewsSignup";

const FooterMain = () => {
  return (
    <div className="py-3 md:py-10 md:px-10 px-3  bg-beige-400 ">
      <div className="flex  flex-col md:flex-row  gap-14  md:justify-between  ">
        <ul className="space-y-6 order-2 md:order-none">
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

        <div className=" order-3 md:order-none text-bw-950 flex gap-6 flex-col">
          <div>
            <p className="text-lg font-semibold">ÅBNINGSTIDER</p>
            <p>Alle dage fra 10.00 - 17.00</p>
          </div>
          <div>
            <p className="text-lg font-semibold">FØLG OS</p>
            <ul className="text-base">
              <li>
                <a
                  href="https://www.instagram.com/vikingshipmuseum/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/Vikingeskibsmuseet/?locale=da_DK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/vikingeskibsmuseet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-semibold">PERSONDATA</p>
            <p className="underline">Cookies</p>
          </div>
        </div>
        <div className="order-1 md:order-none">
          <NewsSignup />
        </div>
      </div>

      <div className="border-t-[1px] border-bw-600 pt-8 mt-8 flex gap-3 flex-col md:items-center">
        <div>
          <p className="font-lg font-semibold">VIKINGESKIBSMUSEET</p>
        </div>

        <div className="flex gap-1  md:flex-row flex-col md:gap-8">
          <p>Vindeboder 12, 4000 Roskilde</p>
          <a
            href="mailto:museum@vikingeskibsmuseet.dk"
            className="text-nowrap  hover:underline"
          >
            museum@vikingeskibsmuseet.dk
          </a>

          <a href="tel:+4546300200" className="hover:underline text-nowrap">
            +45 46 300 200
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
