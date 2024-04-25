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
            <th className="table-cell sm:hidden">Mi pedido</th>
            <th className="hidden sm:table-cell">Producto</th>
            <th className="hidden sm:table-cell text-center w-32 lg:w-60">
              Precio
            </th>
            <th className="hidden sm:table-cell text-center w-32 lg:w-60">
              Cantidad
            </th>
            <th className="hidden sm:table-cell text-center w-24 lg:w-44">
              Total
            </th>
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
