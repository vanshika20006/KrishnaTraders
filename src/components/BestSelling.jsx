import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react"; // Added X for close button

const ProductCard = ({ image, name, inStock, price, size, slug }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product${slug}`, {
      state: { name, price, inStock, image, size, slug }, // Added slug to state for consistency
    });
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all bg-white
                 flex flex-col lg:block" // Added flex-col for mobile, block for desktop
    >
      {/* Image Section */}
      <div className="w-full h-48 lg:h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-content" // Changed object-content to object-contain for better image fitting
        />
      </div>

      {/* Details Section */}
      <div className="bg-white p-4 text-center">
        <h6 className="font-semibold text-base lg:text-lg">{name}</h6> {/* Adjusted font size for mobile */}
        <p className={`text-xs ${inStock ? "text-green-600" : "text-red-600"} lg:text-sm`}> {/* Adjusted font size for mobile */}
          {inStock ? "In Stock" : "Out of Stock"}
        </p>
        {/* Added Price and Size for mobile view - optional, but common for product cards */}
        <p className="text-gray-900 font-bold text-lg mt-2 lg:hidden">Rs. {price}</p>
        <p className="text-gray-600 text-sm mt-1 lg:hidden">Size: {size}</p>
      </div>
    </div>
  );
};

// --- Your BestSelling Component (Updated to use the new ProductCard) ---

const products = [
  {
    id: 1,
    name: "Aqua blu (5T)",
    slug: "6",
    price: 2150,
    inStock: true,
    size: 36,
    image: "/Aqua24X24.jpg",
  },
  {
    id: 2,
    name: "Polo design short body",
    slug: "301",
    price: 56,
    inStock: true,
    size: 32,
    image: "POLOSHORTBODY.jpg",
  },
  {
    id: 3,
    name: "Classic chamber cover",
    slug: "25",
    price: 920,
    inStock: true,
    size: "24X24",
    image: "HEAVY24X24.jpg",
  },
  {
    id: 4,
    name: "LDPE Chamber Cover",
    slug: "34",
    price: 1450,
    inStock: true,
    size: 60,
    image: "LDPE24X24.jpg",
  },
  {
    id: 5,
    name: "Jerry model Short body",
    slug: "421",
    price: 480,
    inStock: true,
    size: "Standard",
    image: "/Short-body-JERRY.jpg",
  },
  {
    id: 6,
    name: "Brezza model Short body",
    slug: "401",
    price: 450,
    inStock: true,
    size: "Standard",
    image: "/Short-body-BREZZA.jpg",
  },
  {
    id: 7,
    name: "Opel design Short body",
    slug: "321",
    price: 80,
    inStock: true,
    size: "Standard",
    image: "/OPELBIBCOCK.jpg",
  },
  {
    id: 8,
    name: "Teflon tape 12Mtr",
    slug: "5512",
    price: 17,
    inStock: true,
    size: "12M",
    image: "/OneTef.png", //teflonlr.jpg
  },
  {
    id: 9,
    name: "PTMT connection",
    slug: "902",
    price: 80,
    inStock: true,
    size: "24”",
    image: "/EVERYPTMT.jpg",
  },
  {
    id: 10,
    name: "Frankly model Short body",
    slug: "611",
    price: 140,
    inStock: true,
    size: "Standard",
    image: "/DShortbody1.PNG",
  },
  {
    id: 11,
    name: "Rado model short body",
    slug: "601",
    price: 110,
    inStock: true,
    size: "Standard",
    image: "/FShortbody1.PNG",
  },
  {
    id: 12,
    name: "Brezza model flush cock M",
    slug: "4012",
    price: 860,
    inStock: true,
    size: "M",
    image: "/FLUSH-COCK-M-BREZZA.jpg",
  },
  {
    id: 13,
    name: "Brezza model angle cock project",
    slug: "4014",
    price: 250,
    inStock: true,
    size: "Project",
    image: "/Angle-PROJECT-1st.jpg",
  },
  {
    id: 14,
    name: "UPVC Pipe 1 inch",
    slug: "13013",
    price: 290,
    inStock: true,
    size: "1 inch",
    image: "/UPVCF.jpg",
  },
  {
    id: 15,
    name: "UPVC Pipe 1/2 inch",
    slug: "13011",
    price: 155,
    inStock: true,
    size: "1/2 inch",
    image: "/UPVCF.jpg",
  },
  {
    id: 16,
    name: "CPVC Pipe 3/4 inch",
    slug: "14011",
    price: 240,
    inStock: true,
    size: "3/4 inch",
    image: "/CPVCF.jpg",
  },
  {
    id: 17,
    name: "CPVC Pipe 1 inch",
    slug: "14012",
    price: 370,
    inStock: true,
    size: "1 inch",
    image: "/CPVCF.jpg",
  },
  {
    id: 18,
    name: "CPVC Solvent",
    slug: "0014",
    price: 150,
    inStock: true,
    size: "118ml",
    image: "/cpvc118.jpg",
  },
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
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

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
        // Handle cases where product.size might be a string like "24X24" or "Standard"
        // For numeric comparison, convert to a number if possible, or skip filtering for non-numeric sizes.
        const productSize = parseFloat(product.size);

        if (isNaN(productSize)) {
          return true; // Don't filter if product size isn't a comparable number
        }

        const comparableProductSize =
          filters.sizeUnit === "Inch" ? productSize : productSize * 25.4;
        return (
          (!minSize || comparableProductSize >= minSize) &&
          (!maxSize || comparableProductSize <= maxSize)
        );
      });
    }

    if (filters.minPrice || filters.maxPrice) {
      filtered = filtered.filter((product) => {
        return (
          (!filters.minPrice || product.price >= parseFloat(filters.minPrice)) &&
          (!filters.maxPrice || product.price <= parseFloat(filters.maxPrice))
        );
      });
    }

    if (filters.inStock) {
      filtered = filtered.filter((product) => product.inStock);
    }

    setItems(filtered);
    setIsMobileFilterOpen(false); // Close mobile filter after applying
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
    setIsMobileFilterOpen(false); // Close mobile filter after resetting
  };

  const MobileFilterSidebar = () => (
    <div
      className={`fixed inset-0 z-50 bg-[#f9f9e6] transform ${
        isMobileFilterOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out lg:hidden`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-[#1a1f2c]">Filters</h3>
        <button onClick={() => setIsMobileFilterOpen(false)}>
          <X className="w-6 h-6 text-[#1a1f2c]" />
        </button>
      </div>

      <div className="p-6 text-sm space-y-6">
        <div className="space-y-2">
          <label className="block text-[#1a1f2c] font-medium">Sizes</label>
          <div className="flex gap-2 items-center">
            <input
              name="minSize"
              value={filters.minSize}
              onChange={handleFilterChange}
              placeholder="From"
              className="flex-1 px-3 py-2 rounded border border-gray-300 text-[#183659]"
              type="number"
            />
            <select
              name="sizeUnit"
              value={filters.sizeUnit}
              onChange={handleFilterChange}
              className="px-3 py-2 rounded border border-gray-300 text-[#183659]"
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
            className="w-full px-3 py-2 rounded border border-gray-300 text-[#183659] mt-2"
            type="number"
          />
        </div>

        <hr className="border-gray-300" />

        <div className="space-y-2">
          <label className="block text-[#1a1f2c] font-medium">Price</label>
          <div className="flex items-center gap-2">
            <span className="text-[#1a1f2c]">Rs.</span>
            <input
              name="minPrice"
              value={filters.minPrice}
              onChange={handleFilterChange}
              placeholder="From"
              className="flex-1 px-3 py-2 rounded border border-gray-300 text-[#183659]"
              type="number"
            />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[#1a1f2c]">Rs.</span>
            <input
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleFilterChange}
              placeholder="To"
              className="flex-1 px-3 py-2 rounded border border-gray-300 text-[#183659]"
              type="number"
            />
          </div>
        </div>

        <hr className="border-gray-300" />

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="inStock"
            checked={filters.inStock}
            onChange={handleFilterChange}
            className="rounded text-blue-600 focus:ring-blue-500"
          />
          <label className="text-[#1a1f2c]">In Stock Only</label>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 flex gap-4">
        <button
          onClick={resetFilters}
          className="flex-1 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
        >
          Reset
        </button>
        <button
          onClick={applyFilters}
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
        >
          Apply
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-[#f9f9e6] flex flex-col lg:flex-row">
      {/* Mobile Filter Button (Visible on small screens) */}
      <div className="lg:hidden p-4 flex justify-between items-center border-b border-gray-200">
        <h2 className="text-xl font-semibold text-[#1a1f2c]">
          BestSelling Products
        </h2>
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#183659] text-white rounded-md shadow-sm hover:bg-[#2a4e7a]"
        >
          <SlidersHorizontal className="w-5 h-5" /> Filters
        </button>
      </div>

      {/* Desktop Sidebar (Hidden on small screens) */}
      <aside className="hidden lg:block bg-[#183659] pt-5 text-white p-6 rounded-xl mt-40 ml-12 shadow-md w-[250px] h-[530px] flex flex-col gap-1 flex-shrink-0">
        <h3 className="text-lg font-semibold">Filters</h3>
        <hr className="border-white/40" />

        <div className="text-sm space-y-4 ">
          <div className="space-y-2">
            <label>Sizes</label>
            <div className="flex gap-2">
              <input
                name="minSize"
                value={filters.minSize}
                onChange={handleFilterChange}
                placeholder="From"
                className="w-14 px-2 py-1 rounded bg-white text-[#183659]"
                type="number"
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
              type="number"
            />
          </div>

          <hr className="border-white/40" />

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
                type="number"
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
                type="number"
              />
            </div>
          </div>

          <hr className="border-white/40" />

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

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-12 lg:px-8 lg:pt-10 lg:mt-12">
        {/* Sort by dropdown (Visible on both desktop and mobile, but positioned differently) */}
        <div className="relative mb-4 ml-0 lg:ml-4">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setShowSort(!showSort)}
          >
            <h2 className="text-2xl font-semibold text-[#1a1f2c] hidden lg:block">
              BestSelling Products
            </h2>
            <span className="text-lg font-semibold text-[#1a1f2c] lg:hidden">
              Sort By
            </span>
            <ChevronDown className="w-6 h-6 text-[#1a1f2c]" />
          </div>

          {showSort && (
            <div className="absolute top-full left-0 bg-white rounded shadow w-52 border z-10 text-sm mt-2 lg:top-14 lg:left-4">
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

        {/* Product Grid */}
        <div className="bg-[#b5c8db] p-4 rounded-2xl relative min-h-[530px] lg:p-8">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 overflow-y-auto"
            style={{
              maxHeight: "530px",
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(0,0,0,0.2) rgba(255,255,255,0.6)",
            }}
          >
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
                size={`${p.size}`}
                slug={p.slug}
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

      {/* Mobile Filter Sidebar Component */}
      <MobileFilterSidebar />
    </div>
  );
};

export default BestSelling;





///previous code
// import React, { useState } from "react";
// import ProductCard from "./ProductCard";
// import { ChevronDown } from "lucide-react";

// // 🟡 Empty product list — you can add your own manually below
// const products = [
//   {
//     id: 1,
//     name: "Aqua blu (5T)",
//     slug: "6",
//     price: 2150,
//     inStock: true,
//     size: 36,
//     image: "/Aqua24X24.jpg",
//   },
//   {
//     id: 2,
//     name: "Polo design short body",
//     slug: "301",
//     price: 56,
//     inStock: true,
//     size: 32,
//     image: "POLOSHORTBODY.jpg",
//   },
//   {
//     id: 3,
//     name: "Classic chamber cover",
//     slug: "25",
//     price: 920,
//     inStock: true,
//     size: "24X24",
//     image: "HEAVY24X24.jpg",
//   },
//   {
//     id: 4,
//     name: "LDPE Chamber Cover",
//     slug: "34",
//     price: 1450,
//     inStock: true,
//     size: 60,
//     image: "LDPE24X24.jpg",
//   },
//   {
//     id: 5,
//     name: "Jerry model Short body",
//     slug: "421",
//     price: 480,
//     inStock: true,
//     size: "Standard",
//     image: "/Short-body-JERRY.jpg",
//   },
//   {
//     id: 6,
//     name: "Brezza model Short body",
//     slug: "401",
//     price: 450,
//     inStock: true,
//     size: "Standard",
//     image: "/Short-body-BREZZA.jpg",
//   },
//   {
//     id: 7,
//     name: "Opel design Short body",
//     slug: "321",
//     price: 80,
//     inStock: true,
//     size: "Standard",
//     image: "/OPELBIBCOCK.jpg",
//   },
//   {
//     id: 8,
//     name: "Teflon tape 12Mtr",
//     slug: "5512",
//     price: 17,
//     inStock: true,
//     size: "12M",
//     image: "/teflonlr.jpg",
//   },
//   {
//     id: 9,
//     name: "PTMT connection",
//     slug: "902",
//     price: 80,
//     inStock: true,
//     size: "24”",
//     image: "/EVERYPTMT.jpg",
//   },
//   {
//     id: 10,
//     name: "Frankly model Short body",
//     slug: "611",
//     price: 140,
//     inStock: true,
//     size: "Standard",
//     image: "/DShortbody1.PNG",
//   },
//   {
//     id: 11,
//     name: "Rado model short body",
//     slug: "601",
//     price: 110,
//     inStock: true,
//     size: "Standard",
//     image: "/FShortbody1.PNG",
//   },
//   {
//     id: 12,
//     name: "Brezza model flush cock M",
//     slug: "4012",
//     price: 860,
//     inStock: true,
//     size: "M",
//     image: "/FLUSH-COCK-M-BREZZA.jpg",
//   },
//   {
//     id: 13,
//     name: "Brezza model angle cock project",
//     slug: "4014",
//     price: 250,
//     inStock: true,
//     size: "Project",
//     image: "/Angle-PROJECT-1st.jpg",
//   },
//   {
//     id: 14,
//     name: "UPVC Pipe 1 inch",
//     slug: "13013",
//     price: 290,
//     inStock: true,
//     size: "1 inch",
//     image: "/UPVCF.jpg",
//   },
//   {
//     id: 15,
//     name: "UPVC Pipe 1/2 inch",
//     slug: "13011",
//     price: 155,
//     inStock: true,
//     size: "1/2 inch",
//     image: "/UPVCF.jpg",
//   },
//   {
//     id: 16,
//     name: "CPVC Pipe 3/4 inch",
//     slug: "14011",
//     price: 240,
//     inStock: true,
//     size: "3/4 inch",
//     image: "/CPVCF.jpg",
//   },
//   {
//     id: 17,
//     name: "CPVC Pipe 1 inch",
//     slug: "14012",
//     price: 370,
//     inStock: true,
//     size: "1 inch",
//     image: "/CPVCF.jpg",
//   },
//   {
//     id: 18,
//     name: "CPVC Solvent",
//     slug: "0014",
//     price: 150,
//     inStock: true,
//     size: "118ml",
//     image: "/cpvc118.jpg",
//   },
// ];




// const BestSelling = () => {
//   const [showSort, setShowSort] = useState(false);
//   const [items, setItems] = useState(products);
//   const [filters, setFilters] = useState({
//     minSize: "",
//     maxSize: "",
//     minPrice: "",
//     maxPrice: "",
//     sizeUnit: "Inch",
//     inStock: false,
//   });

//   const sortBy = (type) => {
//     const sorted = [...items];
//     if (type === "low") sorted.sort((a, b) => a.price - b.price);
//     else if (type === "high") sorted.sort((a, b) => b.price - a.price);
//     else if (type === "newest") sorted.sort((a, b) => b.id - a.id);
//     setItems(sorted);
//     setShowSort(false);
//   };

//   const applyFilters = () => {
//     let filtered = [...products];

//     if (filters.minSize || filters.maxSize) {
//       const minSize = filters.sizeUnit === "Inch"
//         ? parseFloat(filters.minSize)
//         : parseFloat(filters.minSize) / 25.4;
//       const maxSize = filters.sizeUnit === "Inch"
//         ? parseFloat(filters.maxSize)
//         : parseFloat(filters.maxSize) / 25.4;

//       filtered = filtered.filter((product) => {
//         const productSize = filters.sizeUnit === "Inch"
//           ? product.size
//           : product.size * 25.4;
//         return (
//           (!minSize || productSize >= minSize) &&
//           (!maxSize || productSize <= maxSize)
//         );
//       });
//     }

//     if (filters.minPrice || filters.maxPrice) {
//       filtered = filtered.filter((product) => {
//         return (
//           (!filters.minPrice || product.price >= parseFloat(filters.minPrice)) &&
//           (!filters.maxPrice || product.price <= parseFloat(filters.maxPrice))
//         );
//       });
//     }

//     if (filters.inStock) {
//       filtered = filtered.filter((product) => product.inStock);
//     }

//     setItems(filtered);
//   };

//   const handleFilterChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFilters((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const resetFilters = () => {
//     setFilters({
//       minSize: "",
//       maxSize: "",
//       minPrice: "",
//       maxPrice: "",
//       sizeUnit: "Inch",
//       inStock: false,
//     });
//     setItems(products);
//   };

//   return (
//     <div className="w-full h-150vh flex overflow-hidden bg-[#f9f9e6]">
//       {/* Sidebar */}
//       <aside className="bg-[#183659] pt-5 text-white p-6 rounded-xl mt-40 ml-12 shadow-md w-[250px] h-[530px] flex flex-col gap-1">
//         <h3 className="text-lg font-semibold">Filters</h3>
//         <hr className="border-white/40" />

//         <div className="text-sm space-y-4 ">
//           <div className="space-y-2">
//             <label>Sizes</label>
//             <div className="flex gap-2">
//               <input
//                 name="minSize"
//                 value={filters.minSize}
//                 onChange={handleFilterChange}
//                 placeholder="From"
//                 className="w-14 px-2 py-1 rounded bg-white text-[#183659]"
//               />
//               <select
//                 name="sizeUnit"
//                 value={filters.sizeUnit}
//                 onChange={handleFilterChange}
//                 className="px-2 py-1 rounded bg-white text-[#183659] text-sm"
//               >
//                 <option>Inch</option>
//                 <option>mm</option>
//               </select>
//             </div>
//             <input
//               name="maxSize"
//               value={filters.maxSize}
//               onChange={handleFilterChange}
//               placeholder="To"
//               className="w-[126px] px-2 py-1 rounded bg-white text-[#183659]"
//             />
//           </div>

//           <hr className="border-white/40" />

//           <div className="space-y-2">
//             <label>Price</label>
//             <div className="flex items-center gap-2">
//               <span>Rs.</span>
//               <input
//                 name="minPrice"
//                 value={filters.minPrice}
//                 onChange={handleFilterChange}
//                 placeholder="From"
//                 className="w-16 px-2 py-1 rounded bg-white text-[#183659]"
//               />
//             </div>
//             <div className="flex items-center gap-2">
//               <span>Rs.</span>
//               <input
//                 name="maxPrice"
//                 value={filters.maxPrice}
//                 onChange={handleFilterChange}
//                 placeholder="To"
//                 className="w-16 px-2 py-1 rounded bg-white text-[#183659]"
//               />
//             </div>
//           </div>

//           <hr className="border-white/40" />

//           <div className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               name="inStock"
//               checked={filters.inStock}
//               onChange={handleFilterChange}
//               className="rounded"
//             />
//             <label>In Stock Only</label>
//           </div>
//         </div>

//         <div className="flex gap-2 mt-auto">
//           <button
//             onClick={resetFilters}
//             className="px-4 py-2 bg-gray-500 rounded hover:bg-gray-600 text-sm"
//           >
//             Reset
//           </button>
//           <button
//             onClick={applyFilters}
//             className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-sm"
//           >
//             Apply
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 overflow-y-auto px-8 pt-10 pb-12 mt-12">
//         <div className="relative">
//           <div
//             className="flex items-center gap-2 cursor-pointer mb-4 ml-4"
//             onClick={() => setShowSort(!showSort)}
//           >
//             <h2 className="text-2xl font-semibold text-[#1a1f2c]">
//               BestSelling Products
//             </h2>
//             <ChevronDown className="w-6 h-6 text-[#1a1f2c]" />
//           </div>

//           {showSort && (
//             <div className="absolute top-14 left-4 bg-white rounded shadow w-52 border z-10 text-sm">
//               <button
//                 onClick={() => sortBy("low")}
//                 className="w-full text-left px-4 py-2 hover:bg-gray-100"
//               >
//                 Price: Low to High
//               </button>
//               <button
//                 onClick={() => sortBy("high")}
//                 className="w-full text-left px-4 py-2 hover:bg-gray-100"
//               >
//                 Price: High to Low
//               </button>
//               <button
//                 onClick={() => sortBy("newest")}
//                 className="w-full text-left px-4 py-2 hover:bg-gray-100"
//               >
//                 Newest First
//               </button>
//             </div>
//           )}
//         </div>

//         <div className="bg-[#b5c8db] p-8 rounded-2xl relative min-h-[530px]">
//           <div
//             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 overflow-y-auto"
//             style={{
//               maxHeight: "530px",
//               scrollbarWidth: "thin",
//               scrollbarColor: "rgba(0,0,0,0.2) rgba(255,255,255,0.6)",
//             }}
//           >
//             <style>
//               {`
//                 .grid::-webkit-scrollbar {
//                   width: 8px;
//                   height: 8px;
//                 }
//                 .grid::-webkit-scrollbar-track {
//                   background: rgba(255, 255, 255, 0.6);
//                   border-radius: 10px;
//                 }
//                 .grid::-webkit-scrollbar-thumb {
//                   background: rgba(0, 0, 0, 0.2);
//                   border-radius: 10px;
//                 }
//                 .grid::-webkit-scrollbar-thumb:hover {
//                   background: rgba(0, 0, 0, 0.3);
//                 }
//               `}
//             </style>

//             {items.map((p) => (
//               <ProductCard
//                 key={p.id}
//                 name={p.name}
//                 price={p.price}
//                 image={p.image}
//                 inStock={p.inStock}
//                 size={`${p.size}"`}
//                 slug={p.slug}
//               />
//             ))}
//           </div>

//           {items.length === 0 && (
//             <div className="text-center py-16 text-gray-600">
//               No products match your filters. Try adjusting your criteria.
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestSelling;
