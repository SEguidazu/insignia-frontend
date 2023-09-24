import axiosConfig from "@/app/lib/config";

export const getFeaturedProducts = async () => {
  return await axiosConfig
    .get("/products?filters[is_featured][$eq]=true&populate=images")
    .then((response) => response.data)
    .catch((e) => console.error("[ERROR_FEATURED_PRODUCTS]", e.cause));
};
