import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react"; // Added Menu and X icons for mobile sidebar

// --- Existing ProductCard Component (with price removed) ---
// This ProductCard will be used by both DesktopGhotu and MobileGhotu
const ProductCard = ({ id, name, image, inStock }) => { // Removed price and discountedPrice from props
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/varients11${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all bg-white
                 flex flex-col" // Added flex-col for consistent vertical alignment on smaller cards
    >
      {/* Image Section - full width/height top part */}
      <div className="w-full h-32 md:h-48"> {/* Responsive image height */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-content" // Changed object-content to object-cover
        />
      </div>

      {/* Details Section */}
      <div className="bg-white p-3 md:p-4 text-center"> {/* Responsive padding */}
        <h6 className="font-semibold text-sm md:text-base">{name}</h6> {/* Responsive font size */}
        {/* Price display removed as per request */}
        <p className={`text-xs ${inStock ? "text-green-600" : "text-red-600"} mt-1`}>
          {inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>
    </div>
  );
};


// --- Common Data (Moved outside components to avoid re-declaration) ---
const categories = [
  
  { image: "UPVCPIPE.png", label: "UPVC Pipe", route: "/categories13" },
  { image: "Chamber.png", label: "Chamber Cover", route: "/categories1" },
  { image: "Kitchensink.png", label: "Kitchen Sink", route: "/categories2" },
  { image: "PVCtaps.png", label: "PVC Taps (Rolex)", route: "/varients3" },
  { image: "Brass.png", label: "Brass faucets", route: "/categories4" },
  { image: "CPVCfittingsandmore.png", label: "CP fittings and more", route: "/categories5" },
  { image: "solvent.png", label: "Solvent", route: "/categories6" },
  { image: "Flush.png", label: "Flush Tank", route: "/categories7" },
  { image: "chambercover.png", label: "Seat Cover", route: "/categories8" },
  { image: "Connection.png", label: "Connection Pipe", route: "/categories9" },
  { image: "PTMT.png", label: "PTMT Taps", route: "/categories10" },
  { image: "sumolex.jpg", label: "Sumolex Pipe & Fittings", route: "/pdf1" },
  { image: "sumolex.jpg", label: "Sumolex PTMT Taps", route: "/pdf2" },
  { image: "CPVCPIPE.png", label: "CPVC Pipe", route: "/categories4" },
  { image: "UPVCFITTING.png", label: "UPVC Fittings", route: "/pdf3" },
  { image: "CPVCFITTING.png", label: "CPVC Fittings", route: "/pdf4" },
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
];// --- Desktop Ghotu Component ---
const DesktopGhotu = () => {
  const [showSort, setShowSort] = useState(false);
  const [items, setItems] = useState(products); // Use local state for filtered items
  const [discount, setDiscount] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0); // Default selected category

  return (
    <div className="flex gap-x-6 w-full h-screen bg-[#f9f9e6] overflow-hidden px-6">
      {/* LEFT PANEL - DESKTOP */}
      <div className="w-60 mt-20 p-6 bg-[#F8F8E1] border-r border-black overflow-y-auto max-h-screen">
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
                className="w-full h-28 object-content rounded-md mb-2"
              />
              <h6 className="font-semibold text-sm text-center mb-1">{cat.label}</h6>
              <p className="text-green-400 text-sm">In Stock</p>
            </div>
          </Link>
        ))}
      </div>

      {/* RIGHT PANEL - DESKTOP */}
      <div className="flex-1 px-2 py-6">
        {/* DISCOUNT BOX - DESKTOP */}
       

        {/* SORT HEADER - DESKTOP */}
        <div
          className="flex items-center gap-2 cursor-pointer mb-4"
          onClick={() => setShowSort(!showSort)}
        >
          <h2 className="text-2xl font-semibold text-[#1a1f2c]">CRYSTAL BRAND</h2>
          <ChevronDown className="w-6 h-6 text-[#1a1f2c]" />
        </div>

        {/* SORT MENU - DESKTOP */}
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

        {/* PRODUCT GRID - DESKTOP */}
        <div className="bg-[#b5c8db] p-10 rounded-2xl min-h-[630px] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {items.map((p) => {
              // Discount calculation is still here, but 'discountedPrice' is not passed to ProductCard
              const discountPercent = parseFloat(discount) || 0;
              const discountedPrice = p.price - (p.price * discountPercent) / 100;

              return (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  // price={p.price} // Price prop removed
                  // discountedPrice={discountPercent ? Math.round(discountedPrice) : undefined} // Discounted price prop removed
                  image={p.image}
                  inStock={p.inStock}
                  // size={`${p.size || ""}"`} // Size prop removed as it's not used in ProductCard anymore
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Mobile Ghotu Component ---
const MobileGhotu = () => {
  const [showSort, setShowSort] = useState(false);
  const [items, setItems] = useState(products); // Use local state for filtered items
  const [discount, setDiscount] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f9f9e6] overflow-x-hidden p-4">
      {/* Top Bar for Mobile */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#1a1f2c]">CRYSTAL BRAND</h2>
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

      {/* LEFT PANEL - MOBILE SIDEBAR */}
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
                flex items-center space-x-3`} // Aligned items horizontally for mobile
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-16 h-16 object-cover rounded-md" // Smaller image size for mobile
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
        <div className="absolute right-4 top-[100px] z-20 bg-white border rounded shadow w-40 text-xs"> {/* Adjusted position */}
          <button onClick={() => {setShowSort(false);}} className="w-full text-left px-3 py-2 hover:bg-gray-100">
            Price: Low to High
          </button>
          <button onClick={() => {setShowSort(false);}} className="w-full text-left px-3 py-2 hover:bg-gray-100">
            Price: High to Low
          </button>
          <button onClick={() => {setShowSort(false);}} className="w-full text-left px-3 py-2 hover:bg-gray-100">
            Newest First
          </button>
        </div>
      )}

      {/* PRODUCT GRID - MOBILE */}
      <div className="bg-[#b5c8db] p-4 rounded-xl flex-1 overflow-y-auto"> {/* Adjusted padding and flex-1 to take remaining height */}
        <div className="grid grid-cols-2 gap-4"> {/* 2 columns for mobile */}
          {items.map((p) => {
            // Discount calculation is still here, but 'discountedPrice' is not passed to ProductCard
            const discountPercent = parseFloat(discount) || 0;
            const discountedPrice = p.price - (p.price * discountPercent) / 100;

            return (
              <ProductCard
                key={p.id}
                id={p.id}
                name={p.name}
                // price={p.price} // Price prop removed
                // discountedPrice={discountPercent ? Math.round(discountedPrice) : undefined} // Discounted price prop removed
                image={p.image}
                inStock={p.inStock}
                // size={`${p.size || ""}"`} // Size prop removed as it's not used in ProductCard anymore
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