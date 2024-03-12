"use client";

import { useRouter, useParams, useSearchParams } from "next/navigation";
import useFiltersQuery from "@/app/hook/useFiltersQuery";

import {
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox,
  Button,
} from "@nextui-org/react";

export default function ProductFilter({ categories, subcategories }) {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const { filterSearchParams, handleFilterSearchParamsChange, pushFilters } =
    useFiltersQuery();

  const handleCategoryChange = (value) => {
    const query =
      searchParams?.toString()?.length > 0
        ? `?${searchParams?.toString()}`
        : "";

    if (value === "all") router.push(`/store${query}`);
    else router.push(`/store/${value}${query}`);
  };

  const handleSubategoryChange = (value) => {
    const query =
      searchParams?.toString()?.length > 0
        ? `?${searchParams?.toString()}`
        : "";

    const category = params?.slug?.[0];

    if (value === "all") router.push(`/store/${category}${query}`);
    else router.push(`/store/${category}/${value}${query}`);
  };

  return (
    <aside className="max-w-xs basis-1/4 grid grid-rows-[repeat(4, auto)] gap-5 p-8 bg-white rounded-2xl">
      {categories?.length > 0 && (
        <div>
          <h2 className="text-2xl text-black mb-3 font-medium">Categorías</h2>
          <RadioGroup
            size="lg"
            radius="sm"
            value={params?.slug?.[0] ?? "all"}
            onValueChange={handleCategoryChange}
            aria-label="Seleccione la categoría con la que desea filtrar"
            defaultValue="all"
          >
            {categories?.map((item) => (
              <Radio
                key={item?.id}
                value={item?.slug}
                size="lg"
                radius="sm"
                color="default"
              >
                {item?.name}
              </Radio>
            ))}
            <Radio value="all" size="lg" radius="sm" color="default">
              Ver todos
            </Radio>
          </RadioGroup>
        </div>
      )}
      {subcategories?.length > 0 && (
        <div>
          <h2 className="text-2xl text-black mb-3 font-medium">
            Subcateogrías
          </h2>
          <RadioGroup
            size="lg"
            radius="sm"
            value={params?.slug?.[1] ?? "all"}
            onValueChange={handleSubategoryChange}
            aria-label="Seleccione la subcategoría con la que desea filtrar"
            defaultValue="all"
          >
            {subcategories?.map((item) => (
              <Radio
                key={item?.id}
                value={item?.slug}
                size="lg"
                radius="sm"
                color="default"
              >
                {item?.name}
              </Radio>
            ))}
            <Radio value="all" size="lg" radius="sm" color="default">
              Ver todos
            </Radio>
          </RadioGroup>
        </div>
      )}
      <div>
        <h2 className="text-2xl text-black mb-3 font-medium">Género</h2>
        <CheckboxGroup
          size="lg"
          radius="sm"
          value={
            filterSearchParams.find((item) => item?.key === "genero")?.params ??
            []
          }
          onValueChange={handleFilterSearchParamsChange("genero")}
          aria-label="seleccione genero"
        >
          <Checkbox value="hombre" size="lg">
            Hombre
          </Checkbox>
          <Checkbox value="mujer" size="lg">
            Mujer
          </Checkbox>
        </CheckboxGroup>
      </div>
      <Button
        className="mt-2 text-base text-main font-bold"
        onPress={pushFilters}
      >
        Aplicar filtros
      </Button>
    </aside>
  );
}
