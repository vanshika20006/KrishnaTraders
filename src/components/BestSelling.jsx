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

const BestSelling = () => {
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

  return (
    <div className="w-full h-150vh flex overflow-hidden bg-[#f9f9e6]">
      {/* Sidebar */}
      <aside className="bg-[#183659] pt-5 text-white p-6 rounded-xl mt-40 ml-12 shadow-md w-[250px] h-[530px] flex flex-col gap-1">
        <h3 className="text-lg font-semibold">Filters</h3>
        <hr className="border-white/40" />

        <div className="text-sm space-y-4 ">
          {/* Sizes Section */}
          <div className="space-y-2">
            <label>Sizes</label>
            <div className="flex gap-2">
              <input
                name="minSize"
                value={filters.minSize}
                onChange={handleFilterChange}
                placeholder="From"
                className="w-14 px-2 py-1 rounded bg-white text-[#183659]"
              />
              <select
                name="sizeUnit"
                value={filters.sizeUnit}
                onChange={handleFilterChange}
                className="px-2 py-1 rounded bg-white text-[#183659] text-sm"
              >
                <option>Inch</option>
                <option>mm</option>
              </select>
            </div>
            <input
              name="maxSize"
              value={filters.maxSize}
              onChange={handleFilterChange}
              placeholder="To"
              className="w-[126px] px-2 py-1 rounded bg-white text-[#183659]"
            />
          </div>

          <hr className="border-white/40" />

          {/* Price Section */}
          <div className="space-y-2">
            <label>Price</label>
            <div className="flex items-center gap-2">
              <span>Rs.</span>
              <input
                name="minPrice"
                value={filters.minPrice}
                onChange={handleFilterChange}
                placeholder="From"
                className="w-16 px-2 py-1 rounded bg-white text-[#183659]"
              />
            </div>
            <div className="flex items-center gap-2">
              <span>Rs.</span>
              <input
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                placeholder="To"
                className="w-16 px-2 py-1 rounded bg-white text-[#183659]"
              />
            </div>
          </div>

          <hr className="border-white/40" />

          {/* In Stock */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="inStock"
              checked={filters.inStock}
              onChange={handleFilterChange}
              className="rounded"
            />
            <label>In Stock Only</label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-gray-500 rounded hover:bg-gray-600 text-sm"
          >
            Reset
          </button>
          <button
            onClick={applyFilters}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-sm"
          >
            Apply
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-8 pt-10 pb-12 mt-12">
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer mb-4 ml-4"
            onClick={() => setShowSort(!showSort)}
          >
            <h2 className="text-2xl font-semibold text-[#1a1f2c]">
              BestSelling Products
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
                  background: rgba(255, 255, 255, 0.6);
                  border-radius: 10px;
                }
                .grid::-webkit-scrollbar-thumb {
                  background: rgba(0, 0, 0, 0.2);
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

export default BestSelling;
