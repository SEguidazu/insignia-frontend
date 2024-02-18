import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Payment } from "mercadopago";

import client from "@/app/lib/mercadopago";
import axiosConfig from "@/app/lib/config";
import { modelStrapiOrder } from "@/app/utils/mercadopago";

export async function POST(req) {
  const headersList = headers();
  const xSign = headersList
    .get("x-signature")
    ?.split(",")
    ?.map((item) => item.split("="));

  if (!xSign) return NextResponse.json("Unauthorized", { status: 401 });

  const searchParams = req.nextUrl.searchParams;

  const body = await req.json();

  try {
    if (searchParams.get("type") === "payment") {
      const payment_id = body?.data?.id || searchParams.get("data.id");
      const payment = new Payment(client);

      const paymentData = await payment.get({
        id: Number(payment_id),
      });

      const userId = paymentData?.metadata?.strapi_user_id;
      const products = paymentData?.additional_info?.items;
      const total = paymentData?.transaction_amount;

      const order_id_mp = paymentData?.order?.id;
      const status = paymentData?.status;
      const status_detail = paymentData?.status_detail;
      const external_reference = paymentData?.external_reference;

      const strapiBody = modelStrapiOrder({ userId, products, total });

      const response = await axiosConfig.post("/orders", {
        data: {
          ...strapiBody,
          payment_id,
          order_id_mp,
          status,
          status_detail,
          external_reference,
        },
      });

      return NextResponse.json(response.statusText, {
        status: response.status,
      });
    }
  } catch (error) {
    console.error("[NOTIFY_ERROR]: ", error);
    return NextResponse.json(error);
  }

  return NextResponse.json("ok", { status: 200 });
}
