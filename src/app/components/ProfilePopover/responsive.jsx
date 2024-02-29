"use client";

import Link from "next/link";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";

import {
  BoxedCheckIconLight,
  HeartIconLight,
  UserIconDark,
  UserIconLight,
  LoggedOutIcon,
} from "@/assets/icons";

export function PopoverDesktop({ user, setUserLoggedOut }) {
  return (
    <Popover placement="bottom-end" offset={10}>
      <PopoverTrigger>
        <Button className="min-w-0 w-auto p-3">
          <UserIconDark aria-label="Perfil" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 px-2 py-5">
        <div className="w-full flex justify-between px-4 mb-2">
          <p className="text-base text-secondary_link italic capitalize">
            Hola {user?.fullname}
          </p>
          <button
            className="text-base text-danger"
            onClick={() => setUserLoggedOut()}
          >
            Cerrar sesión
          </button>
        </div>
        <Listbox aria-label="Mi perfil">
          <ListboxItem
            className="text-base text-main"
            key="datos"
            as={Link}
            href="/perfil/datos"
            startContent={<UserIconLight />}
          >
            Mis datos
          </ListboxItem>
          <ListboxItem
            className="text-base text-main"
            key="compras"
            as={Link}
            href="/perfil/compras"
            startContent={<BoxedCheckIconLight />}
          >
            Mis compras y pedidos
          </ListboxItem>
          <ListboxItem
            className="text-base text-main"
            key="favoritos"
            as={Link}
            href="/perfil/favoritos"
            startContent={<HeartIconLight />}
          >
            Favoritos
          </ListboxItem>
        </Listbox>
      </PopoverContent>
    </Popover>
  );
}

export function PopoverMobile({ user, setUserLoggedOut }) {
  return (
    <div className="w-full">
      <p className="text-base text-secondary_link italic capitalize mb-5">
        Hola {user?.fullname}
      </p>
      <ul>
        <li>
          <Link
            href="/perfil/datos"
            className="flex justify-start items-center text-base text-main mb-3"
          >
            <UserIconLight className="mr-2" />
            Mis datos
          </Link>
        </li>
        <li>
          <Link
            href="/perfil/compras"
            className="flex justify-start items-center text-base text-main mb-3"
          >
            <BoxedCheckIconLight className="mr-2" />
            Mis compras y pedidos
          </Link>
        </li>
        <li>
          <Link
            href="/perfil/favoritos"
            className="flex justify-start items-center text-base text-main mb-3"
          >
            <HeartIconLight className="mr-2" />
            Favoritos
          </Link>
        </li>
      </ul>

      <button
        className="flex justify-start items-center text-base text-danger"
        onClick={() => setUserLoggedOut()}
      >
        <LoggedOutIcon className="mr-2" />
        Cerrar sesión
      </button>
    </div>
  );
}
