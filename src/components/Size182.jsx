import React, { useState } from "react";
import ProductCard from "./PC182";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  
  { image: "CHINACLIP1.jpg", label: "CHINA CLIP", route: "/size182" },
  { image: "HOSECLIP1.jpg", label: "HOSE CLIP", route: "/size181" },
  { image: "UCLIPf.jpg", label: "U CLIP(PIPE CLIP-PATTI)", route: "/size183" },
   { image: "UPVCNAIL1.jpg", label: "UPVC NAIL CLAMP", route: "/size184" },
   { image: "CPVCNAIL1.jpg", label: "CPVC NAIL CLAMP", route: "/size185" }
];

const products = [
  {
    id: 1,
    name: "CHINA CLIP",
    price: 2.50,
    inStock: true,
    size: "3/4",
    image: "/CHINACLIP1.jpg",
  },
  {
    id: 2,
    name: "CHINA CLIP",
    price: 2.50,
    inStock: true,
    size: "1/2",
    image: "/CHINACLIP1.jpg",
  },
  {
    id: 3,
    name: "CHINA CLIP",
    price: 2.50,
    inStock: true,
    size: "3/4",
    image: "/CHINACLIP1.jpg",
  },
  {
    id: 4,
    name: "CHINA CLIP",
    price: 2.50,
    inStock: true,
    size: "1",
    image: "/CHINACLIP1.jpg",
  },
  {
    id: 5,
    name: "CHINA CLIP",
    price: 2.50,
    inStock: true,
    size: "5/8",
    image: "/CHINACLIP1.jpg",
  },
  {
    id: 6,
    name: "CHINA CLIP",
    price: 4.80,
    inStock: true,
    size: "1-1/4",
    image: "/CHINACLIP1.jpg",
  },
  {
    id: 7,
    name: "CHINA CLIP",
    price: 5.00,
    inStock: true,
    size: "1-1/2",
    image: "/CHINACLIP1.jpg",
  },
  {
    id: 8,
    name: "CHINA CLIP",
    price: 5.50,
    inStock: true,
    size: "1-3/4",
    image: "/CHINACLIP1.jpg",
  },
  {
    id: 9,
    name: "CHINA CLIP WITH KEY",
    price: 5.50,
    inStock: true,
    size: "3/4",
    image: "/CHINAKEY.jpg",
  },
  {
    id: 10,
    name: "CHINA CLIP WITH KEY",
    price: 5.50,
    inStock: true,
    size: "1",
    image: "/CHINAKEY.jpg",
  },
  {
    id:11,
    name: "CHINA CLIP WITH KEY",
    price: 5.50,
    inStock: true,
    size: "1-1/4",
    image: "/CHINAKEY.jpg",
  },
];

const Ghotu = () => {
  const [showSort, setShowSort] = useState(false);
  const [items, setItems] = useState(products);
  const [discount, setDiscount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const sortBy = (type) => {
    const sorted = [...items];
    if (type === "low") sorted.sort((a, b) => a.price - b.price);
    else if (type === "high") sorted.sort((a, b) => b.price - a.price);
    else if (type === "newest") sorted.sort((a, b) => b.id - a.id);
    setItems(sorted);
    setShowSort(false);
  };

  return (
    <div className="flex gap-x-6 w-full h-screen bg-[#f9f9e6] overflow-hidden px-6">
      
      {/* Left Sidebar Scrollable Categories */}
      <div className="w-72 mt-35 p-4 bg-[#F8F8E1] border-r border-black overflow-y-auto max-h-screen">
        {categories.map((cat, i) => (
          <Link to={cat.route} key={i} onClick={() => setSelectedIndex(i)} style={{ textDecoration: "none" }}>
            <div
              className={`w-full max-w-[220px] p-4 rounded-2xl shadow-md mb-6 ${
                i === selectedIndex ? "bg-[#0A2A4D] text-white" : "bg-white text-black"
              } flex flex-col items-center mx-auto`}
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-28 object-cover rounded-md mb-2"
              />
              <h6 className="font-semibold text-sm text-center mb-1">{cat.label}</h6>
              <p className="text-green-400 text-sm">In Stock</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Main Right Side Product Area */}
      <div className="flex-1 px-8 pt-15 pb-12">
        
        {/* Discount Box */}
        <div className="ml-231 flex w-[215px] h-[50px] rounded-2xl overflow-hidden border-4 border-[#1b3554] mb-4">
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

        {/* Sorting Dropdown */}
        <div
          className="flex items-center gap-2 cursor-pointer ml-4 mt-4"
          onClick={() => setShowSort(!showSort)}
        >
          <h3 className="text-2xl  font-semibold text-[#1a1f2c]">
           CHINA CLIP
          </h3>
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

        {/* Product Grid */}
        <div className="bg-[#b5c8db] p-8 rounded-2xl">
          <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
              {items.map((p) => {
                const discountedPrice = p.price - (p.price * discount) / 100;
                return (
                  <ProductCard
  key={p.id}
  id={p.id}
  name={p.name}
  price={p.price}
  image={p.image}
  inStock={p.inStock}
  size={`${p.size || ""}"`}
  discountPercentage={discount}
/>

                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ghotu;


