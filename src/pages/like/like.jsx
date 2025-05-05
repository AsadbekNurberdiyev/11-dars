import React from "react";
import { useLike } from "../../context/likeContext";
import ProductCard from "../products/product";

const Like = () => {
  const { likedItems } = useLike();

  if (likedItems.length === 0) {
    return <div className="text-center mt-10 text-lg">Saralangan mahsulotlar yo'q</div>;
  }

  return (
    <div className="md:w-[80%] mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Saralanganlar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {likedItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Like;
