"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { BurgerIcon } from "@/assets/icons";

export default function CatalogPopover() {
  const categorias = [
    {
      id: "cat-1",
      name: "Categoria n1",
    },
    {
      id: "cat-2",
      name: "Categoria n2",
    },
    {
      id: "cat-3",
      name: "Categoria n3",
    },
    {
      id: "cat-4",
      name: "Categoria n4",
    },
    {
      id: "cat-5",
      name: "Categoria n5",
    },
    {
      id: "cat-6",
      name: "Categoria n6",
    },
  ];

  return (
    <Popover placement="bottom" offset={10} showArrow>
      <PopoverTrigger>
        <Button className="bg-white border-black border-2 rounded-lg font-bold">
          <BurgerIcon />
          Cat&aacute;logo
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Listbox items={categorias} aria-label="Categorias del catálogo">
          {(categoria) => (
            <ListboxItem key={categoria.id} variant="bordered">
              {categoria.name}
            </ListboxItem>
          )}
        </Listbox>
      </PopoverContent>
    </Popover>
  );
}
