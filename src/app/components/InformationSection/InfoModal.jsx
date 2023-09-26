"use client";

import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function InfoModal({
  title = "Titulo",
  className = "",
  modalContent,
  children,
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className={className}>
        {children}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="pt-10 text-4xl font-medium">
                {title}
              </ModalHeader>
              <ModalBody className="pb-10">{modalContent}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
