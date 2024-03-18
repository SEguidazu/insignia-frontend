"use client";

import useScreenSize from "@/app/hook/useScreenSize";

import ProductCard from "@/app/components/ProductCard";

export default function FeaturedProducts({ products }) {
  const { isLGscreen } = useScreenSize();

  return (
    products && (
      <section
        id="featured-products"
        className="flex flex-wrap justify-between items-start gap-5 mb-9"
      >
        <h2 className="w-full text-2xl text-main font-bold shrink-0">
          Los más vendidos
        </h2>
        <ul
          className={`w-full justify-items-center items-start gap-5 ${
            !isLGscreen
              ? "flex flex-nowrap overflow-x-scroll scroll-smooth snap-x shadow-inner"
              : "grid grid-cols-5 grid-rows-2"
          }`}
        >
          {products?.map((product) => (
            <li key={product.product_id} className="snap-center">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </section>
    )
  );
}
