"use client";

import { Listbox, ListboxSection, ListboxItem, Link } from "@nextui-org/react";

export default function ContactInformation() {
  return (
    <Listbox aria-label="Información de contacto" className="max-w-min">
      <ListboxSection
        title="Insignia"
        className="text-base text-secondary_link italic"
      >
        <ListboxItem
          className="not-italic"
          textValue="insignia.mayorista@gmail.com"
        >
          <Link
            href="mailto:insignia.mayorista@gmail.com"
            target="_blank"
            className="text-base text-white hover:text-black"
          >
            insignia.mayorista@gmail.com
          </Link>
        </ListboxItem>
        <ListboxItem className="not-italic" textValue="+54 11 1234 5678">
          <Link
            href="tel:541161201072"
            target="_blank"
            className="text-base text-white hover:text-black"
          >
            +54 11 6120 1072
          </Link>
        </ListboxItem>
      </ListboxSection>
    </Listbox>
  );
}
