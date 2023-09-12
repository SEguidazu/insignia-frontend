import axios from "axios";

const API_URL = process.env.STRAPI_API;
const STRAPI_KEY = process.env.STRAPI_API_KEY;
axios.defaults.headers.common["Authorization"] = `Bearer ${STRAPI_KEY}`;

export const getCatalogMenu = async () => {
  return await axios
    .get(`${API_URL}/api/navigation/render/1?type=TREE`)
    .then((response) => response.data)
    .catch((e) => console.error("[ERROR_CATALOG_MENU]", e.cause));
};
