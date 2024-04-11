import fetchConfig from "@/app/lib/config";

export const getCatalogNavigation = async () => {
  return await fetchConfig("/navigation/render/1?type=TREE", {
    method: "GET",
    cache: "no-store",
  })
    .then((response) => response.json())
    .catch((e) => console.error("[ERROR_CATALOG_NAVIGATION]", e));
};

export const getCategoryNavigation = async () => {
  return await fetchConfig(
    "/categories?filters[is_featured][$eq]=true&populate=image",
    { method: "GET", cache: "no-store" }
  )
    .then((response) => response.json())
    .catch((e) => console.error("[ERROR_CATEGORY_NAVIGATION]", e));
};

export const getCategories = async (props) => {
  const params = !!props?.withImages ? "?populate=image" : "";
  return await fetchConfig(`/categories${params}`, {
    method: "GET",
    cache: "no-store",
  })
    .then((response) => response.json())
    .catch((e) => console.error("[ERROR_CATEGORIES]", e));
};

export const getFilters = async () => {
  return Promise.allSettled([
    fetchConfig("/categories", { method: "GET", cache: "no-store" }),
    fetchConfig("/subcategories", { method: "GET", cache: "no-store" }),
  ])
    .then((results) =>
      results.map((result) =>
        result.status === "fulfilled"
          ? {
              status: result.status,
              ...result.value.json(),
            }
          : { status: result.status }
      )
    )
    .catch((e) => console.error("[ERROR_FILTERS]", e));
};
