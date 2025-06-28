import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard13";
import { ChevronDown } from "lucide-react";

const categories = [
  
  { image: "UPVCPIPE.png", label: "UPVC Pipe", route: "/categories13" },
  { image: "Chamber.png", label: "Chamber Cover", route: "/categories1" },
  { image: "Kitchensink.png", label: "Kitchen Sink", route: "/categories2" },
  { image: "PVCtaps.png", label: "PVC Taps (Rolex)", route: "/categories3" },
  { image: "Brass.png", label: "Brass faucets", route: "/categories4" },
  { image: "CPVCfittingsandmore.png", label: "CP fittings and more", route: "/categories5" },
  { image: "solvent.png", label: "Solvent", route: "/categories6" },
  { image: "Flush.png", label: "Flush Tank", route: "/categories7" },
  { image: "chambercover.png", label: "Seat Cover", route: "/categories8" },
  { image: "Connection.png", label: "Connection Pipe", route: "/categories9" },
  { image: "PTMT.png", label: "PTMT Taps", route: "/categories10" },
  { image: "sumolex.jpg", label: "Sumolex Pipe & Fittings", route: "/pdf" },
  { image: "sumolex.jpg", label: "Sumolex PTMT Taps", route: "/pdf" },
  { image: "CPVCPIPE.png", label: "CPVC Pipe", route: "/categories4" },
  { image: "UPVCFITTING.png", label: "UPVC Fittings", route: "/categories15" },
  { image: "CPVCFITTING.png", label: "CPVC Fittings", route: "/categories16" },
  { image: "BALL.png", label: "Ball Valve", route: "/categories17" },
];

const products = [
  {
    id: 1,
    name: "CRYSTAL BRAND",
    price: 4500,
    inStock: true,
    image: "/UPVCF.jpg",
  }
];

const Ghotu = () => {
  const [showSort, setShowSort] = useState(false);
  const [items, setItems] = useState(products);
  const [discount, setDiscount] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0); // Default selected category

  return (
    <div className="flex gap-x-6 w-full h-screen bg-[#f9f9e6] overflow-hidden px-6">
      
      {/* LEFT PANEL */}
      <div className="w-72 mt-25 p-12 bg-[#F8F8E1] border-r border-black overflow-y-auto max-h-screen">
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

      {/* RIGHT PANEL */}
      <div className="flex-1 px-2 py-6">
        {/* DISCOUNT BOX */}
        <div className="mb-3  ml-220 flex w-[230px] h-[50px] rounded-2xl overflow-hidden border-4 border-[#1b3554]">
          <div className="flex-1 bg-[#f7933e] text-white flex items-center justify-center text-2xl font-bold">
            Discount
          </div>
          <div className="flex-1 bg-[#9db7c0] flex items-center justify-center">
            <input
              type="number"
              placeholder="%"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="w-full h-full text-center bg-transparent text-[#1b3554] text-3xl font-semibold outline-none"
            />
          </div>
        </div>

        {/* SORT HEADER */}
        <div
          className="flex items-center gap-2 cursor-pointer mb-4"
          onClick={() => setShowSort(!showSort)}
        >
          <h2 className="text-2xl font-semibold text-[#1a1f2c]">CRYSTAL BRAND</h2>
          <ChevronDown className="w-6 h-6 text-[#1a1f2c]" />
        </div>

        {/* SORT MENU */}
        {showSort && (
          <div className="absolute z-10 bg-white border rounded shadow w-52 text-sm">
            <button onClick={() => {}} className="w-full text-left px-4 py-2 hover:bg-gray-100">
              Price: Low to High
            </button>
            <button onClick={() => {}} className="w-full text-left px-4 py-2 hover:bg-gray-100">
              Price: High to Low
            </button>
            <button onClick={() => {}} className="w-full text-left px-4 py-2 hover:bg-gray-100">
              Newest First
            </button>
          </div>
        )}

        {/* PRODUCT GRID */}
        <div className="bg-[#b5c8db] p-10 rounded-2xl min-h-[630px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {items.map((p) => {
              const discountPercent = parseFloat(discount) || 0;
              const discountedPrice = p.price - (p.price * discountPercent) / 100;

              return (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  price={p.price}
                  discountedPrice={discountPercent ? Math.round(discountedPrice) : undefined}
                  image={p.image}
                  inStock={p.inStock}
                  size={`${p.size || ""}"`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ghotu;
