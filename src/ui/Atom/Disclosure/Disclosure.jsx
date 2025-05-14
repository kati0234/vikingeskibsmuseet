"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { motion, AnimatePresence } from "motion/react";

const MyDisclosure = ({ question, children }) => {
  return (
    <Disclosure className="mb-0">
      {({ open }) => (
        <div className="border-b border-bw-500 text-bw-950 py-6">
          <DisclosureButton className="flex w-full items-center justify-between text-left">
            <span className="font-medium text-xl">{question}</span>
            <div className="rounded-full border-2 p-2 border-bw-950 ">
              {open ? (
                <LuMinus className="h-6 w-6 transition-transform duration-300" />
              ) : (
                <LuPlus className="h-6 w-6 transition-transform duration-300" />
              )}
            </div>
          </DisclosureButton>

          {/* AnimatePresence for smooth exit animation */}
          <AnimatePresence initial={false}>
            {open && (
              <DisclosurePanel static>
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden mt-10 font-normal text-base"
                >
                  {children}
                </motion.div>
              </DisclosurePanel>
            )}
          </AnimatePresence>
        </div>
      )}
    </Disclosure>
  );
};

export default MyDisclosure;
