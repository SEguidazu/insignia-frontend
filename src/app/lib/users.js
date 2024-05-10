import axiosConfig from "@/app/lib/config";
import {
  LoginError,
  RegistrationError,
  UpdateUserError,
  EMAIL_NOT_CONFIRMED_ERROR_TEXT,
} from "@/app/errors";

export const loginStrapi = async ({ identifier, password }) => {
  try {
    const { data } = await axiosConfig.post("/auth/local", {
      identifier,
      password,
    });

    axiosConfig.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${data?.jwt}`;

    const { data: user } = await axiosConfig.get(
      "/users/me?populate=address,favorite_products"
    );

    return { user, jwt: data?.jwt };
  } catch (error) {
    if (
      error?.response?.data.error.message === EMAIL_NOT_CONFIRMED_ERROR_TEXT
    ) {
      throw new LoginError(
        "El email de su cuenta no está confirmado.",
        error?.response?.data.error.details
      );
    } else {
      throw new LoginError(
        "El email o la contraseña son invalidos.",
        error?.response?.data.error.details
      );
    }
  }
};

export const registerUserStrapi = async (values) => {
  const formValues = modelRegisterValues(values);

  return await axiosConfig
    .post("/users", {
      ...formValues,
      role: 1,
    })
    .then((response) => response.data)
    .catch(({ response }) => {
      console.error("[REGISTER_USER]: ", response);
      throw new RegistrationError(
        response.data.error.message,
        response.data.error.details
      );
    });
};

export const updateUserStrapi = async (values, jwt) => {
  try {
    axiosConfig.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

    const { data } = await axiosConfig.put("/user/me", { ...values });

    return data;
  } catch (error) {
    throw new UpdateUserError(
      error?.response.data.error.message,
      error?.response.data.error.details
    );
  }
};

const modelRegisterValues = (values) => {
  return {
    username: values.username,
    password: values.password,
    fullname: values.fullname,
    dni: values.dni,
    email: values.email,
    whatsapp: values.whatsapp,
    address: {
      street: values.street,
      number: values.number,
      apartment: values.apartment,
      floor: values.floor,
      city: values.city,
      postal_code: values.postal_code,
      province: values.province,
    },
  };
};

export const provinces = [
  "Buenos Aires",
  "Ciudad Autónoma de Buenos Aires",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán",
];
