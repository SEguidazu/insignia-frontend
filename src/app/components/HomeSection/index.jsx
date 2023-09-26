import Link from "next/link";
import Image from "next/image";

import { getCategories } from "@/app/lib/categories";

export default async function HomeSection() {
  const { results } = await getCategories();

  return (
    results && (
      <section
        id="categorias"
        className="flex flex-wrap justify-between items-stretch gap-5 mb-9"
      >
        <h2 className="w-full text-2xl text-main font-bold shrink-0">
          Categorías
        </h2>
        {results.map(
          ({ category_id, name, slug, image = null }, index) =>
            index < 5 && (
              <article
                key={category_id}
                className="max-w-[180px] w-full rounded-xl bg-light border-1 border-light drop-shadow hover:border-gray hover:drop-shadow-lg ease-out"
              >
                <Link
                  href={`/${slug}`}
                  className="w-full h-full p-4 pb-2 flex flex-col justify-center items-center gap-2"
                >
                  {image && (
                    <Image
                      src={`http://127.0.0.1:1337${image.url}`}
                      width={136}
                      height={136}
                      alt={name}
                    />
                  )}
                  <h3 className="text-base text-main">{name}</h3>
                </Link>
              </article>
            )
        )}
      </section>
    )
  );
}
