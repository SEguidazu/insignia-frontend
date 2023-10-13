"use client";

import useHasHydrated from "@/app/hook/useHasHydrated";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

import { CartIconDark } from "@/assets/icons";

export default function MiniCart() {
  const hasHydrated = useHasHydrated();
  return (
    hasHydrated && (
      <Popover placement="bottom-end" offset={10}>
        <PopoverTrigger>
          <Button className="min-w-0 w-auto p-3">
            <CartIconDark aria-label="Carrito" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72 px-2 py-5"></PopoverContent>
      </Popover>
    )
  );
}
