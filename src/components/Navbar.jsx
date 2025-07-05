import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearchClick = () => {
    if (onSearch) onSearch(query.toLowerCase());
  };

  return (
    <header className="bg-[#f9f9e6] w-full pb-4">
      {/* -------------------- DESKTOP NAVBAR -------------------- */}
      <div className="hidden md:block">
        {/* Top Section */}
        <div className="flex items-center justify-between px-10 py-4">
          <img src="/kT-final-logo.png" alt="Logo" className="h-28 w-28" />

          <div className="flex items-center border-4 border-[#3F72AF] rounded-lg">
            <input
              type="text"
              placeholder="What are you Looking for ?"
              className="h-10 w-[480px] pl-4 outline-none bg-[#fdfce9]"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearchClick}>
              <img
                src="/search_icon.svg"
                alt="Search"
                className="h-10 w-12 bg-[#3F72AF] p-2 rounded-r-lg"
              />
            </button>
          </div>

          <a
            href="https://www.google.com/maps/place/Devi+Ahilya..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 bg-[#3F72AF] text-white px-4 py-3 rounded">
              <img src="/showroom.png" className="h-5 w-5" alt="Showroom" />
              Showroom Details
            </button>
          </a>
        </div>

        {/* Bottom Navigation */}
        <div className="flex mt-6 px-10 justify-between">
          <div className="flex gap-8 w-2/5">
            <Link to="/home">
              <button className="bg-[#3F72AF] text-white px-2 py-1 rounded">
                Home
              </button>
            </Link>
            <Link to="/about">
              <button className="hover:bg-blue-500 hover:text-black px-3 text-black py-1 border border-gray-400 rounded">
                Brand 
              </button>
            </Link>
           <a
  href="https://wa.me/919981689326?text=Hello..."
  target="_blank"
  rel="noopener noreferrer"
  className="[text-decoration:none]"
>
  <button className="flex text-black items-center px-3 py-1 border border-gray-400 rounded max-md:text-[11px] max-md:px-2 max-md:gap-1">
    <img src="/whats.png" className="h-4 w-4 mr-1" alt="WhatsApp" />
    Contact
  </button>
</a>

            <Link to="/about">
              <button className="hover:bg-blue-500 hover:text-black px-3 text-black py-1 border border-gray-400 rounded">
                About 
              </button>
            </Link>
          </div>

          <div className="flex gap-8 w-3/5 justify-end">
            <button className="flex items-center bg-[#3F72AF] text-white font-medium px-4 py-1 rounded">
              <img
                src="/in_store_products.svg"
                className="h-5 w-5 mr-2"
                alt="Products"
              />
              In-Store Products
            </button>
            <button className="flex items-center bg-[#3F72AF] text-white font-medium px-4 py-1 rounded">
              <img
                src="/in_store_offers.svg"
                className="h-5 w-5 mr-2"
                alt="Offers"
              />
              In-Store Offers
            </button>
          </div>
        </div>
      </div>

      {/* -------------------- MOBILE NAVBAR -------------------- */}
