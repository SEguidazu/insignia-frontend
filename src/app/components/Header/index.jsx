"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import useScreenDetector from "@/app/hook/useScreenSize";

import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
} from "@nextui-org/react";

import CatalogModal from "@/app/components/Header/CatalogModal";
import CatalogSidebar from "@/app/components/Header/CatalogSidebar";
import Search from "@/app/components/Header/Search";
import ProfilePopover from "@/app/components/ProfilePopover";
import MiniCart from "@/app/components/MiniCart";

import LogoInsignia from "@/assets/LogoInsignia.svg";

export default function Header({ catalogMenu }) {
  const { isTablet } = useScreenDetector();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [portalContainer, setPortalContainer] = useState(undefined);

  useEffect(() => {
    setPortalContainer(
      document.getElementById("react-portal") ?? document.body
    );
  }, []);

  return (
    <>
      <Navbar
        position={!isTablet ? "sticky" : "sticky"}
        className={`bg-secondary ${
          isTablet ? "pt-4 pb-3 mb-0" : "py-4 shadow-lg mb-9"
        }`}
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        isBlurred={false}
      >
        {/* DESKTOP */}
        <NavbarContent className="hidden lg:flex lg:!justify-between lg:items-center">
          <Link href="/" aria-label="Pagina principal de Isnignia">
            <Image src={LogoInsignia} alt="" priority />
          </Link>

          <CatalogModal catalogMenu={catalogMenu} />

          <Search isTablet={isTablet} />
          <MiniCart />
          <ProfilePopover isTablet={isTablet} />
        </NavbarContent>

        {/* MOBILE */}
        <NavbarContent
          className="grid grid-cols-3 grid-rows-[4.2rem_auto] gap-x-4 gap-y-2 lg:hidden"
          justify="start"
        >
          <NavbarMenuToggle
            className="w-2/4"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          />

          <Link
            href="/"
            aria-label="Pagina principal de Isnignia"
            className={`mx-auto ${isMenuOpen ? "z-1" : "z-10"}`}
          >
            <Image src={LogoInsignia} alt="" priority />
          </Link>

          <div className="flex justify-end items-center">
            <MiniCart />
          </div>
        </NavbarContent>

        {/* MENU MOBILE */}
        <NavbarMenu portalContainer={portalContainer} className="top-[5.5rem]">
          <NavbarMenuItem>
            <ProfilePopover isTablet={isTablet} />

            <CatalogSidebar catalogMenu={catalogMenu} />
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>

      {isTablet && (
        <div className="bg-secondary shadow-lg px-6 pb-2 mb-9">
          <Search isTablet={isTablet} />
        </div>
      )}
    </>
  );
}
