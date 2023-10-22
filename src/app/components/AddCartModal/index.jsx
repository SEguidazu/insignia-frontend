"use client";

import { useState } from "react";
import { useCartStore } from "@/app/store/cart";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Image,
  ButtonGroup,
  Button,
} from "@nextui-org/react";
import AddCartButton from "@/app/components/AddCartButton";

export default function AddCartModal({ product }) {
  const [qty, setQty] = useState(1);
  const addProduct = useCartStore((state) => state.addProduct);
  const getProductQtyInCart = useCartStore(
    (state) => state.getProductQtyInCart
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClose = () => {
    setQty(1);
    onClose();
  };

  return (
    <>
      <AddCartButton onPress={onOpen} />
      <Modal size="3xl" backdrop="blur" isOpen={isOpen} onClose={handleClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-2xl text-main">
                Añadir producto al carrito
              </ModalHeader>
              <ModalBody className="w-full grid grid-cols-[160px_1fr] grid-rows-[1fr_40px] gap-5 pb-4">
                <div className="h-[160px] rounded-lg bg-black row-span-2">
                  {!!product.images && (
                    <Image
                      src={`http://127.0.0.1:1337${product.images[0].url}`}
                      width={160}
                      height={160}
                      className="h-[160px] rounded-lg object-cover row-span-2"
                      alt=""
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-base text-main mb-3">{product.name}</h3>
                  <span className="text-lg text-main font-bold">
                    ${product.price}.-
                  </span>
                </div>
                <div className="inline-flex items-center">
                  <ButtonGroup>
                    <Button
                      className="min-w-0 w-10 text-xl text-black border-r-0 border-black"
                      variant="bordered"
                      onPress={(e) => {
                        if (qty > 1) setQty(qty - 1);
                      }}
                    >
                      -
                    </Button>
                    <span className="w-10 h-10 text-lg text-black text-center leading-[2.2] border-y-2 border-black">
                      {qty}
                    </span>

                    <Button
                      className="min-w-0 w-10 text-lg text-black border-l-0 border-black"
                      variant="bordered"
                      onPress={(e) => {
                        setQty(qty + 1);
                      }}
                      isDisabled={
                        product.stock === qty + getProductQtyInCart(product)
                      }
                    >
                      +
                    </Button>
                  </ButtonGroup>
                  <Button
                    className="w-40 bg-black text-base text-white ml-5"
                    onPress={(e) => addProduct(product, qty)}
                  >
                    Añadir al carrito
                  </Button>
                  <button
                    className="text-base text-black ml-14 underline underline-offset-2"
                    onClick={onClose}
                  >
                    Seguir comprando
                  </button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
