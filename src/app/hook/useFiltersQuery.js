import { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useFiltersQuery() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [filterParams, setFilterParams] = useState(
    Array.from(searchParams.entries(), ([key, params]) => ({
      key,
      params: params?.split(","),
    }))
  );

  const handleFilterParamsChange = (keyParam) => (value) => {
    const indexInFilterParams = filterParams?.findIndex(
      ({ key }) => key === keyParam
    );

    if (indexInFilterParams === -1) {
      setFilterParams([...filterParams, { key: keyParam, params: [...value] }]);
    } else if (value?.length > 0) {
      setFilterParams(
        filterParams.map((item) =>
          item.key === keyParam ? { ...item, params: [...value] } : { ...item }
        )
      );
    } else {
      setFilterParams(filterParams.filter(({ key }) => key !== keyParam));
    }
  };

  const pushFilters = useCallback(() => {
    const queryRequest = filterParams.reduce((paramAcc, item, index) => {
      if (index === 0)
        return paramAcc.concat(`?${item.key}=${item.params?.join(",")}`);
      return paramAcc.concat(`&${item.key}=${item.params?.join(",")}`);
    }, "");

    router.push(`${pathname}${queryRequest}`);
  }, [filterParams, pathname, router]);

  return {
    filterParams,
    handleFilterParamsChange,
    pushFilters,
  };
}
