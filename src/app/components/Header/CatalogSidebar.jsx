"use client";

import { useRouter } from 'next/navigation'

import { Accordion, AccordionItem } from "@nextui-org/react";

import { ArrowRightIcon } from "@/assets/icons";

export default function CatalogSidebar({ catalogMenu = [], closeMobileMenu }) {
  const router = useRouter()

  const handleClickButton = (path) => {
    closeMobileMenu?.()
    router.push(`/store${path}`)
  }

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
                  <button
                    className="w-full text-left text-base text-main py-2 px-3"
                    onClick={(e) => handleClickButton(path)}
                    aria-label={`Ver ${title}`}
                  >
                    {title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  className="w-full text-left text-base text-main py-2 px-3"
                  onClick={(e) => handleClickButton(path)}
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
