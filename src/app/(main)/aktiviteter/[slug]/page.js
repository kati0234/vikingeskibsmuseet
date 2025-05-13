import { getSingleActivity } from "@/lib/api"; // justér stien hvis nødvendigt
import Image from "next/image";

export default async function AktivitetPage({ params }) {
  const { slug } = await params;
  const aktivitet = await getSingleActivity(slug);

  if (!aktivitet) {
    return <p>Ingen aktivitet fundet</p>;
  }

  return (
    <div className="pb-12">
      <div className="relative h-[500px] w-full">
        <Image
          src={aktivitet.image_hero}
          alt="Katinka"
          className="object-cover"
          fill
        />

        <div className="absolute bottom-0 left-0  text-bw-50 p-4">
          <h1 className="text-2xl md:text-3xl  font-bold uppercase">
            {aktivitet.title}
          </h1>
          <p className="text-bw-50 text-base">{aktivitet.description}</p>
        </div>
      </div>
      <div className="md:mx-10 pt-6">
        <div className="md:mx-0 mx-3">
          <div className="grid  md:grid-cols-2 gap-3  md:gap-6">
            <h2 className="font-semibold text-[26px]  md:text-right ">
              {aktivitet.h2}
            </h2>

            <div>
              {aktivitet.text_1.split("\n").map((line, index) => (
                <p key={index} className="mb-4">
                  {line}
                </p>
              ))}
            </div>
          </div>
          <div className="grid  md:grid-cols-2 gap-3  md:gap-6 ">
            <h3 className="font-semibold text-[26px] md:text-right  ">
              Praktisk info
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-xl">Tid</p>
                <p>{aktivitet.tid}</p>
              </div>
              <div>
                <p className="text-xl">Sted</p>
                <p>{aktivitet.sted}</p>
              </div>
              <div>
                <p className="text-xl">Pris</p>
                <p>{aktivitet.pris}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 pt-24">
          {aktivitet.image_1 && (
            <div className="w-full aspect-[167/111]  md:rounded-lg relative">
              <Image
                src={aktivitet.image_1}
                alt="Katinka"
                fill
                className="object-cover"
              />
            </div>
          )}
          {aktivitet.image_2 && (
            <div className="w-full aspect-square  md:rounded-lg relative">
              <Image
                src={aktivitet.image_2}
                alt="Katinka"
                fill
                className="object-cover"
              />
            </div>
          )}
          {aktivitet.image_3 && (
            <div className="w-full aspect-[167/188] md:rounded-lg relative">
              <Image
                src={aktivitet.image_3}
                alt="Katinka"
                fill
                className="object-cover"
              />
            </div>
          )}
          {aktivitet.image_4 && (
            <div className="w-full aspect-[167/94]  md:rounded-lg relative">
              <Image
                src={aktivitet.image_4}
                alt="Katinka"
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
        {aktivitet.image_full && (
          <div className="w-full aspect-[167/94]  md:rounded-lg relative">
            <Image
              src={aktivitet.image_full}
              alt="Katinka"
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
