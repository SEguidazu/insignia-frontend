"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

import CorreoArgentino from "@/assets/CorreoArgentino.svg";
import ViaCargoLogo from "@/assets/ViaCargoLogo.svg";
import CredifinExpress from "@/assets/CredifinExpress.svg";

export default function Companies() {
  const pathname = usePathname();

  return (
    pathname === "/" && (
      <div className="w-full py-6 bg-[#EFEFEF]" aria-hidden>
        <div className="max-w-7xl flex justify-between items-center mx-auto">
          <Image width={190} src={CorreoArgentino} alt="" />
          <Image width={200} src={ViaCargoLogo} alt="" />
          <Image width={190} src={CredifinExpress} alt="" />
        </div>
      </div>
    )
  );
}
