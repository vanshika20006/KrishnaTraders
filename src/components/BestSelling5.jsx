import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react"; // Added Menu and X icons for mobile sidebar

// --- Re-integrated and Responsive ProductCard Component (with price and size display) ---
// This ProductCard will be used by both DesktopGhotu and MobileGhotu
const ProductCard = ({
  id,
  name,
  price,
  image,
  inStock,
  size,
  discountPercentage,
}) => {
  const navigate = useNavigate();

  // Calculate discounted price if discountPercentage is provided
  const discountedPrice = discountPercentage
    ? Math.round(price - (price * discountPercentage) / 100)
    : null;

const handleClick = () => {
    navigate(`/varients5${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all bg-white
                 flex flex-col" // Added flex-col for consistent vertical alignment on smaller cards
    >
      {/* Image Section */}
      {/* Responsive image height: h-32 for small screens, h-48 for medium/desktop */}
      <div className="w-full h-32 md:h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-content" // Kept object-content as per your original ProductCard
        />
      </div>

      {/* Details Section */}
      {/* Responsive padding and font sizes */}
      <div className="bg-white p-3 md:p-4 text-center">
        <h6 className="font-semibold text-sm md:text-base">{name}</h6>
       

       

        <p className={`text-xs ${inStock ? "text-green-600" : "text-red-600"} mt-1`}>
          {inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>
    </div>
  );
};


// --- Common Data (Moved outside components to avoid re-declaration) ---
const categories = [
  
  { image: "CPVCfittingsandmore.png", label: "CP fittings and more", route: "/categories5" },
  { image: "Kitchensink.png", label: "Kitchen Sink", route: "/categories2" },
   { image: "Brass.png", label: "Brass faucets", route: "/categories4" },
  { image: "Chamber.png", label: "Chamber Cover", route: "/categories1" },
  
  { image: "PVCtaps.png", label: "PVC Taps (Rolex)", route: "/varients3" },
 
  { image: "solvent.png", label: "Solvent", route: "/categories6" },
  { image: "Flush.png", label: "Flush Tank", route: "/categories7" },
  { image: "chambercover.png", label: "Seat Cover", route: "/categories8" },
  { image: "Connection.png", label: "Connection Pipe", route: "/categories9" },
  { image: "PTMT.png", label: "PTMT Taps", route: "/categories10" },
  { image: "sumolex.jpg", label: "Sumolex Pipe & Fittings", route: "/pdf1" },
  { image: "sumolex.jpg", label: "Sumolex PTMT Taps", route: "/pdf2" },
  { image: "UPVCPIPE.png", label: "UPVC Pipe", route: "/categories13" },
  { image: "CPVCPIPE.png", label: "CPVC Pipe", route: "/categories4" },
  { image: "UPVCFITTING.png", label: "UPVC Fittings", route: "/pdf3" },
  { image: "CPVCFITTING.png", label: "CPVC Fittings", route: "/pdf4" },
  { image: "BALL.png", label: "Ball Valve", route: "/categories17" },
];
// Sample product data with different images and properties
const products = [
  {
    id: 1,
    name: "SS EXTENSION NIPPLE",
    price: 4500,
    inStock: true,
    size: 36, // in inches
    image: "/CPF1.jpg",
  },
  {
    id: 2,
    name: "SS(304) SHOWER ",
    price: 4500,
    inStock: true,
    size: 36, // in inches
    image: "/CPF2.jpg",
  },
  {
    id: 3,
    name: "SHOWER ROD",
    price: 4500,
    inStock: true,
    size: 36, // in inches
    image: "/CPF3.jpg",
  },
  {
    id: 4,
    name: "CP FLANCH",
    price: 4500,
    inStock: true,
    size: 36, // in inches
    image: "/CPF4.jpg",
  },
  
  {
    id: 5,
    name: "HEALTH FAUCET",
    price: 4500,
    inStock: true,
    size: 36, // in inches
    image: "/CPF5.jpg",
  },
  {
    id: 6,
    name: "TEFLON TAPE",
    price: 4500,
    inStock: true,
    size: 36, // in inches
    image: "/CPF6.jpg",
  },
  {
    id: 7,
    name: "SS JALI",
    price: 4500,
    inStock: true,
    size: 36, // in inches
    image: "/CPF7.jpg",
  },
  {
    id: 8,
    name: "ANGLE COCK",
    price: 4500,
    inStock: true,
    size: 36, // in inches
    image: "/CPF8.jpg",
  },
  {
    id: 9,
    name: "SPENDLE DISC",
    price: 4500,
    inStock: true,
    size: 36, // in inches
    image: "/CPF9.jpg",
  },
  
];
const DesktopGhotu = () => {
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
    // This entire div for DesktopGhotu remains unchanged from your original code
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
        {/* ml-231 is kept as per your original code */}
        

        {/* Sorting Dropdown */}
        <div
          className="flex items-center gap-2 cursor-pointer ml-4 mt-4"
          onClick={() => setShowSort(!showSort)}
        >
          <h3 className="text-2xl  font-semibold text-[#1a1f2c]">
          CP fittings and more
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


// --- Mobile Ghotu Component (New and responsive for mobile screens) ---
const MobileGhotu = () => {
  const [showSort, setShowSort] = useState(false);
  const [items, setItems] = useState(products);
  const [discount, setDiscount] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar

  const sortBy = (type) => {
    const sorted = [...items];
    if (type === "low") sorted.sort((a, b) => a.price - b.price);
    else if (type === "high") sorted.sort((a, b) => b.price - a.price);
    else if (type === "newest") sorted.sort((a, b) => b.id - a.id);
    setItems(sorted);
    setShowSort(false);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f9f9e6] overflow-x-hidden p-4">
      {/* Top Bar for Mobile */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#1a1f2c]">CP fittings and more</h2>
        <div className="flex items-center gap-4">
          {/* Discount input on mobile top bar */}
          
          {/* Menu button for mobile sidebar */}
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 rounded-md bg-[#0A2A4D] text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* LEFT PANEL - MOBILE SIDEBAR (sliding drawer) */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#F8F8E1] z-50 transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} w-64 p-4 overflow-y-auto`}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-[#1a1f2c]">Categories</h3>
          <button onClick={() => setIsSidebarOpen(false)} className="p-1 rounded-md text-[#1a1f2c]">
            <X className="w-6 h-6" />
          </button>
        </div>
        {categories.map((cat, i) => (
          <Link to={cat.route} key={i} onClick={() => setIsSidebarOpen(false)} style={{ textDecoration: "none" }}>
            <div
              className={`w-full p-3 rounded-lg shadow-sm mb-4 bg-white text-black
                flex items-center space-x-3`}
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h6 className="font-semibold text-sm">{cat.label}</h6>
                <p className="text-green-400 text-xs">In Stock</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* SORT HEADER - MOBILE */}
      <div
        className="flex items-center gap-2 cursor-pointer mb-4 self-end" // Align to right
        onClick={() => setShowSort(!showSort)}
      >
        <span className="text-base font-semibold text-[#1a1f2c]">Sort By</span>
        <ChevronDown className="w-5 h-5 text-[#1a1f2c]" />
      </div>

      {/* SORT MENU - MOBILE */}
      {showSort && (
        <div className="absolute right-4 top-[100px] z-20 bg-white border rounded shadow w-40 text-xs">
          {['low', 'high', 'newest'].map((type) => (
            <button
              key={type}
              onClick={() => {sortBy(type); setShowSort(false);}}
              className="w-full text-left px-3 py-2 hover:bg-gray-100 capitalize"
            >
              {type === 'low' && 'Price: Low to High'}
              {type === 'high' && 'Price: High to Low'}
              {type === 'newest' && 'Newest First'}
            </button>
          ))}
        </div>
      )}

      {/* PRODUCT GRID - MOBILE */}
      <div className="bg-[#b5c8db] p-4 rounded-xl flex-1 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          {items.map((p) => {
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
  );
};


// --- Main Ghotu Component (Renders based on screen size) ---
const Ghotu = () => {
  return (
    <>
      {/* Desktop Component: visible only on large screens (lg breakpoint and up) */}
      <div className="hidden lg:block">
        <DesktopGhotu />
      </div>

      {/* Mobile Component: visible only on screens smaller than large (below lg breakpoint) */}
      <div className="lg:hidden">
        <MobileGhotu />
      </div>
    </>
  );
};

export default Ghotu;