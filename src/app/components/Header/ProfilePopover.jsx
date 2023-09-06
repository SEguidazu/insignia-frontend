"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";

export default function ProfilePopover() {
  return (
    <Popover placement="bottom" offset={10} showArrow>
      <PopoverTrigger>
        <Button>Mi Perfil</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Listbox aria-label="Mi perfil">
          <ListboxItem>Mis datos</ListboxItem>
          <ListboxItem>Mis compras</ListboxItem>
          <ListboxItem>Favoritos</ListboxItem>
          <ListboxItem>Configuracion</ListboxItem>
        </Listbox>
      </PopoverContent>
    </Popover>
  );
}
