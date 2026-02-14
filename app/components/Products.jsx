import React from 'react';
import Image from 'next/image';

// Define Product interface for TypeScript
interface Product {
    id: number;
    name: string;
    price: string;
    description: string;
    imageUrl: string;
}

// Define props for selfRender function
interface SelfRenderProps {
    products: Product[];
}

// "use client" directive
'use client';

const Products: React.FC<SelfRenderProps> = ({ products }) => {
    return (
        <div className="products" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {products.map(product => (
                <div key={product.id} className="product-card" style={{ margin: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '200px', padding: '10px' }}>
                    <Image src={product.imageUrl} alt={product.name} width={200} height={200} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                </div>
            ))}
        </div>
    );
};

// Example products data (16 products with full data)
const exampleProducts: Product[] = [
    { id: 1, name: 'Product 1', price: '$10', description: 'Description of Product 1', imageUrl: 'url_to_image_1' },
    { id: 2, name: 'Product 2', price: '$20', description: 'Description of Product 2', imageUrl: 'url_to_image_2' },
    { id: 3, name: 'Product 3', price: '$30', description: 'Description of Product 3', imageUrl: 'url_to_image_3' },
    { id: 4, name: 'Product 4', price: '$40', description: 'Description of Product 4', imageUrl: 'url_to_image_4' },
    { id: 5, name: 'Product 5', price: '$50', description: 'Description of Product 5', imageUrl: 'url_to_image_5' },
    { id: 6, name: 'Product 6', price: '$60', description: 'Description of Product 6', imageUrl: 'url_to_image_6' },
    { id: 7, name: 'Product 7', price: '$70', description: 'Description of Product 7', imageUrl: 'url_to_image_7' },
    { id: 8, name: 'Product 8', price: '$80', description: 'Description of Product 8', imageUrl: 'url_to_image_8' },
    { id: 9, name: 'Product 9', price: '$90', description: 'Description of Product 9', imageUrl: 'url_to_image_9' },
    { id: 10, name: 'Product 10', price: '$100', description: 'Description of Product 10', imageUrl: 'url_to_image_10' },
    { id: 11, name: 'Product 11', price: '$110', description: 'Description of Product 11', imageUrl: 'url_to_image_11' },
    { id: 12, name: 'Product 12', price: '$120', description: 'Description of Product 12', imageUrl: 'url_to_image_12' },
    { id: 13, name: 'Product 13', price: '$130', description: 'Description of Product 13', imageUrl: 'url_to_image_13' },
    { id: 14, name: 'Product 14', price: '$140', description: 'Description of Product 14', imageUrl: 'url_to_image_14' },
    { id: 15, name: 'Product 15', price: '$150', description: 'Description of Product 15', imageUrl: 'url_to_image_15' },
    { id: 16, name: 'Product 16', price: '$160', description: 'Description of Product 16', imageUrl: 'url_to_image_16' },
];

export default Products;
