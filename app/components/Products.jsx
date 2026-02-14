"use client";

import Image from 'next/image';
import React from 'react';

const Products = () => {
    return (
        <div>
            <h1>Our Products</h1>
            <Image 
                src="/path/to/image.jpg" 
                alt="Product Image" 
                fill 
                className="object-cover"
            />
            <p>Description of the products.</p>
        </div>
    );
};

export default Products;