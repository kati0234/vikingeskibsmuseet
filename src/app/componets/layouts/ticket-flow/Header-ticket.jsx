import Link from "next/link";

const HeaderTicket = () => {
  return (
    <header className="fixed z-50 top-0 right-0  w-auto h-auto">
      <Link href="/">
        <h1 className="uppercase  italic font-bold sm:text-xl sm:leading-[0.7] lg:leading-[0.7] lg:text-3xl fixed left-[25px] top-[25px]">
          billet <br /> billet
        </h1>
      </Link>
    </header>
  );
};

export default HeaderTicket;
