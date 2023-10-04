import { create } from "zustand";

const initialState = {
  user_id: undefined,
  name: undefined,
  email: undefined,
  address: undefined,
  whatsapp: undefined,
  is_retailer: false,
};

export const useUserStore = create((set) => ({
  user: initialState,
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
}));
