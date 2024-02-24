"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

import { useCartStore } from "@/app/store/cart";

import OrderProducts from "@/app/components/OrderProducts";
import { Spinner } from "@nextui-org/react";
import { PaymentStatus, PaymentText } from "@/app/utils/mercadopago";
import { FailureIcon, SuccessIcon, WarningIcon } from "@/assets/icons";

const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN;

export default function PaymentResultPage() {
  const searchParams = useSearchParams();
  const emptyCart = useCartStore((state) => state.emptyCart);

  const [loading, setLoading] = useState(true);
  const [status_detail, setStatusDetail] = useState(null);
  const [order_id, setOrderId] = useState(null);
  const [order_products, setOrderProducts] = useState(null);
  const [order_total, setOrderTotal] = useState(null);

  const payment_id = searchParams.get("payment_id");
  const status = searchParams.get("status");

  useEffect(() => {
    async function getPaymentData() {
      try {
        setLoading(true);

        if (payment_id) {
          const { data } = await axios.get(
            `https://api.mercadopago.com/v1/payments/${payment_id}`,
            {
              headers: {
                Authorization: `Bearer ${MP_ACCESS_TOKEN}`,
              },
            }
          );
          console.log(data);
          if (data) {
            setStatusDetail(data.status_detail);
            setOrderProducts(data.additional_info?.items);
            setOrderTotal(data.transaction_amount);
            setOrderId(data.order?.id);
          }
        }
      } catch (error) {
        console.error("[GET_PAYMENT_DATA]:", error);
      } finally {
        emptyCart();
        setLoading(false);
      }
    }

    getPaymentData();
  }, [payment_id, emptyCart]);

  const PaymentIcon = useMemo(() => {
    if (
      status === "pending" ||
      status === "in_process" ||
      status === "in_mediation" ||
      status === "charged_back"
    )
      return <WarningIcon className="inline w-10 h-10" />;
    if (status === "rejected" || status === "cancelled")
      return <FailureIcon className="inline w-10 h-10" />;
    return <SuccessIcon className="inline w-10 h-10" />;
  }, [status]);

  return loading ? (
    <div className="w-full flex justify-center items-center h-[40vh]">
      <Spinner />
    </div>
  ) : (
    <section className="text-main text-center">
      <h1 className="w-full flex justify-center items-center gap-x-4 text-2xl uppercase font-medium mt-16 mb-6 relative">
        {PaymentStatus[status]} {PaymentIcon}
      </h1>

      {status_detail && <p className="text-xl">{PaymentText[status_detail]}</p>}

      {order_id && (
        <p className="text-2xl italic mt-8 mb-12">
          Su número de Orden es:{" "}
          <span className="font-medium not-italic">#{order_id}</span>
        </p>
      )}

      {order_products?.length > 0 && (
        <OrderProducts products={order_products} total={order_total} />
      )}
    </section>
  );
}
