import Link from "next/link";
import Image from "next/image";

import { getCategories } from "@/app/lib/categories";

export default async function HomeSection() {
  const { results } = await getCategories();

  console.log(results);
  return (
    results && (
      <section
        id="categorias"
        className="flex flex-wrap justify-between align-top gap-5 mb-9"
      >
        <h2 className="w-full text-2xl text-main font-bold shrink-0">
          Categorías
        </h2>
        {results.map(({ id, name, slug }) => (
          <article key={id} className="w-48 text-center">
            <Link href={`/${slug}`}>
              <Image alt={name} />
              <h3 className="text-base text-main">{name}</h3>
            </Link>
          </article>
        ))}
      </section>
    )
  );
}
