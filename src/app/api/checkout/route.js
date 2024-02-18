import { Preference } from "mercadopago";
import { NextResponse } from "next/server";
import client from "@/app/lib/mercadopago";

const NEXT_URL = process.env.NEXT_URL;
const MP_NOTIFY_URL = process.env.MP_NOTIFY_URL;

export async function POST(req) {
  const { products, payerId } = await req.json();

  try {
    const preference = new Preference(client);
    const response = await preference.create({
      body: {
        items: [...products],
        auto_return: "approved",
        back_urls: {
          success: `${NEXT_URL}/payment-result`,
          failure: `${NEXT_URL}/payment-result`,
          pending: `${NEXT_URL}/payment-result`,
        },
        notification_url: `https://${MP_NOTIFY_URL}`,
        metadata: {
          strapi_user_id: payerId,
        },
      },
    });

    return NextResponse.json({ id: response.id }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
}
