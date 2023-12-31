"use client";

import { useRouter } from "next/navigation";

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

    onOpenChange();
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
                  id="header-category_list"
                  aria-label="Listado de Categorías"
                >
                  {catalogMenu?.map(({ id, title, path, items, ...rest }) => (
                    <ListboxSection
                      key={id}
                      title={title}
                      className="font-bold capitalize"
                    >
                      {items.map(({ id, title, path }) => (
                        <ListboxItem
                          key={id}
                          onPress={onPressHandler}
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