<div className="block md:hidden px-4 py-4">
  <div className="flex flex-col items-center gap-4">
    {/* Logo */}
    <img src="/kT-final-logo.png" alt="Logo" className="h-20 w-20" />

    {/* Search */}
    <div className="flex items-center border-4 border-[#3F72AF] rounded-lg w-full max-w-[200px]">
      <input
        type="text"
        placeholder="Search..."
        className="h-10 w-full pl-3 text-sm outline-none bg-[#fdfce9]"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearchClick}>
        <img
          src="/search_icon.svg"
          alt="Search"
          className="h-10 w-10 bg-[#3F72AF] p-2 rounded-r-lg"
        />
      </button>
    </div>

    {/* Showroom */}
    <a
      href="https://www.google.com/maps/place/Devi+Ahilya..."
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline"
    >
      <div className="flex items-center gap-2 bg-[#3F72AF] text-white px-3 py-2 rounded text-sm">
        <img src="/showroom.png" className="h-4 w-4" alt="Showroom" />
        Showroom
      </div>
    </a>

    {/* Navigation */}
    <div className="flex flex-wrap justify-center gap-3 mt-2">
  <Link
    to="/home"
    className="bg-[#3F72AF] text-white px-3 py-1 text-xs rounded flex items-center justify-center min-w-[80px]"
  >
    Home
  </Link>

  <button className="border border-gray-400 text-xs px-3 py-1 rounded flex items-center justify-center text-black min-w-[80px]">
    Brands
  </button>

  <a
    href="https://wa.me/919981689326?text=Hello..."
    target="_blank"
    rel="noopener noreferrer"
    className="border border-gray-400 text-xs px-3 py-1 rounded flex items-center justify-center text-black min-w-[90px]"
  >
    <img src="/whats.png" className="h-4 w-4 mr-1" alt="WhatsApp" />
    Contact
  </a>

  <Link
    to="/about"
    className="border border-gray-400 text-xs px-3 py-1 rounded flex items-center justify-center text-black min-w-[80px]"
  >
    About
  </Link>
</div>



    {/* Products & Offers */}
    <div className="flex gap-3 mt-4">
      <button className="flex items-center bg-[#3F72AF] text-white px-3 py-1 text-xs rounded">
        <img
          src="/in_store_products.svg"
          className="h-4 w-4 mr-1"
          alt="Products"
        />
        Products
      </button>
      <button className="flex items-center bg-[#3F72AF] text-white px-3 py-1 text-xs rounded">
        <img
          src="/in_store_offers.svg"
          className="h-4 w-4 mr-1"
          alt="Offers"
        />
        Offers
      </button>
    </div>
  </div>
</div>

    </header>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = ({ onSearch }) => {
//   const [query, setQuery] = useState("");

//   const handleSearchClick = () => {
//     if (onSearch) onSearch(query.toLowerCase());
//   };

//   return (
//     <header className="bg-[#f9f9e6] w-full pb-6">
//       {/* -------------------- DESKTOP NAVBAR -------------------- */}
//       <div className="hidden md:block">
//         {/* Top Section */}
//         <div className="flex items-center justify-between px-10 py-4">
//           {/* Logo */}
//           <img src="/kT-final-logo.png" alt="Logo" className="h-28 w-28" />

//           {/* Search Bar */}
//           <div className="flex items-center border-4 border-[#3F72AF] rounded-lg">
//             <input
//               type="text"
//               placeholder="What are you Looking for ?"
//               className="h-10 w-[480px] pl-4 outline-none bg-[#fdfce9]"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//             <button onClick={handleSearchClick}>
//               <img
//                 src="/search_icon.svg"
//                 alt="Search"
//                 className="h-10 w-12 bg-[#3F72AF] p-2 rounded-r-lg"
//               />
//             </button>
//           </div>

//           {/* Showroom Button */}
//           <a
//             href="https://www.google.com/maps/place/Devi+Ahilya..."
//             target="_blank"
//             rel="noopener noreferrer"
//             className="no-underline"
//           >
//             <div className="flex items-center gap-2 bg-[#3F72AF] text-white px-4 py-3 rounded">
//               <img src="/showroom.png" className="h-5 w-5" alt="Showroom" />
//               Showroom Details
//             </div>
//           </a>
//         </div>

//         {/* Bottom Navigation */}
//         <div className="flex mt-6 px-10 justify-between items-center">
//           <div className="flex gap-8 w-2/5">
//             <Link to="/home">
//               <button className="bg-[#3F72AF] text-white px-2 py-1 rounded">
//                 Home
//               </button>
//             </Link>
//             <button className="hover:bg-blue-500 hover:text-black px-3 text-black py-1 border border-gray-400 rounded">
//               Brands
//             </button>
//             <a
//   href="https://wa.me/919981689326?text=Hello..."
//   target="_blank"
//   rel="noopener noreferrer"
//   className="flex items-center border border-gray-400 text-inherit px-3 py-1 rounded [text-decoration:none] hover:bg-blue-500 hover:text-white"
// >

//               <img src="/whats.png" className="h-5 w-5 mr-2" alt="WhatsApp" />
//               Contact Us
//             </a>
//             <Link to="/about">
//               <button className="hover:bg-blue-500 hover:text-black px-3 text-black py-1 border border-gray-400 rounded">
//                 About Us
//               </button>
//             </Link>
//           </div>

//           <div className="flex gap-8 w-3/5 justify-end">
//             <button className="flex items-center bg-[#3F72AF] text-white font-medium px-4 py-1 rounded">
//               <img
//                 src="/in_store_products.svg"
//                 className="h-5 w-5 mr-2"
//                 alt="Products"
//               />
//               In-Store Products
//             </button>
//             <button className="flex items-center bg-[#3F72AF] text-white font-medium px-4 py-1 rounded">
//               <img
//                 src="/in_store_offers.svg"
//                 className="h-5 w-5 mr-2"
//                 alt="Offers"
//               />
//               In-Store Offers
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* -------------------- MOBILE NAVBAR -------------------- */}
//       <div className="block md:hidden px-4 py-4">
//         <div className="flex flex-col items-center gap-4">
//           {/* Logo */}
//           <img src="/kT-final-logo.png" alt="Logo" className="h-20 w-20" />

