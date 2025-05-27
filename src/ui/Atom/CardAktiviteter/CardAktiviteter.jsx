import Link from "next/link";
import Image from "next/image";

const CardAktiviteter = ({
  title,
  slug,
  description,
  dato,
  alt,
  src,
  tidspunkt,
}) => {
  console.log("Slug for project:", slug);
  return (
    <div className="flex gap-2   w-[300px] relative ">
      <Image
        src={src}
        alt={alt}
        width={100}
        height={140}
        className="w-[100px] h-[140px] object-cover rounded-lg "
      />

      <div className="w-[250px]">
        <h2 className=" text-lg font-semibold">
          <Link
            href={`/aktiviteter/${slug}`}
            className="after:absolute after:inset-0 after:z-10"
          >
            {title}
          </Link>
        </h2>

        <p className="text-base">{dato}</p>
        <p className="text-base">{tidspunkt}</p>
        <p className="text-sm text-bw-700   truncate ">{description}</p>
      </div>
    </div>
  );
};

export default CardAktiviteter;
