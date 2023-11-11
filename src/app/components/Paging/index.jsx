"use client";

import usePageQuery from "@/app/hook/usePageQuery";
import { Pagination, PaginationItemType } from "@nextui-org/react";

import { ChevronIcon } from "@/assets/icons";

export default function Paging({ page = 1, pageCount = 1 }) {
  const { handlePageParamChange } = usePageQuery();

  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button
          key={key}
          className={`${className} bg-white !text-black min-w-8 w-8 h-8`}
          // className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")}
          onClick={onNext}
        >
          <ChevronIcon className="rotate-180" />
        </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button
          key={key}
          className={`${className} bg-white !text-black min-w-8 w-8 h-8`}
          onClick={onPrevious}
        >
          <ChevronIcon />
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button key={key} className={className}>
          ...
        </button>
      );
    }

    return (
      <button
        key={key}
        ref={ref}
        className={`${className} ${
          isActive ? " border-1 !rounded-lg" : ""
        } bg-white !text-black font-bold`}
        onClick={() => setPage(value)}
      >
        {value}
      </button>
    );
  };

  return (
    <div className="basis-full inline-flex justify-end mt-10 mb-20">
      <Pagination
        loop
        showControls
        isCompact
        disableCursorAnimation
        page={page}
        total={pageCount}
        renderItem={renderItem}
        onChange={handlePageParamChange}
      />
    </div>
  );
}
