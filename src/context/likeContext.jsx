import React, { createContext, useContext, useState } from "react";

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState([]);

  const toggleLike = (product) => {
    const isLiked = likedItems.some((item) => item.id === product.id);
    if (isLiked) {
      setLikedItems(likedItems.filter((item) => item.id !== product.id));
    } else {
      setLikedItems([...likedItems, product]);
    }
  };

  return (
    <LikeContext.Provider value={{ likedItems, toggleLike }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLike = () => useContext(LikeContext);
