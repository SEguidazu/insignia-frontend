import fetchConfig from "@/app/lib/config";

export const getRefundPolicy = async () => {
  return await fetchConfig("/refund-policy")
    .then((response) => response.json())
    .then(({ data }) => data.attributes)
    .catch((e) => console.error("[ERROR_REFUND_POLICY]", e));
};

export const getShippingPolicy = async () => {
  return await fetchConfig("/shipping-policy")
    .then((response) => response.json())
    .then(({ data }) => data.attributes)
    .catch((e) => console.error("[ERROR_SHIPPING_POLICY]", e));
};
