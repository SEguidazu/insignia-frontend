import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const initialState = {
  id: undefined,
  username: undefined,
  fullname: undefined,
  email: undefined,
  whatsapp: undefined,
  address: undefined,
  favorite_products: undefined,
  is_retailer: undefined,
  jwt: undefined,
};

function setUserLoggedIn(set, user, jwt) {
  console.log("USER: ", user);
  set((state) => ({
    user: {
      ...state.user,
      ...user,
      jwt: jwt,
    },
  }));
}

function isLoggedOut(get) {
  const { user } = get();

  return !!(Object.keys(user).length === 0 || user?.id === undefined);
}

export const useUserStore = create()(
  devtools(
    persist(
      (set, get) => ({
        user: initialState,
        isLoggedOut: () => isLoggedOut(get),
        setUserLoggedIn: ({ user, jwt }) => setUserLoggedIn(set, user, jwt),
        setUserLoggedOut: () => set((state) => ({ user: initialState })),
      }),
      { name: "auth" }
    )
  )
);
