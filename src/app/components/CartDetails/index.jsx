"use client";

import { useState } from "react";
import { useCartStore } from "@/app/store/cart";
import useStore from "@/app/hook/useStore";
import ProductRow from "./ProductRow";

export default function CartDetails() {
  const cart = useStore(useCartStore, (state) => state.cart);
  const addProduct = useCartStore((state) => state.addProduct);

  const [beingEdited, setEditedId] = useState("");

  const updateEditedId = (product, updatedQty) => {
    if (beingEdited === "") return setEditedId(product.product_id);

    if (beingEdited === product.product_id) {
      addProduct(product, updatedQty - product.qty);
      setEditedId("");
    } else {
      setEditedId(product.product_id);
    }
  };

  return cart?.length === 0 ? (
    <>
      <h1>El carrito esta vacio!</h1>
    </>
  ) : (
    <table id="cart-wrapper" className="w-full mb-9">
      <thead>
        <tr className="h-12 border-b-1 border-main_stroke text-main text-base text-left">
          <th>Producto</th>
          <th className="w-60">Precio</th>
          <th className="w-60">Cantidad</th>
          <th className="w-44">Total</th>
        </tr>
      </thead>
      <tbody>
        {cart?.map((item) => (
          <ProductRow
            key={item.product_id}
            product={item}
            beingEdited={beingEdited}
            updateEditedId={updateEditedId}
          />
        ))}
      </tbody>
    </table>
  );
}
