"use client";

import { useState } from "react";
import { useCartStore } from "@/app/store/cart";

import Image from "next/image";

import { Button, ButtonGroup } from "@nextui-org/react";

import { formatNumber } from "@/app/utils/formatNumbers";

export default function ProductRow({ product, beingEdited, updateEditedId }) {
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
          <div className="flex justify-start items-center gap-x-5 ">
            {!!product.images ? (
              <Image
                src={`http://127.0.0.1:1337${product.images[0].url}`}
                width={192}
                height={134}
                className="h-[134px] rounded-lg object-cover"
                alt=""
              />
            ) : (
              <div className="w-[192px] h-[134px] rounded-lg bg-black"></div>
            )}

            <div className="h-[134px] inline-flex items-center relative">
              <h3 className="text-main text-lg font-medium">{product?.name}</h3>
              <Button
                className="min-w-0 w-auto h-auto text-main text-base underline p-0 bg-transparent rounded-none absolute left-0 bottom-0"
                onClick={(e) => removeAllProducts(product)}
              >
                Eliminar
              </Button>
            </div>
          </div>
        </td>
        <td>
          <span className="text-xl text-main font-medium">
            ${formatNumber(product?.price)}
          </span>
        </td>
        <td>
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
              <span className="text-xl text-black text-center">
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
        <td>
          <span className="text-xl text-main font-medium">
            ${formatNumber(product.price * product.qty)}
          </span>
        </td>
      </tr>
    )
  );
}
