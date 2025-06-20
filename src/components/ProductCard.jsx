import React from "react";

const ProductCard = ({ image, name, inStock }) => (
  <div className="bg-white rounded-xl shadow-md px-5 py-6 flex flex-col items-center mb-0 transition-shadow hover:shadow-lg min-w-[160px] max-w-[180px] cursor-pointer">
    <div className="w-28 h-28 flex items-center justify-center mb-3">
      <img src={image} alt={name} className="object-contain w-full h-full rounded-lg" />
    </div>
    <div className="text-gray-800 text-base font-medium text-center">{name}</div>
    <div className="text-green-600 text-sm mt-1">{inStock ? "In Stock" : "Out of Stock"}</div>
  </div>
);

export default ProductCard;