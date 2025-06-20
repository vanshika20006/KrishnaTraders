import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCardPVC";
import { ChevronDown } from "lucide-react";

const categories = [
  
  { image: "LOCK18X24.jpg", label: "PVC CHAMBER COVER", route: "/varients12" },
  { image: "FRP18X36.jpg", label: "FRP CHAMBER COVER", route: "/varients11" },
  { image: "LDPE18X24.jpg", label: "LDPE CHAMBER COVER", route: "/varients13" },
  { image: "HDP18X18.jpg", label: "HDP CHAMBER COVER", route: "/varients14" }
  
];
const products = [
 {
    id: 1,
    name: " PVC CLASSIC (CAPITAL)",
    price: 4500,
    inStock: true,
    size: 36, // in inches
    image: "/CLASSIC12X12.jpg",
  },
  {
    id: 2,
    name: "LOCK PATTERN (CAPITAL)",
    price: 6200,
    inStock: true,
    size: 32,
    image: "/LOCK21X21.jpg",
  },
    {
        id: 3,
        name: " EXTRA HEAVY (1T)",
        price: 4500,
        inStock: true,
        size: 36, // in inches
        image: "/HEAVY18X18.jpg",
    },
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
          <h2 className="text-2xl font-semibold text-[#1a1f2c]">PVC CHAMBER COVER</h2>
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












// import React, { useState } from "react";
// import ProductCard from "./ProductCardPVC";
// import { ChevronDown } from "lucide-react";

// // Sample product data with different images and properties
// const products = [
//  {
//     id: 1,
//     name: " PVC CLASSIC (CAPITAL)",
//     price: 4500,
//     inStock: true,
//     size: 36, // in inches
//     image: "/CLASSIC12X12.jpg",
//   },
//   {
//     id: 2,
//     name: "LOCK PATTERN (CAPITAL)",
//     price: 6200,
//     inStock: true,
//     size: 32,
//     image: "/LOCK21X21.jpg",
//   },
//     {
//         id: 3,
//         name: " EXTRA HEAVY (1T)",
//         price: 4500,
//         inStock: true,
//         size: 36, // in inches
//         image: "/HEAVY18X18.jpg",
//     },
// ];

// const Ghotu = () => {
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

//     // Size filter
//     if (filters.minSize || filters.maxSize) {
//       const minSize =
//         filters.sizeUnit === "Inch"
//           ? parseFloat(filters.minSize)
//           : parseFloat(filters.minSize) / 25.4;
//       const maxSize =
//         filters.sizeUnit === "Inch"
//           ? parseFloat(filters.maxSize)
//           : parseFloat(filters.maxSize) / 25.4;

//       filtered = filtered.filter((product) => {
//         const productSize =
//           filters.sizeUnit === "Inch" ? product.size : product.size * 25.4;
//         return (
//           (!minSize || productSize >= minSize) &&
//           (!maxSize || productSize <= maxSize)
//         );
//       });
//     }

//     // Price filter
//     if (filters.minPrice || filters.maxPrice) {
//       filtered = filtered.filter((product) => {
//         return (
//           (!filters.minPrice ||
//             product.price >= parseFloat(filters.minPrice)) &&
//           (!filters.maxPrice || product.price <= parseFloat(filters.maxPrice))
//         );
//       });
//     }

//     // Stock filter
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

//   const cards = [
//     {
//       id: 1,
//       title: "Aventos Category 1",
//       image: "https://via.placeholder.com/150", // Replace with real image
//       inStock: true,
//       highlighted: true,
//     },
//     {
//       id: 2,
//       title: "Aventos Category 2",
//       image: "https://via.placeholder.com/150", // Replace with real image
//       inStock: true,
//       highlighted: false,
//     },
//     {
//       id: 3,
//       title: "Aventos Category 3",
//       image: "https://via.placeholder.com/150", // Replace with real image
//       inStock: true,
//       highlighted: false,
//     },
//   ];

//   return (
//     <div className="pb-8 w-full h-120vh flex overflow-hidden  bg-[#f9f9e6]">
//       {/* Sidebar */}

//       <div className="w-80 mr-8 p-10 mt-50 bg-[#F8F8E1] text-white flex flex-col border-r-3 border-black gap-9 ">
//         <div className="ml-8  w-45 p-4 rounded-2xl shadow-md bg-[#0A2A4D] text-white flex flex-col items-center">
//           <img
//             src="glassdoor.png" // 👈 yahan image ka actual path lagao
//             alt="Aventos Category 1"
//             className="w-full h-28 object-cover rounded-md mb-2"
//           />
//           <h6 className="font-semibold text-sm text-center mb-1">
//             Aventos Category 1
//           </h6>
//           <p className="text-green-300 text-sm">In Stock</p>
//         </div>
//         <div className="ml-8  w-45 p-4 rounded-2xl shadow-md bg-[#F9F7F7] text-black flex flex-col items-center">
//           <img
//             src="glassdoor.png" // 👈 yahan image ka actual path lagao
//             alt="Aventos Category 1"
//             className="w-full h-28 object-cover rounded-md mb-2"
//           />
//           <h6 className="font-semibold text-sm text-center mb-1">
//             Aventos Category 1
//           </h6>
//           <p className="text-green-300 text-sm">In Stock</p>
//         </div>
//         <div className="ml-8  w-45 p-4 rounded-2xl shadow-md bg-[#F9F7F7] text-black flex flex-col items-center">
//           <img
//             src="glassdoor.png" // 👈 yahan image ka actual path lagao
//             alt="Aventos Category 1"
//             className="w-full h-28 object-cover rounded-md mb-2"
//           />
//           <h6 className="font-semibold text-sm text-center mb-1">
//             Aventos Category 1
//           </h6>
//           <p className="text-green-300 text-sm">In Stock</p>
//         </div>
//       </div>
//       {/* Main Content */}
//       <div className="flex-1 overflow-y-auto px-8 pt-10 pb-12 mt-8 ">
//         <div className="relative ">
//           <div className="ml-202 flex w-[222px] h-[70px] rounded-2xl overflow-hidden border-4 border-[#1b3554]">
//             <div className="flex-1 bg-[#f7933e] text-white flex items-center justify-center text-2xl font-bold ">
//               Discount
//             </div>
//             <div className="flex-1 bg-[#9db7c0]"></div>
//           </div>

//           <div
//             className="flex items-center gap-2 cursor-pointer mb-4 ml-4"
//             onClick={() => setShowSort(!showSort)}
//           >
//             <h2 className="text-2xl font-semibold text-[#1a1f2c]">
//               Tandom Box
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

//         <div className="bg-[#b5c8db] p-10 rounded-2xl relative min-h-[630px]">
//           <div
//             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 overflow-y-auto"
//             style={{
//               scrollbarWidth: "thin",
//               scrollbarColor: "rgba(0,0,0,0.2) rgba(255,255,255,0.6)",
//             }}
//           >
//             {/* Custom scrollbar styling for WebKit browsers */}
//             <style>
//               {`
//                 .grid::-webkit-scrollbar {
//                   width: 8px;
//                   height: 8px;
//                 }
//                 .grid::-webkit-scrollbar-track {
//                   background: rgba(18, 129, 163, 0.6);
//                   border-radius: 10px;
//                 }
//                 .grid::-webkit-scrollbar-thumb {
//                   background: rgba(20, 192, 38, 0.2);
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
//                 id={p.id} // 👈 yeh zaroori hai for routing
//                 name={p.name}
//                 price={p.price}
//                 image={p.image}
//                 inStock={p.inStock}
//                 size={`${p.size}"`}
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

// export default Ghotu;
