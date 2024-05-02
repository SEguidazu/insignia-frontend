"use client";

import { useRouter, useParams, useSearchParams } from "next/navigation";
import useFiltersQuery from "@/app/hook/useFiltersQuery";
import useScreenSize from "@/app/hook/useScreenSize";

import AsideProductFilter from "./aside";
import ModalProductFilter from "./modal";

export default function ProductFilter({ categories, subcategories, types }) {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const { isLGscreen } = useScreenSize();

  const {
    filterSearchParams,
    handleFilterSearchParamsChange,
    pushFilters,
    cleanFilters,
  } = useFiltersQuery();

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

  const findSelectedFilter = (key) =>
    filterSearchParams.find((item) => item?.key === key)?.params;

  return isLGscreen ? (
    <AsideProductFilter
      categories={categories}
      selectedCategory={params?.slug?.[0]}
      handleCategoryChange={handleCategoryChange}
      subcategories={subcategories}
      selectedSubcategory={params?.slug?.[1]}
      handleSubategoryChange={handleSubategoryChange}
      types={types}
      selectedType={findSelectedFilter("tipo")}
      handleTypeChange={handleFilterSearchParamsChange("tipo")}
      selectedGender={findSelectedFilter("genero")}
      handleGenderChange={handleFilterSearchParamsChange("genero")}
      pushFilters={pushFilters}
      cleanFilters={cleanFilters}
    />
  ) : (
    <ModalProductFilter
      categories={categories}
      selectedCategory={params?.slug?.[0]}
      handleCategoryChange={handleCategoryChange}
      subcategories={subcategories}
      selectedSubcategory={params?.slug?.[1]}
      handleSubategoryChange={handleSubategoryChange}
      types={types}
      selectedType={findSelectedFilter("tipo")}
      handleTypeChange={handleFilterSearchParamsChange("tipo")}
      selectedGender={findSelectedFilter("genero")}
      handleGenderChange={handleFilterSearchParamsChange("genero")}
      pushFilters={pushFilters}
      cleanFilters={cleanFilters}
    />
  );
}
