import { getFeaturedProducts } from "@/app/lib/products";
import Image from "next/image";
import AddCartButton from "@/app/components/AddCartButton";
import Label from "@/app/components/Label";

export default async function FeaturedProducts() {
  const { results } = await getFeaturedProducts();

  // const { products } = results[0];
  // console.log(results);
  return (
    results && (
      <section
        id="featured-products"
        className="flex flex-wrap justify-between items-start gap-5 mb-9"
      >
        <h2 className="w-full text-2xl text-main font-bold shrink-0">
          Los más vendidos
        </h2>
        {results.map(({ product_id, name, price, stock, images = null }) => (
          <article
            key={product_id}
            className="max-w-[230px] w-full p-2.5 rounded-xl bg-light hover:drop-shadow-lg ease-out"
          >
            <figure className="relative">
              {images && (
                <Image
                  src={`http://127.0.0.1:1337${images[0].url}`}
                  width={180}
                  height={180}
                  className="h-[180px] rounded-lg object-cover mx-auto mb-6"
                  alt=""
                />
              )}
              {stock === 0 && (
                <Label isSticky={!!images} className="bg-failure text-white">
                  Sin stock
                </Label>
              )}
            </figure>
            <p className="text-lg font-bold leading-4 mb-2">${price}</p>
            <h3 className="text-md text-main mb-8">{name}</h3>
            <AddCartButton />
          </article>
        ))}
      </section>
    )
  );
}
