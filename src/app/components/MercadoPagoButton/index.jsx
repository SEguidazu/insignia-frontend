"use client";

import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

import { Spinner } from "@nextui-org/react";
import { modelBody } from "@/app/utils/mercadopago";

const MP_PUBLIC_KEY = process.env.MP_PUBLIC_KEY;

export default function MercadoPagoButton({ products, user }) {
  const [loading, setLoading] = useState(true);
  const [preferenceId, setPreferenceId] = useState(undefined);

  useEffect(() => {
    initMercadoPago(MP_PUBLIC_KEY, { locale: "es-AR" });
  }, []);

  useEffect(() => {
    async function createLink() {
      try {
        setLoading(true);

        const body = modelBody({ products, user });

        if (body) {
          const { data } = await axios.post("/api/checkout", body);

          if (data.id) setPreferenceId(data.id);
        }
      } catch (error) {
        console.error("[MP_PREFERENCE_ID]:", error);
      } finally {
        setLoading(false);
      }
    }
    createLink();
  }, [products, user]);

  const onError = async (error) => {
    console.error("[WALLET_MP_ERROR]: ", error);
  };

  const WalletComponent = useMemo(() => {
    if (!preferenceId) return <Spinner size="sm" className="ml-2 mb-1" />;

    return (
      <Wallet
        initialization={{ preferenceId }}
        customization={{
          visual: { hideValueProp: true, buttonBackground: "black" },
        }}
        onError={onError}
      />
    );
  }, [preferenceId]);

  return !loading ? (
    WalletComponent
  ) : (
    <Spinner size="sm" className="ml-2 mb-1" />
  );
}
