// app/components/Products.jsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

// TypeScript interfaces
interface Product {
    title: string;
    category: string;
    specs: string;
    colors: string[];
    applications: string[];
    imagePath: string;
}

interface ProductsProps {
    products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
    return (
        <div>
            <h1>Our Products</h1>
            <div className="product-list">
                {products.map((product, index) => (
                    <div key={index} className="product-item">
                        <Image src={product.imagePath} alt={product.title} style={{ fill: 'contain' }} />
                        <h2>{product.title}</h2>
                        <p>Category: {product.category}</p>
                        <p>Specs: {product.specs}</p>
                        <p>Colors: {product.colors.join(', ')}</p>
                        <p>Applications: {product.applications.join(', ')}</p>
                    </div>
                ))}
            </div>
            <Link href='/products'>
                <Button title='See All Products' />
            </Link>
        </div>
    );
};

export default Products;

// Complete products data
const productsData: Product[] = [
    { title: 'General Purpose LED', category: 'LEDs', specs: 'Standard 5mm, 10mm', colors: ['Red', 'Green', 'Blue', 'Yellow'], applications: ['Indicator lights', 'Displays'], imagePath: '/images/general-purpose-led.jpg' },
    { title: 'High Bright LED', category: 'LEDs', specs: 'High intensity', colors: ['White', 'Blue'], applications: ['Outdoor lighting', 'Stage lighting'], imagePath: '/images/high-bright-led.jpg' },
    { title: 'Power LED', category: 'LEDs', specs: 'High power output', colors: ['Cool White', 'Warm White'], applications: ['Lighting fixtures', 'Automotive'], imagePath: '/images/power-led.jpg' },
    { title: 'Infra Red LEDs', category: 'LEDs', specs: '850nm wavelength', colors: ['Infrared'], applications: ['Remote controls', 'Surveillance'], imagePath: '/images/infra-red-leds.jpg' },
    { title: 'Lithium Batteries', category: 'Batteries', specs: 'Lithium-ion', colors: ['Various'], applications: ['Electronics', 'Power tools'], imagePath: '/images/lithium-batteries.jpg' },
    { title: 'Nickel Batteries', category: 'Batteries', specs: 'NiMH', colors: ['Various'], applications: ['Rechargeable devices', 'Toys'], imagePath: '/images/nickel-batteries.jpg' },
    { title: 'Capacitors', category: 'Components', specs: 'Various capacitance', colors: ['Yellow', 'Blue'], applications: ['Power supply', 'Signal coupling'], imagePath: '/images/capacitors.jpg' },
    { title: 'Resistors', category: 'Components', specs: '1kΩ, 10kΩ, etc.', colors: ['Brown', 'Black'], applications: ['Current limiting', 'Biasing'], imagePath: '/images/resistors.jpg' },
    { title: 'LCD Displays', category: 'Displays', specs: '16x2', colors: ['Black', 'Blue'], applications: ['Data display', 'Embedded systems'], imagePath: '/images/lcd-displays.jpg' },
    { title: 'LED Displays', category: 'Displays', specs: '7-segment', colors: ['Red', 'Green'], applications: ['Clocks', 'Counters'], imagePath: '/images/led-displays.jpg' },
    { title: 'Shunt Resistors', category: 'Components', specs: '0.01Ω, 0.1Ω', colors: ['Metallic'], applications: ['Current measurement'], imagePath: '/images/shunt-resistors.jpg' },
    { title: 'Crystals & Oscillators', category: 'Components', specs: '12MHz', colors: ['Clear'], applications: ['Timing circuits'], imagePath: '/images/crystals-oscillators.jpg' },
    { title: 'Transformers', category: 'Components', specs: 'Step-down', colors: ['Metal'], applications: ['Power supply'], imagePath: '/images/transformers.jpg' },
    { title: 'Bare PCB', category: 'Components', specs: '1.6mm thickness', colors: ['Green'], applications: ['Custom electronics'], imagePath: '/images/bare-pcb.jpg' },
    { title: 'Relays', category: 'Components', specs: '12V', colors: ['Black'], applications: ['Switching circuits'], imagePath: '/images/relays.jpg' },
    { title: 'Circuit Safety Devices', category: 'Components', specs: 'Fuses', colors: ['Transparent'], applications: ['Overcurrent protection'], imagePath: '/images/circuit-safety-devices.jpg' },
];