//           {/* Search */}
//           <div className="flex items-center border-4 border-[#3F72AF] rounded-lg w-full max-w-[300px]">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="h-10 w-full pl-3 text-sm outline-none bg-[#fdfce9]"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//             <button onClick={handleSearchClick}>
//               <img
//                 src="/search_icon.svg"
//                 alt="Search"
//                 className="h-10 w-10 bg-[#3F72AF] p-2 rounded-r-lg"
//               />
//             </button>
//           </div>

//           {/* Showroom */}
//           <a
//             href="https://www.google.com/maps/place/Devi+Ahilya..."
//             target="_blank"
//             rel="noopener noreferrer"
//             className="no-underline"
//           >
//             <div className="flex items-center gap-2 bg-[#3F72AF] text-white px-3 py-2 rounded text-sm">
//               <img src="/showroom.png" className="h-4 w-4" alt="Showroom" />
//               Showroom
//             </div>
//           </a>

//           {/* Navigation */}
//           <div className="flex flex-wrap justify-center gap-3 mt-2">
//             <Link to="/home">
//               <button className="bg-[#3F72AF] text-white px-3 py-1 text-xs rounded">
//                 Home
//               </button>
//             </Link>
//             <button className="border border-gray-400 text-xs px-3 py-1 rounded">
//               Brands
//             </button>
//             <a
//               href="https://wa.me/919981689326?text=Hello..."
//               target="_blank"
//               rel="noopener noreferrer"
//               className="no-underline flex items-center border border-gray-400 text-xs px-3 py-1 rounded text-black no-underline"
//             >
//               <img src="/whats.png" className="h-4 w-4 mr-1 " alt="WhatsApp" />
//               Contact
//             </a>
//             <Link to="/about">
//               <button className="border border-gray-400 text-xs px-3 py-1 rounded">
//                 About
//               </button>
//             </Link>
//           </div>

//           {/* Products & Offers */}
//           <div className="flex gap-3 mt-4">
//             <button className="flex items-center bg-[#3F72AF] text-white px-3 py-1 text-xs rounded">
//               <img
//                 src="/in_store_products.svg"
//                 className="h-4 w-4 mr-1"
//                 alt="Products"
//               />
//               Products
//             </button>
//             <button className="flex items-center bg-[#3F72AF] text-white px-3 py-1 text-xs rounded">
//               <img
//                 src="/in_store_offers.svg"
//                 className="h-4 w-4 mr-1"
//                 alt="Offers"
//               />
//               Offers
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
