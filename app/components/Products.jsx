"use client";

import Image from 'next/image';
import Link from "next/link";
import { Button } from '@/components/ui/button';



export default function Products({ filteredProducts = [], selfRender = false }) {
  if (selfRender) {
    filteredProducts = products.slice(0, 10);
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Products Center
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts?.map((product, index) => (
       <Link
  key={index}
  href={`/products/${product.category.toLowerCase()}/${product.slug}`}
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
              <h3 className="text-lg font-semibold text-gray-800 mt-4">{product.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{product?.specs}</p>

              {product?.colors && (
                <div className="mt-3">
                  <h4 className="font-semibold text-sm text-gray-700">Colors:</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {product.colors.map((color, i) => (
                      <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded-md text-gray-800">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            {product?.applications && (
                <div className="mt-3">
                  <h4 className="font-semibold text-sm text-gray-700">
                    Applications:
                  </h4>
                  <ul className="text-xs text-gray-600 list-disc ml-4 mt-1">
                    {product.applications.map((app, i) => (
                      <li key={i}>{app}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="m-4 flex items-center justify-center">
        <Link href="/products/all">
          <Button variant="default" size="lg">
            See All Products
          </Button>
        </Link>
      </div>
    </div>
  </section>
);
}

