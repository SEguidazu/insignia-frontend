"use client";

import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const initialState = {
  cart: [],
  total: 0,
};

function isStockEnabled(product, qty) {
  if (product?.qty)
    return product.stock > 0 && product.stock >= product.qty + qty;

  return product.stock > 0 && product.stock > qty;
}

function addProduct(set, get, product, qty = 1) {
  const { cart } = get();

  const indexInCart = cart?.findIndex(
    (item) => item.product_id === product.product_id
  );

  if (indexInCart === -1)
    set((state) => ({
      cart: [...state.cart, { ...product, qty }],
      total: state.total + product.price * qty,
    }));
  else if (isStockEnabled(cart[indexInCart], qty))
    set((state) => ({
      cart: state.cart.map((item) =>
        item.product_id === product.product_id
          ? { ...item, qty: item.qty + qty }
          : item
      ),
      total: state.total + product.price * qty,
    }));
}

function removeProduct(set, get, product) {
  const { cart } = get();

  const indexInCart = cart?.findIndex(
    (item) => item.product_id === product.product_id
  );

  if (indexInCart !== -1) {
    if (cart[indexInCart].qty > 1)
      set((state) => ({
        cart: state.cart.map((item) =>
          item.product_id === product.product_id
            ? { ...item, qty: item.qty - 1 }
            : item
        ),
        total: state.total - product.price,
      }));
    else if (cart[indexInCart].qty === 1)
      set((state) => ({
        cart: state.cart.filter(
          (item) => item.product_id !== product.product_id
        ),
        total: state.total - product.price,
      }));
  }
}

function removeAllProducts(set, get, product) {
  const { cart } = get();

  const indexInCart = cart?.findIndex(
    (item) => item.product_id === product.product_id
  );

  if (indexInCart !== -1) {
    set((state) => ({
      cart: state.cart.filter((item) => item.product_id !== product.product_id),
      total:
        state.total -
        state.cart[indexInCart].qty * state.cart[indexInCart].price,
    }));
  }
}

function getProductQtyInCart(get, product) {
  const { cart } = get();

  const indexInCart = cart?.findIndex(
    (item) => item.product_id === product?.product_id
  );

  if (indexInCart === -1) return 0;

  return cart[indexInCart].qty;
}

function getMessageToSend(get) {
  const { cart, total } = get();

  const cartBody = cart?.map(
    (item) =>
      `${item?.qty} x *${item?.name}* [_${item?.product_id ?? item?.id}_]`
  );

  const body = encodeURIComponent(
    `Hola Insignia! Mi pedido es:\n\n${cartBody?.join(
      "\n"
    )}\n\nSubtotal: *$${total}*`
  );

  return body;
}

export const useCartStore = create(
  devtools(
    persist(
      (set, get) => ({
        cart: initialState.cart,
        total: initialState.total,
        addProduct: (product, qty = 1) => addProduct(set, get, product, qty),
        removeProduct: (product) => removeProduct(set, get, product),
        removeAllProducts: (product) => removeAllProducts(set, get, product),
        emptyCart: () => {
          set((state) => ({
            cart: initialState.cart,
            total: initialState.total,
          }));
        },
        getProductQtyInCart: (product) => getProductQtyInCart(get, product),
        getMessageToSend: () => getMessageToSend(get),
      }),
      { name: "cart" }
    )
  )
);
