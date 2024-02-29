"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useScreenDetector from "@/app/hook/useScreenSize";
import {
  Input,
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import { EyeSlashFilledIcon, EyeFilledIcon } from "@/assets/icons";

import { loginStrapi } from "@/app/lib/users";
import { useUserStore } from "@/app/store/user";

export default function LoginModal() {
  const { isTablet } = useScreenDetector();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const setUserLoggedIn = useUserStore((state) => state.setUserLoggedIn);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleLogin = async (formData) => {
    try {
      setLoading(true);
      const data = await loginStrapi({
        identifier: formData.login_email,
        password: formData.login_password,
      });

      if (data) setUserLoggedIn(data);
    } catch (error) {
      console.error(error);
      setErrorMessage("El email o la contraseña son invalidos.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = () => {
    setShowLoginForm(false);
    onOpenChange();
  };

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const loginForm = () => (
    <div className="px-10 py-6">
      <h2 className="mt-2 mb-8 text-2xl text-main_hover font-bold">
        Ingresá con tu email
      </h2>
      <form onSubmit={handleSubmit(handleLogin)}>
        <Input
          id="login-email"
          type="text"
          name="login-email"
          label="Email"
          variant="bordered"
          radius="sm"
          className="mb-4"
          isInvalid={
            errors?.login_email?.type === "required" || errorMessage?.length > 0
          }
          errorMessage={
            errors?.login_email?.type === "required" &&
            "El email es un campo requerido."
          }
          {...register("login_email", { required: true })}
        />
        <Input
          id="login-password"
          type={isPasswordVisible ? "text" : "password"}
          name="login-password"
          label="Contraseña"
          variant="bordered"
          radius="sm"
          className="mb-3"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          isInvalid={
            errors?.login_password?.type === "required" ||
            errorMessage?.length > 0
          }
          errorMessage={
            errors?.login_password?.type === "required" &&
            "La contraseña es un campo requerido."
          }
          {...register("login_password", { required: true })}
        />
        <p
          id="login_error"
          className={`text-base text-center text-danger ${
            errorMessage ? "" : "invisible"
          }`}
        >
          {errorMessage}
        </p>
        <Button
          type="submit"
          className="w-full bg-black text-base text-white mt-3 mb-4"
          isDisabled={loading}
        >
          Ingresar
        </Button>
      </form>
    </div>
  );

  const decisionForm = () => (
    <div className="px-10 py-6">
      <h2 className="mt-2 mb-12 text-2xl text-main_hover text-center font-bold">
        Ingresá a tu cuenta
      </h2>
      <Button
        className="w-full bg-black text-base text-white mb-4"
        onPress={() => setShowLoginForm(true)}
      >
        Ingresar
      </Button>
      <p className="text-sm text-secondary_link text-center mb-3">
        ¿Aún no tenés cuenta?
      </p>
      <Button
        className="w-full text-base text-black border-black"
        variant="bordered"
        as={Link}
        href="/registro"
        onPress={handleChange}
      >
        Registrate con tu email
      </Button>
    </div>
  );

  return (
    <>
      <Button
        className={`min-w-0 p-3 text-base text-main ${
          isTablet ? "w-full mt-2" : "w-auto"
        }`}
        onPress={onOpen}
      >
        Ingresar
      </Button>
      <Modal isOpen={isOpen} onOpenChange={handleChange}>
        <ModalContent>
          <ModalBody>{showLoginForm ? loginForm() : decisionForm()}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
