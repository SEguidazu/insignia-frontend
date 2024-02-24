import { SuccessIcon, FailureIcon, WarningIcon } from "@/assets/icons";

export function modelBody({ products, user }) {
  const mappedProducts = products?.map((product) => ({
    id: product.id,
    title: product.name,
    picture_url: product.images?.[0].url,
    description: product.description,
    quantity: product.qty,
    unit_price: product.price,
  }));

  if (!user?.id) return { products: mappedProducts, payer: undefined };

  return { products: mappedProducts, payerId: user.id };
}

export function modelStrapiOrder({ userId, products, total }) {
  let body = {};

  if (userId) body = { ...body, users_permissions_user: { id: userId } };

  if (products && Array.isArray(products)) {
    const description = products
      .reduce(
        (message, { id, title, quantity, unit_price }) =>
          message.concat(
            "\n",
            `ID: _${id}_ **${title}** > Unidades: **${quantity}** > Precio Unitario: **${unit_price}**`
          ),
        `# Descripcion de la orden\n`
      )
      .concat("\n", `\n## TOTAL: _${total}_`);

    const modelProducts = products.map(({ id }) => ({ id }));

    body = { ...body, description, products: modelProducts };
  }

  return body;
}

export const PaymentStatus = Object.freeze({
  pending: "El pago esta pendiente",
  approved: "El pago fue aprobado",
  authorized: "El pago fue autorizado",
  in_process: "El pago esta en proceso",
  in_mediation: "El pago esta en mediación",
  rejected: "El pago fue rechazado",
  cancelled: "El pago fue cancelado",
  refunded: "El pago fue reembolsado",
  charged_back: "Se ha realizado un contracargo en el medio de pago",
});

export const PaymentText = Object.freeze({
  accredited: "Se ha acreditado el pago correctamente.",
  pending_contingency:
    "El pago se esta procesando, se le estará notificando cuando este finalice.",
  pending_review_manual:
    "El estado del pago esta 'en proceso', se le estará notificando cuando se finalice el proceso.",
  cc_rejected_bad_filled_date:
    "Los datos de la tarjeta han sido incorrectos, revise el formulario e inténtelo a la brevedad.",
  cc_rejected_bad_filled_other:
    "Los datos de la tarjeta han sido incorrectos, revise el formulario e inténtelo a la brevedad.",
  cc_rejected_bad_filled_security_code:
    "Los datos de la tarjeta han sido incorrectos, revise el formulario e inténtelo a la brevedad.",
  cc_rejected_blacklist:
    "Por problemas de seguridad, el pago ha sido rechazado.",
  cc_rejected_call_for_authorize:
    "Por problemas de seguridad, el pago ha sido rechazado.",
  cc_rejected_card_disabled:
    "La tarjeta utilizada esta inactiva, comuníquese con su proveedor e inténtelo nuevamente.",
  cc_rejected_duplicated_payment:
    "La transacción esta duplicada. Si ha realizado un pago recientemente, espere a que se actualice su estado.",
  cc_rejected_high_risk:
    "Por problemas de seguridad, el pago ha sido rechazado.",
  cc_rejected_insufficient_amount:
    "El pago ha sido rechazado por fondos insuficientes.",
  cc_rejected_invalid_installments:
    "Ha seleccionado una cantidad inválida de cuotas.",
  cc_rejected_max_attempts: "Ha excedido el numero de intentos.",
  cc_rejected_other_reason:
    "Tuvimos un problema con el proceso. Inténtelo nuevamente a la brevedad.",
});
