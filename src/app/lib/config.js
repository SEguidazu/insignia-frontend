const API_URL = process.env.STRAPI_API;
const STRAPI_KEY = process.env.STRAPI_API_KEY;

function updateOptions(options) {
  const update = { ...options };

  update.headers = {
    ...update.headers,
    Authorization: `Bearer ${STRAPI_KEY}`,
  };

  return update;
}

export default function fetchConfig(url, options) {
  return fetch(`${API_URL}/api${url}`, updateOptions(options));
}
