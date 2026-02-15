import { products } from "@/app/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";


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

       <div className="grid md:grid-cols-2 gap-10">
  {/* 左侧：产品图片 */}
  <div>
    <Image
      src={`/products/${product.image}`}
      alt={product.title}
      width={500}
      height={400}
      className="object-contain rounded-lg bg-white"
    />
  </div>

  {/* 右侧：产品信息 */}
  <div>
    <h1 className="text-3xl font-bold text-gray-800 mb-4">
      {product.title}
    </h1>

    {product.specs && (
      <p className="text-gray-600 mb-4">
        {product.specs}
      </p>
    )}

    {product.colors && (
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Colors</h3>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((color) => (
            <span
              key={color}
              className="px-3 py-1 text-sm bg-gray-100 rounded-full"
            >
              {color}
            </span>
          ))}
        </div>
      </div>
    )}

    {product.applications && (
      <div>
        <h3 className="font-semibold mb-2">Applications</h3>
        <ul className="list-disc list-inside text-gray-600">
          {product.applications.map((app) => (
            <li key={app}>{app}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
</div>


       
