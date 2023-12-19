"use client";

import { Button } from "@nextui-org/react";

import { updateUserStrapi } from "@/app/lib/users";
import { useUserStore } from "@/app/store/user";

import { RedHeartIcon } from "@/assets/icons";

export default function AddFavoriteButton({ product, ...props }) {
  const user = useUserStore((state) => state.user);
  const isLoggedOut = useUserStore((state) => state.isLoggedOut);
  const setUserLoggedIn = useUserStore((state) => state.setUserLoggedIn);

  const favIndex = user?.favorite_products?.findIndex(
    (fav_prod) => fav_prod?.product_id === product?.product_id
  );

  const text =
    favIndex === -1 ? "Agregar a Favoritos" : "Eliminar de Favoritos";

  const toggleFavoriteHandler = async (event) => {
    let updatedFavoriteProducts;

    if (favIndex === -1) {
      updatedFavoriteProducts = [...user?.favorite_products, product];
    } else {
      updatedFavoriteProducts = user?.favorite_products?.filter(
        (prod) => prod?.product_id !== product?.product_id
      );
    }

    const updatedUser = await updateUserStrapi(
      { favorite_products: updatedFavoriteProducts },
      user?.jwt
    );

    if (updatedUser) setUserLoggedIn({ user: updatedUser, jwt: user?.jwt });
  };

  return (
    !isLoggedOut() && (
      <Button
        className="text-base text-black font-medium bg-white border-2"
        radius="sm"
        endContent={<RedHeartIcon />}
        onPress={toggleFavoriteHandler}
      >
        {text}
      </Button>
    )
  );
}
