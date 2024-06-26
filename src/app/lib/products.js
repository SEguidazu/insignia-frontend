import fetchConfig from "@/app/lib/config";
import qs from "qs";

const GENDER_KEY_FILTER = "genero";
const TYPE_KEY_FILTER = "tipo";
const NAME_KEY_FILTER = "name";

export const getFeaturedProducts = async () => {
  return await fetchConfig(
    "/products?filters[is_featured][$eq]=true&populate=images",
    { method: "GET", cache: "no-store" }
  )
    .then((response) => response.json())
    .catch((e) => console.error("[ERROR_FEATURED_PRODUCTS]", e));
};

export const getProductBySlug = async (slug) => {
  return await fetchConfig(
    `/products?filters[slug][$eq]=${slug}&populate=images,category,subcategory`,
    { method: "GET", cache: "no-store" }
  )
    .then((response) => response.json())
    .catch((e) => console.error("[ERROR_PRODUCT_BY_SLUG]", e));
};

export const getProductTypes = async () => {
  return await fetchConfig("/types", { method: "GET", cache: "no-store" })
    .then((response) => response.json())
    .catch((e) => console.error("[ERROR_PRODUCT_TYPES]", e));
};

export const getProducts = async ({ params, searchParams }) => {
  const page = searchParams["page"] ?? 1;

  const filterParams = params?.slug?.slice(0, 2) ?? [];

  const filterCategory = filterParams?.[0]
    ? [{ category: { slug: { $eq: filterParams[0] } } }]
    : [];

  const filterSubcategory = filterParams?.[1]
    ? [{ subcategory: { slug: { $eq: filterParams[1] } } }]
    : [];

  const filtersQuery = Object.entries(searchParams)?.reduce(
    (acc, [key, value]) => {
      if (GENDER_KEY_FILTER === key)
        return [
          ...acc,
          {
            [key]: {
              $in: value?.split(","),
            },
          },
        ];
      if (TYPE_KEY_FILTER === key)
        return [
          ...acc,
          {
            type: {
              type_id: {
                $in: value?.split(","),
              },
            },
          },
        ];
      if (NAME_KEY_FILTER === key)
        return [
          ...acc,
          {
            [key]: {
              $containsi: value,
            },
          },
        ];

      return acc;
    },
    []
  );

  const query = qs.stringify(
    {
      populate: "images,category,subcategory",
      filters: {
        $and: [...filtersQuery, ...filterCategory, ...filterSubcategory],
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

  return await fetchConfig(`/products?${query}`, {
    method: "GET",
    cache: "no-store",
  })
    .then((response) => response.json())
    .catch((e) => console.error("[ERROR_PRODUCTS]", e.cause));
};
