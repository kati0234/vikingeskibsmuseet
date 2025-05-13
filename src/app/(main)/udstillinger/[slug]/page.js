import { getSingleUdstillinger } from "@/lib/api"; // justér stien hvis nødvendigt
import Image from "next/image";

export default async function SingelUdstillinger({ params }) {
  const { slug } = await params;
  const udstilling = await getSingleUdstillinger(slug);

  if (!udstilling) {
    return <p>Ingen aktivitet fundet</p>;
  }

  return (
    <div className="">
      <div className="relative h-[500px] w-full">
        <Image
          src={udstilling.image_hero}
          alt="Katinka"
          className="object-cover"
          fill
        />

        <div className="absolute bottom-0 left-0  text-bw-50 p-4">
          <h1 className="text-2xl md:text-3xl  font-bold uppercase">
            {udstilling.title}
          </h1>
          <p className="text-bw-50 text-base">{udstilling.titledescription}</p>
        </div>
      </div>
      <div className="md:space-y-16 space-y-11 py-11">
        <div className="grid  md:grid-cols-2 gap-2  md:gap-6 mx-3 md:mx-10">
          <h2 className="font-semibold text-[26px]  md:text-right ">
            {udstilling.h2}
          </h2>

          <div>
            {udstilling.text_1.split("\n").map((line, index) => (
              <p key={index} className="mb-4 md:max-w-[435px]">
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6  md:mx-10">
          {udstilling.image_1 && (
            <div className="w-full aspect-[167/111]  md:rounded-lg relative">
              <Image
                src={udstilling.image_1}
                alt="Katinka"
                fill
                className="object-cover"
              />
            </div>
          )}
          {udstilling.image_2 && (
            <div className="w-full aspect-square  md:rounded-lg relative">
              <Image
                src={udstilling.image_2}
                alt="Katinka"
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
        <div className="grid  md:grid-cols-2 gap-2  md:gap-6 mx-3 md:mx-10">
          <h3 className="font-semibold text-[26px]  md:text-right ">
            {udstilling.h3}
          </h3>

          <div>
            {udstilling.text_2.split("\n").map((line, index) => (
              <p key={index} className="mb-4 md:max-w-[435px]">
                {line}
              </p>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6  md:mx-10">
          {udstilling.image_3 && (
            <div className="w-full aspect-[167/188]  md:rounded-lg relative">
              <Image
                src={udstilling.image_3}
                alt="Katinka"
                fill
                className="object-cover"
              />
            </div>
          )}
          {udstilling.image_4 && (
            <div className="w-full aspect-[167/94]  md:rounded-lg relative">
              <Image
                src={udstilling.image_4}
                alt="Katinka"
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        <div className="grid  md:grid-cols-2 gap-2  md:gap-6  mx-3 md:mx-10">
          <h4 className="font-semibold text-[26px]  md:text-right ">
            {udstilling.h4}
          </h4>

          <div>
            {udstilling.text_3.split("\n").map((line, index) => (
              <p key={index} className="mb-4 md:max-w-[435px]">
                {line}
              </p>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:mx-10">
          {udstilling.image_5 && (
            <div className="w-full  md:rounded-lg aspect-[167/111] relative">
              <Image
                src={udstilling.image_5}
                alt="Katinka"
                fill
                className="object-cover"
              />
            </div>
          )}
          {udstilling.image_6 && (
            <div className="w-full aspect-square md:rounded-lg  relative">
              <Image
                src={udstilling.image_6}
                alt="Katinka"
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
