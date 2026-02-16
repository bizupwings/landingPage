import { products } from "@/app/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ProductDetail({ params }) {
  const { category: categorySlug, slug } = params;

  const product = products.find(
    (p) => p.slug === slug && p.categorySlug === categorySlug
  );

  if (!product) return notFound();

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-500 mb-4">
          Home / Products / {product.category} / {product.title}
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <Image
              src={`/products/${product.image}`}
              alt={product.title}
              width={500}
              height={400}
              className="object-contain rounded-lg bg-white"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>

            {product.description && (
              <p className="text-gray-700 mb-4">{product.description}</p>
            )}

            {product.specs && (
              <p className="text-gray-600 mb-4">{product.specs}</p>
            )}

            {product.features && product.features.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Features</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {product.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.datasheetImages && product.datasheetImages.length > 0 && (
              <div className="mt-8">
                <h3 className="font-semibold mb-3">Datasheet Images</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.datasheetImages.map((src) => (
                    <Image
                      key={src}
                      src={src}
                      alt="datasheet"
                      width={800}
                      height={600}
                      className="w-full h-auto rounded bg-white"
                    />
                  ))}
                </div>
              </div>
            )}

            {product.datasheetPdf && (
              <div className="mt-6">
                <a
                  href={product.datasheetPdf}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  Download Datasheet (PDF)
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

       
