import axios from "axios";

const API_URL = process.env.STRAPI_API;
const STRAPI_KEY = process.env.STRAPI_API_KEY;
axios.defaults.headers.common["Authorization"] = `Bearer ${STRAPI_KEY}`;

export const getSlider = async ({ slider_id = "" }) => {
  return await axios
    .get(
      `${API_URL}/api/sliders?filters[slider_id][$eq]=${slider_id}&populate=images`
    )
    .then((response) => response.data)
    .catch((e) => console.error("[ERROR_SLIDER]", e.cause));
};
