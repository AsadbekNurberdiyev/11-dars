import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/header/header";
import ProductCard from "./pages/products/product";
import Cart from "./pages/cart/cart";

const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProductsData(data))
      .catch((error) => console.error("Xatolik:", error));
  }, []);

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    };
    alert(`"${product.title}" savatga qo'shildi!`);
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity <= 0) {
      handleRemoveFromCart(id);
    } else {
      const updatedCart = cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      setCartItems(updatedCart);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="md:w-[80%] mx-auto flex flex-col gap-6 p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {productsData.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            </div>
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemoveFromCart}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
