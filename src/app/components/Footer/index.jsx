import Link from "next/link";
import Image from "next/image";

import Companies from "@/app/components/Footer/Companies";
import NavCategories from "@/app/components/Footer/NavCategories";
import ContactInformation from "@/app/components/Footer/ContactInformation";

import PaymentMethods from "@/assets/formas-pago.png";
import InstagramIcon from "@/assets/InstagramIcon.svg";

export default function Footer({ catalogMenu }) {
  return (
    <footer className="bg-black">
      <Companies />
      <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-sm grid md:grid-cols-3 grid-cols-1 grid-rows-auto gap-4 mx-auto pt-14 pb-6 border-b-1 border-main_hover">
        <div className="md:col-span-2 md:row-span-3 md:pr-14">
          <NavCategories catalogMenu={catalogMenu} />
        </div>
        <div className="md:inline flex justify-center">
          <ContactInformation />
        </div>
        <div className="md:inline flex justify-center">
          <figure className="max-w-[265px] border-4 border-mp_main rounded-md bg-main_bgcolor py-2 px-4">
            <Image src={PaymentMethods} alt="Metodos de pago" />
          </figure>
        </div>
        <div className="md:inline flex justify-center">
          <Link
            href="https://www.instagram.com/insignia_mayorista/"
            target="_blank"
            className="inline-flex"
            aria-label="¡Visita nuestra cuenta de Instagram!"
          >
            <Image src={InstagramIcon} alt="" />
          </Link>
        </div>
      </div>
      <div
        id="subfooter"
        className="xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-sm mx-auto py-8 px-3 text-white lg:text-left text-center"
      >
        <span>
          2023 <Link href="/">joyasinsignia.com.ar</Link>
        </span>
      </div>
    </footer>
  );
}
