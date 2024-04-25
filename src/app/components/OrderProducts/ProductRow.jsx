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
          <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-x-5 ">
            {!!product.picture_url ? (
              <Image
                src={`${product.picture_url}`}
                width={80}
                height={55}
                className="h-[55px] rounded-lg object-cover mb-2 md:mb-[unset]"
                alt=""
              />
            ) : (
              <div className="w-[80px] h-[55px] rounded-lg bg-black mb-2 md:mb-[unset]"></div>
            )}

            <h3 className="text-main text-lg">{product?.title}</h3>
          </div>
        </td>
        <td>
          <span className="hidden sm:inline text-lg text-main">
            ${formatNumber(product?.unit_price)}
          </span>
        </td>
        <td>
          <span className="block sm:hidden text-xl text-main font-medium mb-2">
            <span className="text-sm font-normal">Precio:</span>
            <br />${formatNumber(product?.unit_price)}
          </span>

          <span className="inline text-xl text-black text-center">
            <span className="sm:hidden text-sm">Unidades:</span>
            <span className="block sm:hidden" />
            {product.quantity}
          </span>
        </td>
        <td className="w-26 lg:w-44">
          <span className="text-xl text-main ">
            ${formatNumber(product.unit_price * product.quantity)}
          </span>
        </td>
      </tr>
    )
  );
}
