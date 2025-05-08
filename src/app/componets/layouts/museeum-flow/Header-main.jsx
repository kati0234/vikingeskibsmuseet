"use client";
import { LogoFillIcon } from "@/assets/Icons/logo-fill-icon";
import Button from "@/ui/Atom/Button/Button";
import Link from "next/link";
import { LuTicket } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { useState, useEffect, useRef } from "react";

const HeaderMain = () => {
  const [activeSection, setActiveSection] = useState(null);
  // Reference to the container div for the active section
  const sectionRef = useRef(null);
  // Definer sektionerne, herunder links til hver sektion
  const sections = [
    {
      name: "Aktiviteter",
      key: "aktiviteter",
      links: [
        { name: "Aktivitet 1", href: "/" },
        { name: "Aktivitet 2", href: "/aktivitet-2" },
      ],
    },
    {
      name: "Udstillinger",
      key: "udstilinger",
      links: [
        { name: "Udstilling 1", href: "/udstilling-1" },
        { name: "Udstilling 2", href: "/udstilling-2" },
      ],
    },
    {
      name: "Besøg os",
      key: "visitUs",
      links: [
        { name: "Vores historie", href: "/vores-historie" },
        { name: "Transport & parkering", href: "/transport-parkering" },
        { name: "For familier og børn", href: "/for-familier" },
        { name: "For skoler", href: "/for-skoler" },
        { name: "For grupper og firmaer", href: "/for-grupper" },
      ],
    },
    {
      name: "Om Vikingeskibsmuseet",
      key: "about",
      links: [
        { name: "Historie", href: "/historie" },
        { name: "Mission", href: "/mission" },
      ],
    },
  ];
  // Close the active section if clicked outside

  const handleButtonClick = (key) => {
    // Toggle sektionens synlighed
    setActiveSection((prevState) => (prevState === key ? null : key));
  };

  // Handle link click (close the section)
  const handleLinkClick = () => {
    setActiveSection(null);
  };

  return (
    <header className="fixed z-50 top-0  right-0 pb-5  w-full bg-amber-50">
      <div className="py-4 px-10 border-b-[0.5px] flex justify-between">
        <p>Åbent i dag 09.00 - 16.00</p>
        <div className="flex items-center gap-2">
          <p>DA</p>
          <LuSearch />
        </div>
      </div>

      <div className="flex justify-between items-center px-10">
        <Link className="flex gap-1 pt-5 md:pt-6" href="/">
          <LogoFillIcon />
          <p className="uppercase font-semibold leading-[100%] text-xl">
            VIKINGESKIBS <br /> MUSEET
          </p>
        </Link>

        <div className="flex justify-between">
          {sections.map((section) => (
            <Button
              key={section.key}
              variant="link"
              size="md"
              onClick={() => handleButtonClick(section.key)}
            >
              {section.name}
            </Button>
          ))}
        </div>

        <Button
          variant="primary"
          size="md"
          className="text-center leading-3"
          iconOnly={false}
          iconAndText={true}
          iconStart={<LuTicket />}
        >
          Køb
        </Button>
      </div>

      {/* Denne div vises kun, når en sektion er aktiv */}
      {activeSection && (
        <div className="grid grid-cols-3 gap-5 pt-20 px-[40px]">
          <div className="text-xs space-y-2 max-w-[600px]">
            <p className="text-base font-semibold">ÅBNINGSTIDER</p>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <p>Vikingeskibshallen</p>
                <p>10.00 - 17.00</p>
              </li>
              <li className="flex justify-between">
                <p>Bådeværftet</p>
                <p>10.00 - 17.00</p>
              </li>
              <li className="flex justify-between">
                <p>Marinarkæologernes værksted</p>
                <p>10.00 - 17.00</p>
              </li>
              <li className="flex justify-between">
                <p>Gå ombord i et vikingeskib i havnen</p>
                <p>10.00 - 17.00</p>
              </li>
            </ul>
            <p className="text-base font-semibold">BILLETPRISER</p>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <p>Voksen over 18 år</p>
                <p>160 kr.</p>
              </li>
              <li className="flex justify-between">
                <p>Barn under 18 år</p>
                <p>Gratis</p>
              </li>
              <li className="flex justify-between">
                <p>Studerende</p>
                <p>105 kr.</p>
              </li>
              <li className="flex justify-between">
                <p>Familiebillet</p>
                <p>300 kr.</p>
              </li>
            </ul>
          </div>

          {/* Dynamisk render af links baseret på den aktive sektion */}
          {sections
            .filter((section) => section.key === activeSection)
            .map((section) => (
              <div key={section.key}>
                <h2 className="font-semibold text-2xl">{section.name}</h2>
                <ul>
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} onClick={handleLinkClick}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      )}
    </header>
  );
};

export default HeaderMain;
