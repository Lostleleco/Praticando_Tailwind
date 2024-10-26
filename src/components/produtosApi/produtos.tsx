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
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    // Função para buscar os produtos da API
    const fetchProducts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setProducts(data.products);
            setLoading(false);
        } catch (error) {
            console.error('Erro ao buscar API', error);
            setLoading(false);
        }
    };

    // Agrupando produtos por categoria
    const getProductsByCategory = () => {
        return products.reduce((acc: { [category: string]: Product[] }, product) => {
            acc[product.category] = acc[product.category] || [];
            acc[product.category].push(product);
            return acc;
        }, {});
    };

    // Função para lidar com a mudança de seleção de categorias
    const handleCategoryChange = (category: string) => {
        setSelectedCategories((prevSelected) =>
            prevSelected.includes(category)
                ? prevSelected.filter((cat) => cat !== category)
                : [...prevSelected, category]
        );
    };

    // useEffect para buscar os produtos ao montar o componente
    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return <div className="text-center">Carregando...</div>;
    }

    const productsByCategory = getProductsByCategory();
    const uniqueCategories = Object.keys(productsByCategory);

    return (
        <div className="text-center p-4">
            <h3 className="text-xl font-bold text-blue-500 mb-4">Veja nosso Catálogo de Produtos por Categoria</h3>

            {/* Filtro de Categorias */}
            <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-700">Filtrar por Categoria:</h4>
                <div className="flex flex-wrap gap-2 justify-center mt-2 ">
                    {uniqueCategories.map((category) => (
                        <label key={category} className="">
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(category)}
                                onChange={() => handleCategoryChange(category)}
                                className="mr-2"
                            />
                            {category}
                        </label>
                    ))}
                </div>
            </div>

            {/* Exibição dos Produtos Filtrados */}
            {uniqueCategories
                .filter((category) => selectedCategories.length === 0 || selectedCategories.includes(category))
                .map((category) => (
                    <div key={category} className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-700 mb-4">{category}</h4>

                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-4">
                            {productsByCategory[category].map((product) => (
                                <div key={product.id} className="border p-4 rounded shadow-lg hover:shadow-xl transition-shadow">
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        className="w-full h-48 object-cover rounded-md mb-4"
                                    />
                                    <h2 className="text-xl font-semibold">{product.title}</h2>
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
                ))}
        </div>
    );
};

export default Produtos;
