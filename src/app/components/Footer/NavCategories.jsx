"use client";

import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/react";

export default function NavCategories({ catalogMenu = [] }) {
  return (
    <Listbox id="footer-category_list" aria-label="Listado de Categorías">
      {catalogMenu?.map(({ id, title, path, items = [] }) => (
        <ListboxSection
          key={id}
          title={title}
          className="text-base text-secondary_link italic capitalize"
        >
          {items.map(({ id, title, path }) => (
            <ListboxItem
              key={id}
              href={`/store/${path}`}
              title={title}
              aria-label={title}
              className="text-base text-white not-italic"
            />
          ))}
          <ListboxItem
            href={`/store/${path}`}
            title="Ver todos"
            aria-label="Ver todos"
            className="text-base text-white not-italic"
          />
        </ListboxSection>
      ))}
    </Listbox>
  );
}
