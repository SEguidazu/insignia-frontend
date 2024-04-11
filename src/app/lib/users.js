import fetchConfig from "@/app/lib/config";
import { LoginError, RegistrationError, UpdateUserError } from "@/app/errors";

export const loginStrapi = async ({ identifier, password }) => {
  try {
    const auth = await fetchConfig("/auth/local", {
      method: "POST",
      body: {
        identifier,
        password,
      },
    });

    const { jwt } = auth.json();

    const response = await fetchConfig(
      "/users/me?populate=address,favorite_products",
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        method: "GET",
      }
    );

    const user = response.json();

    return { user, jwt };
  } catch (error) {
    throw new LoginError(
      error?.response?.data.error.message,
      error?.response?.data.error.details
    );
  }
};

export const registerUserStrapi = async (values) => {
  const formValues = modelRegisterValues(values);

  return await fetchConfig("/users", {
    method: "POST",
    body: {
      ...formValues,
      role: 1,
    },
  })
    .then((response) => response.json())
    .catch(({ response }) => {
      throw new RegistrationError(
        response.data.error.message,
        response.data.error.details
      );
    });
};

export const updateUserStrapi = async (values, jwt) => {
  try {
    const response = await fetchConfig("/user/me", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      method: "PUT",
      body: {
        ...values,
      },
    });

    return response.json();
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
    email: values.email,
    whatsapp: values.whatsapp,
    address: {
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
