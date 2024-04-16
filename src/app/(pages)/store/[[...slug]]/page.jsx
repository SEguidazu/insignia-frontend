import ProductFilter from "@/app/components/ProductFilter";
import ProductCard from "@/app/components/ProductCard";

import { getProducts, getProductTypes } from "@/app/lib/products";
import { getCategories } from "@/app/lib/categories";
import { getSubcategoriesByCategory } from "@/app/lib/subcategories";
import Paging from "@/app/components/Paging";

export default async function StorePage({ params, searchParams }) {
  const response = await getProducts({ params, searchParams });
  const categories = await getCategories();
  const subcategories = await getSubcategoriesByCategory(params?.slug?.[0]);
  const types = await getProductTypes();

  return (
    <div className="w-full flex flex-wrap justify-between items-start">
      <h1 className="basis-1/2 sm:basis-3/4 lg:basis-full text-black text-3xl font-bold mb-4 capitalize">
        Productos
      </h1>

      <ProductFilter
        categories={categories?.results}
        subcategories={subcategories?.results}
        types={types?.results}
      />

      {response?.results && (
        <section
          id="products"
          className="max-w-3xl basis-full lg:basis-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-10 gap-5 justify-items-center items-start mx-auto lg:mx-[unset]"
        >
          {response?.results?.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
        </section>
      )}

      {response?.pagination && <Paging {...response.pagination} />}
    </div>
  );
}
