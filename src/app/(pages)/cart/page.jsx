"use client";

import { useCartStore } from "@/app/store/cart";
import useStore from "@/app/hook/useStore";

import CartDetails from "@/app/components/CartDetails";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

import Whatsapp from "@/assets/whatsapp.png";

const WhatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

export default function CartPage() {
  const total = useStore(useCartStore, (state) => state.total);
  const getMessageToSend = useCartStore((state) => state.getMessageToSend);

  return (
    <>
      <CartDetails />
      <div className="w-full flex flex-row justify-end items-center gap-x-8 mb-9">
        <div className="flex flex-col justify-center items-end">
          <span className="text-main text-xl font-medium mb-2">
            Sub-total <span className="text-2xl ml-6">${total}</span>
          </span>
          <span className="text-secondary_link text-base">
            Impuestos y costos de envío serán añadidas luego
          </span>
        </div>
        <Button
          href={`https://wa.me/${WhatsappNumber}?text=${getMessageToSend()}`}
          as={Link}
          target="_blank"
          variant="solid"
          size="lg"
          className=" text-white text-xl bg-wpps_bg"
        >
          <Image src={Whatsapp} alt="" width={20} height={20} />
          Finalizar compra en WhatsApp
        </Button>
      </div>
    </>
  );
}
