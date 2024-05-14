import ReactMarkdown from "react-markdown";

import { getProductBySlug } from "@/app/lib/products";
import { getRefundPolicy, getShippingPolicy } from "@/app/lib/policies";

import ProductImageGallery from "@/app/components/ProductImageGallery";
import AddCartButton from "@/app/components/AddCartButton";
import AddFavoriteButton from "@/app/components/AddFavoriteButton";
import InfoModal from "@/app/components/InformationSection/InfoModal";

import { formatNumber } from "@/app/utils/formatNumbers";

export const revalidate = 3600; // revalidate the data at most every hour

export default async function ProductPage({ params }) {
  const response = await getProductBySlug(params.slug);
  const refundPolicy = await getRefundPolicy();
  const shippingPolicy = await getShippingPolicy();

  if (!response?.results) return <></>;
  const product = response.results[0];

  if (product?.category) delete product.category;
  if (product?.subcategory) delete product.subcategory;

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-[auto] gap-y-6 md:gap-x-8 md:gap-y-16 mb-10">
      <section
        id="product-images"
        className="flex flex-wrap justify-between items-start"
        tabIndex={-1}
      >
        {!!product?.images && <ProductImageGallery images={product?.images} />}
      </section>

      <section
        id="product-details"
        className="flex flex-col justify-start items-start px-2 md:px-0"
      >
        <h1 className="text-2xl md:text-3xl text-main mb-2 md:mb-6 font-medium">
          {product.name}
        </h1>
        <span className="text-4xl md:text-5xl text-main font-medium mb-4 md:mb-8">
          ${formatNumber(product.price)}
        </span>
        <div className="mb-4">
          <AddCartButton product={product} hasQtyHandler />
        </div>

        <div className="mb-6 md:mb-10">
          <AddFavoriteButton product={product} />
        </div>

        {shippingPolicy && (
          <InfoModal
            title={shippingPolicy?.title}
            modalContent={
              <ReactMarkdown>{shippingPolicy?.description}</ReactMarkdown>
            }
            className="h-auto text-main text-lg font-medium underline p-0 bg-transparent mb-2"
          >
            {shippingPolicy?.title}
          </InfoModal>
        )}

        {refundPolicy && (
          <InfoModal
            title={refundPolicy?.title}
            modalContent={
              <ReactMarkdown>{refundPolicy?.description}</ReactMarkdown>
            }
            className="h-auto text-main text-lg font-medium underline p-0 bg-transparent mb-2"
          >
            {refundPolicy?.title}
          </InfoModal>
        )}
      </section>

      {product?.description && (
        <section
          id="product-description"
          className="px-2 md:px-0 md:col-span-2"
        >
          <h2 className="text-main text-2xl font-medium mb-6">
            Descripción del producto
          </h2>
          <ReactMarkdown>{product?.description}</ReactMarkdown>
        </section>
      )}
    </div>
  );
}
