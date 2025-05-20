"use client";

import { data } from "@/lib/data/headermainData";
import { LogoFillIcon } from "@/assets/Icons/logo-fill-icon";
import { LuSearch, LuChevronDown } from "react-icons/lu";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

import { motion, AnimatePresence } from "motion/react";

import LinkButton from "@/ui/Atom/LinkButton/LinkButton";
import CardUdstillinger from "@/ui/Atom/CardUdstillinger/CardUdstillinger";
import Button from "@/ui/Atom/Button/Button";
import BackSection from "@/ui/Organisme/BackSection/BackSection";

const HeaderMain = () => {
  const router = useRouter();
  // holder styr på hvilken sektion der er åben (dropdown på desktop eller mobil)
  const [activeSection, setActiveSection] = useState(null);

  // isMobileMenuOpen
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // luk ikke menu
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
  const cardRef = useRef(null);

  // back section

  // holder styr på hvor der scrolles iforhold til back section
  const [isBackSectionVisible, setIsBackSectionVisible] = useState(true); // Scroll visibility for BackSection så den går væk
  // Bruges til at spore scroll-position for at bestemme scroll-retning
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();
  const isFrontPage = pathname === "/";

  const [closeTimeout, setCloseTimeout] = useState(null);

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

  // Opdater din handleClickOutside effekt
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        cardRef.current &&
        !cardRef.current.contains(event.target)
      ) {
        // Vent 150ms før lukning for at give links tid til at registrere klik
        const timeout = setTimeout(() => {
          setActiveSection(null);
        }, 200);

        setCloseTimeout(timeout);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimeout) clearTimeout(closeTimeout);
    };
  }, [closeTimeout]);

  const handleButtonClick = (key) => {
    setActiveSection((prev) => (prev === key ? null : key));
  };

  const handleMobileButtonClick = (key) => {
    // Annuller eventuel ventende lukning
    if (closeTimeout) clearTimeout(closeTimeout);

    // Toggle den aktive sektion
    setActiveSection((prev) => (prev === key ? null : key));
  };

  const handleLinkClickWithRouter = (href) => {
    // Annuller eventuel ventende lukning
    if (closeTimeout) clearTimeout(closeTimeout);

    // Naviger først
    router.push(href);

    // Luk menuen med en lille forsinkelse (100ms)
    setCloseTimeout(
      setTimeout(() => {
        setActiveSection(null);
        setIsMobileMenuOpen(false);
      }, 100)
    );
  };

  const toggleMobileMenu = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    if (!nextState) setActiveSection(null);
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
            <p>Åbent i dag 10.00 - 17.00</p>
            <div className="flex items-center gap-2">
              <p>DA</p>
              <LuSearch className="w-6 h-6" />
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
              {data.map((menuCategory) =>
                menuCategory.href ? (
                  <Button
                    variant="link"
                    size="header"
                    key={menuCategory.key}
                    onClick={() => handleLinkClickWithRouter(menuCategory.href)}
                    // className="px-4 py-2  font-semibold text-lg hover:underline flex items-center"
                    className={
                      activeSection === menuCategory.key ? "underline" : ""
                    }
                    // onClick={handleLinkClick}
                  >
                    {menuCategory.name}
                  </Button>
                ) : (
                  <Button
                    key={menuCategory.key}
                    variant="link"
                    size="header"
                    onClick={() => handleButtonClick(menuCategory.key)}
                    className={
                      activeSection === menuCategory.key ? "underline" : ""
                    }
                  >
                    {menuCategory.name}
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
                {data.map((menuItem) => (
                  <div
                    key={menuItem.key}
                    className="border-b border-bw-200 pb-4"
                  >
                    {menuItem.href ? (
                      <button
                        className="text-xl font-semibold block py-2"
                        onClick={() => handleLinkClickWithRouter(menuItem.href)}
                      >
                        {menuItem.name}
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => handleMobileButtonClick(menuItem.key)}
                          className={`text-xl font-semibold w-full text-left py-2 flex justify-between items-center ${
                            activeSection === menuItem.key ? "underline" : ""
                          }`}
                        >
                          {menuItem.name}
                          <motion.span
                            animate={{
                              rotate: activeSection === menuItem.key ? 180 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <LuChevronDown />
                          </motion.span>
                        </button>

                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: activeSection === menuItem.key ? 1 : 0,
                            height: activeSection === menuItem.key ? "auto" : 0,
                          }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 mt-2 space-y-2 overflow-hidden"
                        >
                          {menuItem.links?.map((link, index) => (
                            <motion.div
                              key={index}
                              custom={index}
                              variants={itemVariants}
                              initial="hidden"
                              animate={
                                activeSection === menuItem.key
                                  ? "visible"
                                  : "hidden"
                              }
                            >
                              {link.href ? (
                                <button
                                  onClick={() =>
                                    handleLinkClickWithRouter(link.href)
                                  }
                                  className="block py-1 hover:underline w-full text-left"
                                >
                                  {link.name}
                                </button>
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
                {data
                  .filter((menuItem) => menuItem.key === activeSection)
                  .map((menuItem) => (
                    <motion.div
                      key={menuItem.key}
                      initial="hidden"
                      animate="visible"
                      className="flex justify-between"
                    >
                      <h2 className="font-semibold text-2xl mb-4">
                        {menuItem.name}
                      </h2>
                      <ul ref={dropdownRef} className="space-y-3">
                        {menuItem.links?.map((link, index) => (
                          <motion.li
                            key={index}
                            custom={index}
                            variants={itemVariants}
                            whileHover={{ x: 5 }}
                          >
                            {link.href ? (
                              <button
                                // href={link.href}
                                onClick={() =>
                                  handleLinkClickWithRouter(link.href)
                                }
                                className="text-base md:text-2xl hover:underline"
                              >
                                {link.name}
                              </button>
                            ) : (
                              <p className="text-base text-bw-600 md:text-2xl">
                                {link.name}
                              </p>
                            )}
                          </motion.li>
                        ))}
                      </ul>
                      <div ref={cardRef}>
                        <CardUdstillinger
                          onClick={() =>
                            handleLinkClickWithRouter(
                              "/udstillinger/opslugtafhavet"
                            )
                          }
                          title="OPSLUGT AF HAVET"
                          src="/assets/images/udstillingskort/opslugtafhavet_card.webp"
                          description="- to skibe, der aldrig nåede havn"
                          linkText="Læs mere"
                          className="h-[400px]"
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {!isFrontPage && (
        <div
          className={`transition-transform duration-300 fixed top-[110px]  md:top-[130px] left-0 right-0 z-50 bg-bw-50 shadow  ${
            isBackSectionVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <BackSection />
        </div>
      )}
    </div>
  );
};

export default HeaderMain;
