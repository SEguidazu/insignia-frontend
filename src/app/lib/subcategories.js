import fetchConfig from "@/app/lib/config";

export const getSubategories = async (props) => {
  const query = !!props?.withImages ? "?populate=image" : "";
  return await fetchConfig(`/subcategories${query}`, {
    method: "GET",
    cache: "no-store",
  })
    .then((response) => response.json())
    .catch((e) => console.error("[ERROR_SUBCATEGORIES]", e));
};

export const getSubcategoriesByCategory = async (slug) => {
  return await fetchConfig(
    `/subcategories?filters[category][slug][$eq]=${slug}`,
    { method: "GET", cache: "no-store" }
  )
    .then((response) => response.json())
    .catch((e) => console.error("[ERROR_SUBCATEGORIES_BY_CATEGORY]", e));
};
