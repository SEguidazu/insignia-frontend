import axiosConfig from "@/app/lib/config";

export const loginStrapi = async ({ identifier, password }) => {
  return await axiosConfig
    .post("/auth/local", { identifier, password })
    .then((response) => ({ data: response.data, error: null }))
    .catch(({ response }) => ({ data: null, error: response?.data?.error }));
};

export const registerUserStrapi = async (values) => {
  return await axiosConfig
    .post("/users", {
      ...values,
      role: 1,
    })
    .then((response) => response.data)
    .catch((e) => console.error("[ERROR_REGISTER_USER]", e.cause));
};
