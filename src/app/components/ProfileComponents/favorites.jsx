"use client";

import ProductCard from "@/app/components/ProductCard";

import { updateUserStrapi } from "@/app/lib/users";
import { useUserStore } from "@/app/store/user";

export default function ProfileFavorites({ user }) {
  const setUserLoggedIn = useUserStore((state) => state.setUserLoggedIn);

  const toggleFavoriteHandler = (product_id) => async (event) => {
    const updatedFavoriteProducts = user?.favorite_products?.filter(
      (product) => product?.product_id !== product_id
    );
    const updatedUser = await updateUserStrapi(
      { favorite_products: updatedFavoriteProducts },
      user?.jwt
    );
    if (updatedUser) setUserLoggedIn({ user: updatedUser, jwt: user?.jwt });
  };

  return (
    <section className="grid grid-cols-1 gap-x-6 p-6 bg-white rounded-2xl">
      {user?.favorite_products?.length === 0 ? (
        <h2 className="inline-block text-2xl text-main font-medium mb-4 pb-6 text-center">
          No tienes ningun producto seleccionado como Favorito.
        </h2>
      ) : (
        <ul className="grid grid-cols-3 gap-5 justify-items-center items-start">
          {user?.favorite_products?.map((product) => (
            <li key={product?.product_id}>
              <ProductCard
                product={{ ...product, isFavorite: true }}
                toggleFavoriteHandler={toggleFavoriteHandler}
                haveFavoriteButton
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
