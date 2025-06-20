import { useLocation } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";

const Productcardfinal = () => {
  const location = useLocation();
  const {
    name,
    price,
    image,
    discountedPrice,
    size,
    imageList, // optional array of images
  } = location.state || {};

  const defaultImages = [
    { url: "Aqua18X18.jpg" },
    { url: "Aqua24X24.jpg" },
    { url: "AquaBack.jpg" },
  ];

  const imagesToShow = imageList || defaultImages;

  return (
    <>
      {/* Product Section */}
      <div className="bg-[#112D4E] w-screen py-10 px-10 flex justify-between text-white">
        {/* Left Image & Pickup Info */}
        <div className=" ml-30 w-[45%] flex flex-col items-start">
          <div className="product-image-slider w-[450px] h-[350px] bg-white rounded-md overflow-hidden flex items-center justify-center">
            <SimpleImageSlider
              width={450}
              height={350}
              images={imagesToShow}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
              autoPlayDelay={2}
              loop={true}
            />
          </div>

          <p className="pt-4">
            Pickup available at Krishna Traders, Opposite Indian Oil, Sarjapur
            Main Road, Indore, Madhya Pradesh
          </p>
          <span className="text-sm pt-1">Usually ready in 24 hours</span>
        </div>

        {/* Right Product Info */}
        <div className="w-[25%] mr-80 flex flex-col">
          <h4 className="text-[22px] font-semibold">{name || "Product Name"}</h4>
          <h4 className="text-[18px] pt-1">{size || "Product Size"}</h4>

          <p className="text-gray-300 text-[15px] font-light pt-5 leading-relaxed">
            <span className="block">🔹 <strong>Weight:</strong> 25kg (approx)</span>
            <span className="block">🔹 <strong>Color:</strong> White / Grey</span>
            <span className="block">🔹 <strong>Packaging:</strong> Wrapped with Polyfilm & Jute</span>
            <span className="block">🔹 <strong>Capacity:</strong> 5 Ton Load Bearing</span>
          </p>

          {/* Price Display */}
          {discountedPrice ? (
            <div className="pt-9">
              <p className="text-xl text-red-400 font-bold">
                Offer Price: ₹{discountedPrice}
              </p>
              <p className="line-through text-gray-400">M.R.P.: ₹{price}</p>
            </div>
          ) : (
            <h3 className="pt-9 text-xl">M.R.P.: ₹{price}</h3>
          )}

          <button className="mt-10 bg-orange-400 px-8 py-2 rounded">
            Get Discount
          </button>

          <a
            href="https://wa.me/919981689326?text=Hello%20can%20you%20help%20me?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-5 bg-green-500 px-14 py-2 rounded">
              Chat via Whatsapp
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Productcardfinal;




// import React, { useState } from "react";

// const lockImages = [
//   "LOCK18X24.jpg",
//   "LOCK21X21.jpg",
//   "LOCK24X24.jpg"
// ];

// const LockProductCard = () => {
//   const [current, setCurrent] = useState(0);
//   const length = lockImages.length;

//   const nextSlide = () => setCurrent((current + 1) % length);
//   const prevSlide = () => setCurrent((current - 1 + length) % length);

//   return (
//     <div className="bg-[#112D4E] w-screen py-10 flex justify-evenly text-white">
//       {/* Image Slider */}
//       <div className="w-[45%] flex flex-col items-start pl-24">
//         <div className="w-[500px] h-[450px] bg-white rounded-lg overflow-hidden relative">
//           <img
//             src={lockImages[current]}
//             alt="Lock Product"
//             className="w-full h-full object-contain p-4"
//           />
//           <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded" onClick={prevSlide}>⬅</button>
//           <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded" onClick={nextSlide}>➡</button>
//         </div>
//         <p className="pt-4">Pickup available Krishna Traders, Opposite Indian Oil, Sarjapur Main Road, Indore Madhya Pradesh</p>
//         <span className="text-sm pt-1">Usually ready in 24 hours</span>
//       </div>

//       {/* Info */}
//       <div className="w-[25%] flex flex-col">
//         <h4 className="text-[19px]">LOCK Series</h4>
//         <p className="text-gray-300 text-[16px] font-light pt-5">Secure locking covers for extra protection and precision fitting.</p>
//         <h3 className="pt-9 mb-10">M.R.P.: ₹4599.00</h3>
//         <button className="mt-15 bg-orange-400 px-8 py-2 rounded">Get Discount</button>
//         <a href="https://wa.me/919981689326?text=Hello%20can%20you%20help%20me?" target="_blank" rel="noopener noreferrer">
//           <button className="mt-5 bg-green-500 px-14 py-2 rounded">Chat via Whatsapp</button>
//         </a>
//       </div>

//       {/* Size Selector */}
//       <div className="pl-24">
//         <select className="text-[15px] bg-[#112D4E] border border-white px-2 py-1 rounded">
//           <option disabled selected>Size</option>
//           <option>18X18</option>
//           <option>18X24</option>
//           <option>24X24</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default LockProductCard;
