import { products } from "@/app/data/products";
import Link from "next/link";

export default function CategoryPage({ params }) {
  const categorySlug = params.category;

  const filteredProducts =
    categorySlug === "all"
      ? products
      : products.filter((p) => p.categorySlug === categorySlug);

  const categoryTitle =
    categorySlug === "all"
      ? "All Products"
      : filteredProducts[0]?.category || categorySlug;

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-10">
          Products in {categoryTitle}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.slug}
              className="bg-white rounded-lg shadow p-5 flex flex-col justify-between"
            >
              <div>
                <h2 className="font-semibold text-lg">
                  {product.title}
                </h2>

                <p className="text-sm text-gray-600 mt-2">
                  {product.specs}
                </p>
              </div>

              {/* 👇 按钮区域 */}
              <div className="mt-6 space-y-2">
                <Link
                  href={`/products/${product.categorySlug}/${product.slug}`}
                  className="block text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  View Details
                </Link>

                {/* 如果是 LCD (有 models) */}
                {product.models && (
                  <Link
                    href={`/products/${product.categorySlug}/${product.slug}`}
                    className="block text-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
                  >
                    View Models
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

