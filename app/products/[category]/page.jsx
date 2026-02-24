import { products } from "@/app/data/products";
import Link from "next/link";
import InductorsShowcase from "@/app/components/InductorsShowcase";
import SwitchPage from "@/app/components/SwitchPage";
import { notFound } from "next/navigation";
import ConnectorsShowcase from "@/app/components/ConnectorsShowcase";

export default function CategoryPage({ params }) {

  const categorySlug = params.category;


  // ===== 特殊展示页 =====
  if (categorySlug === "inductors") {
    return <InductorsShowcase />;
  }

  if (categorySlug === "switch") {
    return <SwitchPage />;
  }
 if (categorySlug === "connectors") {
    return <ConnectorsShowcase />;
  }

  // ===== 普通分类页逻辑 =====
  const filteredProducts =
    categorySlug === "all"
      ? products
      : products.filter((p) => p.categorySlug === categorySlug);

  if (filteredProducts.length === 0) {
    return notFound();
  }

  const categoryTitle =
    categorySlug === "all"
      ? "All Products"
      : filteredProducts[0]?.category || categorySlug;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">
          Products in {categoryTitle}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.categorySlug}/${product.slug}`}
            >
              <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg cursor-pointer">
                <h2 className="font-semibold">{product.title}</h2>
                <p className="text-sm text-gray-600 mt-2">
                  {product.specs}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
