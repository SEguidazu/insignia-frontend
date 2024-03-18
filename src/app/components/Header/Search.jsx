"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@nextui-org/react";
import { SearchIcon } from "@/assets/icons";

function Search({ isLGscreen }) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(search.trim());
    if (search.trim().length > 0)
      router.push(`/store?name=${encodeURIComponent(search.trim())}`);
  };

  return (
    <form
      className="max-w-sm w-full mx-auto lg:mx-[unset]"
      onSubmit={handleSubmit}
    >
      <Input
        id="search-input"
        type="text"
        name="search"
        value={search}
        label="Buscar"
        variant="bordered"
        radius="sm"
        autoComplete="off"
        size={isLGscreen ? "md" : "sm"}
        endContent={
          <button
            type="submit"
            aria-label="Buscar producto"
            className="absolute -top-0.5 -right-0.5 -bottom-0.5 px-4 flex items-center rounded-r-lg bg-black"
          >
            <SearchIcon />
          </button>
        }
        onChange={handleInputChange}
      />
    </form>
  );
}

export default Search;
