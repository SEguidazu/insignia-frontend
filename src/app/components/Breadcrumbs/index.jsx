import Link from "next/link";

export default function Breadcrumbs({ product }) {
  return (
    <nav
      aria-label="breadcrumb"
      className="max-w-7xl mx-auto mb-4 text-sm text-secondary_link"
    >
      <ol className="flex flex-wrap items-center gap-2">
        <li className="after:content-['/'] after:ml-2">
          <Link href="/store">Inicio</Link>
        </li>
        {product?.category && (
          <li className="after:content-['/'] after:ml-2">
            <Link href={`/store?category=${product?.category.slug}`}>
              {product?.category.name}
            </Link>
          </li>
        )}
        {product?.subcategory && (
          <li className="after:content-['/'] after:ml-2">
            <Link href={`/store?subcategory=${product?.subcategory.slug}`}>
              {product?.subcategory.name}
            </Link>
          </li>
        )}
        <li className="text-main">
          <Link href="#" aria-current="page">
            {product?.name}
          </Link>
        </li>
      </ol>
    </nav>
  );
}
