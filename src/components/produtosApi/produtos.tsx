import { useState, useEffect } from 'react';
import '../../index.css';

interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    images: string[];
    thumbnail: string;
}

interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

const Produtos = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Função para buscar os produtos da API
    const fetchProducts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setProducts(data.products);
            setLoading(false); // Carregamento finalizado
        } catch (error) {
            console.error('Erro ao buscar API', error);
            setLoading(false); // Carregamento finalizado com erro
        }
    };

    // useEffect para buscar os produtos ao montar o componente
    useEffect(() => {
        fetchProducts();
    }, []);

    // Exibição condicional enquanto carrega
    if (loading) {
        return <div className="text-center">Carregando...</div>;
    }

    return (
        <div className="text-center p-4">
            <h3 className="text-xl   font-bold text-blue-500 mb-4">
                Veja nosso Catálogo de Produtos
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 rounded shadow-lg hover:shadow-xl transition-shadow">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-xl font-semibold">{product.title}</h2>
                        <p className="text-gray-500">{product.category}</p>
                        <p className="mt-2 text-gray-700">{product.description}</p>
                        <p className="mt-2 font-bold text-lg text-green-600">Preço: ${product.price.toFixed(2)}</p>
                        <p className="text-sm text-gray-400">Estoque: {product.stock}</p>
                        <p className="text-sm text-green-500">Desconto: {product.discountPercentage}%</p>
                        <p className="text-sm text-yellow-500">Avaliação: {product.rating}/5</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Comprar</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Produtos;
