"use client";

import BackButton from "@/ui/Atom/BackButton/BackButton";
import Breadcrumbs from "@/ui/Molekyle/Breadcrumbs/Breadcrumbs";

export default function BackSection({}) {
  return (
    <div className="p-4">
      <div className="flex  justify-between items-center ">
        <Breadcrumbs />
        <BackButton />
      </div>
    </div>
  );
}
