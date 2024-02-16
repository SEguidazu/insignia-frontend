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
  const mappedUser = {
    id: user.id,
    fullname: user.fullname,
    username: user.username,
    email: user.email,
  };

  return { products: mappedProducts, payer: mappedUser };
}
