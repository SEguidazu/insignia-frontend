"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { useCartStore } from "@/app/store/cart";
import { useUserStore } from "@/app/store/user";
import useStore from "@/app/hook/useStore";

import { createOrder } from "@/app/lib/orders";

import { Spinner } from "@nextui-org/react";

export default function PaymentResultPage() {
  const [loading, setLoading] = useState(false);
  const cart = useStore(useCartStore, (state) => state.cart);
  const total = useStore(useCartStore, (state) => state.total);
  const user = useStore(useUserStore, (state) => state.user);
  const searchParams = useSearchParams();

  const payment_id = searchParams.get("payment_id");
  const status = searchParams.get("status");
  const external_reference = searchParams.get("external_reference");
  const merchant_order_id = searchParams.get("merchant_order_id");

  useEffect(() => {
    // async function createStrapiOrder() {
    //   try {
    //     setLoading(true);
    //     const payment_data = {
    //       payment_id,
    //       status,
    //       external_reference,
    //       merchant_order_id,
    //     };
    //     const order = await createOrder({ user, cart, total, payment_data });
    //     if (order) console.log(order);
    //   } catch (error) {
    //     console.error("[CREATE_STRAPI_ORDER]:", error);
    //   } finally {
    //     setLoading(false);
    //   }
    // }
    // createStrapiOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? <Spinner /> : <h2>{status}</h2>;
}
