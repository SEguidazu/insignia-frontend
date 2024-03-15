"use client";

import {
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Listbox,
  ListboxSection,
  ListboxItem,
} from "@nextui-org/react";

import { BurgerIcon } from "@/assets/icons";

export default function CatalogModal({ catalogMenu = [] }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="h-full bg-transparent lg:h-unit-10 lg:bg-white lg:border-black lg:border-2 lg:rounded-lg font-bold"
        onPress={onOpen}
      >
        <BurgerIcon />
        <span className="hidden lg:inline">Catálogo</span>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="max-w-3xl w-full">
          {(onClose) => (
            <>
              <ModalHeader>Categorías</ModalHeader>
              <ModalBody className="py-8 px-10">
                <Listbox
                  id="header-category_list"
                  aria-label="Listado de Categorías"
                >
                  {catalogMenu?.map(({ id, title, path, items }) => (
                    <ListboxSection
                      key={id}
                      title={title}
                      className="font-bold capitalize"
                    >
                      {items.map(({ id, title, path }) => (
                        <ListboxItem
                          key={id}
                          href={`/store/${path}`}
                          title={title}
                          aria-label={title}
                        />
                      ))}
                      <ListboxItem
                        href={`/store/${path}`}
                        title="Ver todos"
                        aria-label="Ver todos"
                      />
                    </ListboxSection>
                  ))}
                </Listbox>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
