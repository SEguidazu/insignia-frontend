"use client";

import { useCartStore } from "@/app/store/cart";
import useStore from "@/app/hook/useStore";

import CartDetails from "@/app/components/CartDetails";
import CheckoutButton from "@/app/components/CheckoutButton";

export default function CartPage() {
  const total = useStore(useCartStore, (state) => state.total);

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
        <CheckoutButton />
      </div>
    </>
  );
}
