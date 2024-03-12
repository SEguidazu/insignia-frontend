import axiosConfig from "@/app/lib/config";

export const getSubategories = async (props) => {
  const query = !!props?.withImages ? "?populate=image" : "";
  return await axiosConfig
    .get(`/subcategories${query}`)
    .then((response) => response.data)
    .catch((e) => console.error("[ERROR_SUBCATEGORIES]", e));
};

export const getSubcategoriesByCategory = async (slug) => {
  return await axiosConfig
    .get(`/subcategories?filters[category][slug][$eq]=${slug}`)
    .then((response) => response.data)
    .catch((e) => console.error("[ERROR_SUBCATEGORIES_BY_CATEGORY]", e));
};
