"use client";
import { Button } from "@nextui-org/react";
import { CartIconLight } from "@/assets/icons";

export default function AddCartButton(props) {
  return (
    <Button
      className="w-full bg-black text-base text-white"
      radius="sm"
      endContent={<CartIconLight />}
      {...props}
    >
      Agregar al carrito
    </Button>
  );
}
