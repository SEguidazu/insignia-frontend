import axiosConfig from "@/app/lib/config";

export const getSlider = async ({ slider_id = "" }) => {
  return await axiosConfig
    .get(`/sliders?filters[slider_id][$eq]=${slider_id}&populate=images`)
    .then((response) => response.data)
    .catch((e) => console.error("[ERROR_SLIDER]", e.cause));
};
