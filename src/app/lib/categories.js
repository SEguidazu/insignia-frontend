import axiosConfig from "@/app/lib/config";

export const getCatalogMenu = async () => {
  return await axiosConfig
    .get("/navigation/render/1?type=TREE")
    .then((response) => response.data)
    .catch((e) => console.error("[ERROR_CATALOG_MENU]", e));
};

export const getCategories = async (props) => {
  const params = !!props?.withImages ? "?populate=image" : "";
  return await axiosConfig
    .get(`/categories${params}`)
    .then((response) => response.data)
    .catch((e) => console.error("[ERROR_CATEGORIES]", e));
};

export const getFilters = async () => {
  return Promise.allSettled([
    axiosConfig.get("/categories"),
    axiosConfig.get("/subcategories"),
  ])
    .then((results) =>
      results.map((result) =>
        result.status === "fulfilled"
          ? {
              status: result.status,
              ...result.value.data,
            }
          : { status: result.status }
      )
    )
    .catch((e) => console.error("[ERROR_FILTERS]", e));
};
