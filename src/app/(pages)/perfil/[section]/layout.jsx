import Link from "next/link";

import {
  BoxedCheckIconLight,
  HeartIconLight,
  UserIconLight,
} from "@/assets/icons";

export default async function PerfilLayout({ children, params }) {
  const link_style = "inline-flex justify-center items-center gap-x-4";

  return (
    <main className="max-w-7xl mx-auto grid grid-rows-[auto_1fr] lg:grid-rows-1 lg:grid-cols-[300px_auto] gap-5 mb-12 px-2">
      <nav id="menu-perfil" className="p-6 bg-white rounded-2xl">
        <h1 className="text-2xl lg:text-3xl text-main font-medium mb-4 pb-2 lg:pb-6 border-b-1 border-main_stroke">
          Mi perfil
        </h1>
        <ul>
          <li className="text-base lg:text-lg mb-2 lg:mb-4">
            <Link
              href="/perfil/datos"
              className={`${link_style} ${
                params.section === "datos" ? "font-medium" : ""
              }`}
              aria-current={params.section === "datos"}
            >
              <UserIconLight />
              <span className="pt-0.5">Mis datos</span>
            </Link>
          </li>
          <li className="text-base lg:text-lg mb-2 lg:mb-4">
            <Link
              href="/perfil/compras"
              className={`${link_style} ${
                params.section === "compras" ? "font-medium" : ""
              }`}
              aria-current={params.section === "compras"}
            >
              <BoxedCheckIconLight />
              <span className="pt-0.5">Mis compras y pedidos</span>
            </Link>
          </li>
          <li className="text-base lg:text-lg mb-2 lg:mb-4">
            <Link
              href="/perfil/favoritos"
              className={`${link_style} ${
                params.section === "favoritos" ? "font-medium" : ""
              }`}
              aria-current={params.section === "favoritos"}
            >
              <HeartIconLight />
              <span className="pt-0.5">Favoritos</span>
            </Link>
          </li>
        </ul>
      </nav>

      {children}
    </main>
  );
}
