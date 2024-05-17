"use client";

import { useCartStore } from "@/app/store/cart";
import { useUserStore } from "@/app/store/user";
import useStore from "@/app/hook/useStore";

import CartDetails from "@/app/components/CartDetails";
import MercadoPagoButton from "@/app/components/MercadoPagoButton";
import LoginModal from "@/app/components/LoginModal";

import { formatNumber } from "@/app/utils/formatNumbers";

const MIN_PURCHASE = 10000;

export default function CartPage() {
  const cart = useStore(useCartStore, (state) => state.cart);
  const total = useStore(useCartStore, (state) => state.total);
  const user = useStore(useUserStore, (state) => state.user);

  return (
    <>
      <CartDetails />
      <div className="w-full flex flex-col md:flex-row justify-end items-center gap-x-8 mb-9">
        <div className="flex flex-col justify-center items-end">
          <span className="text-main text-lg md:text-xl font-medium mb-2">
            Sub-total{" "}
            <span className="text-2xl ml-6">${formatNumber(total)}</span>
          </span>
          <span className="text-secondary_link text-sm md:text-base">
            Impuestos y costos de envío serán añadidas luego
          </span>
        </div>
        {user?.id ? (
          total >= MIN_PURCHASE ? (
            <MercadoPagoButton products={cart} user={user} />
          ) : (
            <div className="inline-flex flex-col items-center">
              <p className="mb-1">El minimo de compra son</p>
              <p className="text-xl font-medium">$10.000</p>
            </div>
          )
        ) : (
          <div className="inline-flex flex-col items-center">
            <p className="mb-2">Para finalizar la compra debe:</p>
            <LoginModal btnText="Iniciar sesión" />
          </div>
        )}
      </div>
    </>
  );
}
