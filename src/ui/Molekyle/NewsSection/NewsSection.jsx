import Image from "next/image";
import NewsSignup from "./NewsSignup";

const NewsSection = () => {
  return (
    <div className="relative w-full py-12 h-fit  rounded-lg overflow-hidden">
      {/* Baggrundsbilledet */}
      <Image
        src="/assets/images/Tilmeldnyhedsbrev.webp"
        alt="Båd der sejler på vandet"
        fill
        sizes="(max-width: 1408px) 100vw, 668px"
        className="object-cover origigen"
      />

      {/* Indhold ovenpå */}
      <div className="relative p-6 text-white">
        {/* Overskrift */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-0  justify-between mb-6">
          <p className="text-2xl md:text-[36px] font-semibold uppercase">
            Kulturarv i din indbakke?
          </p>

          <NewsSignup inSection />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
