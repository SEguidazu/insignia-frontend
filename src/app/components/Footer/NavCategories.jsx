"use client";

import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/react";

export default function NavCategories({ catalogMenu = [] }) {
  const onPressHandler = (event) => {
    console.log(event.target.getAttribute("data-path"));
  };

  return (
    <Listbox id="footer-category_list" aria-label="Listado de Categorías">
      {catalogMenu?.map(
        ({ id, title, path, items = [], ...rest }) =>
          items.length > 0 && (
            <ListboxSection
              key={id}
              title={title}
              className="text-base text-secondary_link italic capitalize"
            >
              {items.map(({ id, title, path }) => (
                <ListboxItem
                  onPress={onPressHandler}
                  key={id}
                  title={title}
                  aria-label={title}
                  data-path={path}
                  className="text-base text-white not-italic"
                />
              ))}
            </ListboxSection>
          )
      )}
    </Listbox>
  );
}
