"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { LuChevronDown } from "react-icons/lu";
import clsx from "clsx";

const MyDisclosure = ({ question, answer }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="border-b border-bw-500 text-bw-950 pt-2 pb-6">
          <DisclosureButton className="flex w-full items-center justify-between text-left">
            <span className="font-medium text-lg">{question}</span>
            <LuChevronDown
              className={clsx(
                "h-6 w-6 transform transition-transform duration-300",
                open && "rotate-180"
              )}
            />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 font-normal text-base">
            {answer}
          </DisclosurePanel>
        </div>
      )}
    </Disclosure>
  );
};

export default MyDisclosure;
