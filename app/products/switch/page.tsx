"use client";

import { useState } from "react";
import ImageCarousel from "@/app/components/ImageCarousel";

export default function SwitchPage() {
  const [activeTab, setActiveTab] = useState("rocker");

  const renderContent = () => {
    switch (activeTab) {
      case "rocker":
        return (
          <ImageCarousel
            images={[
              "/images/switch/rocker1.jpg",
              "/images/switch/rocker2.jpg",
            ]}
            height={420}
          />
        );

      case "push":
        return (
          <ImageCarousel
            images={[
              "/images/switch/push1.jpg",
              "/images/switch/push2.jpg",
            ]}
            height={420}
          />
        );

      case "micro":
        return (
          <ImageCarousel
            images={[
              "/images/switch/micro1.jpg",
              "/images/switch/micro2.jpg",
            ]}
            height={420}
          />
        );

      case "toggle":
        return (
          <ImageCarousel
            images={[
              "/images/switch/toggle1.jpg",
              "/images/switch/toggle2.jpg",
            ]}
            height={420}
          />
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">

        <h1 className="text-4xl font-bold mb-8">Switch Series</h1>

        {/* Tabs */}
        <div className="flex gap-6 border-b mb-10">
          {["rocker", "push", "micro", "toggle"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 font-semibold capitalize ${
                activeTab === tab
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500"
              }`}
            >
              {tab} Switch
            </button>
          ))}
        </div>

        {/* Content */}
        {renderContent()}

        {/* PDF Download */}
        <div className="mt-16">
          <a
            href="/pdf/switch-catalog.pdf"
            target="_blank"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Download Full Switch Catalogue (PDF)
          </a>
        </div>

      </div>
    </section>
  );
}
