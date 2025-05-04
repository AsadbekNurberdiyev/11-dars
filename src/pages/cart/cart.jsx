import React from 'react';
import { useCart } from '../../context/cartContext';
import { Trash2 } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="md:w-[80%] mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">Savat</h1>
      <p className="text-gray-500 mb-4">{cartItems.length} tovarlar</p>
      <hr />

      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        <div className="flex flex-col gap-6 flex-1">
          {cartItems.map(item => (
            <div key={item.id} className="flex gap-4 border-b pb-4">
              <img src={item.image} alt={item.title} className="w-28 h-28 object-contain" />
              <div className="flex flex-col flex-grow">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600">Narx: {item.price.toLocaleString()} so'm</p>
                <p className="text-sm text-gray-600">Sotuvchi: {item.seller || "JOYBOX"}</p>
                <p className="text-sm text-gray-500">Toshkent bo'ylab 1 kundan boshlab. O'zbekiston bo'ylab 3 kundan boshlab</p>

                <div className="bg-gray-100 p-3 rounded-lg w-fit mt-2 text-sm">
                  <span className="font-semibold">{Math.round(item.price / 24).toLocaleString()} so'm</span> x 24 oyga
                </div>

                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center border rounded">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1">-</button>
                    <span className="px-4">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1">+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="flex items-center gap-1 text-gray-500 hover:text-red-500">
                    <Trash2 size={16} /> O'chirish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-[300px] bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Jami</h2>
          <p className="text-2xl font-bold">{totalPrice.toLocaleString()} so'm</p>
          <div className="text-sm text-gray-600 mt-2">
            <p>Tovarlar soni: {cartItems.length} dona</p>
            <p className="text-green-600 font-semibold">Yetkazib berish: Bepul</p>
            <p className="text-gray-500">Toshkent bo'ylab 1 kundan, O'zbekiston bo'ylab 3 kundan</p>
          </div>
          <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 w-full rounded">
            Rasmiylashtirish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
