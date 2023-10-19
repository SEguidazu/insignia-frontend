"use client";

import Image from "next/image";
import Label from "@/app/components/Label";
import AddCartButton from "@/app/components/AddCartButton";
import { useCartStore } from "@/app/store/cart";

export default function ProductCard(product) {
  const addProduct = useCartStore((state) => state.addProduct);

  return (
    <article className="max-w-[230px] w-full p-2.5 rounded-xl bg-light hover:drop-shadow-lg ease-out">
      <figure className="relative">
        {!!product.images && (
          <Image
            src={`http://127.0.0.1:1337${product.images[0].url}`}
            width={180}
            height={180}
            className="h-[180px] rounded-lg object-cover mx-auto mb-6"
            alt=""
          />
        )}
        {product?.stock === 0 && (
          <Label isSticky={!!product?.image} className="bg-failure text-white">
            Sin stock
          </Label>
        )}
      </figure>
      <p className="text-lg font-bold leading-4 mb-2">${product?.price}</p>
      <h3 className="text-md text-main mb-8">{product?.name}</h3>
      <AddCartButton
        onClick={(e) => addProduct(product)}
        isDisabled={product?.stock === 0}
      />
    </article>
  );
}
