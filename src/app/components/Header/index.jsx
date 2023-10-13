import Image from "next/image";
import Link from "next/link";

import CatalogModal from "@/app/components/Header/CatalogModal";
import Search from "@/app/components/Header/Search";
import ProfilePopover from "@/app/components/ProfilePopover";
import MiniCart from "@/app/components/MiniCart";
import LogoInsignia from "@/assets/LogoInsignia.svg";

export default async function Header({ catalogMenu }) {
  return (
    <header className="shadow-lg mb-9">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/" aria-label="Pagina principal de Isnignia">
          <Image src={LogoInsignia} alt="" priority />
        </Link>

        <CatalogModal catalogMenu={catalogMenu} />

        <Search />

        <MiniCart />

        <ProfilePopover />
      </div>
    </header>
  );
}
