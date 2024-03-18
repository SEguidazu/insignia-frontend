"use client";

import Link from "next/link";
import Image from "next/image";

import useScreenDetector from "@/app/hook/useScreenSize";

import { Skeleton } from "@nextui-org/react";

export default function HomeSection({ categories }) {
  const { isXSscreen } = useScreenDetector;

  return (
    categories && (
      <section
        id="categorias"
        className="flex flex-wrap lg:justify-between justify-evenly items-stretch gap-5 mb-9"
      >
        <h2 className="w-full text-2xl text-main font-bold shrink-0">
          Categorías
        </h2>
        {categories?.map(
          ({ category_id, name, slug, image = null }, index) =>
            index < 5 && (
              <article
                key={category_id}
                className="sm:max-w-[180px] max-w-[150px] w-full rounded-xl bg-light border-1 border-light drop-shadow hover:border-gray hover:drop-shadow-lg ease-out"
              >
                <Link
                  href={`/store/${slug}`}
                  className="w-full h-full p-4 pb-2 flex flex-col justify-center items-center gap-2"
                >
                  {!!image ? (
                    <Image
                      src={`${image.url}`}
                      width={isXSscreen ? 116 : 136}
                      height={isXSscreen ? 116 : 136}
                      alt={name}
                      className="rounded-xl"
                    />
                  ) : (
                    <Skeleton className="sm:w-[136px] w-[116px] sm:h-[136px] h-[116px] rounded-xl" />
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
