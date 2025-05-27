import LinkButton from "@/ui/Atom/LinkButton/LinkButton";

const HeroVideo = () => {
  return (
    <div className="relative h-[748px] w-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/images/Heroskærmbillede.webp"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/images/herovideo.mp4" type="video/mp4" />
        Din browser understøtter ikke video-tagget.
      </video>
      <div className="bg-black/15 absolute w-full h-full"></div>
      <div className="absolute bottom-0 left-0  text-bw-50 px-4 py-16">
        <h1 className="text-2xl md:text-5xl  font-bold uppercase">
          DYK NED I VIKINGETIDEN MED EN DAG PÅ VIKINGESKIBSMUSEET
        </h1>
        <LinkButton
          href="/billetter"
          variant="blue"
          linkText="Køb billetter"
          className="md:hidden block w-fit mt-3 md:mt-0"
          ticketIcon
        />
      </div>
    </div>
  );
};

export default HeroVideo;
