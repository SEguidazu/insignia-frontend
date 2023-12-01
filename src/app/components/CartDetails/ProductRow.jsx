"use client";

import { useCartStore } from "@/app/store/cart";
import Image from "next/image";
import { Button, ButtonGroup } from "@nextui-org/react";

export default function ProductRow(product) {
  const addProduct = useCartStore((state) => state.addProduct);
  const removeAllProducts = useCartStore((state) => state.removeAllProducts);
  const removeProduct = useCartStore((state) => state.removeProduct);

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
          <span className="text-lg text-main font-medium">
            ${product?.price}
          </span>
        </td>
        <td>
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
        </td>
        <td>
          <span className="text-xl text-main font-medium">
            ${product.price * product.qty}
          </span>
        </td>
      </tr>
    )
  );
}
