import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearchClick = () => {
    if (onSearch) onSearch(query.toLowerCase());
  };

  return (
    <header className="bg-[#f9f9e6] w-full h-[33vh]">
      {/* Top Section with Logo, Search Bar, and Showroom Button */}
      <div className="flex items-center justify-between w-full px-10 py-4 bg-[#f9f9e6]">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <img
            src="/kT-final-logo.png"
            alt="Company Logo"
            className="h-28 w-28"
          />
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 flex justify-center">
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
                alt="Search icon"
                className="h-10 w-12 bg-[#3F72AF] p-2 rounded-r-lg"
              />
            </button>
          </div>
        </div>

        {/* Right: Showroom Button */}
        <div className="flex-shrink-0">
          <a
            href="https://www.google.co.in/maps/place/Devi+Ahilya+Vishwavidyalaya+Takshila+Campus/@22.6892814,75.867841,17z/data=!3m1!4b1!4m6!3m5!1s0x3962fcef50d20ba3:0x592abbfe7172123e!8m2!3d22.6892814!4d75.8704159!16s%2Fg%2F11cm70vs6d?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button className="flex items-center gap-2 bg-[#3F72AF] text-white px-4 py-3 rounded">
              <img src="/showroom.png" alt="Showroom" className="h-5 w-5" />
              Showroom Details
            </button>
          </a>
        </div>
      </div>

      {/* Bottom Navigation Row */}
      <div className="flex mt-6">
        {/* Left Side Buttons */}
        <div className="flex gap-8 pl-10 w-2/5">
          {/* <select
            id="products"
            className="bg-[#3F72AF] text-white px-2 py-1 rounded"
            defaultValue=""
          >
            <option value="" disabled>
              All Products
            </option>
            <option value="abc">MONTAC</option>
            <option value="def">JOGI</option>
            <option value="ghi">5 STAR BRAND</option>
          </select> */}
          <Link to="/home">
          <button className="bg-[#3F72AF] text-white px-2 py-1 rounded">
            Home
          </button> 
          </Link>
           
          <button className="hover:bg-blue-500 hover:text-black px-3  text-black py-1 border border-gray-400 rounded">
            Brands
          </button>

          <a
            href="https://wa.me/919981689326?text=Hello%20can%20you%20help%20me?"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
            style={{ textDecoration: "none" }} // extra safety
          >
            <button className="flex hover:bg-blue-500 hover:text-black  text-black items-center px-3 py-1 border border-gray-400 rounded">
              <img src="/whats.png" alt="Whatsapp" className="h-5 w-5 mr-2" />
              Contact Us
            </button>
          </a>

          <Link to="/about">
            <button className="hover:bg-blue-500 hover:text-black px-3  text-black py-1 border border-gray-400 rounded">
              About Us
            </button>
          </Link>
        </div>

        {/* Right Side Buttons */}
        <div className="flex gap-8 w-3/5 justify-end pr-10">
          <button className="flex items-center bg-[#3F72AF] text-white font-medium px-4 py-1 rounded">
            <img
              src="/in_store_products.svg"
              alt="Products"
              className="h-5 w-5 mr-2"
            />
            In-Store Products
          </button>
          <button className="flex items-center bg-[#3F72AF] text-white font-medium px-4 py-1 rounded">
            <img
              src="/in_store_offers.svg"
              alt="Offers"
              className="h-5 w-5 mr-2"
            />
            In-Store Offers
          </button>
        </div>
      </div>
      
    </header>
  );
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = ({ onSearch }) => {
//   return (
//     <header className="bg-[#F8F8E1] w-full h-[53vh]">
//       <div className="flex justify-around items-start pt-8">
//         <img
//           id="logo"
//           src="/kT final logo.png"
//           alt="Company Logo"
//           className="h-44 w-32 pl-2"
//         />

//         <div className="flex items-center mt-14 border-4 border-[#3F72AF] rounded-lg">
//           <input
//             id="search_bar"
//             type="text"
//             placeholder="What are you Looking for ?"
//             className="search_box h-10 w-[350px] pl-4 outline-none"
//             onChange={(e) => onSearch(e.target.value.toLowerCase())}
//           />
//           <img
//             src="/search_icon.svg"
//             alt="Search icon"
//             className="h-10 w-12 bg-[#3F72AF] p-2 rounded-r-lg"
//           />
//         </div>

//         <a
//           href="https://www.google.co.in/maps/place/Devi+Ahilya+Vishwavidyalaya+Takshila+Campus/@22.6892814,75.867841,17z/data=!3m1!4b1!4m6!3m5!1s0x3962fcef50d20ba3:0x592abbfe7172123e!8m2!3d22.6892814!4d75.8704159!16s%2Fg%2F11cm70vs6d?entry=ttu"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <button
//             id="details"
//             className="flex items-center gap-2 bg-[#3F72AF] text-white px-4 py-3 rounded mt-14"
//           >
//             <img src="/showroom.png" alt="Showroom" className="h-5 w-5" />
//             Showroom Details
//           </button>
//         </a>
//       </div>

//       <div className="flex mt-20">
//         <div className="flex gap-8 pl-10 w-2/5">
//           <select
//             id="products"
//             className="bg-[#3F72AF] text-white px-2 py-1 rounded"
//             defaultValue=""
//           >
//             <option value="" disabled>All Products</option>
//             <option value="abc">MONTAC</option>
//             <option value="def">JOGI</option>
//             <option value="ghi">5 STAR BRAND</option>
//           </select>
//           <button className="hover:bg-blue-500 hover:text-black px-3 bg-[#508060] text-white  py-1 border border-gray-400 rounded">Brands</button>
//           <a
//             href="https://wa.me/919981689326?text=Hello%20can%20you%20help%20me?"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="no-underline"
//           >
//             <button className="flex hover:bg-blue-500 hover:text-black bg-[#508060] text-white items-center px-3 py-1 border border-gray-400 rounded">
//               <img src="/whats.png" alt="Whatsapp" className="h-5 w-5 mr-2" />
//               Contact Us
//             </button>
//           </a>
//           <Link to="/about">
//             <button className="hover:bg-blue-500 hover:text-black px-3 bg-[#508060] text-white  py-1 border border-gray-400 rounded">About Us</button>
//           </Link>
//         </div>

//         <div className="flex gap-8 w-3/5 justify-end pr-10">
//           <button className="flex items-center bg-[#3F72AF] text-white font-medium px-4 py-1 rounded">
//             <img src="/in_store_products.svg" alt="Products" className="h-5 w-5 mr-2" />
//             In-Store Products
//           </button>
//           <button className="flex items-center bg-[#3F72AF] text-white font-medium px-4 py-1 rounded">
//             <img src="/in_store_offers.svg" alt="Offers" className="h-5 w-5 mr-2" />
//             In-Store Offers
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <header className="bg-[#F8F8E1] w-full h-[53vh]">
//       {/* Top Section */}
//       <div className="flex justify-around items-start pt-8">
//         <img
//           id="logo"
//           src="/kT final logo.png"
//           alt="Company Logo"
//           className="h-44 w-32 pl-2"
//         />

//         {/* Search Box */}
//         <div className="flex items-center mt-14 border-4 border-[#3F72AF] rounded-lg">
//           <input
//             id="search_bar"
//             type="text"
//             placeholder="What are you Looking for ?"
//             className="search_box h-10 w-[350px] pl-4 outline-none"
//           />
//           <img
//             src="/search_icon.svg"
//             alt="Search icon"
//             className="h-10 w-12 bg-[#3F72AF] p-2 rounded-r-lg"
//           />
//         </div>

//         <a
//           href="https://www.google.co.in/maps/place/Devi+Ahilya+Vishwavidyalaya+Takshila+Campus/@22.6892814,75.867841,17z/data=!3m1!4b1!4m6!3m5!1s0x3962fcef50d20ba3:0x592abbfe7172123e!8m2!3d22.6892814!4d75.8704159!16s%2Fg%2F11cm70vs6d?entry=ttu&g_ep=EgoyMDI1MDYxMC4xIKXMDSoASAFQAw%3D%3D" // replace with your showroom coordinates or place name
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <button
//             id="details"
//             className="flex items-center gap-2 bg-[#3F72AF] text-white px-4 py-3 rounded mt-14"
//           >
//             <img src="/showroom.png" alt="Showroom" className="h-5 w-5" />
//             Showroom Details
//           </button>
//         </a>
//       </div>

//       {/* Middle Section */}
//       <div className="flex mt-20">
//         <div className="flex gap-8 pl-10 w-2/5">
//           <select
//             id="products"
//             className="bg-[#3F72AF] text-white px-2 py-1 rounded"
//             defaultValue=""
//           >
//             <option value="" disabled>
//               All Products
//             </option>
//             <option value="abc">MONTAC</option>
//             <option value="def">JOGI</option>
//             <option value="ghi">5 STAR BRAND</option>
//           </select>
//           <button className="hover:bg-blue-500 hover:text-black px-3 bg-[#508060] text-white  py-1 border border-gray-400 rounded">
//             Brands
//           </button>
// <a
//   href="https://wa.me/919981689326?text=Hello%20can%20you%20help%20me?"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="no-underline"
//   style={{ textDecoration: "none" }} // extra safety
// >
//   <button className="flex hover:bg-blue-500 hover:text-black bg-[#508060] text-white items-center px-3 py-1 border border-gray-400 rounded">
//     <img src="/whats.png" alt="Whatsapp" className="h-5 w-5 mr-2" />
//     Contact Us
//   </button>
// </a>

//           <Link to="/about">
//             <button className=" hover:bg-blue-500 hover:text-black px-3 bg-[#508060] text-white  py-1 border border-gray-400 rounded">
//               About Us
//             </button>
//           </Link>
//         </div>
//         <div className="flex gap-8 w-3/5 justify-end pr-10">
//           <button className="flex items-center bg-[#3F72AF] text-white font-medium px-4 py-1 rounded">
//             <img
//               src="/in_store_products.svg"
//               alt="Products"
//               className="h-5 w-5 mr-2"
//             />
//             In-Store Products
//           </button>
//           <button className="flex items-center bg-[#3F72AF] text-white font-medium px-4 py-1 rounded">
//             <img
//               src="/in_store_offers.svg"
//               alt="Offers"
//               className="h-5 w-5 mr-2"
//             />
//             In-Store Offers
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
