import ReactMarkdown from "react-markdown";

import { getProductBySlug } from "@/app/lib/products";
import { getRefundPolicy, getShippingPolicy } from "@/app/lib/policies";

import ProductImageGallery from "@/app/components/ProductImageGallery";
import AddCartButton from "@/app/components/AddCartButton";
import AddFavoriteButton from "@/app/components/AddFavoriteButton";
import InfoModal from "@/app/components/InformationSection/InfoModal";

import { formatNumber } from "@/app/utils/formatNumbers";

export default async function ProductPage({ params }) {
  const response = await getProductBySlug(params.slug);
  const refundPolicy = await getRefundPolicy();
  const shippingPolicy = await getShippingPolicy();

  if (!response?.results) return <></>;
  const product = response.results[0];

  if (product?.category) delete product.category;
  if (product?.subcategory) delete product.subcategory;

  return (
    <div className="w-full grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-16">
      <section id="product-images">
        {!!product?.images && <ProductImageGallery images={product?.images} />}
      </section>

      <section
        id="product-details"
        className="flex flex-col justify-start items-start"
      >
        <h1 className="text-3xl text-main mb-6 font-medium">{product.name}</h1>
        <span className="text-5xl text-main font-medium mb-8">
          ${formatNumber(product.price)}
        </span>
        <div className="mb-4">
          <AddCartButton product={product} hasQtyHandler />
        </div>

        <div className="mb-10">
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

      <section id="product-description" className="col-span-2">
        <h2 className="text-main text-2xl font-medium mb-6">
          Descripción del producto
        </h2>
        {product?.description && (
          <ReactMarkdown>{product?.description}</ReactMarkdown>
        )}
      </section>
    </div>
  );
}
