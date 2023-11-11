"use client";

import useFiltersQuery from "@/app/hook/useFiltersQuery";

import { CheckboxGroup, Checkbox, Button } from "@nextui-org/react";

export default function ProductFilter({ options }) {
  const [categories, subcategories] = options;
  const { filterParams, handleFilterParamsChange, pushFilters } =
    useFiltersQuery();

  return (
    <aside className="max-w-xs basis-1/4 grid grid-rows-[repeat(4, auto)] gap-5 p-8 bg-white rounded-2xl">
      {categories?.status === "fulfilled" && (
        <div>
          <h2 className="text-2xl text-black mb-3 font-medium">Categorías</h2>
          <CheckboxGroup
            size="lg"
            radius="sm"
            value={
              filterParams.find((item) => item?.key === "category")?.params ??
              []
            }
            onValueChange={handleFilterParamsChange("category")}
            aria-label="seleccione categorías"
          >
            {categories.results?.map((item) => (
              <Checkbox
                key={item?.id}
                value={item?.slug}
                size="lg"
                radius="sm"
                color="default"
              >
                {item?.name}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </div>
      )}
      {subcategories?.status === "fulfilled" && (
        <div>
          <h2 className="text-2xl text-black mb-3 font-medium">Filtros</h2>
          <CheckboxGroup
            size="lg"
            radius="sm"
            value={
              filterParams.find((item) => item?.key === "subcategory")
                ?.params ?? []
            }
            onValueChange={handleFilterParamsChange("subcategory")}
            aria-label="seleccione filtros"
          >
            {subcategories.results?.map((item) => (
              <Checkbox key={item?.id} value={item?.slug} size="lg">
                {item?.name}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </div>
      )}
      <div>
        <h2 className="text-2xl text-black mb-3 font-medium">Género</h2>
        <CheckboxGroup
          size="lg"
          radius="sm"
          value={
            filterParams.find((item) => item?.key === "genero")?.params ?? []
          }
          onValueChange={handleFilterParamsChange("genero")}
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
