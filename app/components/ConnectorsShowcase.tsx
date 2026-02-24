"use client";

import { useState } from "react";
import ImageCarousel from "@/app/components/ImageCarousel";

export default function ConnectorsShowcase() {
  const [activeTab, setActiveTab] = useState("plugable");

  const renderContent = () => {
    switch (activeTab) {
      case "plugable":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Plugable Terminal Block
            </h2>
            <p className="mb-6 text-gray-600">
              High reliability pluggable terminal blocks for industrial control,
              power systems and automation equipment.
            </p>
            <ImageCarousel
              images={[
                "/products/connectors/plugable1.jpg",
                "/products/connectors/plugable2.jpg",
              ]}
              height={420}
            />
          </>
        );

      case "screw":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Screw Terminal Block
            </h2>
            <p className="mb-6 text-gray-600">
              Classic screw type terminal blocks with stable connection
              performance.
            </p>
            <ImageCarousel
              images={[
                "/products/connectors/screw1.jpg",
                "/products/connectors/screw2.jpg",
              ]}
              height={420}
            />
          </>
        );

      case "barrier":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Barrier Terminal Block
            </h2>
            <p className="mb-6 text-gray-600">
              Designed for heavy current applications with enhanced insulation.
            </p>
            <ImageCarousel
              images={[
                "/products/connectors/barrier1.jpg",
                "/products/connectors/barrier2.jpg",
              ]}
              height={420}
            />
          </>
        );

      case "advanced":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Advanced Connector
            </h2>
            <p className="mb-6 text-gray-600">
              High-end power and signal connectors for industrial solutions.
            </p>
            <ImageCarousel
              images={[
                "/products/connectors/advanced1.jpg",
              ]}
              height={420}
            />
          </>
        );
    }
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">

        <h1 className="text-4xl font-bold mb-10 text-center">
          CONNECTOR SERIES
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button onClick={() => setActiveTab("plugable")} className="px-6 py-2 bg-blue-600 text-white rounded">
            Plugable
          </button>
          <button onClick={() => setActiveTab("screw")} className="px-6 py-2 bg-blue-600 text-white rounded">
            Screw
          </button>
          <button onClick={() => setActiveTab("barrier")} className="px-6 py-2 bg-blue-600 text-white rounded">
            Barrier
          </button>
          <button onClick={() => setActiveTab("advanced")} className="px-6 py-2 bg-blue-600 text-white rounded">
            Advanced
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>

        <div className="text-center mt-16">
          <a
            href="/products/connectors.pdf"
            target="_blank"
            className="px-8 py-3 bg-black text-white rounded-lg inline-block"
          >
            Download Full Catalog (PDF)
          </a>
        </div>

      </div>
    </section>
  );
}
