"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "@/assets/icons";

function Search() {
  const [search, setSearch] = React.useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.search.value);
  };

  return (
    <form className="max-w-sm w-full" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="search"
        value={search}
        label="Buscar"
        variant="bordered"
        radius="sm"
        autoComplete="off"
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
