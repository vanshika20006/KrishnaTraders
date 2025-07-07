import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ image, name, inStock, price, size, slug }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product${slug}`, {
      state: { name, price, inStock, image, size }, // yeh data pass karega
    });
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl shadow-md px-5 py-6 flex flex-col items-center mb-0 transition-shadow hover:shadow-lg min-w-[160px] max-w-[180px] cursor-pointer h-full"
    >
      <div className="w-28 h-28 flex items-center justify-center mb-3">
        <img src={image} alt={name} className="object-contain w-full h-full rounded-lg" />
      </div>
      <div className="text-gray-800 text-base font-medium text-center">{name}</div>
      <div className="text-green-600 text-sm mt-1">{inStock ? "In Stock" : "Out of Stock"}</div>
    </div>
  );
};

export default ProductCard;
