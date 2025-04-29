import Link from "next/link";

const HeaderMain = () => {
  return (
    <header className="fixed z-50 top-0 right-0  w-auto h-auto">
      <Link href="/">
        <h1 className="uppercase text-green italic font-bold sm:text-xl sm:leading-[0.7] lg:leading-[0.7] lg:text-3xl fixed left-[25px] top-[25px]">
          main <br /> main
        </h1>
      </Link>
    </header>
  );
};

export default HeaderMain;
