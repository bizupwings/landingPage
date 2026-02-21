"use client";

import { useState, useEffect } from "react";
import { products } from "@/app/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import ImageCarousel from "@/app/components/ImageCarousel";

export default function ProductDetail({ params }) {
  const { category: categorySlug, slug } = params;

  const product = products.find(
    (p) => p.slug === slug && p.categorySlug === categorySlug
  );

  // ✅ Hooks 必须写在最顶层
  const [activePdf, setActivePdf] = useState(null);

  const hasMultiplePdfs =
    product?.datasheetPdfs && product.datasheetPdfs.length > 0;

  useEffect(() => {
    if (hasMultiplePdfs) {
      setActivePdf(product.datasheetPdfs[0]);
    }
  }, [hasMultiplePdfs, product]);

  // ✅ Hooks 写完后再判断
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
          </div>
        </div>

        {/* ===== DATASHEET SECTION ===== */}
        {hasMultiplePdfs && activePdf && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-6">
              Datasheets
            </h2>

            <div className="flex gap-6 mb-6 border-b pb-3">
              {product.datasheetPdfs.map((pdf, index) => (
                <button
                  key={index}
                  onClick={() => setActivePdf(pdf)}
                  className={`pb-2 font-semibold transition ${
                    activePdf?.label === pdf.label
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500"
                  }`}
                >
                  {pdf.label}
                </button>
              ))}
            </div>

            <a
              href={activePdf.url}
              target="_blank"
              rel="noreferrer"
              className="inline-block mb-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Download {activePdf.label} (PDF)
            </a>

            <div className="border rounded-xl overflow-hidden shadow bg-white">
              <iframe
                key={activePdf.url}
                src={activePdf.url}
                className="w-full h-[800px]"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
