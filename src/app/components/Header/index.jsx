import Image from "next/image";
import Link from "next/link";

import CatalogPopover from "@/app/components/Header/CatalogPopover";
import Search from "@/app/components/Header/Search";
import ProfilePopover from "@/app/components/Header/ProfilePopover";
import LogoInsignia from "@/assets/LogoInsignia.svg";
import { CartIcon } from "@/assets/icons";
import { getCatalogMenu } from "@/app/lib/categories";

export default async function Header() {
  const catalogMenu = await getCatalogMenu();

  return (
    <header className="shadow-lg">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/">
          <Image src={LogoInsignia} alt="Insigia" priority />
        </Link>

        <CatalogPopover catalogMenu={catalogMenu} />

        <Search />

        <CartIcon />

        <ProfilePopover />
      </div>
    </header>
  );
}
