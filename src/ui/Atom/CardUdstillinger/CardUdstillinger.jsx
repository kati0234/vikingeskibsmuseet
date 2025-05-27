import Image from "next/image";
import LinkButton from "../LinkButton/LinkButton";
import { LuMoveRight } from "react-icons/lu";
import Button from "../Button/Button";

const CardUdstillinger = ({
  title,
  onClick,
  src,
  linkText,
  href,
  alt,
  description,
}) => {
  return (
    <div className="flex gap-2 text-beige-200  max-w-[366px] h-[452px] md:h-[573px] group rounded-2xl md:max-w-[437px] overflow-hidden relative ">
      <div className="absolute inset-0">
        <Image
          src={src || "https://picsum.photos/id/12/200/300"}
          alt={alt || "billed beskrivelse"}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
      </div>
      <div className="p-8 z-10 flex justify-between flex-col">
        <div>
          <p className=" text-[28px] uppercase  md:text-[32px] font-semibold">
            {title}
          </p>
          <p className="md:text-xl text-base">{description}</p>
        </div>
        {onClick && (
          <Button
            variant="linkCard"
            className="justify-normal"
            iconAndText
            onClick={onClick}
            iconEnd={
              <LuMoveRight className="text-bw-50 w-[24px] h-[24px] hover:scale-110 transition" />
            }
          >
            læs mere
          </Button>
        )}
        {href && (
          <LinkButton
            className="justify-normal"
            href={href}
            linkText={linkText}
            icon
          />
        )}
      </div>
    </div>
  );
};

export default CardUdstillinger;
