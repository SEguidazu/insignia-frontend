import Link from "next/link";
import Companies from "@/app/components/Footer/Companies";
import NavCategories from "@/app/components/Footer/NavCategories";
import ContactInformation from "@/app/components/Footer/ContactInformation";

export default function Footer({ catalogMenu }) {
  return (
    <footer className="bg-black">
      <Companies />
      <div className="max-w-7xl grid grid-cols-3 grid-row-2 gap-4 mx-auto pt-14 pb-6 border-b-1 border-main_hover">
        <div className="col-span-2 row-span-2 pr-14">
          <NavCategories catalogMenu={catalogMenu} />
        </div>
        <div>
          <ContactInformation />
        </div>
        <div></div>
      </div>
      <div id="subfooter" className="max-w-7xl mx-auto py-8 px-3 text-white">
        <span>
          2023 <Link href="/">joyasinsignia.com.ar</Link>
        </span>
      </div>
    </footer>
  );
}
