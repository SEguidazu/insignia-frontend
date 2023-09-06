import Image from "next/image";
import Link from "next/link";

import CatalogPopover from "@/app/components/Header/CatalogPopover";
import Search from "@/app/components/Header/Search";
import ProfilePopover from "@/app/components/Header/ProfilePopover";
import LogoInsignia from "@/assets/LogoInsignia.svg";
import { CartIcon } from "@/assets/icons";

export default function Header() {
  return (
    <header className="shadow-lg">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/">
          <Image src={LogoInsignia} alt="Insigia" priority />
        </Link>

        <CatalogPopover />

        <Search />

        <CartIcon />

        <ProfilePopover />
      </div>
    </header>
  );
}
