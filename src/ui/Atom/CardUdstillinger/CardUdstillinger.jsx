import Image from "next/image";
import LinkButton from "../LinkButton/LinkButton";
import { LuMoveRight } from "react-icons/lu";

const CardUdstillinger = ({
  title,
  src,
  linkText,
  icon,
  dato,
  href,
  description,
}) => {
  return (
    <div className="flex gap-2 text-beige-200  w-[366px] h-[452px] md:h-[573px] rounded-2xl md:w-[437px] relative ">
      {/* <div className="rounded-xl w-[100px] h-[140px] "> */}
      <Image
        src={src || "https://picsum.photos/id/12/200/300"}
        alt="llla"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="  h-[140px] object-cover rounded-lg "
      />
      {/* </div> */}
      <div className="p-8 z-10 flex justify-between flex-col">
        <div>
          <h2 className=" text-[28px]  md:text-[32px] font-semibold">
            {title}
          </h2>
          <p className="md:text-xl text-base">{description}</p>
        </div>
        <LinkButton href={href} linkText={linkText} icon />
      </div>
    </div>
  );
};

export default CardUdstillinger;
