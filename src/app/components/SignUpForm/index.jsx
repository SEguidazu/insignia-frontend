"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { registerUserStrapi, provinces } from "@/app/lib/users";

export default function SignUpForm({}) {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (formData) => {
    try {
      setLoading(true);
      const user = await registerUserStrapi(formData);

      if (user) router.push("/registro/exitoso");
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
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
          errorMessage={errors?.username?.message}
          {...register("username", {
            required: "El usuario es un campo requerido.",
          })}
        />
        <Input
          id="password"
          placeholder="Contraseña"
          type="password"
          variant="bordered"
          radius="sm"
          isInvalid={errors?.password?.type === "required"}
          errorMessage={errors?.password?.message}
          {...register("password", {
            required: "La contraseña es un campo requerido.",
            minLength: {
              value: 8,
              message: "La contraseña debe tener al menos 8 caracteres.",
            },
          })}
        />
      </div>

      <div className="text-lg text-main font-bold mt-6">
        <label className="block mb-3">Nombre y apellido</label>
        <Input
          id="fullname"
          placeholder="Nombre y apellido"
          variant="bordered"
          radius="sm"
          isInvalid={errors?.fullname?.type === "required"}
          errorMessage={errors?.fullname?.message}
          {...register("fullname", {
            required: "El nombre y apellido es un campo requerido.",
          })}
        />
      </div>

      <div className="grid grid-cols-[.7fr_.3fr] grid-rows-[repeat(3,auto)] gap-x-4 text-lg text-main font-bold mt-6">
        <label className="block mb-3 col-span-2">Dirección</label>
        <Input
          id="street"
          className="mt-4"
          placeholder="Nombre de la calle"
          variant="bordered"
          radius="sm"
          isInvalid={errors?.street?.type === "required"}
          errorMessage={errors?.street?.message}
          {...register("street", {
            required: "El nombre de la calle es un campo requerido.",
          })}
        />
        <Input
          id="number"
          className="mt-4"
          type="number"
          placeholder="Número"
          variant="bordered"
          radius="sm"
          isInvalid={errors?.number?.type === "required"}
          errorMessage={errors?.number?.message}
          {...register("number", {
            required: "El numero de domicilio es un campo requerido.",
          })}
        />
        <Input
          id="city"
          className="mt-4"
          placeholder="Ciudad / Barrio"
          variant="bordered"
          radius="sm"
          isInvalid={errors?.city?.type === "required"}
          errorMessage={errors?.city?.message}
          {...register("city", {
            required: "La ciudad/barrio es un campo requerido.",
          })}
        />
        <Input
          id="postal_code"
          className="mt-4"
          type="number"
          placeholder="Código postal"
          variant="bordered"
          radius="sm"
          isInvalid={errors?.postal_code?.type === "required"}
          errorMessage={errors?.postal_code?.message}
          {...register("postal_code", {
            required: "El código postal es un campo requerido.",
          })}
        />
        <Select
          id="province"
          className="col-span-2 mt-4"
          aria-label="Provincia"
          placeholder="Provincia"
          variant="bordered"
          radius="sm"
          isInvalid={errors?.province?.type === "required"}
          errorMessage={errors?.province?.message}
          {...register("province", {
            required: "La provincia es un campo requerido.",
          })}
        >
          {provinces.map((province) => (
            <SelectItem key={province} textValue={province}>
              {province}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div className="grid grid-cols-2 grid-rows-[repeat(2, auto)] gap-x-4 text-lg text-main font-bold mt-6">
        <label className="block mb-3 col-span-2">Contacto</label>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          variant="bordered"
          radius="sm"
          isInvalid={errors?.email?.type === "required"}
          errorMessage={errors?.email?.message}
          {...register("email", {
            required: "El email es un campo requerido.",
          })}
        />
        <Input
          id="whatsapp"
          type="tel"
          placeholder="WhatsApp"
          description="A este número te estaremos contactando"
          variant="bordered"
          radius="sm"
          isInvalid={errors?.whatsapp?.type === "required"}
          errorMessage={errors?.whatsapp?.message}
          {...register("whatsapp", {
            required: "El numero de WhatsApp es un campo requerido.",
          })}
        />
      </div>

      <span
        className={`block mt-4 mx-auto text-base text-center text-danger ${
          error ? "" : "invisible"
        }`}
      >
        {error}
      </span>

      <Button
        type="submit"
        className="block mt-12 ml-auto px-8 bg-black text-base text-white"
        radius="sm"
        isDisabled={loading}
      >
        Finalizar registro
      </Button>
    </form>
  );
}
