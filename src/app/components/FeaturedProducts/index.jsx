import ProductCard from "@/app/components/ProductCard";

import { getFeaturedProducts } from "@/app/lib/products";

export default async function FeaturedProducts({
  title = "Los más vendidos",
  scrollable = false,
}) {
  const response = await getFeaturedProducts();

  return (
    response?.results && (
      <section
        id="featured-products"
        className="flex flex-wrap justify-between items-start gap-5 mb-9"
      >
        <h2 className="w-full text-2xl text-main font-bold shrink-0">
          {title}
        </h2>
        <ul
          className={`w-full justify-items-center items-start gap-5  ${
            scrollable
              ? "flex flex-nowrap overflow-x-scroll scroll-smooth snap-x"
              : "grid grid-cols-5 grid-rows-2"
          }`}
        >
          {response?.results?.map((product) => (
            <li key={product.product_id} className="snap-center">
              <ProductCard {...product} />
            </li>
          ))}
        </ul>
      </section>
    )
  );
}
