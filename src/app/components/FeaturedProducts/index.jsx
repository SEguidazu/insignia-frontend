import { getFeaturedProducts } from "@/app/lib/products";
import Image from "next/image";
import AddCartButton from "../AddCartButton";

export default async function FeaturedProducts() {
  const { results } = await getFeaturedProducts();

  // const { products } = results[0];
  console.log(results);
  return (
    results && (
      <section
        id="featured-products"
        className="flex flex-wrap justify-between items-stretch gap-5 mb-9"
      >
        <h2 className="w-full text-2xl text-main font-bold shrink-0">
          Los más vendidos
        </h2>
        {results.map(({ product_id, name, price, images = null }) => (
          <article
            key={product_id}
            className="max-w-[210px] w-full p-2.5 border-1 rounded-xl bg-light"
          >
            {images && (
              <Image
                src={`http://127.0.0.1:1337${images[0].url}`}
                width={180}
                height={180}
                className="h-[180px] object-cover mx-auto mb-1"
                alt=""
              />
            )}
            <p className="text-lg font-bold mb-2">${price}</p>
            <h3 className="text-md text-main mb-4">{name}</h3>
            <AddCartButton />
          </article>
        ))}
      </section>
    )
  );
}
