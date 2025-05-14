import Image from "next/image";
import LinkButton from "../LinkButton/LinkButton";
import { LuMoveRight } from "react-icons/lu";

const CardUdstillinger = ({ title, src, linkText, href, description }) => {
  return (
    <div className="flex gap-2 text-beige-200  max-w-[366px] h-[452px] md:h-[573px] group rounded-2xl md:max-w-[437px] overflow-hidden relative ">
      <div className="absolute inset-0">
        <Image
          src={src || "https://picsum.photos/id/12/200/300"}
          alt="llla"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
      </div>
      <div className="p-8 z-10 flex justify-between flex-col">
        <div>
          <h2 className=" text-[28px]  md:text-[32px] font-semibold">
            {title}
          </h2>
          <p className="md:text-xl text-base">{description}</p>
        </div>
        <LinkButton
          className="justify-normal "
          href={href}
          linkText={linkText}
          icon
        />
      </div>
    </div>
  );
};

export default CardUdstillinger;
