"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { registerUserStrapi } from "@/app/lib/users";

export default function SignUpForm({}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (formData) => {
    const {
      username,
      password,
      email,
      name,
      whatsapp,
      street,
      number,
      province,
    } = formData;

    const user = await registerUserStrapi({
      username,
      password,
      email,
      name,
      whatsapp,
      address: `${street} ${number}, ${province}`,
    });

    if (user) console.log(user);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-lg text-main font-bold">
        <label className="block mb-3">Credenciales</label>
        <Input
          id="username"
          className="mb-4"
          placeholder="Usuario"
          variant="bordered"
          radius="sm"
          isInvalid={errors?.username?.type === "required"}
          errorMessage={
            errors?.username?.type === "required" &&
            "El usuario es un campo requerido."
          }
          {...register("username", { required: true })}
        />
        <Input
          id="password"
          placeholder="Contraseña"
          type="password"
          variant="bordered"
          radius="sm"
          isInvalid={errors?.password?.type === "required"}
          errorMessage={
            errors?.password?.type === "required" &&
            "La contraseña es un campo requerido."
          }
          {...register("password", { required: true })}
        />
      </div>

      <div className="text-lg text-main font-bold mt-6">
        <label className="block mb-3">Nombre y apellido</label>
        <Input
          id="name"
          placeholder="Nombre y apellido"
          variant="bordered"
          radius="sm"
          isInvalid={errors?.name?.type === "required"}
          errorMessage={
            errors?.name?.type === "required" &&
            "El nombre y apellido es un campo requerido."
          }
          {...register("name", { required: true })}
        />
      </div>

      <div className="grid grid-cols-[.7fr_.3fr] grid-rows-[repeat(auto,3)] gap-x-4 text-lg text-main font-bold mt-6">
        <label className="block mb-3 col-span-2">Dirección</label>
        <Input
          id="street"
          placeholder="Nombre de la calle"
          variant="bordered"
          radius="sm"
          isInvalid={errors?.street?.type === "required"}
          errorMessage={
            errors?.street?.type === "required" &&
            "El nombre de la calle es un campo requerido."
          }
          {...register("street", { required: true })}
        />
        <Input
          id="number"
          type="number"
          placeholder="Número"
          variant="bordered"
          radius="sm"
          isInvalid={errors?.number?.type === "required"}
          errorMessage={
            errors?.number?.type === "required" &&
            "El numero de domicilio es un campo requerido."
          }
          {...register("number", { required: true })}
        />
        <Select
          id="province"
          className="col-span-2 mt-4"
          aria-label="Provincia"
          placeholder="Provincia"
          variant="bordered"
          radius="sm"
          isInvalid={errors?.province?.type === "required"}
          errorMessage={
            errors?.province?.type === "required" &&
            "La provincia es un campo requerido."
          }
          {...register("province", { required: true })}
        >
          <SelectItem key="Buenos Aires" textValue="BuenosAires">
            Buenos Aires
          </SelectItem>
          <SelectItem key="Formosa" textValue="Formosa">
            Formosa
          </SelectItem>
          <SelectItem key="CABA" textValue="asd">
            CABA
          </SelectItem>
          <SelectItem key="La Pampa" textValue="qwe">
            La Pampa
          </SelectItem>
        </Select>
      </div>

      <div className="grid grid-cols-2 grid-rows-[repeat(auto, 2)] gap-x-4 text-lg text-main font-bold mt-6">
        <label className="block mb-3 col-span-2">Contacto</label>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          variant="bordered"
          radius="sm"
          isInvalid={errors?.email?.type === "required"}
          errorMessage={
            errors?.email?.type === "required" &&
            "El email es un campo requerido."
          }
          {...register("email", { required: true })}
        />
        <Input
          id="whatsapp"
          type="tel"
          placeholder="WhatsApp"
          description="A este número te estaremos contactando"
          variant="bordered"
          radius="sm"
          isInvalid={errors?.whatsapp?.type === "required"}
          errorMessage={
            errors?.whatsapp?.type === "required" &&
            "El numero de WhatsApp es un campo requerido."
          }
          {...register("whatsapp", { required: true })}
        />
      </div>

      <Button
        type="submit"
        className="block mt-12 ml-auto px-8 bg-black text-base text-white"
        radius="sm"
      >
        Finalizar registro
      </Button>
    </form>
  );
}
