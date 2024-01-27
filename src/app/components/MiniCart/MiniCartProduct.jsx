"use client";

import { useCartStore } from "@/app/store/cart";

import Image from "next/image";

import { Button, ButtonGroup } from "@nextui-org/react";

export default function MiniCartProduct(product) {
  const addProduct = useCartStore((state) => state.addProduct);
  const removeProduct = useCartStore((state) => state.removeProduct);

  return (
    product && (
      <article className="w-full grid grid-cols-[84px_1fr] grid-rows-1 gap-5 mb-3">
        {!!product.images ? (
          <Image
            src={`http://127.0.0.1:1337${product.images[0].url}`}
            width={84}
            height={84}
            className="h-[84px] rounded-lg object-cover"
            alt=""
          />
        ) : (
          <div className="h-[84px] rounded-lg bg-black" tabIndex={-1} />
        )}
        <div className="w-full flex flex-col justify-between items-start py-1">
          <p className="text-sm text-main">{product.name}</p>
          <div className="w-full flex flex-row justify-between items-center">
            <p className="text-lg text-main font-bold">${product.price}.-</p>
            <ButtonGroup>
              <Button
                className="min-w-0 w-8 h-8 text-xl text-black border-r-0 border-black"
                size="sm"
                variant="bordered"
                onClick={(e) => removeProduct(product)}
              >
                -
              </Button>
              <span className="w-8 h-8 text-base text-black text-center leading-[1.9] border-y-2 border-black">
                {product.qty}
              </span>
              <Button
                className="min-w-0 w-8 h-8 text-lg text-black border-l-0 border-black"
                size="sm"
                variant="bordered"
                onClick={(e) => addProduct(product)}
                isDisabled={product.stock === product.qty}
              >
                +
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </article>
    )
  );
}
