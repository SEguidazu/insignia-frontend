"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

import CorreoArgentino from "@/assets/CorreoArgentino.svg";
import ViaCargoLogo from "@/assets/ViaCargoLogo.svg";
import CredifinExpress from "@/assets/CredifinExpress.svg";
import useScreenSize from "@/app/hook/useScreenSize";

export default function Companies() {
  const pathname = usePathname();
  const { isLGscreen } = useScreenSize();

  return (
    pathname === "/" &&
    isLGscreen && (
      <div className="w-full py-6 bg-[#EFEFEF]" aria-hidden>
        <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-sm flex justify-between items-center mx-auto">
          <Image width={190} src={CorreoArgentino} alt="" />
          <Image width={200} src={ViaCargoLogo} alt="" />
          <Image width={190} src={CredifinExpress} alt="" />
        </div>
      </div>
    )
  );
}
