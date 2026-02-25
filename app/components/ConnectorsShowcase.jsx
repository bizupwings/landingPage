"use client";

import { useState } from "react";
import ImageCarousel from "@/app/components/ImageCarousel";

const connectorsData = [
  {
    id: "plugable",
    button: "Plugable",
    title: "Plugable Terminal Block",
    description:
      "High reliability pluggable terminal blocks for industrial control, power systems and automation equipment.",
    images: [
      "/products/plugable1.jpg",
      "/products/plugable2.jpg",
    ],
  },
  {
    id: "screw",
    button: "Screw",
    title: "Screw Terminal Block",
    description:
      "Classic screw type terminal blocks with stable connection performance and long service life.",
    images: [
      "/products/screw1.jpg",
      "/products/screw2.jpg",
    ],
  },
  {
    id: "barrier",
    button: "Barrier",
    title: "Barrier Terminal Block",
    description:
      "Barrier type terminal blocks designed for heavy current applications with enhanced insulation performance.",
    images: [
      "/products/barrier1.jpg",
      "/products/barrier2.jpg",
    ],
  },
];

export default function ConnectorsShowcase() {
  const [activeTab, setActiveTab] = useState("plugable");

  const activeProduct = connectorsData.find(
    (item) => item.id === activeTab
  );

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">

        {/* 标题 */}
        <h1 className="text-4xl font-bold mb-12 text-center">
          CONNECTOR SERIES
        </h1>

        {/* 按钮切换 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {connectorsData.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-6 py-2 rounded transition ${
                activeTab === item.id
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-gray-300"
              }`}
            >
              {item.button}
            </button>
          ))}
        </div>

        {/* 内容区域 */}
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl font-bold mb-4">
            {activeProduct.title}
          </h2>

          <p className="mb-8 text-gray-600">
            {activeProduct.description}
          </p>

          <ImageCarousel
            images={activeProduct.images}
            height={420}
          />

        </div>

        {/* PDF 下载 */}
        <div className="text-center mt-16">
          <a
            href="/pdf/connector1.pdf"
            target="_blank"
            className="px-8 py-3 bg-black text-white rounded-lg inline-block hover:bg-gray-800 transition"
          >
            Download Full Catalog (PDF)
          </a>
        </div>

      </div>
    </section>
  );
}
