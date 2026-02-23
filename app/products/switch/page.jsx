"use client";

import Image from "next/image";
import Link from "next/link";

export default function SwitchPage() {
  return (
    <section className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <div className="bg-white py-20 border-b">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">
            Switch Product Series
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete range of rocker, push button, toggle and micro switches 
            designed for industrial and appliance applications.
          </p>
        </div>
      </div>

      {/* CATEGORY GRID */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Rocker Switch",
              desc: "Panel mount rocker switches with multiple actuator styles.",
              img: "/products/switch/rocker.jpg",
            },
            {
              title: "Push Button Switch",
              desc: "Momentary and latching push switches for control panels.",
              img: "/products/switch/push.jpg",
            },
            {
              title: "Micro Switch",
              desc: "Compact snap-action switches for precise triggering.",
              img: "/products/switch/micro.jpg",
            },
            {
              title: "Toggle Switch",
              desc: "Reliable toggle switches for power and signal control.",
              img: "/products/switch/toggle.jpg",
            },
            {
              title: "Power Socket",
              desc: "AC power entry modules and integrated sockets.",
              img: "/products/switch/socket.jpg",
            },
            {
              title: "Jack Series",
              desc: "Audio jacks and DC connectors for electronics.",
              img: "/products/switch/jack.jpg",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6"
            >
              <div className="mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full"
                />
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {item.desc}
              </p>

              <button className="text-blue-600 font-semibold">
                View Series →
              </button>
            </div>
          ))}

        </div>
      </div>

      {/* DOWNLOAD SECTION */}
      <div className="bg-white py-16 border-t">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Download Full Switch Catalog
          </h2>
          <a
            href="/pdf/switch-catalog.pdf"
            target="_blank"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Download PDF
          </a>
        </div>
      </div>

    </section>
  );
}
