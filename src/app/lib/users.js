import axiosConfig from "@/app/lib/config";
import { LoginError, RegistrationError } from "@/app/errors";

export const loginStrapi = async ({ identifier, password }) => {
  return await axiosConfig
    .post("/auth/local", { identifier, password })
    .then((response) => response.data)
    .catch(({ response }) => {
      throw new LoginError(
        response.data.error.message,
        response.data.error.details
      );
    });
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
      throw new RegistrationError(
        response.data.error.message,
        response.data.error.details
      );
    });
};

const modelRegisterValues = (values) => {
  return {
    username: values.username,
    password: values.password,
    fullname: values.fullname,
    email: values.email,
    whatsapp: values.whatsapp,
    addresses: {
      street: values.street,
      number: values.number,
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
