import axiosConfig from "@/app/lib/config";
import qs from "qs";

const slugFilters = ["category", "subcategory"];
const simpleFilters = ["genero"];
const nameFilter = "name";

export const getFeaturedProducts = async () => {
  return await axiosConfig
    .get("/products?filters[is_featured][$eq]=true&populate=images")
    .then((response) => response.data)
    .catch((e) => console.error("[ERROR_FEATURED_PRODUCTS]", e));
};

export const getProductBySlug = async (slug) => {
  return await axiosConfig
    .get(
      `/products?filters[slug][$eq]=${slug}&populate=images,category,subcategory`
    )
    .then((response) => response.data)
    .catch((e) => console.error("[ERROR_PRODUCT_BY_SLUG]", e));
};

export const getProducts = async (searchParams) => {
  const page = searchParams["page"] ?? 1;
  const filters = Object.entries(searchParams)?.reduce((acc, [key, value]) => {
    if (slugFilters.includes(key))
      return [
        ...acc,
        {
          [key]: {
            slug: {
              $in: value?.split(","),
            },
          },
        },
      ];
    if (simpleFilters.includes(key))
      return [
        ...acc,
        {
          [key]: {
            $in: value?.split(","),
          },
        },
      ];
    if (nameFilter === key)
      return [
        ...acc,
        {
          [key]: {
            $containsi: value,
          },
        },
      ];

    return acc;
  }, []);

  const query = qs.stringify(
    {
      populate: "images,category,subcategory",
      filters: {
        $and: [...filters],
      },
      pagination: {
        page,
        pageSize: 9,
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  return await axiosConfig
    .get(`/products?${query}`)
    .then((response) => response.data)
    .catch((e) => console.error("[ERROR_PRODUCTS]", e.cause));
};
