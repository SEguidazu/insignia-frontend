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

export default function CatalogModal({ catalogMenu }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // TODO: Manejar el routing de las categorias
  const onPressHandler = (event) => {
    console.log(event.target.getAttribute("data-path"));
  };

  return (
    <>
      <Button
        className="bg-white border-black border-2 rounded-lg font-bold"
        onPress={onOpen}
      >
        <BurgerIcon />
        Catálogo
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="max-w-3xl w-full">
          {(onClose) => (
            <>
              <ModalHeader>Categorías</ModalHeader>
              <ModalBody className="py-8 px-10">
                <Listbox
                  aria-label="Listado de Categorías"
                  className="grid grid-cols-4 gap-4"
                >
                  {catalogMenu?.map(({ id, title, path, items, ...rest }) => (
                    <ListboxSection
                      key={id}
                      title={title}
                      className="font-bold capitalize"
                    >
                      {items.map(({ id, title, path }) => (
                        <ListboxItem
                          onPress={onPressHandler}
                          key={id}
                          title={title}
                          aria-label={title}
                          data-path={path}
                        />
                      ))}
                      <ListboxItem
                        onPress={onPressHandler}
                        title="Ver todos"
                        aria-label="Ver todos"
                        data-path={path}
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
