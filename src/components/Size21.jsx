import React, { useState } from "react";
import ProductCard from "./PC21";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { image: "Aqua18X18.jpg", label: "AQUA BLU (5TON)", route: "/categories1" },
  { image: "FRP36X36.jpg", label: "SIMATIK FRP", route: "/categories2" },
  
];

const products = [
  {
    id: 1,
    name: "CLASSIC",
    price: 4500,
    inStock: true,
    size: "12X12",
    image: "/CLASSIC12X12.jpg",
  },
  {
    id: 2,
    name: "CLASSIC ",
    price: 6200,
    inStock: true,
    size: "15X15",
    image: "/CLASSIC15X15.jpg",
  },
  {
    id: 3,
    name: "CLASSIC ",
    price: 6200,
    inStock: true,
    size: "18X24",
    image: "/CLASSIC18X24.jpg",
  },
  {
    id: 4,
    name: "CLASSIC ",
    price: 4500,
    inStock: true,
    size: "21X21",
    image: "/CLASSIC21X21.jpg",
  }

];

const Ghotu = () => {
  const [showSort, setShowSort] = useState(false);
  const [items, setItems] = useState(products);
  const [discount, setDiscount] = useState(0);

  const sortBy = (type) => {
    const sorted = [...items];
    if (type === "low") sorted.sort((a, b) => a.price - b.price);
    else if (type === "high") sorted.sort((a, b) => b.price - a.price);
    else if (type === "newest") sorted.sort((a, b) => b.id - a.id);
    setItems(sorted);
    setShowSort(false);
  };

  return (
    <div className="pb-8 w-full flex bg-[#f9f9e6]">
      <div className="w-80 mr-8 p-10 mt-42 bg-[#F8F8E1] text-white flex flex-col border-r-3 border-black gap-6">
        <div className="ml-8 w-45 p-4 rounded-2xl shadow-md bg-[#0A2A4D] text-white flex flex-col items-center">
          <img
            src="Aqua18X18.jpg"
            alt="AQUA BLU (5TON)"
            className="w-full h-28 object-content rounded-md mb-2"
          />
          <h6 className="font-semibold text-sm text-center mb-1">
            SIMATIK FRP 
          </h6>
          <p className="text-green-300 text-sm">In Stock</p>
        </div>
         <div className="ml-8 w-45 p-4 rounded-2xl shadow-md bg-white text-black flex flex-col items-center">
          <img
            src="FRP36X36.jpg"
            alt="SIMATIK FRP"
            className="w-full h-28 object-content rounded-md mb-2"
          />
          <h6 className="font-semibold text-sm text-center mb-1">
           AQUA BLU (5TON) 
          </h6>
          <p className="text-green-300 text-sm">In Stock</p>
        </div>
      </div>

      <div className="flex-1 px-8 pt-15 pb-12">
        <div className="relative mb-6">
          <div className="ml-231 flex w-[215px] h-[50px] rounded-2xl overflow-hidden border-4 border-[#1b3554]">
            <div className="flex-1 bg-[#f7933e] text-white flex items-center justify-center text-2xl font-bold">
              Discount
            </div>
            <div className="flex-1 bg-[#9db7c0] flex items-center justify-center">
              <input
                type="number"
                min="0"
                max="100"
                value={discount}
                onChange={(e) => setDiscount(Number(e.target.value))}
                placeholder="%"
                className="w-16 px-2 py-1 text-black rounded text-center outline-none"
              />
            </div>
          </div>

          <div
            className="flex items-center gap-2 cursor-pointer ml-4 mt-4"
            onClick={() => setShowSort(!showSort)}
          >
            <h2 className="text-2xl font-semibold text-[#1a1f2c]">
              SIMATIK FRP
            </h2>
            <ChevronDown className="w-6 h-6 text-[#1a1f2c]" />
          </div>

          {showSort && (
            <div className="absolute top-32 left-4 bg-white rounded shadow w-52 border z-10 text-sm">
              {['low', 'high', 'newest'].map((type) => (
                <button
                  key={type}
                  onClick={() => sortBy(type)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 capitalize"
                >
                  {type === 'low' && 'Price: Low to High'}
                  {type === 'high' && 'Price: High to Low'}
                  {type === 'newest' && 'Newest First'}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="bg-[#b5c8db] p-8 rounded-2xl">
          <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
              {items.map((p) => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  price={p.price}
                  image={p.image}
                  inStock={p.inStock}
                  size={`${p.size}"`}
                  discountPercentage={discount}
                />
              ))}
            </div>
          </div>

          {items.length === 0 && (
            <div className="text-center py-16 text-gray-600">
              No products match your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ghotu;



