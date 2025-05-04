import React from 'react';
import { useCart } from '../../context/cartContext';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border rounded p-4 shadow-sm">
      <img src={product.image} alt={product.title} className="h-40 object-contain mb-2" />
      <h2 className="font-semibold">{product.title}</h2>
      <p className="text-sm text-gray-600">{product.price.toLocaleString()} so'm</p>
      <button onClick={() => addToCart(product)} className="mt-2 flex items-center gap-1 bg-orange-400 hover:bg-orange-500 text-white px-3 py-1 rounded">
        <ShoppingCart size={16} /> Qo'shish
      </button>
    </div>
  );
};

export default ProductCard;
