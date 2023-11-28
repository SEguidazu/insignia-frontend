import axiosConfig from "@/app/lib/config";

export const getRefundPolicy = async () => {
  return await axiosConfig
    .get("/refund-policy")
    .then((response) => response?.data?.data?.attributes)
    .catch((e) => console.error("[ERROR_REFUND_POLICY]", e));
};

export const getShippingPolicy = async () => {
  return await axiosConfig
    .get("/shipping-policy")
    .then((response) => response?.data?.data?.attributes)
    .catch((e) => console.error("[ERROR_SHIPPING_POLICY]", e));
};
