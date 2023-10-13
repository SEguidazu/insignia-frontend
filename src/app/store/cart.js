import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  items: [],
  total: 0,
};

export const useCartStore = create()(
  persist(
    (set) => ({
      cart: initialState,

      // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      // removeAllBears: () => set({ bears: 0 }),
    }),
    { name: "cart" }
  )
);
