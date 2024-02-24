"use client";

import ProductRow from "./ProductRow";

import { formatNumber } from "@/app/utils/formatNumbers";

export default function OrderProducts({ products, total }) {
  return (
    products?.length > 0 && (
      <table
        id="products-table-wrapper"
        className="max-w-3xl w-full mx-auto mb-12"
      >
        <thead>
          <tr className="h-12 border-b-1 border-main_stroke text-main text-base text-left">
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item) => (
            <ProductRow key={item.id} {...item} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td />
            <td />
            <th scope="row" className="pt-4">
              TOTAL:
            </th>
            <td className="pt-4 text-2xl text-main font-medium">
              ${formatNumber(total)}
            </td>
          </tr>
        </tfoot>
      </table>
    )
  );
}
