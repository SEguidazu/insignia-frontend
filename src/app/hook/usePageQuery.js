import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function usePageQuery() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageParamChange = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage);

    const query = params.toString().replaceAll("%2C", ",");

    router.push(`${pathname}?${query}`);
  };

  return {
    handlePageParamChange,
  };
}
