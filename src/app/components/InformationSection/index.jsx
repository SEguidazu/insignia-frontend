import Link from "next/link";
import { WhatsappIcon } from "@/assets/icons";

export default function InformationSection() {
  return (
    <section
      id="info-section"
      className="w-full grid grid-cols-2 grid-rows-[230px_230px] gap-5"
    >
      <article
        id="consign"
        className="inline-flex justify-center items-center flex-col text-[#323232] rounded-2xl border-1 border-[#E4E7EE] bg-[#F3F4F5] drop-shadow hover:text-white hover:bg-[#323232] hover:drop-shadow-lg ease-out"
      >
        <h2 className="mb-4 text-4xl font-medium">Envío gratis</h2>
        <p className="text-base font-bold uppercase">A partir de los $15,000</p>
      </article>
      <article
        id="whatsapp"
        className="text-[#323232] rounded-2xl border-1 border-[#E4E7EE] bg-[#F3F4F5] drop-shadow hover:text-white hover:bg-[#25D366] hover:drop-shadow-lg ease-out"
      >
        <Link
          href="https://wa.me/+5491168460775?text=esunaprueba"
          target="_blank"
          className="w-full h-full inline-flex justify-center items-center flex-col"
        >
          <h2 className="mb-4 text-4xl font-medium">¿Dudas o consultas?</h2>
          <button className="w-80 inline-flex justify-center items-center gap-2  p-2 rounded-md text-white bg-[#25D366] ">
            <WhatsappIcon /> Escribinos por WhatsApp
          </button>
        </Link>
      </article>
      <article
        id="about_us"
        className="inline-flex justify-center items-center flex-col text-[#323232] rounded-2xl border-1 border-[#E4E7EE] bg-[#F3F4F5] drop-shadow hover:text-white hover:bg-[#323232] hover:drop-shadow-lg ease-out"
      >
        <h2 className="text-4xl font-medium">¿Quiénes somos?</h2>
      </article>
      <article
        id="faq"
        className="inline-flex justify-center items-center flex-col text-[#323232] rounded-2xl border-1 border-[#E4E7EE] bg-[#F3F4F5] drop-shadow hover:text-white hover:bg-[#323232] hover:drop-shadow-lg ease-out"
      >
        <h2 className="text-4xl font-medium">Preguntas frecuentes</h2>
      </article>
    </section>
  );
}
