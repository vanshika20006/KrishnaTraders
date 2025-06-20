
const Productcardfinal = () => {
  return (
    <>
        {/* Product Section */}
        <div className="bg-[#112D4E] w-screen py-10 flex justify-evenly text-white">
          {/* Left Image & Pickup Info */}
          <div className="w-[45%] flex flex-col items-start pl-24">
            <img src="1.png" alt="Product" />
            <p className="pt-2">Pickup available Krishna Traders, Opposite Indian Oil, Sarjapur Main Road, Indore Madhya Pradesh</p>
            <span className="text-sm pt-1">Usually ready in 24 hours</span>
          </div>

          {/* Center Product Info */}
          <div className="w-[25%] flex flex-col">
            <h4 className="text-[19px]">Product Description</h4>
            <p className="text-gray-300 text-[16px] font-light pt-5">Some description of the product to be given…</p>
            <h3 className="pt-9 mb-10">M.R.P.: ₹4999.00</h3>
            <button className="mt-15 bg-orange-400 px-8 py-2 rounded">Get Discount</button>
            <a
            href="https://wa.me/919981689326?text=Hello%20can%20you%20help%20me?"
            target="_blank"
            rel="noopener noreferrer"
          ><button className="mt-5 bg-green-500 px-14 py-2 rounded">Chat via Whatsapp</button>
          </a> </div>

          {/* Size Selector */}
          <div className="pl-24">
            <select className="text-[15px] bg-[#112D4E] border border-white px-2 py-1 rounded">
              <option disabled selected>Size</option>
              <option>12X12</option>
              <option>15X15</option>
              <option>18X18</option>
              <option>12X12</option>
              <option>15X15</option>
              <option>18X18</option>
              <option>12X12</option>
              <option>15X15</option>
              <option>18X18</option>
              
            </select>
          </div>
        </div>
     
    </>
  );
};
export default Productcardfinal;