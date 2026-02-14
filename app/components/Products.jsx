// "use client" directive for using in a client-side component
'use client';

// TypeScript interface for ProductsProps
interface ProductsProps {
    filteredProducts: Array<{
        id: string;
        name: string;
        spec: string;
        color: string;
        application: string;
        imageName: string;
    }>
    selfRender: boolean;
}

const Products = ({ filteredProducts, selfRender }: ProductsProps) => {
    return (
        <div className="products">
            {filteredProducts.map((product) => (
                <div key={product.id} className="product">
                    <Image
                        src={`/images/${product.imageName}`}
                        alt={product.name}
                        fill
                        className="rounded-t-lg object-contain"
                    />
                    <h2>{product.name}</h2>
                    <p>{product.spec}</p>
                    <p>{product.color}</p>
                    <p>{product.application}</p>
                </div>
            ))}
        </div>
    );
};

export default Products;