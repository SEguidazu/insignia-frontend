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
          textValue="contacto@joyasinsignia.com.ar"
        >
          <Link
            href="mailto:contacto@joyasinsignia.com.ar"
            target="_blank"
            className="text-base text-white hover:text-black"
          >
            contacto@joyasinsignia.com.ar
          </Link>
        </ListboxItem>
        <ListboxItem className="not-italic" textValue="+54 11 1234 5678">
          <Link
            href="tel:541112345678"
            target="_blank"
            className="text-base text-white hover:text-black"
          >
            +54 11 1234 5678
          </Link>
        </ListboxItem>
      </ListboxSection>
    </Listbox>
  );
}
