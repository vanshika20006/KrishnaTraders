import React, { useState } from "react";

const hdpImages = [
  "HDP18X18.jpg",
  "HDP18X24.jpg",
  "HDP18X18.jpg",
];

const HDPProductCard = () => {
  const [current, setCurrent] = useState(0);
  const length = hdpImages.length;

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
    <div className="bg-[#112D4E] w-screen py-10 flex justify-evenly text-white">
      {/* Image Slider */}
      <div className="w-[45%] flex flex-col items-start pl-24">
        <div className="w-[500px] h-[450px] bg-white rounded-lg overflow-hidden relative">
          <img
            src={hdpImages[current]}
            alt="HDP Product"
            className="w-full h-full object-contain p-4"
          />
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded"
            onClick={prevSlide}
          >
            ⬅
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded"
            onClick={nextSlide}
          >
            ➡
          </button>
        </div>
        <p className="pt-4">
          Pickup available Krishna Traders, Opposite Indian Oil, Sarjapur Main Road, Indore Madhya Pradesh
        </p>
        <span className="text-sm pt-1">Usually ready in 24 hours</span>
      </div>

      {/* Product Info */}
      <div className="w-[25%] flex flex-col">
        <h4 className="text-[19px]">HDP Product Description</h4>
        <p className="text-gray-300 text-[16px] font-light pt-5">
          High-Density Polyethylene (HDP) cover – sturdy and reliable for multiple industrial applications.
        </p>
        <h3 className="pt-9 mb-10">M.R.P.: ₹5999.00</h3>
        <button className="mt-15 bg-orange-400 px-8 py-2 rounded">Get Discount</button>
        <a
          href="https://wa.me/919981689326?text=Hello%20can%20you%20help%20me?"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-5 bg-green-500 px-14 py-2 rounded">Chat via Whatsapp</button>
        </a>
      </div>

      {/* Size Selector */}
      <div className="pl-24">
        <select className="text-[15px] bg-[#112D4E] border border-white px-2 py-1 rounded">
          <option disabled selected>Size</option>
          <option>18X18</option>
          <option>18X24</option>
          <option>24X24</option>
          <option>27X27</option>
          <option>30X30</option>
        </select>
      </div>
    </div>
  );
};

export default HDPProductCard;
