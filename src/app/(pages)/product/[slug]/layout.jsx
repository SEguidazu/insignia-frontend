import Breadcrumbs from "@/app/components/Breadcrumbs";
import { getProductBySlug } from "@/app/lib/products";

export const revalidate = 3600; // revalidate the data at most every hour

export default async function StoreLayout({ params, children }) {
  const response = await getProductBySlug(params.slug);

  return (
    <main className="max-w-7xl mx-auto px-2">
      {response?.results && response?.results[0] && (
        <Breadcrumbs product={response?.results[0]} />
      )}

      {children}
    </main>
  );
}
