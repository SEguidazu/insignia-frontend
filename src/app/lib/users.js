import axiosConfig from "@/app/lib/config";

export const loginStrapi = async () => {
  return await axiosConfig
    .get("/products?filters[is_featured][$eq]=true&populate=images")
    .then((response) => response.data)
    .catch((e) => console.error("[ERROR_FEATURED_PRODUCTS]", e.cause));
};

export const registerUserStrapi = async (values) => {
  return await axiosConfig
    .post("/users", {
      ...values,
      role: 1,
    })
    .then((response) => response.data)
    .catch((e) => console.error("[ERROR_REGISTER_USER]", e.cause));
};
