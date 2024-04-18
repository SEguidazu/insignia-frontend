"use client";

import { useState } from "react";
import { useCartStore } from "@/app/store/cart";

import Image from "next/image";

import { Button, ButtonGroup } from "@nextui-org/react";

import useScreenSize from "@/app/hook/useScreenSize";

import { formatNumber } from "@/app/utils/formatNumbers";

export default function ProductRow({ product, beingEdited, updateEditedId }) {
  const { isXSscreen } = useScreenSize();

  const removeAllProducts = useCartStore((state) => state.removeAllProducts);

  const [qtyState, setQtyState] = useState(product.qty);

  const increaseQtyState = (e) => setQtyState(qtyState > 0 ? qtyState - 1 : 0);
  const decreaseQtyState = (e) =>
    setQtyState(qtyState === product.stock ? qtyState : qtyState + 1);

  return (
    product && (
      <tr
        id={`product-${product?.product_id}`}
        className="border-b-1 border-main_stroke"
      >
        <td className="py-5">
          <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-x-5 ">
            {!!product.images ? (
              <Image
                src={`${product.images[0].url}`}
                width={isXSscreen ? 132 : 192}
                height={isXSscreen ? 92 : 134}
                className="h-[92px] sm:h-[134px] rounded-lg object-cover mb-2 md:mb-[unset]"
                alt=""
              />
            ) : (
              <div className="w-[132px] sm:w-[192px] h-[92px] sm:h-[134px] rounded-lg bg-black mb-2 md:mb-[unset]"></div>
            )}

            <div className="md:h-[134px] inline-flex flex-col md:flex-row items-start md:items-center relative">
              <h3 className="text-main text-lg font-medium mb-1 md:mb-[unset]">
                {product?.name}
              </h3>
              <Button
                className="min-w-0 w-auto h-auto text-main text-base underline p-0 bg-transparent rounded-none md:absolute md:left-0 md:bottom-0"
                onClick={(e) => removeAllProducts(product)}
              >
                Eliminar
              </Button>
            </div>
          </div>
        </td>
        <td>
          <span className="hidden sm:inline text-xl text-main font-medium">
            ${formatNumber(product?.price)}
          </span>
        </td>
        <td>
          <span className="block sm:hidden text-xl text-main font-medium mb-2">
            <span className="text-sm font-normal">Precio:</span>
            <br />${formatNumber(product?.price * qtyState)}
          </span>
          {beingEdited === product?.product_id ? (
            <>
              <ButtonGroup>
                <Button
                  className="min-w-0 w-8 h-8 text-xl text-black border-r-0 border-black"
                  size="sm"
                  variant="bordered"
                  onClick={increaseQtyState}
                  isDisabled={qtyState <= 0}
                >
                  -
                </Button>
                <span className="w-8 h-8 text-lg text-black text-center leading-[1.6] border-y-2 border-black">
                  {qtyState}
                </span>
                <Button
                  className="min-w-0 w-8 h-8 text-lg text-black border-l-0 border-black"
                  size="sm"
                  variant="bordered"
                  onClick={decreaseQtyState}
                  isDisabled={product.stock === qtyState}
                >
                  +
                </Button>
              </ButtonGroup>
              <button
                className="block text-base text-black underline underline-offset-2 mt-2"
                onClick={(e) => updateEditedId(product, qtyState)}
              >
                Confirmar
              </button>
            </>
          ) : (
            <>
              <span className="hidden sm:inline text-xl text-black text-center">
                {product.qty}
              </span>
              <span className="inline sm:hidden text-xl text-black text-center">
                <span className="text-sm">Unidades:</span>
                <br />
                {product.qty}
              </span>
              <button
                className="text-base text-black underline underline-offset-2 ml-4"
                onClick={(e) => updateEditedId(product, product.qty)}
              >
                Editar
              </button>
            </>
          )}
        </td>
        <td className="hidden sm:table-cell">
          <span className="text-xl text-main font-medium">
            ${formatNumber(product.price * product.qty)}
          </span>
        </td>
      </tr>
    )
  );
}
