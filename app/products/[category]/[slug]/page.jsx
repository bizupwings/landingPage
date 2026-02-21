"use client";

import { products } from "@/app/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import ImageCarousel from "@/app/components/ImageCarousel";

export default function ProductDetail({ params }) {
  const { category: categorySlug, slug } = params;

  const product = products.find(
    (p) => p.slug === slug && p.categorySlug === categorySlug
  );

  if (!product) return notFound();

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">

        <p className="text-sm text-gray-500 mb-8">
          Home / Products / {product.category} / {product.title}
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div>
            {product.datasheetImages?.length > 0 ? (
              <ImageCarousel images={product.datasheetImages} />
            ) : (
              <Image
                src={`/products/${product.image}`}
                alt={product.title}
                width={800}
                height={500}
                className="object-contain rounded-lg bg-white w-full"
              />
            )}
          </div>

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
            {product.features?.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold mb-2">Features</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {product.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* ===== Technical Specs ===== */}
            {product.technicalSpecs?.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold mb-2">
                  Technical Specifications
                </h3>
                <div className="bg-white rounded shadow">
                  <table className="w-full text-sm">
                    <tbody>
                      {product.technicalSpecs.map((spec, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                          <td className="px-4 py-2">{spec.label}</td>
                          <td className="px-4 py-2 font-medium">
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

        {/* ===== 单个 PDF ===== */}
        {product.datasheetPdf && (
          <div className="mt-16">
            <a
              href={product.datasheetPdf}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Download Datasheet (PDF)
            </a>
          </div>
        )}

        {/* ===== 多个 PDF（旧结构支持） ===== */}
        {product.datasheetPdfs?.length > 0 && (
          <div className="mt-16 space-y-4">
            {product.datasheetPdfs.map((pdf, i) => (
              <a
                key={i}
                href={pdf.url}
                target="_blank"
                rel="noreferrer"
                className="block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Download {pdf.label}
              </a>
            ))}
          </div>
        )}

        {/* ===== LCD Models 专用 ===== */}
        {product.models?.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-6">
              Available Models
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {product.models.map((model, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow border"
                >
                  <h3 className="font-semibold mb-2">
                    {model.name}
                  </h3>
                  <p className="text-gray-600 mb-1">
                    {model.size}
                  </p>
                  <p className="text-gray-600 mb-4">
                    Voltage: {model.voltage}
                  </p>

                  <a
                    href={model.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Download Datasheet
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
