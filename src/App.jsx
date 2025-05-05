import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/header/header";
import ProductCard from "./pages/products/product";
import Cart from "./pages/cart/cart";
import Like from "./pages/like/like";
import { CartProvider } from "./context/cartContext";
import { LikeProvider } from "./context/likeContext";

const App = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_BASE_URL);
        const data = await res.json();
  
        if (Array.isArray(data)) {
          setProductsData(data);
        } else {
          console.error("Kutilgan massiv emas:", data);
          setProductsData([]);
        }
      } catch (error) {
        console.error("Xatolik:", error);
        setProductsData([]);
      }
    };
  
    fetchProducts();
  }, []);
  

  return (
    <CartProvider>
      <LikeProvider>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="md:w-[80%] mx-auto flex flex-col gap-6 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {productsData.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/like" element={<Like />} />
        </Routes>
      </LikeProvider>
    </CartProvider>
  );
};

export default App;
