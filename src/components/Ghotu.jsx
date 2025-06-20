import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { ChevronDown } from "lucide-react";

// Sample product data with different images and properties
const products = [
  {
    id: 1,
    name: "Classic Wooden Door",
    price: 4500,
    inStock: true,
    size: 36, // in inches
    image: "/door.png",
  },
  {
    id: 2,
    name: "Modern Glass Panel Door",
    price: 6200,
    inStock: true,
    size: 32,
    image: "glassdoor.png",
  },
  {
    id: 3,
    name: "Rustic Barn Door",
    price: 3800,
    inStock: false,
    size: 42,
    image: "rustdoor.png",
  },
  {
    id: 4,
    name: "French Patio Door",
    price: 7800,
    inStock: true,
    size: 60,
    image: "french.png",
  },
  {
    id: 5,
    name: "French Patio Door",
    price: 7800,
    inStock: true,
    size: 60,
    image: "french.png",
  },
  // Add more products with different images
  ...Array.from({ length: 5 }).map((_, i) => ({
    id: i + 5,
    name: `Door Model #${i + 5}`,
    price: Math.floor(Math.random() * 7000) + 2000,
    inStock: Math.random() > 0.3,
    size: Math.floor(Math.random() * 30) + 24,
    image: `french.png,${i}`, // Different random door images
  })),
];

