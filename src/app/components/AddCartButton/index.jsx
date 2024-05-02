"use client";

import { useState } from "react";
import { useCartStore } from "@/app/store/cart";

import { Button, ButtonGroup } from "@nextui-org/react";
import { CartIconLight } from "@/assets/icons";

export default function AddCartButton({
  hasQtyHandler = false,
  product = null,
  ...props
}) {
  const addProduct = useCartStore((state) => state.addProduct);
  const getProductQtyInCart = useCartStore(
    (state) => state.getProductQtyInCart
  );
  const [qty, setQty] = useState(1);

  return (
    <div className="flex items-center flex-wrap gap-5">
      {hasQtyHandler && (
        <ButtonGroup>
          <Button
            className="min-w-0 w-10 text-xl text-black border-r-0 border-black"
            variant="bordered"
            onPress={(e) => {
              if (qty > 1) setQty(qty - 1);
            }}
          >
            -
          </Button>
          <span className="w-10 h-10 text-lg text-black text-center leading-[2.2] border-y-2 border-black">
            {qty}
          </span>
          <Button
            className="min-w-0 w-10 text-lg text-black border-l-0 border-black"
            variant="bordered"
            onPress={(e) => {
              setQty(qty + 1);
            }}
            isDisabled={product?.stock === qty + getProductQtyInCart(product)}
          >
            +
          </Button>
        </ButtonGroup>
      )}
      <Button
        className={`bg-black text-base text-white ${
          hasQtyHandler ? "w-40" : "w-full"
        }`}
        radius="sm"
        endContent={!hasQtyHandler && <CartIconLight />}
        onPress={(e) => addProduct(product, qty)}
        isDisabled={product?.stock === getProductQtyInCart(product)}
      >
        Añadir al carrito
      </Button>
    </div>
  );
}
