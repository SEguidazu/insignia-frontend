"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/store/cart";
import { useUserStore } from "@/app/store/user";
import useStore from "@/app/hook/useStore";

import { createOrder } from "@/app/lib/orders";

import { Button } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import Image from "next/image";

import Whatsapp from "@/assets/whatsapp.png";

const WhatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

export default function CheckoutButton() {
  const router = useRouter();
  const cart = useStore(useCartStore, (state) => state.cart);
  const total = useStore(useCartStore, (state) => state.total);
  const user = useStore(useUserStore, (state) => state.user);
  const getMessageToSend = useCartStore((state) => state.getMessageToSend);

  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    const href = `https://wa.me/${WhatsappNumber}?text=${getMessageToSend()}`;

    try {
      setLoading(true);
      const order = await createOrder({ user, cart, total });

      if (order) router.push(href);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="solid"
      size="lg"
      className=" text-white text-xl bg-wpps_bg"
      onPress={(e) => handleClick()}
    >
      {loading ? (
        <Spinner color="default" />
      ) : (
        <Image src={Whatsapp} alt="" width={20} height={20} />
      )}
      Finalizar compra en WhatsApp
    </Button>
  );
}
