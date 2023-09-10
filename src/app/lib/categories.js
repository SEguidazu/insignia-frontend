import axios from "axios";

const API_URL = process.env.STRAPI_API;
const STRAPI_KEY = process.env.STRAPI_API_KEY;
axios.defaults.headers.common["Authorization"] = `Bearer ${STRAPI_KEY}`;

export const getCatalogMenu = async () => {
  const menu = await axios.get(`${API_URL}/api/navigation/render/1?type=TREE`);
  return menu.data;
};
