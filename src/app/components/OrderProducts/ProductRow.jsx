"use client";

import Image from "next/image";

import { formatNumber } from "@/app/utils/formatNumbers";

export default function ProductRow(product) {
  return (
    product && (
      <tr
        id={`product-${product?.id}`}
        className="border-b-1 border-main_stroke"
      >
        <td className="py-4">
          <div className="flex justify-start items-center gap-x-5 ">
            {!!product.picture_url ? (
              <Image
                src={product.picture_url}
                width={80}
                height={55}
                className="h-[55px] rounded-lg object-cover"
                alt=""
              />
            ) : (
              <div className="w-[80px] h-[55px] rounded-lg bg-black"></div>
            )}

            <h3 className="text-main text-lg">{product?.title}</h3>
          </div>
        </td>
        <td>
          <span className="text-lg text-main">
            ${formatNumber(product?.unit_price)}
          </span>
        </td>
        <td>
          <span className="w-8 h-8 text-lg text-black text-center">
            {product.quantity}
          </span>
        </td>
        <td>
          <span className="text-xl text-main">
            ${formatNumber(product.unit_price * product.quantity)}
          </span>
        </td>
      </tr>
    )
  );
}
