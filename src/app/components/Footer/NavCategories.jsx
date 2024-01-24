"use client";

import { useRouter } from "next/navigation";

import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/react";

export default function NavCategories({ catalogMenu = [] }) {
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
