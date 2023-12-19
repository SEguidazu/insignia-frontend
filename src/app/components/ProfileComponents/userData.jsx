"use client";

import { useEffect, useState } from "react";

import { Input, Button, Select, SelectItem } from "@nextui-org/react";

import {
  UserIconDark,
  EmailIcon,
  WhatsappDarkIcon,
  LocationIcon,
} from "@/assets/icons";

import { updateUserStrapi, provinces } from "@/app/lib/users";
import { useUserStore } from "@/app/store/user";

export default function ProfileUserData({ user }) {
  const setUserLoggedIn = useUserStore((state) => state.setUserLoggedIn);

  const [isEditable, setIsEditable] = useState({
    details: false,
    address: false,
  });
  const [details, setDetails] = useState({
    fullname: user?.fullname ?? "",
    email: user?.email ?? "",
    whatsapp: user?.whatsapp ?? "",
    address: user?.address ?? {},
  });

  const unifiedAddress = `${user?.address?.street ?? "Calle"} ${
    user?.address?.number ?? "1234"
  }, ${user?.address?.city ?? "Localidad"}, ${
    user?.address?.province ?? "Provincia"
  }.`;

  const updateUserDetails = async (details) => {
    const updatedUser = await updateUserStrapi(details, user?.jwt);
    if (updatedUser) setUserLoggedIn({ user: updatedUser, jwt: user?.jwt });
    setIsEditable({ ...isEditable, details: false, address: false });
  };

  useEffect(() => {
    setDetails({
      fullname: user?.fullname ?? "",
      email: user?.email ?? "",
      whatsapp: user?.whatsapp ?? "",
      address: user?.address ?? {},
    });
  }, [user]);

  return (
    <section className="grid grid-cols-2 gap-x-6 p-6 bg-white rounded-2xl">
      <article>
        <div>
          <h2 className="inline-block text-2xl text-main font-medium mb-4 pb-6">
            Datos Personales
          </h2>
          <button
            className="text-base text-black ml-6 underline underline-offset-2"
            onClick={(e) =>
              user?.length !== 0 &&
              setIsEditable({ ...isEditable, details: !isEditable.details })
            }
          >
            Editar
          </button>
        </div>
        <Input
          type="text"
          placeholder="Nombre y Apellido"
          labelPlacement="outside"
          value={details.fullname}
          onValueChange={(value) => setDetails({ ...details, fullname: value })}
          startContent={<UserIconDark className="mr-4" />}
          disabled={!isEditable.details}
          className="mb-3"
        />
        <Input
          type="email"
          placeholder="tuemail@ejemplo.com"
          labelPlacement="outside"
          value={details.email}
          onValueChange={(value) => setDetails({ ...details, email: value })}
          startContent={<EmailIcon className="mr-4" />}
          disabled={!isEditable.details}
          className="mb-3"
        />
        <Input
          type="number"
          placeholder="Número de teléfono (Whatsapp)"
          labelPlacement="outside"
          value={details.whatsapp}
          onValueChange={(value) => setDetails({ ...details, whatsapp: value })}
          startContent={<WhatsappDarkIcon className="mr-3 ml-1" />}
          disabled={!isEditable.details}
        />
        {isEditable.details && (
          <Button
            className="bg-black text-base text-white mt-6"
            radius="sm"
            onPress={(e) => {
              const { address, ...userDetails } = details;
              updateUserDetails(userDetails);
            }}
          >
            Guardar cambios
          </Button>
        )}
      </article>

      <article>
        <div>
          <h2 className="inline-block text-2xl text-main font-medium mb-4 pb-6">
            Mi dirección
          </h2>
          <button
            className="text-base text-black ml-6 underline underline-offset-2"
            onClick={(e) =>
              user?.length !== 0 &&
              setIsEditable({ ...isEditable, address: !isEditable.address })
            }
          >
            Editar
          </button>
        </div>

        {isEditable.address ? (
          <div className="grid grid-cols-4 gap-x-2 gap-y-3">
            <Input
              type="text"
              label="Nombre de la calle"
              value={details.address.street}
              onValueChange={(value) =>
                setDetails({
                  ...details,
                  address: { ...details.address, street: value },
                })
              }
              disabled={!isEditable.address}
              className="mb-3 col-span-3"
            />
            <Input
              type="number"
              label="Numero"
              value={details.address.number}
              onValueChange={(value) =>
                setDetails({
                  ...details,
                  address: { ...details.address, number: value },
                })
              }
              disabled={!isEditable.address}
              className="mb-3"
            />
            <Input
              type="text"
              label="Departamento"
              value={details.address.apartment ?? ""}
              onValueChange={(value) =>
                setDetails({
                  ...details,
                  address: { ...details.address, apartment: value },
                })
              }
              disabled={!isEditable.address}
              className="mb-3 col-span-2"
            />
            <Input
              type="number"
              label="Código postal"
              value={details.address.postal_code}
              onValueChange={(value) =>
                setDetails({
                  ...details,
                  address: { ...details.address, postal_code: value },
                })
              }
              disabled={!isEditable.address}
              className="mb-3 col-span-2"
            />
            <Select
              label="Provincia"
              onSelectionChange={(keys) =>
                setDetails({
                  ...details,
                  address: { ...details.address, province: keys.currentKey },
                })
              }
              className="mb-3 col-span-4"
            >
              {provinces.map((province) => (
                <SelectItem key={province} textValue={province}>
                  {province}
                </SelectItem>
              ))}
            </Select>
            <Button
              className="bg-black text-base text-white mt-6 col-span-2"
              radius="sm"
              onPress={(e) => updateUserDetails({ address: details.address })}
            >
              Guardar cambios
            </Button>
          </div>
        ) : (
          <Input
            type="text"
            placeholder="Dirección"
            labelPlacement="outside"
            value={unifiedAddress}
            startContent={<LocationIcon className="mr-4" />}
            className="mb-3"
            isReadOnly
          />
        )}
      </article>
    </section>
  );
}
