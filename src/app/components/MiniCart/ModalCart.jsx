"use client";

import Link from "next/link";

import { useCartStore } from "@/app/store/cart";
import useStore from "@/app/hook/useStore";

import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import MiniCartProduct from "./MiniCartProduct";

import { CartIconDark, TrashIcon } from "@/assets/icons";

export default function ModalCart() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cart = useStore(useCartStore, (state) => state.cart);
  const emptyCart = useCartStore((state) => state.emptyCart);

  return (
    <>
      <Button onClick={onOpen} className="min-w-0 w-auto p-3">
        <CartIconDark aria-label="Carrito" />
      </Button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-2xl text-main">
                Mi Carrito
              </ModalHeader>
              <ModalBody>
                {cart?.length === 0 ? (
                  <p className="text-lg text-main">El carrito esta vacío.</p>
                ) : (
                  cart?.map((item) => (
                    <MiniCartProduct key={item.product_id} {...item} />
                  ))
                )}
              </ModalBody>
              <ModalFooter className="flex justify-between gap-x-2">
                <Button
                  href="/carrito"
                  as={Link}
                  className="w-full bg-black text-base text-white"
                >
                  Finalizar compra
                </Button>
                <Button
                  color="danger"
                  variant="light"
                  onPress={emptyCart}
                  className="text-base text-danger shrink-0"
                >
                  Vaciar
                  <TrashIcon className="block" />
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
