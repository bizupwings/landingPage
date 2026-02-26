"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/products";

export default function Products({ filteredProducts = [], selfRender = false }) {
 const displayProducts = selfRender
  ? products.filter((p) => p.showOnHome)
  : filteredProducts;

return (
  <section className="py-6 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Products Center
      </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayProducts.map((product, index) => (
            <Link
              key={index}
              href={`/products/${product.categorySlug}/${product.slug}`}
            >
              <div className="bg-white rounded-lg shadow-lg p-5 transition hover:shadow-xl cursor-pointer">
                <div className="relative w-full h-48">
                  <Image
                    src={`/products/${product.image}`}
                    alt={product.title}
                    fill
                    className="rounded-t-lg object-contain"
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
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
