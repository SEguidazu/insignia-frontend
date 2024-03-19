"use client";

import Link from "next/link";

import { useCartStore } from "@/app/store/cart";
import useStore from "@/app/hook/useStore";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

import MiniCartProduct from "./MiniCartProduct";

import { CartIconDark } from "@/assets/icons";

export default function PopoverCart() {
  const cart = useStore(useCartStore, (state) => state.cart);
  const emptyCart = useCartStore((state) => state.emptyCart);

  return (
    <Popover placement="bottom-end" offset={10}>
      <PopoverTrigger>
        <Button className="min-w-0 w-auto p-3">
          <CartIconDark aria-label="Carrito" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="sm:w-96 w-screen px-6 py-5">
        {cart?.length === 0 ? (
          <p className="text-lg text-main">El carrito esta vacío.</p>
        ) : (
          <>
            <div className="w-full flex justify-between items-center mb-4">
              <p className="text-base text-secondary_link italic capitalize">
                Mi carrito
              </p>
              <button
                className="text-base text-danger"
                onClick={(e) => emptyCart()}
              >
                Borrar todo
              </button>
            </div>
            <section className="w-full max-h-[384px] pb-1 mb-4 border-b-1 border-main_stroke overflow-y-scroll scroll-smooth">
              {cart?.map((item) => (
                <MiniCartProduct key={item.product_id} {...item} />
              ))}
            </section>
            <Button
              href="/carrito"
              as={Link}
              className="w-full bg-black text-base text-white"
              radius="sm"
            >
              Finalizar compra
            </Button>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}
