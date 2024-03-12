"use client";

import { useCartStore } from "@/app/store/cart";
import { useUserStore } from "@/app/store/user";
import useStore from "@/app/hook/useStore";

import CartDetails from "@/app/components/CartDetails";
import MercadoPagoButton from "@/app/components/MercadoPagoButton";

import { formatNumber } from "@/app/utils/formatNumbers";

export default function CartPage() {
  const cart = useStore(useCartStore, (state) => state.cart);
  const total = useStore(useCartStore, (state) => state.total);
  const user = useStore(useUserStore, (state) => state.user);

  return (
    <>
      <CartDetails />
      <div className="w-full flex flex-row justify-end items-center gap-x-8 mb-9">
        <div className="flex flex-col justify-center items-end">
          <span className="text-main text-xl font-medium mb-2">
            Sub-total{" "}
            <span className="text-2xl ml-6">${formatNumber(total)}</span>
          </span>
          <span className="text-secondary_link text-base">
            Impuestos y costos de envío serán añadidas luego
          </span>
        </div>
        <MercadoPagoButton products={cart} user={user} />
      </div>
    </>
  );
}
