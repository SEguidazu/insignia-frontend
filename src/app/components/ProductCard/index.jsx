"use client";

import Image from "next/image";
import Link from "next/link";
import Label from "@/app/components/Label";
import AddCartModal from "@/app/components/AddCartModal";

export default function ProductCard(product) {
  return (
    <article className="max-w-[230px] w-full p-2.5 rounded-xl bg-light hover:drop-shadow-lg ease-out">
      <Link href={`/product/${product.slug}`}>
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
            <Label
              isSticky={!!product.images}
              className="bg-failure text-white"
            >
              Sin stock
            </Label>
          )}
        </figure>
        <p className="text-lg font-bold leading-4 mb-2">${product?.price}</p>
        <h3 className="text-md text-main mb-8">{product?.name}</h3>
      </Link>
      <AddCartModal product={product} />
    </article>
  );
}
