"use client";
import { LogoFillIcon } from "@/assets/Icons/logo-fill-icon";
import Button from "@/ui/Atom/Button/Button";
import Link from "next/link";
import { LuTicket, LuSearch, LuX, LuMenu } from "react-icons/lu";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LinkButton from "@/ui/Atom/LinkButton/LinkButton";
import CardUdstillinger from "@/ui/Atom/CardUdstillinger/CardUdstillinger";
import { LuChevronDown } from "react-icons/lu";
import BackSection from "@/ui/Organisme/BackSection/BackSection";

const HeaderMain = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const [isBackSectionVisible, setIsBackSectionVisible] = useState(true); // Scroll visibility for BackSection
  const [lastScrollY, setLastScrollY] = useState(0); // To track the last scroll position
  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsBackSectionVisible(false); // Hide on scroll down
      } else {
        setIsBackSectionVisible(true); // Show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const sections = [
    {
      name: "Besøg os",
      key: "visitUs",
      links: [
        { name: "Åbningstider", href: "/praktiskinfo/#åbningstider" },
        { name: "Billetpriser", href: "/praktiskinfo#Billetpriser" },
        { name: "Transport & parkering", href: "/praktiskinfo#Transport" },
        { name: "Anmeldelser", href: "/praktiskinfo#Anmeldelser" },
        { name: "Café Knarr", href: "/praktiskinfo#Caféknarr" },
        { name: "FAQ", href: "/praktiskinfo#faq" },
        { name: "Museumsbutik" },
        { name: "For familien & børn" },
        { name: "For skoler" },
        { name: "For grupper & virksomheder" },
      ],
    },
    {
      name: "Udstillinger",
      key: "udstillinger",
      href: "/udstillinger",
    },
    {
      name: "Det Sker",
      key: "aktiviteter",
      links: [
        { name: "Kalender", href: "/aktiviteter" },
        { name: "Arrangementer" },
        { name: "Nyt museum" },
        { name: "Presse" },
      ],
    },
    {
      name: "Om museet",
      key: "about",
      href: "/ommuseet",
    },
  ];

  // lukker menu når man klikker uden for
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveSection(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = (key) => {
    setActiveSection((prev) => (prev === key ? null : key));
  };

  const handleLinkClick = () => {
    setActiveSection(null);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setActiveSection(null);
    }
  };

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 + 0.2 },
    }),
  };

  // Burger icon animation variants
  const topLineVariants = {
    open: { rotate: 45, y: 8, originX: 0.5 },
    closed: { rotate: 0, y: 0 },
  };

  const middleLineVariants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };

  const bottomLineVariants = {
    open: { rotate: -45, y: -8, originX: 0.5 },
    closed: { rotate: 0, y: 0 },
  };

  return (
    <div>
      <header className="fixed z-[1000] top-0 right-0 w-full bg-bw-50">
        <div className="z-[100]">
          <div className="md:py-4 py-2 px-4 md:px-10 border-b-[0.5px] flex justify-between">
            <p>Åbent i dag 09.00 - 16.00</p>
            <div className="flex items-center gap-2">
              <p>DA</p>
              <LuSearch />
            </div>
          </div>

          <div
            className="flex justify-between py-4 border-b-[1px] border-bw-300 items-center px-4 md:px-10 z-100"
            ref={menuRef}
          >
            <Link className="flex gap-1" href="/">
              <LogoFillIcon className="block" />
              <p className="uppercase font-semibold leading-[100%] text-xl">
                VIKINGESKIBS <br className="block" /> MUSEET
              </p>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-between items-center gap-4">
              {sections.map((section) =>
                section.href ? (
                  <Link
                    key={section.key}
                    href={section.href}
                    className="px-4 py-2  font-semibold text-lg hover:underline flex items-center"
                    onClick={handleLinkClick}
                  >
                    {section.name}
                  </Link>
                ) : (
                  <Button
                    key={section.key}
                    variant="link"
                    size="header"
                    onClick={() => handleButtonClick(section.key)}
                    className={activeSection === section.key ? "underline" : ""}
                  >
                    {section.name}
                  </Button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 focus:outline-none flex  flex-col justify-center items-center w-6 h-6"
                aria-label={isMobileMenuOpen ? "Luk menu" : "Åbn menu"}
              >
                <motion.div
                  className="min-w-6 min-h-0.5  bg-bw-950  mb-1.5 "
                  variants={topLineVariants}
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="min-w-6 min-h-0.5  bg-black  mb-1.5"
                  variants={middleLineVariants}
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="min-w-6 min-h-0.5  bg-black"
                  variants={bottomLineVariants}
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>

            {/* Buy Ticket Button - Hidden on mobile when menu is open */}
            {!isMobileMenuOpen && (
              <LinkButton
                linkText="Køb billetter"
                ticketIcon
                variant="blue"
                href="/billetter"
                className="hidden md:flex"
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-bw-50  top-28 overflow-y-auto"
              style={{ height: "calc(100vh - 7rem)" }}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-6">
                {sections.map((section) => (
                  <div
                    key={section.key}
                    className="border-b border-bw-200 pb-4"
                  >
                    {section.href ? (
                      <Link
                        href={section.href}
                        className="text-xl font-semibold block py-2"
                        onClick={handleLinkClick}
                      >
                        {section.name}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() => handleButtonClick(section.key)}
                          className={`text-xl font-semibold w-full text-left py-2 flex justify-between items-center ${
                            activeSection === section.key ? "underline" : ""
                          }`}
                        >
                          {section.name}
                          <motion.span
                            animate={{
                              rotate: activeSection === section.key ? 180 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <LuChevronDown />
                          </motion.span>
                        </button>

                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: activeSection === section.key ? 1 : 0,
                            height: activeSection === section.key ? "auto" : 0,
                          }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 mt-2 space-y-2 overflow-hidden"
                        >
                          {section.links?.map((link, index) => (
                            <motion.div
                              key={index}
                              custom={index}
                              variants={itemVariants}
                              initial="hidden"
                              animate={
                                activeSection === section.key
                                  ? "visible"
                                  : "hidden"
                              }
                            >
                              {link.href ? (
                                <Link
                                  href={link.href}
                                  onClick={handleLinkClick}
                                  className="block py-1 hover:underline"
                                >
                                  {link.name}
                                </Link>
                              ) : (
                                <p className="text-bw-600 py-1">{link.name}</p>
                              )}
                            </motion.div>
                          ))}
                        </motion.div>
                      </>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <LinkButton
                    linkText="køb billet"
                    ticketIcon
                    variant="blue"
                    href="/billetter"
                    onClick={handleLinkClick}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Dropdown Menu */}
        <AnimatePresence>
          {activeSection && !isMobileMenuOpen && (
            <motion.div
              className="absolute left-0 w-full bg-bw-50 shadow-lg hidden md:block"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ duration: 0.2 }}
            >
              <div className="gap-5 pt-5 pb-10 px-[40px]">
                {sections
                  .filter((section) => section.key === activeSection)
                  .map((section) => (
                    <motion.div
                      key={section.key}
                      initial="hidden"
                      animate="visible"
                      className="flex justify-between"
                    >
                      <h2 className="font-semibold text-2xl mb-4">
                        {section.name}
                      </h2>
                      <ul className="space-y-3">
                        {section.links?.map((link, index) => (
                          <motion.li
                            key={index}
                            custom={index}
                            variants={itemVariants}
                            whileHover={{ x: 5 }}
                          >
                            {link.href ? (
                              <Link
                                href={link.href}
                                onClick={handleLinkClick}
                                className="text-base md:text-2xl hover:underline"
                              >
                                {link.name}
                              </Link>
                            ) : (
                              <p className="text-base text-bw-600 md:text-2xl">
                                {link.name}
                              </p>
                            )}
                          </motion.li>
                        ))}
                      </ul>
                      <CardUdstillinger
                        title="OPSLUGT AF HAVET"
                        src="/assets/images/udstillingskort/opslugtafhavet_card.webp"
                        description="- to skibe, der aldrig nåede havn"
                        linkText="Læs mere"
                        href="/udstillinger/opslugtafhavet"
                      />
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <div
        className={`transition-transform duration-300 fixed top-[110px]  md:top-[130px] left-0 right-0 z-50 bg-bw-50 shadow  ${
          isBackSectionVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <BackSection />
      </div>
    </div>
  );
};

export default HeaderMain;
