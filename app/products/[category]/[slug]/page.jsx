import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/app/components/Products";

export default function ProductDetail({ params }) {
  const { category, slug } = params;

  const product = products.find(
    (p) =>
      p.slug === slug &&
      p.category.toLowerCase() === category.toLowerCase()
  );

  if (!product) return notFound();

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-500 mb-4">
          Home / Products / {category} / {product.title}
        </p>

        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          {product.title}
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          <Image
            src={`/products/${product.image}`}
            alt={product.title}
            width={500}
            height={400}
            className="object-contain"
          />

          <div>
            <p className="text-gray-600">{product.specs}</p>

            {product.colors && (
              <div className="mt-6">
                <h3 className="font-semibold">Colors</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {product.colors.map((color) => (
                    <span
                      key={color}
                      className="bg-gray-200 px-3 py-1 rounded text-sm"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.applications && (
              <div className="mt-6">
                <h3 className="font-semibold">Applications</h3>
                <ul className="list-disc ml-5 mt-2 text-gray-600">
                  {product.applications.map((app) => (
                    <li key={app}>{app}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

