"use client";

import { useCartStore } from "@/app/store/cart";
import useStore from "@/app/hook/useStore";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

import { CartIconDark } from "@/assets/icons";
import MiniCartProduct from "@/app/components/MiniCart/MiniCartProduct";

export default function MiniCart() {
  const cart = useStore(useCartStore, (state) => state.cart);
  const emptyCart = useCartStore((state) => state.emptyCart);

  return (
    <Popover placement="bottom-end" offset={10}>
      <PopoverTrigger>
        <Button className="min-w-0 w-auto p-3">
          <CartIconDark aria-label="Carrito" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 px-6 py-5">
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
            <section className="w-full">
              {cart?.map((item) => (
                <MiniCartProduct key={item.product_id} {...item} />
              ))}
            </section>
            <div className="w-full flex justify-between pt-4 mt-1 border-t-1 border-main_stroke">
              <Button
                className="w-full bg-black text-base text-white"
                radius="sm"
              >
                Finalizar compra
              </Button>
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}
