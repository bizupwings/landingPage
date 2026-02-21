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

        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-8">
          Home / Products / {product.category} / {product.title}
        </p>

        {/* ===== TOP SECTION ===== */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Product Image */}
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
          </div>
        </div>

        {/* ===== MODELS SECTION ===== */}
        {product.models && product.models.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8">
              Available Models
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {product.models.map((model, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 border hover:shadow-xl transition"
                >
                  <h3 className="text-lg font-semibold mb-3">
                    {model.name}
                  </h3>

                  <p className="text-gray-600 mb-2">
                    {model.size}
                  </p>

                  <p className="text-gray-600 mb-4">
                    Voltage: {model.voltage}
                  </p>

                  <a
                    href={model.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Download Datasheet
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== 单个 PDF 兼容旧产品 ===== */}
        {product.datasheetPdf && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-6">
              Datasheet
            </h2>

            <a
              href={product.datasheetPdf}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Download Datasheet (PDF)
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
