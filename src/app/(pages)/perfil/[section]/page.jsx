"use client";

import { useUserStore } from "@/app/store/user";
import useStore from "@/app/hook/useStore";

import { redirect } from "next/navigation";

import ProfileUserData from "@/app/components/ProfileComponents/userData";
import ProfileOrders from "@/app/components/ProfileComponents/orders";
import ProfileFavorites from "@/app/components/ProfileComponents/favorites";

const SECTIONS = {
  datos: "datos",
  compras: "compras",
  favoritos: "favoritos",
};

export default function PerfilPage({ params }) {
  const user = useStore(useUserStore, (state) => state.user) ?? {};
  const isLoggedOut = useStore(useUserStore, (state) => state.isLoggedOut);

  if (isLoggedOut) redirect("/");
  if (params?.section === SECTIONS.datos)
    return <ProfileUserData user={user} />;
  if (params?.section === SECTIONS.compras) return <ProfileOrders />;
  if (params?.section === SECTIONS.favoritos)
    return <ProfileFavorites user={user} />;
}