const Ghotu = () => {
  const [showSort, setShowSort] = useState(false);
  const [items, setItems] = useState(products);
  const [filters, setFilters] = useState({
    minSize: "",
    maxSize: "",
    minPrice: "",
    maxPrice: "",
    sizeUnit: "Inch",
    inStock: false,
  });

  const sortBy = (type) => {
    const sorted = [...items];
    if (type === "low") sorted.sort((a, b) => a.price - b.price);
    else if (type === "high") sorted.sort((a, b) => b.price - a.price);
    else if (type === "newest") sorted.sort((a, b) => b.id - a.id);
    setItems(sorted);
    setShowSort(false);
  };

  const applyFilters = () => {
    let filtered = [...products];

    // Size filter
    if (filters.minSize || filters.maxSize) {
      const minSize =
        filters.sizeUnit === "Inch"
          ? parseFloat(filters.minSize)
          : parseFloat(filters.minSize) / 25.4;
      const maxSize =
        filters.sizeUnit === "Inch"
          ? parseFloat(filters.maxSize)
          : parseFloat(filters.maxSize) / 25.4;

      filtered = filtered.filter((product) => {
        const productSize =
          filters.sizeUnit === "Inch" ? product.size : product.size * 25.4;
        return (
          (!minSize || productSize >= minSize) &&
          (!maxSize || productSize <= maxSize)
        );
      });
    }

    // Price filter
    if (filters.minPrice || filters.maxPrice) {
      filtered = filtered.filter((product) => {
        return (
          (!filters.minPrice ||
            product.price >= parseFloat(filters.minPrice)) &&
          (!filters.maxPrice || product.price <= parseFloat(filters.maxPrice))
        );
      });
    }

    // Stock filter
    if (filters.inStock) {
      filtered = filtered.filter((product) => product.inStock);
    }

    setItems(filtered);
  };

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      minSize: "",
      maxSize: "",
      minPrice: "",
      maxPrice: "",
      sizeUnit: "Inch",
      inStock: false,
    });
    setItems(products);
  };

  const cards = [
    {
      id: 1,
      title: "Aventos Category 1",
      image: "https://via.placeholder.com/150", // Replace with real image
      inStock: true,
      highlighted: true,
    },
    {
      id: 2,
      title: "Aventos Category 2",
      image: "https://via.placeholder.com/150", // Replace with real image
      inStock: true,
      highlighted: false,
    },
    {
      id: 3,
      title: "Aventos Category 3",
      image: "https://via.placeholder.com/150", // Replace with real image
      inStock: true,
      highlighted: false,
    },
  ];

  return (
    <div className="pb-8 w-full h-120vh flex overflow-hidden bg-[#f9f9e6]">
      {/* Sidebar */}

      <div className="w-100 gap-10 mt-5 bg-[#F8F8E1] text-white flex flex-col border-r-3 border-black mt-48">
        <div className="ml-27  w-45 p-4 rounded-2xl shadow-md bg-[#0A2A4D] text-white flex flex-col items-center">
          <img
            src="glassdoor.png" // 👈 yahan image ka actual path lagao
            alt="Aventos Category 1"
            className="w-full h-28 object-cover rounded-md mb-2"
          />
          <h3 className="font-semibold text-sm text-center mb-1">
            Aventos Category 1
          </h3>
          <p className="text-green-300 text-sm">In Stock</p>
        </div>
        <div className="ml-27  w-45 p-4 rounded-2xl shadow-md bg-[#F9F7F7] text-black flex flex-col items-center">
          <img
            src="glassdoor.png" // 👈 yahan image ka actual path lagao
            alt="Aventos Category 1"
            className="w-full h-28 object-cover rounded-md mb-2"
          />
          <h3 className="font-semibold text-sm text-center mb-1">
            Aventos Category 1
          </h3>
          <p className="text-green-300 text-sm">In Stock</p>
        </div>
        <div className="ml-27  w-45 p-4 rounded-2xl shadow-md bg-[#F9F7F7] text-black flex flex-col items-center">
          <img
            src="glassdoor.png" // 👈 yahan image ka actual path lagao
            alt="Aventos Category 1"
            className="w-full h-28 object-cover rounded-md mb-2"
          />
          <h3 className="font-semibold text-sm text-center mb-1">
            Aventos Category 1
          </h3>
          <p className="text-green-300 text-sm">In Stock</p>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-8 pt-10 pb-12 mt-8 ">
        <div className="relative ">
          <div className="ml-202 flex w-[222px] h-[70px] rounded-2xl overflow-hidden border-4 border-[#1b3554]">
            <div className="flex-1 bg-[#f7933e] text-white flex items-center justify-center text-2xl font-bold ">
              Discount
            </div>
            <div className="flex-1 bg-[#9db7c0]"></div>
          </div>

          <div
            className="flex items-center gap-2 cursor-pointer mb-4 ml-4"
            onClick={() => setShowSort(!showSort)}
          >
            <h2 className="text-2xl font-semibold text-[#1a1f2c]">
              Tandom Box
            </h2>
            <ChevronDown className="w-6 h-6 text-[#1a1f2c]" />
          </div>

          {showSort && (
            <div className="absolute top-14 left-4 bg-white rounded shadow w-52 border z-10 text-sm">
              <button
                onClick={() => sortBy("low")}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Price: Low to High
              </button>
              <button
                onClick={() => sortBy("high")}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Price: High to Low
              </button>
              <button
                onClick={() => sortBy("newest")}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Newest First
              </button>
            </div>
          )}
        </div>

        <div className="bg-[#b5c8db] p-8 rounded-2xl relative min-h-[530px]">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 overflow-y-auto"
            style={{
              maxHeight: "530px",
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(0,0,0,0.2) rgba(255,255,255,0.6)",
            }}
          >
            {/* Custom scrollbar styling for WebKit browsers */}
            <style>
              {`
                .grid::-webkit-scrollbar {
                  width: 8px;
                  height: 8px;
                }
                .grid::-webkit-scrollbar-track {
                  background: rgba(18, 129, 163, 0.6);
                  border-radius: 10px;
                }
                .grid::-webkit-scrollbar-thumb {
                  background: rgba(20, 192, 38, 0.2);
                  border-radius: 10px;
                }
                .grid::-webkit-scrollbar-thumb:hover {
                  background: rgba(0, 0, 0, 0.3);
                }
              `}
            </style>

            {items.map((p) => (
              <ProductCard
                key={p.id}
                name={p.name}
                price={p.price}
                image={p.image}
                inStock={p.inStock}
                size={`${p.size}"`}
              />
            ))}
          </div>

          {items.length === 0 && (
            <div className="text-center py-16 text-gray-600">
              No products match your filters. Try adjusting your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ghotu;
