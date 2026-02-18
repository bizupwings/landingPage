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
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">

        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-8">
          Home / Products / {product.category} / {product.title}
        </p>

        {/* ===== TOP SECTION ===== */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Product Image */}
          <div className="bg-white rounded-xl shadow p-6">
            <Image
              src={`/products/${product.image}`}
              alt={product.title}
              width={600}
              height={500}
              className="object-contain w-full h-auto"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              {product.title}
            </h1>

            {product.description && (
              <p className="text-gray-700 mb-6 leading-relaxed">
                {product.description}
              </p>
            )}

            {product.specs && (
              <p className="text-gray-600 mb-6">
                {product.specs}
              </p>
            )}

            {/* ===== Features ===== */}
            {product.features && product.features.length > 0 && (
              <div className="mb-10">
                <h3 className="text-lg font-semibold mb-4 border-b pb-2">
                  Features
                </h3>

                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {product.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* ===== Technical Specs ===== */}
            {product.technicalSpecs && product.technicalSpecs.length > 0 && (
              <div className="mb-10">
                <h3 className="text-lg font-semibold mb-4 border-b pb-2">
                  Technical Specifications
                </h3>

                <div className="overflow-x-auto bg-white rounded-lg shadow">
                  <table className="w-full text-sm">
                    <tbody>
                      {product.technicalSpecs.map((spec, index) => (
                        <tr
                          key={spec.label}
                          className={index % 2 === 0 ? "bg-gray-50" : ""}
                        >
                          <td className="px-6 py-3 text-gray-600 w-1/2 border-b">
                            {spec.label}
                          </td>
                          <td className="px-6 py-3 font-medium border-b">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* ===== DATASHEET SECTION (Full Width) ===== */}
        {product.datasheetPdf && (
          <div className="mt-20">

            <h2 className="text-2xl font-bold mb-6">
              Datasheet
            </h2>

            {/* Download Button */}
            <a
              href={product.datasheetPdf}
              target="_blank"
              rel="noreferrer"
              className="inline-block mb-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Download Datasheet (PDF)
            </a>

            {/* PDF Preview */}
            <div className="border rounded-xl overflow-hidden shadow bg-white">
              <iframe
                src={product.datasheetPdf}
                className="w-full h-[800px]"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

       
