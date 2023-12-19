"use client";

import Image from "next/image";
import Link from "next/link";
import Label from "@/app/components/Label";
import AddCartModal from "@/app/components/AddCartModal";

import { Button } from "@nextui-org/react";
import { HeartIconLight } from "@/assets/icons";

export default function ProductCard({
  product,
  haveFavoriteButton = false,
  toggleFavoriteHandler = (e) => {},
}) {
  return (
    <article className="max-w-[230px] w-full p-2.5 rounded-xl bg-light hover:drop-shadow-lg ease-out relative">
      <Link href={`/product/${product.slug}`}>
        <picture className="relative">
          {!!product.images ? (
            <Image
              src={`http://127.0.0.1:1337${product.images[0].url}`}
              width={180}
              height={180}
              className="h-[180px] rounded-lg object-cover mx-auto mb-6"
              alt=""
            />
          ) : (
            <div
              className="w-[180px] h-[180px] rounded-lg bg-black mx-auto mb-6"
              tabIndex={-1}
            />
          )}
          {product?.stock === 0 && (
            <Label className="bg-failure text-white" isSticky>
              Sin stock
            </Label>
          )}
        </picture>
        <p className="text-lg font-old leading-4 mb-2">${product?.price}</p>
        <h3 className="text-md text-main mb-8">{product?.name}</h3>
      </Link>
      {haveFavoriteButton && (
        <Button
          className="min-w-0 w-[38px] h-[38px] p-0 bg-secondary rounded-md shadow-inner absolute top-2.5 right-2.5 hover:!opacity-100"
          onPress={toggleFavoriteHandler(product?.product_id)}
        >
          <HeartIconLight isFilled={product?.isFavorite} />
        </Button>
      )}
      <AddCartModal product={product} />
    </article>
  );
}
