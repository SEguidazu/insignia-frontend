import fetchConfig from "@/app/lib/config";

export const getSlider = async ({ slider_id = "" }) => {
  return await fetchConfig(
    `/sliders?filters[slider_id][$eq]=${slider_id}&populate=images`,
    { method: "GET", cache: "no-store" }
  )
    .then((response) => response.json())
    .catch((e) => console.error("[ERROR_SLIDER]", e.cause));
};
