import ProductFilter from "@/app/components/ProductFilter";
import ProductCard from "@/app/components/ProductCard";

import { getProducts } from "@/app/lib/products";
import { getFilters } from "@/app/lib/categories";
import Paging from "@/app/components/Paging";

export default async function StorePage({ searchParams }) {
  const response = await getProducts(searchParams);
  const filters = await getFilters();

  return (
    <div className="w-full flex flex-wrap justify-between items-start">
      <h1 className="basis-full text-black text-3xl font-bold mb-4 capitalize">
        Productos
      </h1>

      <ProductFilter options={filters} />

      {response?.results && (
        <section
          id="products"
          className="max-w-3xl basis-3/4 grid grid-cols-3 grid-rows-10 gap-5 justify-items-center items-start"
        >
          {response?.results?.map((product) => (
            <ProductCard key={product.product_id} {...product} />
          ))}
        </section>
      )}

      {response?.pagination && <Paging {...response.pagination} />}
    </div>
  );
}
