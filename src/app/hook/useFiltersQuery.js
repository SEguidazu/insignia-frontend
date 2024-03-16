import { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useFiltersQuery() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [filterSearchParams, setFilterSearchParams] = useState(
    Array.from(searchParams.entries(), ([key, params]) => ({
      key,
      params: params?.split(","),
    }))
  );

  const handleFilterSearchParamsChange = (keyParam) => (value) => {
    const indexInFilterSearchParams = filterSearchParams?.findIndex(
      ({ key }) => key === keyParam
    );

    if (indexInFilterSearchParams === -1) {
      setFilterSearchParams([
        ...filterSearchParams,
        { key: keyParam, params: [...value] },
      ]);
    } else if (value?.length > 0) {
      setFilterSearchParams(
        filterSearchParams.map((item) =>
          item.key === keyParam ? { ...item, params: [...value] } : { ...item }
        )
      );
    } else {
      setFilterSearchParams(
        filterSearchParams.filter(({ key }) => key !== keyParam)
      );
    }
  };

  const pushFilters = useCallback(() => {
    const queryRequest = filterSearchParams.reduce((paramAcc, item, index) => {
      if (index === 0)
        return paramAcc.concat(`?${item.key}=${item.params?.join(",")}`);
      return paramAcc.concat(`&${item.key}=${item.params?.join(",")}`);
    }, "");

    router.push(`${pathname}${queryRequest}`);
  }, [filterSearchParams, pathname, router]);

  const cleanFilters = useCallback(() => {
    setFilterSearchParams([]);
    router.push(pathname);
  }, [pathname, router]);

  return {
    filterSearchParams,
    handleFilterSearchParamsChange,
    pushFilters,
    cleanFilters,
  };
}
