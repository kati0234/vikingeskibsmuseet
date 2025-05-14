import LinkButton from "@/ui/Atom/LinkButton/LinkButton";
import Image from "next/image";

const BuyTicketSection = ({}) => {
  return (
    <div className="space-y-6 mx-3 md:mx-10  p-6 rounded-xl gap-5 bg-[#FBE2A2] flex justify-between flex-col-reverse md:flex-row items-center">
      <div className="space-y-6">
        <p className="text-2xl font-semibold pt-3">BILLETTER</p>

        <div className="bg-beige-50 rounded-xl overflow-hidden flex gap-8 flex-col md:max-w-[500px] p-6">
          <p>
            Vis din entrébillet på museet og spring over køen til billetsalget.
          </p>

          <LinkButton
            href="/billetter"
            variant="blue"
            linkText="Køb billetter"
            ticketIcon
          />
        </div>
      </div>
      <div>
        <div className=" md:w-[449px] w-[320px] h-[246px]  overflow-hidden   rounded-lg relative">
          <Image
            src="/assets/images/Købbillet.webp"
            alt="Båd der sejler på vandet"
            fill
            sizes="(max-width: 1608px) 100vw, 668px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BuyTicketSection;
