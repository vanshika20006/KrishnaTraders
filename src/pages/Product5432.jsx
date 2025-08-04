import React from "react"; // Ensure React is imported
import { useLocation } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import Navbar from '../components/Navbar'; // Assuming Navbar is in the same 'components' folder relative to this file

// --- Desktop Product Detail Component (Your original code, UNCHANGED) ---
// This component will render on large screens (lg breakpoint and above)
const DesktopProductDetailContent = () => {
  const location = useLocation();
  const {
    name,
    price,
    discountedPrice,
    size,
    // image and imageList are intentionally not destructured here as per your latest code,
    // where imagesToShow directly uses defaultImages.
  } = location.state || {};

    const defaultImages = [
    { url: "PTMTGUN1MTRhy.jpg" },
    { url: "PTMTGUN1MTRhy2.jpg" }
  ];const imagesToShow = defaultImages;

  return (
    <>
      {/* Product Section - Desktop Layout (EXACTLY AS PROVIDED) */}
      <div className="bg-[#112D4E] w-screen py-10 px-10 flex justify-between text-white">
        {/* Left Image & Pickup Info */}
        <div className=" ml-30 w-[45%] flex flex-col items-start">
          <div className="product-image-slider w-[480px] h-[450px] bg-white rounded-md overflow-hidden flex items-center justify-center">
            <SimpleImageSlider
              width={480}
              height={450}
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

            
     
 <span className="block">🔹 <strong>Weight:</strong>-</span>                                                                               </p> 

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

// --- Mobile Product Detail Component (New responsive layout for mobile) ---
// This component will render on screens smaller than large (below lg breakpoint)
const MobileProductDetailContent = () => {
  const location = useLocation();
  const {
    name,
    price,
    discountedPrice,
    size,
  } = location.state || {};

   const defaultImages = [
    { url: "PTMTGUN1MTRhy.jpg" },
    { url: "PTMTGUN1MTRhy2.jpg" }
  ];const imagesToShow = defaultImages;

  return (
    <div className="bg-[#112D4E] w-full min-h-screen py-6 px-4 flex flex-col text-white">
      {/* Product Info (Top on Mobile) */}
      <div className="w-full flex flex-col items-center mb-6">
        <h4 className="text-xl font-semibold text-center mb-1">{name || "Product Name"}</h4>
        <h4 className="text-base text-center">{size || "Product Size"}</h4>
      </div>

      {/* Image Slider (Middle on Mobile) */}
      <div className="product-image-slider w-[320px] h-[280px] sm:h-[350px] bg-white rounded-md overflow-hidden flex items-center justify-center mb-6">
        <SimpleImageSlider
          width={320} // Use 100% width for responsiveness
          height={280} // Fixed height for mobile, can be made responsive with sm:h-[...] etc.
          images={imagesToShow}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          autoPlayDelay={2}
          loop={true}
        />
      </div>

      {/* Pickup Info (Below image on Mobile) */}
      <div className="w-full text-center mb-6">
        <p className="text-sm">
          Pickup available at Krishna Traders, Opposite Indian Oil, Sarjapur
          Main Road, Indore, Madhya Pradesh
        </p>
        <span className="text-xs mt-1 block">Usually ready in 24 hours</span>
      </div>

      {/* Product Details (Below pickup on Mobile) */}
      <div className="w-full mb-6">
        <p className="text-gray-300 text-sm font-light leading-relaxed">

     


    <span className="block">🔹 <strong>Weight:</strong>-</span>                                                                    </p>
      </div>

      {/* Price Display */}
      {discountedPrice ? (
        <div className="mb-6 text-center">
          <p className="text-lg text-red-400 font-bold">
            Offer Price: ₹{discountedPrice}
          </p>
          <p className="line-through text-gray-400 text-sm">M.R.P.: ₹{price}</p>
        </div>
      ) : (
        <h3 className="mb-6 text-lg text-center">M.R.P.: ₹{price}</h3>
      )}

      {/* Buttons (Stacked on Mobile) */}
      <div className="flex flex-col items-center gap-4">
        <button className="w-full max-w-xs bg-orange-400 px-8 py-3 rounded text-lg font-semibold">
          Get Discount
        </button>

        <a
          href="https://wa.me/919981689326?text=Hello%20can%20you%20help%20me?"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-xs"
        >
          <button className="w-full bg-green-500 px-14 py-3 rounded text-lg font-semibold">
            Chat via Whatsapp
          </button>
        </a>
      </div>
    </div>
  );
};

// --- Main Productcardfinal Component (Entry point for the product detail page) ---
const Productcardfinal = () => {
  return (
    <>
      <Navbar /> {/* Navbar is always rendered */}
      
      {/* Desktop View: Visible on 'lg' screens and hidden below */}
      <div className="hidden lg:block">
        <DesktopProductDetailContent />
      </div>

      {/* Mobile View: Visible below 'lg' screens and hidden on 'lg' and above */}
      <div className="lg:hidden">
        <MobileProductDetailContent />
      </div>
    </>
  );
};

export default Productcardfinal;