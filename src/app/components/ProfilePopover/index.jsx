"use client";

import { useUserStore } from "@/app/store/user";
import useStore from "@/app/hook/useStore";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import Link from "next/link";
import LoginModal from "@/app/components/LoginModal";

import {
  BoxedCheckIconLight,
  HeartIconLight,
  UserIconDark,
  UserIconLight,
} from "@/assets/icons";

export default function ProfilePopover() {
  const user = useStore(useUserStore, (state) => state.user);
  const setUserLoggedOut = useUserStore((state) => state.setUserLoggedOut);

  return user?.username ? (
    <Popover placement="bottom-end" offset={10}>
      <PopoverTrigger>
        <Button className="min-w-0 w-auto p-3">
          <UserIconDark aria-label="Perfil" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 px-2 py-5">
        <div className="w-full flex justify-between px-4 mb-2">
          <p className="text-base text-secondary_link italic capitalize">
            Hola {user.fullname}
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
  ) : (
    <LoginModal />
  );
}
