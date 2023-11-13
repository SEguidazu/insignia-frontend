import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  username: undefined,
  name: undefined,
  email: undefined,
  address: undefined,
  whatsapp: undefined,
  is_retailer: undefined,
  jwt: undefined,
};

export const useUserStore = create()(
  persist(
    (set) => ({
      user: initialState,
      setUserLoggedIn: ({ jwt, user }) =>
        set((state) => ({
          user: {
            ...state.user,
            username: user.username,
            name: user.name,
            email: user.email,
            address: user.address,
            whatsapp: user.whatsapp,
            is_retailer: user.is_retailer,
            jwt: jwt,
          },
        })),
      setUserLoggedOut: () => set((state) => ({ user: initialState })),
    }),
    { name: "auth" }
  )
);
