import axiosConfig from "@/app/lib/config";

export const getCatalogMenu = async () => {
  return await axiosConfig
    .get("/navigation/render/1?type=TREE")
    .then((response) => response.data)
    .catch((e) => console.error("[ERROR_CATALOG_MENU]", e.cause));
};

export const getCategories = async ({ withImages = false }) => {
  const params = withImages ? "?populate=image" : "";
  return await axiosConfig
    .get(`/categories${params}`)
    .then((response) => response.data)
    .catch((e) => console.error("[ERROR_CATEGORIES]", e.cause));
};
