import { headers } from "next/headers";
import { NextResponse } from "next/server";
import crypto from "crypto";
import client from "@/app/lib/mercadopago";

const MP_WEBHOOKS_KEY = process.env.MP_WEBHOOKS_KEY;
const MP_NOTIFY_URL = process.env.MP_NOTIFY_URL;

function verifySign({ id, type, ts }) {
  const template = `post;[${MP_NOTIFY_URL}];data.id=[data.id_url];type=[topic_url];user-agent:mercadopago webhook v1.0;[timestamp];action:[json_action];api_version:[json_apiversion];date_created:[json_datecreated_RFC3339];id:[id_json];live_mode:[livemode_json];type:[type_json];user_id:[userid_json];`;

  const cyphedSign = crypto
    .createHmac("sha256", MP_WEBHOOKS_KEY)
    .update(template)
    .digest("hex");

  return;
}

export async function POST(req) {
  // console.log("[NOTIFY POST | REQ]", req);
  const headersList = headers();
  const xSign = headersList
    .get("x-signature")
    ?.split(",")
    ?.map((item) => item.split("="));

  if (!xSign) return NextResponse.json("Unauthorized", { status: 401 });

  const searchParams = req.nextUrl.searchParams;
  console.log("[NOTIFY POST | searchParams]", searchParams);

  const [ts, v1] = xSign;

  const body = await req.json();
  console.log("[NOTIFY POST | body]", body);

  return NextResponse.json("ok", { status: 200 });
}

// post;[urlpath];data.id=[data.id_url];type=[topic_url];user-agent:mercadopago webhook v1.0;[timestamp];action:[json_action];api_version:[json_apiversion];date_created:[json_datecreated_RFC3339];id:[id_json];live_mode:[livemode_json];type:[type_json];user_id:[userid_json];
