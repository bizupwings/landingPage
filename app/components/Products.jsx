"use client";

import Image from 'next/image';
import Link from "next/link";
import { Button } from '@/components/ui/button';

const products = [
  {
    title: "General Purpose LED",
    slug: "general-purpose-led",
    category: "LED",
    specs: "3mm, 5mm Diffused/Transparent LED",
    colors: ["Red", "Green", "Yellow", "Amber", "Blue", "White"],
    applications: ["UPS", "Inverter", "Stabilisers", "Telecom", "Power Supply"],
    image:"general_led.jpg",

  },
  {
    title: "High Bright LED",
    slug: "high-bright-led",
    category: "LED",
    specs: "3mm, 5mm, 8mm, 10mm High bright LED (4000mcd to 20,000mcd)",
    colors: ["Red", "Green", "Yellow", "Amber", "Blue", "White"],
    applications: ["Traffic Signals", "Railway Signals", "Indoor & Outdoor Lighting"],
    image:"high_bright_led.jpeg",
  },
  {
    title: "Power LED",
    slug: "power led",
    category: "LED",
    specs: "Star type, Chip type, High bright LED (0.5W to 30W)",
    colors: ["Warm White", "Cool White", "Milky White"],
    applications: ["Decoration", "Home/Commercial Lighting", "Street Lighting"],
    image:"power_led.png",
  },
  {
    title: "Infra Red and Other LEDs",
    slug: "infra red and other leds",
    category: "LED",
    specs: "Round IR LED, Moulded IR Modules, PLCC/SMD LEDs",
    applications: ["Remote Control Systems", "TV", "Energy Meters"],
    image:"ir_led.jpg",
  },
  {
    title: "Lithium Batteries",
    slug: "lithium batteries",
    category: "Batteries",
    specs: "Li/SOCI2, Li/MnO2, Li-ion, Li-Polymer (25mAh to 10,000mAh)",
    types: ["Coin", "Cylindrical", "Wafer Cells"],
    applications: ["Memory Back-up", "Energy Meter", "GPS"],
    image:"li-battery.jpeg",
  },
  {
    title: "Nickel Batteries",
    slug: "nickel batteries",
    category: "Batteries",
    specs: "Ni-Mh, Ni-Cd Batteries (25mAh to 50,000mAh)",
    types: ["Coin", "Cylindrical", "Wafer Cells"],
    applications: ["Wireless Telephone", "Smoke Alarm", "Night Vision"],
    image:"ni_battery.jpg",
  },
  {
    title: "Capacitors",
    slug: "capacitors",
    category: "Capacitors",
    specs: "Aluminium Electrolytic, Ceramic, Tantalum, SMD",
    image:"capacitor.jpg",
  },
  {
    title: "Resistors",
    slug: "resistors",
    category: "Resistors",
    specs: "CFR, MFR, Wire Wound, SMD, Fusible",
    image:"resistor.jpg",
  },
  {
    title: "LCD Displays",
    slug: "lcd displays",
    category: "Liquid Crystal Display (LCD)",
    specs: "Alpha Numeric, Seven Segment, Graphics LCD",
    image:"lcd.jpg",
  },
  {
    title: "LED Displays",
    slug: "led displays",
    category: "LED Display",
    specs: "Seven Segment (0.30\" to 8\"), Arrow, Dot",
    image:"led.png",
  },
  {
    title: "Shunt Resistors",
    slug: "shunt resistors",
    category: "Shunt Resistance",
    specs: "Custom Material for Energy Meters",
    image:"shard.jpg",
  },
  {
    title: "Crystals & Oscillators",
    slug: "crystals&oscillators",
    category: "Crystals & Frequency Devices",
    specs: "HC49U, HC49S, SMD Tuning Fork, Resonators",
    image:"quartz.jpg",
  },
  {
    title: "Transformers",
    slug: "transformers",
    category: "Transformers",
    specs: "Current, Potential, Power Transformers",
    image:"transformer.jpg",
  },
  {
    title: "Bare PCB",
    slug: "bare pcb",
    category: "Bare PCB",
    specs: "2 to 14 Layers (Single/Double Side)",
    image:"pcb.jpg",
  },
  {
    title: "Relays",
    slug: "relays",
    category: "Relays",
    specs: "Telecom, Automotive, Reed Relays",
    image:"relays.jpg",
  },
  {
    
    title: "Circuit Safety Devices",
    slug: "circuit safety devices",
    category: "Circuit Safety Devices",
    specs: "Fuses (Auto/Glass/Ceramic/SMD), MOV",
    image:"fuse.jpg",
  },
];

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
           <Link key={index} href={`/products/${product.slug}`}>
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
                  <h4 className="font-semibold text-sm text-gray-700">Applications:</h4>
                  <ul className="text-xs text-gray-600 list-disc ml-4 mt-1">
                    {product.applications.map((app, i) => (
                      <li key={i}>{app}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='m-4 flex items-center justify-center'>
          <Link href="/products/all">
            <Button variant="default" size="lg">See All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
