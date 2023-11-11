"use client";

import { Button, Link } from "@nextui-org/react";
import Whatsapp from "@/assets/whatsapp.png";
import Image from "next/image";

export default function StickyWhatsapp() {
  return (
    <Button
      href="https://wa.me/+5491168460775?text=esunaprueba"
      as={Link}
      variant="solid"
      className="group min-w-0 w-16 h-16 p-0 rounded-full fixed right-6 bottom-6 bg-wpps_bg gap-0 hover:w-auto hover:gap-4 hover:px-4 hover:!opacity-100"
      isExternal
    >
      <span
        tabIndex={-1}
        className="w-0 text-lg text-wpps_bg group-hover:w-auto group-hover:text-white"
      >
        Escribenos a WhatsApp
      </span>
      <Image
        src={Whatsapp}
        alt="Escribinos por WhatsApp"
        width={36}
        height={36}
      />
    </Button>
  );
}
