"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Image,
} from "@nextui-org/react";

import AddCartButton from "@/app/components/AddCartButton";
import OpenModalButton from "./OpenModalButton";

import { formatNumber } from "@/app/utils/formatNumbers";

export default function AddCartModal({ product }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <OpenModalButton onPress={onOpen} isDisabled={product.stock === 0} />
      <Modal size="3xl" backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-2xl text-main">
                Añadir producto al carrito
              </ModalHeader>
              <ModalBody className="w-full grid grid-cols-1 sm:grid-cols-[160px_1fr] grid-rows-3 sm:grid-rows-2 lg:grid-rows-[1fr_40px] gap-5 pb-4">
                <div className="max-w-[160px] h-[160px] rounded-lg bg-black row-span-2 mx-auto sm:mx-[unset]">
                  {!!product.images && (
                    <Image
                      src={`${product.images[0].url}`}
                      width={160}
                      height={160}
                      className="h-[160px] rounded-lg object-cover row-span-2"
                      alt=""
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-lg sm:text-base text-main mb-3">
                    {product.name}
                  </h3>
                  <span className="text-2xl sm:text-lg text-main font-bold">
                    ${formatNumber(product.price)}.-
                  </span>
                </div>
                <div className="inline-flex flex-col lg:flex-row items-start lg:items-center">
                  <AddCartButton
                    product={product}
                    hasQtyHandler
                    callback={onClose}
                  />
                  <button
                    className="text-base text-black mt-4 lg:mt-0 lg:ml-14 underline underline-offset-2"
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
