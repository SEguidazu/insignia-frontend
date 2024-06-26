"use client";

import { useUserStore } from "@/app/store/user";
import useStore from "@/app/hook/useStore";

import LoginModal from "@/app/components/LoginModal";
import { PopoverDesktop, PopoverMobile } from "./responsive";

export default function ProfilePopover({ isLGscreen, closeMobileMenu }) {
  const user = useStore(useUserStore, (state) => state.user);
  const setUserLoggedOut = useUserStore((state) => state.setUserLoggedOut);

  return user?.username ? (
    isLGscreen ? (
      <PopoverDesktop user={user} setUserLoggedOut={setUserLoggedOut} />
    ) : (
      <PopoverMobile user={user} setUserLoggedOut={setUserLoggedOut} />
    )
  ) : (
    <LoginModal closeMobileMenu={closeMobileMenu} />
  );
}
