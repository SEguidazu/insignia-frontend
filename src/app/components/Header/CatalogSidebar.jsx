"use client";

import { useRouter } from "next/navigation";

import { Accordion, AccordionItem } from "@nextui-org/react";

import { ArrowRightIcon } from "@/assets/icons";

export default function CatalogSidebar({ catalogMenu = [] }) {
  const router = useRouter();

  const onPressHandler = (event) => {
    const slugs = event.target.getAttribute("data-path");
    const [, category, subcategory] = slugs.split("/");

    if (!!category) {
      if (!!subcategory) {
        router.push(`/store?category=${category}&subcategory=${subcategory}`);
      } else {
        router.push(`/store?category=${category}`);
      }
    } else {
      router.push(`/store`);
    }
  };

  return (
    <div className="mt-6 pt-6 border-t-1 border-main_stroke">
      <h3 className="text-lg text-main font-medium">Catálogo</h3>
      <Accordion className="" showDivider={false} isCompact>
        {catalogMenu?.map(({ id, title, path, items, ...rest }) => (
          <AccordionItem
            key={`${id}-${title}-${path}`}
            aria-label={title}
            title={title}
            indicator={<ArrowRightIcon />}
          >
            <ul className="border-l-1 border-main_stroke">
              {items?.map(({ id, title, path }) => (
                <li key={`${id}-${title}-${path}`}>
                  <button
                    className="text-base text-main py-2 px-3"
                    data-path={path}
                    onClick={onPressHandler}
                  >
                    {title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  className="text-base text-main py-2 px-3"
                  data-path={path}
                  onClick={onPressHandler}
                >
                  Ver todos
                </button>
              </li>
            </ul>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
