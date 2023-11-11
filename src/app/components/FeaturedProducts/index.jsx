import ProductCard from "@/app/components/ProductCard";

import { getFeaturedProducts } from "@/app/lib/products";

export default async function FeaturedProducts() {
  const { results } = await getFeaturedProducts();

  return (
    results && (
      <section
        id="featured-products"
        className="flex flex-wrap justify-between items-start gap-5 mb-9"
      >
        <h2 className="w-full text-2xl text-main font-bold shrink-0">
          Los más vendidos
        </h2>
        {results.map((product) => (
          <ProductCard key={product.product_id} {...product} />
        ))}
      </section>
    )
  );
}
