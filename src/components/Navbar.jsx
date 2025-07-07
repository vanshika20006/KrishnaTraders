import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "AQUA BLU(5T) 12X12",
      size: "12X12",
      slug: "1"
    },
    {
      id: 2,
      name: "PVC Solvent 200ml",
      size: "200ml",
      slug: "pvc-solvent-200ml"
    },
    {
      id: 3,
      name: "CPVC Solvent 50ml",
      size: "50ml",
      slug: "cpvc-solvent-50ml"
    }
    // aur bhi products yahan add karo...
  ];

  const handleSearchClick = () => {
    const searchQuery = query.toLowerCase().trim();

    const found = products.find(
      (p) =>
        p.name.toLowerCase().includes(searchQuery) ||
        p.size.toLowerCase().includes(searchQuery)
    );

    if (found) {
      navigate(`/product${found.slug}`, { state: found });
    } else {
      alert("Product not found");
    }
  };

  return (
    <header className="bg-[#f9f9e6] w-full pb-4">
      {/* Desktop Navbar */}
      <div className="hidden md:block">
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
            href="https://www.google.com/maps/dir//827,+New+Loha+Mandi..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 bg-[#3F72AF] text-white px-4 py-3 rounded">
              <img src="/showroom.png" className="h-5 w-5" alt="Showroom" />
              Showroom Details
            </button>
          </a>
        </div>

        <div className="flex mt-6 px-10 justify-between">
          <div className="flex gap-8 w-2/5">
            <Link to="/home">
              <button className="bg-[#3F72AF] text-white px-2 py-1 rounded">Home</button>
            </Link>
            <Link to="/about">
              <button className="hover:bg-blue-500 hover:text-black px-3 text-black py-1 border border-gray-400 rounded">
                Brand
              </button>
            </Link>
            <a
              href="https://wa.me/918962075300?text=Hello..."
              target="_blank"
              rel="noopener noreferrer"
              className="[text-decoration:none]"
            >
              <button className="flex text-black items-center px-4 py-1 border border-gray-400 rounded">
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

      {/* Mobile Navbar */}
      <div className="block md:hidden px-4 py-4">
        <div className="flex flex-col items-center gap-4">
          <img src="/kT-final-logo.png" alt="Logo" className="h-20 w-20" />

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

          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <Link to="/home" className="bg-[#3F72AF] text-white px-3 py-1 text-xs rounded">
              Home
            </Link>
            <button className="border border-gray-400 text-xs px-3 py-1 rounded text-black">
              Brands
            </button>
            <a
              href="https://wa.me/919981689326?text=Hello..."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 text-xs px-3 py-1 rounded flex items-center text-black"
            >
              <img src="/whats.png" className="h-4 w-4 mr-1" alt="WhatsApp" />
              Contact
            </a>
            <Link to="/about" className="border border-gray-400 text-xs px-3 py-1 rounded text-black">
              About
            </Link>
          </div>

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