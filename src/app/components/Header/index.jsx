import Image from "next/image";
import Link from "next/link";

import CatalogModal from "@/app/components/Header/CatalogModal";
import Search from "@/app/components/Header/Search";
import ProfilePopover from "@/app/components/Header/ProfilePopover";
import LogoInsignia from "@/assets/LogoInsignia.svg";
import { CartIcon } from "@/assets/icons";
import { getCatalogMenu } from "@/app/lib/categories";

export default async function Header() {
  const catalogMenu = await getCatalogMenu();

  return (
    <header className="shadow-lg mb-9">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/" aria-label="Pagina principal de Isnignia">
          <Image src={LogoInsignia} alt="" priority />
        </Link>

        <CatalogModal catalogMenu={catalogMenu} />

        <Search />

        <CartIcon />

        <ProfilePopover />
      </div>
    </header>
  );
}
