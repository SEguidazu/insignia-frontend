"use client";

import {
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox,
  Button,
} from "@nextui-org/react";

export default function AsideProductFilter({
  categories,
  selectedCategory,
  handleCategoryChange,
  subcategories,
  selectedSubcategory,
  handleSubategoryChange,
  types,
  selectedType,
  selectedGender,
  handleTypeChange,
  handleGenderChange,
  pushFilters,
  cleanFilters,
}) {
  return (
    <aside className="max-w-xs basis-1/4 grid grid-rows-[repeat(4, auto)] gap-5 p-8 bg-white rounded-2xl">
      {categories?.length > 0 && (
        <div>
          <h2 className="text-2xl text-black mb-3 font-medium">Categorías</h2>
          <RadioGroup
            size="lg"
            radius="sm"
            value={selectedCategory ?? "all"}
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
            value={selectedSubcategory ?? "all"}
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
      {types?.length > 0 && (
        <div>
          <h2 className="text-2xl text-black mb-3 font-medium">Tipos</h2>
          <CheckboxGroup
            size="lg"
            radius="sm"
            value={selectedType ?? []}
            onValueChange={handleTypeChange}
            aria-label="Seleccione el tipo de producto con la que desea filtrar"
          >
            {types?.map((item) => (
              <Checkbox
                key={item?.type_id}
                value={item?.type_id}
                size="lg"
                color="default"
              >
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
          value={selectedGender ?? []}
          onValueChange={handleGenderChange}
          aria-label="Seleccione el género con la que desea filtrar"
        >
          <Checkbox value="hombre" size="lg" color="default">
            Hombre
          </Checkbox>
          <Checkbox value="mujer" size="lg" color="default">
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
      <Button
        className="text-base text-main font-bold "
        onPress={cleanFilters}
        variant="ghost"
      >
        Limpiar filtros
      </Button>
    </aside>
  );
}
