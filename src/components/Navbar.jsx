import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

 const products = [
  {
    id: 1,
    name: "AQUA BLU(5T)",
    size: "12X12",
    slug: "1"
  },
  {
    id: 2,
    name: "AQUA BLU(5T)",
    size: "15X15",
    slug: "2"
  },
  {
    id: 3,
    name: "AQUA BLU(5T)",
    size: "18X18",
    slug: "3"
  },
  {
    id: 4,
    name: "AQUA BLU(5T)",
    size: "18X24",
    slug: "4"
  },
  {
    id: 5,
    name: "AQUA BLU(5T)",
    size: "21X21",
    slug: "5"
  },
  {
    id: 6,
    name: "AQUA BLU(5T)",
    size: "24X24",
    slug: "6"
  },
  {
    id: 7,
    name: "AQUA BLU(5T)",
    size: "28X28",
    slug: "7"
  },
  {
    id: 8,
    name: "AQUA BLU(5T)",
    size: "30X30",
    slug: "8"
  },
  {
    id: 9,
    name: "AQUA BLU(5T)",
    size: "36X36",
    slug: "9"
  },
  {
  id: 10,
  name: "FRP (5T)",
  size: "18X36",
  slug: "F1"
},
{
  id: 11,
  name: "FRP (5T)",
  size: "24X24",
  slug: "F2"
},
{
  id: 12,
  name: "FRP (5T)",
  size: "24X30",
  slug: "F3"
},
{
  id: 13,
  name: "FRP (5T)",
  size: "24X36",
  slug: "F4"
},
{
  id: 14,
  name: "FRP (5T)",
  size: "30X30",
  slug: "F5"
},
{
  id: 15,
  name: "FRP (5T)",
  size: "36X36",
  slug: "F6"
},
{
  id: 16,
  name: "CLASSIC",
  size: "12X12",
  slug: "21"
},
{
  id: 17,
  name: "CLASSIC",
  size: "15X15",
  slug: "22"
},
{
  id: 18,
  name: "CLASSIC",
  size: "18X24",
  slug: "23"
},
{
  id: 19,
  name: "CLASSIC",
  size: "21X21",
  slug: "24"
},
{
  id: 20,
  name: "CLASSIC",
  size: "24X24",
  slug: "25"
},
{
  id: 21,
  name: "LOCK",
  size: "18X24",
  slug: "P1"
},
{
  id: 22,
  name: "LOCK",
  size: "21X21",
  slug: "P2"
},
{
  id: 23,
  name: "LOCK",
  size: "24X24",
  slug: "P3"
},
{
  id: 24,
  name: "HEAVY (1T)",
  size: "18X24",
  slug: "E1"
},
{
  id: 25,
  name: "HEAVY (1T)",
  size: "21X21",
  slug: "E2"
},
{
  id: 26,
  name: "HEAVY (1T)",
  size: "24X24",
  slug: "E3"
},
{
  id: 27,
  name: "LDPE COVER",
  size: "12X12",
  slug: "31"
},
{
  id: 28,
  name: "LDPE COVER",
  size: "18X18",
  slug: "32"
},
{
  id: 29,
  name: "LDPE COVER",
  size: "18X24",
  slug: "33"
},
{
  id: 30,
  name: "LDPE COVER",
  size: "24X24",
  slug: "34"
},
{
  id: 31,
  name: "LDPE COVER",
  size: "27X27",
  slug: "35"
},
{
  id: 32,
  name: "LDPE COVER",
  size: "30X30",
  slug: "36"
},
{
  id: 33,
  name: "HDP",
  size: "18X18",
  slug: "41"
},
{
  id: 34,
  name: "HDP",
  size: "24X24",
  slug: "42"
},
{
  id: 35,
  name: "HDP",
  size: "18X24",
  slug: "43"
},
{
  id: 36,
  name: "HDP",
  size: "27X27",
  slug: "44"
},
{
  id: 37,
  name: "HDP",
  size: "30X30",
  slug: "45"
},
{
  id: 38,
  name: "CLASSIC",
  size: "16X18",
  slug: "201"
},
{
  id: 39,
  name: "CLASSIC",
  size: "18X24",
  slug: "202"
},
{
  id: 40,
  name: "SILVER",
  size: "18X16",
  slug: "203"
},
{
  id: 41,
  name: "SILVER",
  size: "18X24",
  slug: "204"
},
{
  id: 42,
  name: "GOLD",
  size: "18X16",
  slug: "205"
},
{
  id: 43,
  name: "GOLD",
  size: "18X24",
  slug: "206"
},
{
  id: 44,
  name: "MIRROR",
  size: "18X16",
  slug: "207"
},
{
  id: 45,
  name: "MIRROR",
  size: "18X24",
  slug: "208"
},
{
  id: 46,
  name: "PRISM",
  size: "18X16",
  slug: "209"
},
{
  id: 47,
  name: "PRISM",
  size: "18X24",
  slug: "2010"
},
{
  id: 48,
  name: "DOLLAR",
  size: "24X24",
  slug: "2011"
},
{
  id: 49,
  name: "SQUARE",
  size: "18X16",
  slug: "2012"
},
{
  id: 50,
  name: "SQUARE",
  size: "18X24",
  slug: "2013"
},
{
  id: 51,
  name: "SILVER",
  size: "12X12",
  slug: "2014"
},
{
  id: 52,
  name: "SILVER",
  size: "14X16",
  slug: "2015"
},
{
  id: 53,
  name: "SILVER",
  size: "12X15",
  slug: "2016"
},
{
  id: 54,
  name: "DOUBLE BOWL SS",
  size: "37X18",
  slug: "2017"
},
{
  id: 55,
  name: "DRAIN BOARD SS",
  size: "37X18",
  slug: "2018"
},
{
  id: 56,
  name: "HANDMADE SINK",
  size: "18X16X10",
  slug: "211"
},
{
  id: 57,
  name: "HANDMADE SINK",
  size: "24X18X10",
  slug: "212"
},
{
  id: 58,
  name: "HANDMADE GLOSSY",
  size: "24X18X10",
  slug: "213"
},
{
  id: 59,
  name: "HANDMADE GOLD",
  size: "24X18X10",
  slug: "214"
},
{
  id: 60,
  name: "HANDMADE ROSEGOLD",
  size: "24X18X10",
  slug: "215"
},
{
  id: 61,
  name: "HANDMADE BLACK",
  size: "24X18X10",
  slug: "216"
},
{
  id: 62,
  name: "DOUBLE BOWL BLACK",
  size: "37X18X10",
  slug: "217"
},
{
  id: 63,
  name: "DOUBLE BOWL",
  size: "37X18X10",
  slug: "218"
},
{
  id: 64,
  name: "DOUBLE BOWL",
  size: "45X20X10",
  slug: "219"
},
{
  id: 65,
  name: "DOUBLE BOWL",
  size: "32X18X10",
  slug: "2110"
},
{
  id: 66,
  name: "DRAIN BOARD",
  size: "37X18X10",
  slug: "2111"
},
{
  id: 67,
  name: "WHITE",
  size: "18X24",
  slug: "221"
},
{
  id: 68,
  name: "BROWN",
  size: "18X24",
  slug: "222"
},
{
  id: 69,
  name: "GREY",
  size: "24X18",
  slug: "223"
},
{
  id: 70,
  name: "BLACK",
  size: "24X18",
  slug: "224"
},
{
  id: 71,
  name: "GREY STONE",
  size: "24X18",
  slug: "225"
},
{
  id: 72,
  name: "PEACH IVORY",
  size: "24X18",
  slug: "226"
},
{
  id: 73,
  name: "IVORY SAND",
  size: "24X18",
  slug: "227"
},
{
  id: 74,
  name: "SNOW SAND",
  size: "24X18",
  slug: "228"
},
{
  id: 75,
  name: "ALL COLOUR",
  size: "37X18",
  slug: "231"
},
{
  id: 76,
  name: "ALL COLOUR",
  size: "37X18",
  slug: "241"
},
{
  id: 77,
  name: "POLO DESIGN SHORT BODY",
  size: "18X18",
  slug: "301"
},
{
  id: 78,
  name: "POLO DESIGN LONG BODY",
  size: "24X24",
  slug: "302"
},
{
  id: 79,
  name: "POLO DESIGN ANGLE COCK",
  size: "18X24",
  slug: "303"
},
{
  id: 80,
  name: "POLO DESIGN SINK COCK",
  size: "27X27",
  slug: "304"
},
{
  id: 81,
  name: "POLO DESIGN SWAN COCK",
  size: "30X30",
  slug: "305"
},
{
  id: 82,
  name: "POLO DESIGN TWO WAY BIB COCK",
  size: "18X18",
  slug: "306"
},
{
  id: 83,
  name: "POLO DESIGN TWO WAY ANGLE",
  size: "24X24",
  slug: "307"
},
{
  id: 84,
  name: "CRYSTAL DESIGN SHORT BODY",
  size: "18X18",
  slug: "311"
},
{
  id: 85,
  name: "CRYSTAL DESIGN LONG BODY",
  size: "24X24",
  slug: "312"
},
{
  id: 86,
  name: "CRYSTAL DESIGN ANGLE COCK",
  size: "18X24",
  slug: "313"
},
{
  id: 87,
  name: "CRYSTAL DESIGN SINK COCK",
  size: "27X27",
  slug: "314"
},
{
  id: 88,
  name: "CRYSTAL DESIGN SWAN COCK",
  size: "30X30",
  slug: "315"
},
{
  id: 89,
  name: "CRYSTAL DESIGN TWO WAY BIB COCK",
  size: "18X18",
  slug: "316"
},
{
  id: 90,
  name: "CRYSTAL DESIGN TWO WAY ANGLE",
  size: "24X24",
  slug: "317"
},
{
  id: 91,
  name: "CRYSTAL DESIGN FOAM FLOW S/B",
  size: "18X24",
  slug: "318"
},
{
  id: 92,
  name: "CRYSTAL DESIGN FOAM FLOW L/B",
  size: "24X24",
  slug: "319"
},
{
  id: 93,
  name: "CRYSTAL DESIGN PILLAR COCK",
  size: "18X24",
  slug: "3110"
},
{
  id: 94,
  name: "OPEL DESIGN(BLUE) SHORT BODY",
  size: "18X18",
  slug: "321"
},
{
  id: 95,
  name: "OPEL DESIGN(BLUE) LONG BODY",
  size: "24X24",
  slug: "322"
},
{
  id: 96,
  name: "OPEL DESIGN(BLUE) BIB COCK",
  size: "18X24",
  slug: "323"
},
{
  id: 97,
  name: "OPEL DESIGN(BLUE) SINK COCK",
  size: "27X27",
  slug: "324"
},
{
  id: 98,
  name: "OPEL DESIGN(BLUE) SWAN COCK",
  size: "30X30",
  slug: "325"
},
{
  id: 99,
  name: "OPEL DESIGN(BLUE) ANGLE COCK",
  size: "18X18",
  slug: "326"
},
{
  id: 100,
  name: "OPEL DESIGN(BLUE) TWO WAY BIB COCK",
  size: "24X24",
  slug: "327"
},
{
  id: 101,
  name: "RANDOM MODEL SHORT BODY",
  size: "24X24",
  slug: "331"
},
{
  id: 102,
  name: "RANDOM MODEL ITALIAN PILLAR",
  size: "18X24",
  slug: "332"
},
{
  id: 103,
  name: "MOSCOW MODEL SHORT BODY",
  size: "18X18",
  slug: "341"
},
{
  id: 104,
  name: "MOSCOW MODELLONG BODY",
  size: "24X24",
  slug: "342"
},
{
  id: 105,
  name: "BREZZA SHORT BODY",
  size: "18X18",
  slug: "401"
},
{
  id: 106,
  name: "BREZZA LONG BODY",
  size: "24X24",
  slug: "402"
},
{
  id: 107,
  name: "BREZZA ANGLE COCK",
  size: "18X24",
  slug: "403"
},
{
  id: 108,
  name: "BREZZA SINK COCK",
  size: "27X27",
  slug: "404"
},
{
  id: 109,
  name: "BREZZA SWAN COCK",
  size: "30X30",
  slug: "405"
},
{
  id: 110,
  name: "BREZZA TWO WAY BIB COCK",
  size: "18X18",
  slug: "406"
},
{
  id: 111,
  name: "BREZZA TWO WAY ANGLE",
  size: "24X24",
  slug: "407"
},
{
  id: 112,
  name: "BREZZA PILLAR COCK",
  size: "18X24",
  slug: "408"
},
{
  id: 113,
  name: "BREZZA PILLAR COCK 6",
  size: "27X27",
  slug: "409"
},
{
  id: 114,
  name: "BREZZA NOZZLE COCK",
  size: "30X30",
  slug: "4010"
},
{
  id: 115,
  name: "BREZZA MIXER WITH BEND",
  size: "18X18",
  slug: "4011"
},
{
  id: 116,
  name: "BREZZA FLUSH COCK (M)",
  size: "24X24",
  slug: "4012"
},
{
  id: 117,
  name: "BREZZA FLUSH COCK (HY)",
  size: "18X24",
  slug: "4013"
},
{
  id: 118,
  name: "BREZZA ANGLE (PROJECT)",
  size: "27X27",
  slug: "4014"
},
{
  id: 119,
  name: "ARYA HEAD DIVERTOR WITH PLATE",
  size: "18X18",
  slug: "411"
},
{
  id: 120,
  name: "ARYA HEAD TABLE TOP 13",
  size: "18X18",
  slug: "412"
},
{
  id: 121,
  name: "ARYA HEAD Spout M",
  size: "18X18",
  slug: "413"
},
{
  id: 122,
  name: "ARYA HEAD Spout HY",
  size: "18X18",
  slug: "414"
},
{
  id: 123,
  name: "JERRY SHORT BODY",
  size: "18X18",
  slug: "421"
},
{
  id: 124,
  name: "JERRY LONG BODY",
  size: "24X24",
  slug: "422"
},
{
  id: 125,
  name: "JERRY ANGLE COCK",
  size: "18X24",
  slug: "423"
},
{
  id: 126,
  name: "JERRY SINK COCK",
  size: "27X27",
  slug: "424"
},
{
  id: 127,
  name: "JERRY SWAN COCK",
  size: "30X30",
  slug: "425"
},
{
  id: 128,
  name: "JERRY TWO WAY BIB COCK",
  size: "18X18",
  slug: "426"
},
{
  id: 129,
  name: "JERRY TWO WAY ANGLE",
  size: "24X24",
  slug: "427"
},
{
  id: 130,
  name: "JERRY PILLAR COCK",
  size: "18X24",
  slug: "428"
},
{
  id: 131,
  name: "JERRY PILLAR COCK 6",
  size: "27X27",
  slug: "429"
},
{
  id: 132,
  name: "JERRY NOZZLE COCK",
  size: "30X30",
  slug: "4210"
},
{
  id: 133,
  name: "JERRY MIXER WITH BEND",
  size: "18X18",
  slug: "4211"
},
{
  id: 134,
  name: "VIVO CONCEALED VALVE",
  size: "18X18",
  slug: "431"
},
{
  id: 135,
  name: "VIVO ANGLE COCK",
  size: "24X24",
  slug: "432"
},
{
  id: 136,
  name: "VIVO FLUSH COCK",
  size: "18X24",
  slug: "433"
},
{
  id: 137,
  name: "EXTENSION NIPPLE 1",
  size: "1",
  slug: "501"
},
{
  id: 138,
  name: "EXTENSION NIPPLE 1.1/2",
  size: "1.1/2",
  slug: "502"
},
{
  id: 139,
  name: "EXTENSION NIPPLE 2",
  size: "2",
  slug: "503"
},
{
  id: 140,
  name: "EXTENSION NIPPLE 2.1/2",
  size: "2.1/2",
  slug: "504"
},
{
  id: 141,
  name: "EXTENSION NIPPLE 3",
  size: "3",
  slug: "505"
},
{
  id: 142,
  name: "EXTENSION NIPPLE 4",
  size: "4",
  slug: "506"
},
{
  id: 143,
  name: "EXTENSION NIPPLE 6",
  size: "6",
  slug: "507"
},
{
  id: 144,
  name: "HEX NIPPLE SS 1/2",
  size: "1/2",
  slug: "508"
},
{
  id: 145,
  name: "SANDWICH MODEL SHOWER",
  size: "4",
  slug: "511"
},
{
  id: 146,
  name: "SANDWICH MODEL SHOWER",
  size: "6",
  slug: "512"
},
{
  id: 147,
  name: "SANDWICH MODEL SHOWER",
  size: "8",
  slug: "513"
},
{
  id: 148,
  name: "SANDWICH MODEL SHOWER",
  size: "10",
  slug: "514"
},
{
  id: 149,
  name: "SANDWICH MODEL SHOWER",
  size: "12",
  slug: "515"
},
{
  id: 150,
  name: "CURVE MODEL SHOWER",
  size: "4",
  slug: "521"
},
{
  id: 151,
  name: "CURVE MODEL SHOWER",
  size: "6",
  slug: "522"
},
{
  id: 152,
  name: "CURVE MODEL SHOWER",
  size: "8",
  slug: "523"
},
{
  id: 153,
  name: "CURVE MODEL SHOWER",
  size: "10",
  slug: "524"
},
{
  id: 154,
  name: "CURVE MODEL SHOWER",
  size: "12",
  slug: "525"
},
{
  id: 155,
  name: "ABS SHOWER",
  size: "3",
  slug: "531"
},
{
  id: 156,
  name: "ABS SHOWER",
  size: "4",
  slug: "532"
},
{
  id: 157,
  name: "PTMT SHOWER",
  price: 0,
  inStock: true,
  size: "4",
  image: "ptmtshoower4.jpg",
  slug: "541"
},
{
  id: 158,
  name: "PTMT SHOWER",
  price: 0,
  inStock: true,
  size: "5",
  image: "ptmtshoower4.jpg",
  slug: "542"
},
{
  id: 159,
  name: "SS ROD MEDIUM",
  price: 0,
  inStock: true,
  size: "9",
  image: "medium9.jpg",
  slug: "5211"
},
{
  id: 160,
  name: "SS ROD HEAVY",
  price: 0,
  inStock: true,
  size: "9",
  image: "Heavy9.jpg",
  slug: "5212"
},
{
  id: 161,
  name: "SS ROD MEDIUM",
  price: 0,
  inStock: true,
  size: "12",
  image: "Medium12.jpg",
  slug: "5213"
},
{
  id: 162,
  name: "SS ROD HEAVY",
  price: 0,
  inStock: true,
  size: "12",
  image: "Heavy12.jpg",
  slug: "5214"
},
{
  id: 163,
  name: "SS ROD MEDIUM",
  price: 0,
  inStock: true,
  size: "15",
  image: "Medium15.jpg",
  slug: "5215"
},
{
  id: 164,
  name: "SS ROD HEAVY",
  price: 0,
  inStock: true,
  size: "15",
  image: "Heavy15.jpg",
  slug: "5216"
},
{
  id: 165,
  name: "SS ROD MEDIUM",
  price: 0,
  inStock: true,
  size: "18",
  image: "Medium18.jpg",
  slug: "5217"
},
{
  id: 166,
  name: "SS ROD HEAVY",
  price: 0,
  inStock: true,
  size: "18",
  image: "Heavy18.jpg",
  slug: "5218"
},
{
  id: 167,
  name: "CP FLANCH ROUND",
  size: "Medium",
  slug: "5311"
},
{
  id: 168,
  name: "CP FLANCH ROUND",
  size: "Small",
  slug: "5312"
},
{
  id: 169,
  name: "CP FLANCH ROUND",
  size: "Heavy",
  slug: "5313"
}










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

  const filteredSuggestions = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.size.toLowerCase().includes(query.toLowerCase())
  );

  const renderSearchInput = (widthClass = "w-[480px]") => (
    <div className="relative">
      <div className={`flex items-center border-4 border-[#3F72AF] rounded-lg ${widthClass}`}>
        <input
          type="text"
          placeholder="What are you Looking for ?"
          className="h-10 pl-4 outline-none bg-[#fdfce9] w-full"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}

          onFocus={() => setShowSuggestions(true)}
        />
        <button onClick={handleSearchClick}>
          <img
            src="/search_icon.svg"
            alt="Search"
            className="h-10 w-12 bg-[#3F72AF] p-2 rounded-r-lg"
          />
        </button>
      </div>

      {showSuggestions && query && (
  <ul className="absolute top-12 w-full max-h-60 overflow-y-auto bg-[#fdfce9]/10 backdrop-blur-md border border-gray-300 rounded shadow z-50">
    
    {filteredSuggestions.length === 0 && (
      <li className="px-4 py-2 text-gray-500">No matching products</li>
    )}

    {filteredSuggestions.map((item) => (
  <li
    key={item.id}
    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
    onMouseDown={(e) => e.preventDefault()} // 👈 this prevents input blur
    onClick={() => {
      setQuery(item.name);
      navigate(`/product${item.slug}`, { state: item }); // ✅ Fixed URL
      setShowSuggestions(false);
    }}
  >
    {item.name} ({item.size})
  </li>
))}

  </ul>
)}

    </div>
  );

  return (
    <header className="bg-[#f9f9e6] w-full pb-4">
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between px-10 py-4">
          <img src="/kT-final-logo.png" alt="Logo" className="h-28 w-28" />
          {renderSearchInput()}
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
              <img src="/in_store_products.svg" className="h-5 w-5 mr-2" alt="Products" />
              In-Store Products
            </button>
            <button className="flex items-center bg-[#3F72AF] text-white font-medium px-4 py-1 rounded">
              <img src="/in_store_offers.svg" className="h-5 w-5 mr-2" alt="Offers" />
              In-Store Offers
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="block md:hidden px-4 py-4">
        <div className="flex flex-col items-center gap-4">
          <img src="/kT-final-logo.png" alt="Logo" className="h-20 w-20" />
          {renderSearchInput("w-full max-w-[200px]")}

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
              <img src="/in_store_products.svg" className="h-4 w-4 mr-1" alt="Products" />
              Products
            </button>
            <button className="flex items-center bg-[#3F72AF] text-white px-3 py-1 text-xs rounded">
              <img src="/in_store_offers.svg" className="h-4 w-4 mr-1" alt="Offers" />
              Offers
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
