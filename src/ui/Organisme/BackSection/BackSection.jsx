"use client";
import BackButton from "@/ui/Atom/BackButton/BackButton";
import Breadcrumbs from "@/ui/Molekyle/Breadcrumbs/Breadcrumbs";
import { usePathname } from "next/navigation";
export default function BackSection({}) {
  const pathname = usePathname();

  const isFrontPage = pathname === "/";
  return (
    <div className="p-4">
      <div className="flex  justify-between items-center ">
        <Breadcrumbs />
        {!isFrontPage && <BackButton />}
      </div>
    </div>
  );
}
