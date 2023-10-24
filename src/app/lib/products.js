import axiosConfig from "@/app/lib/config";

export const getFeaturedProducts = async () => {
  return await axiosConfig
    .get("/products?filters[is_featured][$eq]=true&populate=images")
    .then((response) => response.data)
    .catch((e) => console.error("[ERROR_FEATURED_PRODUCTS]", e));
};

export const getProducts = async (searchParams) => {
  const filters = Object.entries(searchParams)?.map(
    ([key, value], index) =>
      `filters[$and][${index}][${key}][slug][$eq]=${value}`
  );

  const params = filters.length > 0 ? `&${filters.join("&")}` : "";

  return await axiosConfig
    .get(`/products?populate=images,category,subcategory${params}`)
    .then((response) => response.data)
    .catch((e) => console.error("[ERROR_PRODUCTS]", e.cause));
};
