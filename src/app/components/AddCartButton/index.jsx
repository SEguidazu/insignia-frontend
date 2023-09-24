"use client";
import { Button } from "@nextui-org/react";
import { CartIconWhite } from "@/assets/icons";

export default function AddCartButton() {
  return (
    <Button
      className="w-full bg-black text-base text-white"
      radius="sm"
      endContent={<CartIconWhite />}
    >
      Agregar al carrito
    </Button>
  );
}
