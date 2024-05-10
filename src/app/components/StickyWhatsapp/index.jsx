"use client";

import { Button, Link } from "@nextui-org/react";
import Whatsapp from "@/assets/whatsapp.png";
import Image from "next/image";

const WhatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

export default function StickyWhatsapp() {
  return (
    <Button
      href={`https://wa.me/${WhatsappNumber}?text=Hola%20Insignia!%20Quiero%20comunicarme%20con%20ustedes!`}
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
