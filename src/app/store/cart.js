"use client";

import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const initialState = {
  cart: [],
  total: 0,
};

function isStockEnabled(product) {
  return product.stock > 0 && product.stock >= product.qty;
}

function addProduct(set, get, product) {
  const { cart } = get();

  const indexInCart = cart?.findIndex(
    (item) => item.product_id === product.product_id
  );

  if (indexInCart === -1)
    set((state) => ({
      cart: [...state.cart, { ...product, qty: 1 }],
      total: state.total + product.price,
    }));
  else if (isStockEnabled(cart[indexInCart]))
    set((state) => ({
      cart: state.cart.map((item) =>
        item.product_id === product.product_id
          ? { ...item, qty: item.qty + 1 }
          : item
      ),
      total: state.total + product.price,
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

export const useCartStore = create(
  devtools(
    persist(
      (set, get) => ({
        cart: initialState.cart,
        total: initialState.total,
        addProduct: (product) => addProduct(set, get, product),
        removeProduct: (product) => removeProduct(set, get, product),
        removeAllProducts: (product) => removeAllProducts(set, get, product),
        emptyCart: () => {
          set((state) => ({
            cart: initialState.cart,
            total: initialState.total,
          }));
        },
      }),
      { name: "cart" }
    )
  )
);
