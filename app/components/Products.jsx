"use client";

import Image from 'next/image';
import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const products: Product[] = [
  { id: 1, name: 'Product 1', price: 10, imageUrl: '/images/product1.jpg' },
  { id: 2, name: 'Product 2', price: 20, imageUrl: '/images/product2.jpg' },
  { id: 3, name: 'Product 3', price: 30, imageUrl: '/images/product3.jpg' },
  { id: 4, name: 'Product 4', price: 40, imageUrl: '/images/product4.jpg' },
  { id: 5, name: 'Product 5', price: 50, imageUrl: '/images/product5.jpg' },
  { id: 6, name: 'Product 6', price: 60, imageUrl: '/images/product6.jpg' },
  { id: 7, name: 'Product 7', price: 70, imageUrl: '/images/product7.jpg' },
  { id: 8, name: 'Product 8', price: 80, imageUrl: '/images/product8.jpg' },
  { id: 9, name: 'Product 9', price: 90, imageUrl: '/images/product9.jpg' },
  { id: 10, name: 'Product 10', price: 100, imageUrl: '/images/product10.jpg' },
  { id: 11, name: 'Product 11', price: 110, imageUrl: '/images/product11.jpg' },
  { id: 12, name: 'Product 12', price: 120, imageUrl: '/images/product12.jpg' },
  { id: 13, name: 'Product 13', price: 130, imageUrl: '/images/product13.jpg' },
  { id: 14, name: 'Product 14', price: 140, imageUrl: '/images/product14.jpg' },
  { id: 15, name: 'Product 15', price: 150, imageUrl: '/images/product15.jpg' },
  { id: 16, name: 'Product 16', price: 160, imageUrl: '/images/product16.jpg' },
];

const Products: React.FC = () => {
  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-contain"
          />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;