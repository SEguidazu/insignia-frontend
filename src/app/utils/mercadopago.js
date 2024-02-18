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
