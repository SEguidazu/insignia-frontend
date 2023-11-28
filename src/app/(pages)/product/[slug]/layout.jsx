import Breadcrumbs from "@/app/components/Breadcrumbs";
import { getProductBySlug } from "@/app/lib/products";

export default async function StoreLayout({ params, children }) {
  const response = await getProductBySlug(params.slug);

  return (
    <main className="max-w-7xl mx-auto">
      {response?.results && response?.results[0] && (
        <Breadcrumbs product={response?.results[0]} />
      )}

      {children}
    </main>
  );
}
