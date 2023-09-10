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

export default function CatalogPopover({ catalogMenu }) {
  console.log(catalogMenu);

  return (
    <Popover placement="bottom" offset={10} showArrow>
      <PopoverTrigger>
        <Button className="bg-white border-black border-2 rounded-lg font-bold">
          <BurgerIcon />
          Cat&aacute;logo
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        {/* queda usar el catalogMenu para renderizar el menu */}
      </PopoverContent>
    </Popover>
  );
}
