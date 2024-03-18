"use client";

import Link from "next/link";

import { Accordion, AccordionItem } from "@nextui-org/react";

import { ArrowRightIcon } from "@/assets/icons";

export default function CatalogSidebar({ catalogMenu = [] }) {
  return (
    <div className="mt-6 pt-6 border-t-1 border-main_stroke">
      <h3 className="text-lg text-main font-medium">Catálogo</h3>
      <Accordion className="" showDivider={false} isCompact>
        {catalogMenu?.map(({ id, title, path, items }) => (
          <AccordionItem
            key={`${id}-${title}-${path}`}
            aria-label={title}
            title={title}
            indicator={<ArrowRightIcon />}
          >
            <ul className="border-l-1 border-main_stroke">
              {items?.map(({ id, title, path }) => (
                <li key={`${id}-${title}-${path}`}>
                  <Link
                    className="block text-base text-main py-2 px-3"
                    href={`/store${path}`}
                  >
                    {title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  className="block text-base text-main py-2 px-3"
                  href={`/store${path}`}
                >
                  Ver todos
                </Link>
              </li>
            </ul>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
