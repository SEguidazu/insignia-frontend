import axios from "axios";

const API_URL = process.env.STRAPI_API;
const STRAPI_KEY = process.env.STRAPI_API_KEY;

const instance = axios.create({
  baseURL: `${API_URL}/api`,
});

instance.defaults.headers.common["Authorization"] = `Bearer ${STRAPI_KEY}`;

export default instance;
