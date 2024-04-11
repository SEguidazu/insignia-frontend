import fetchConfig from "@/app/lib/config";
import { OrderError } from "@/app/errors";

export const createOrder = async (values) => {
  try {
    const body = modelOrderValues(values);

    const data = await fetchConfig("/orders", { method: "POST", body });

    return data.json();
  } catch (error) {
    console.error("[CREATE_ORDER]:", error);
    throw new OrderError(
      error?.response?.data.error.message,
      error?.response?.data.error.details
    );
  }
};

const modelOrderValues = (values) => {
  const { user, cart, total, payment_data } = values;
  let body = {};

  if (user?.id) {
    body = { ...body, users_permissions_user: { id: user.id } };
  }

  if (Array.isArray(cart) && cart.length > 0 && total > 0) {
    const description = cart
      .reduce(
        (message, { product_id, name, qty }) =>
          message.concat("\n", `_${product_id}_ **${name}** X **${qty}**`),
        `# Descripcion de la orden\n`
      )
      .concat("\n", `\n## TOTAL: _${total}_`);

    const products = cart.map(({ id }) => ({ id }));

    body = {
      ...body,
      description,
      products,
    };
  }

  if (payment_data) {
    body = {
      ...body,
      ...payment_data,
    };
  }

  return { data: body };
};
