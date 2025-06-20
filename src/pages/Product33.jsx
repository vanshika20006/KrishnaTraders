


import { useLocation } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import Navbar from '../components/Navbar';
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
    { url: "LDPE18X24.jpg" },
    { url: "LDPE12X12.jpg" },
    { url: "AquaBack.jpg" },
  ];

  const imagesToShow = imageList || defaultImages;

  return (
    <>
    <Navbar />
      {/* Product Section */}
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
