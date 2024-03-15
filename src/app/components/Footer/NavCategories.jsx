"use client";

import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/react";

export default function NavCategories({ catalogMenu = [] }) {
  return (
    <Listbox id="footer-category_list" aria-label="Listado de Categorías">
      {catalogMenu?.map(
        ({ id, title, items = [] }) =>
          items.length > 0 && (
            <ListboxSection
              key={id}
              title={title}
              className="text-base text-secondary_link italic capitalize"
            >
              {items.map(({ id, title, path }) => (
                <ListboxItem
                  key={id}
                  title={title}
                  aria-label={title}
                  href={`/store/${path}`}
                  className="text-base text-white not-italic"
                />
              ))}
            </ListboxSection>
          )
      )}
    </Listbox>
  );
}
