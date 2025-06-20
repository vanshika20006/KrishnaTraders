import React from 'react';


import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
const About = () => {
  return (
    <div className="text-white">
      {/* Navbar */}
      

      {/* Vision & Mission */}
      <div className="bg-[#163A6B] text-center py-12 px-4">
        <h3 className="text-2xl font-bold mb-5">Our Vision and Mission</h3>
        <p className="text-lg max-w-[80%] mx-auto">
          At [Your Company Name], we believe that building something great starts with the right tools and trusted materials...
        </p>
        <div className="grid grid-cols-3 gap-10 justify-items-center mt-16">
        {[...Array(6)].map((_, idx) => (
          <div key={idx} className={`flex flex-col items-center p-2 rounded-lg ${idx === 1 ? 'scale-150 z-10' : ''}`}>
            <img src="Albert-Einstein.jpg" alt={`Person${idx}`} className="bg-gray-200 w-[120px] h-[120px] rounded-[15px] object-cover mb-2" />
            <p className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded w-[80px] text-center">......</p>
          </div>
        ))}
      </div>
      </div>

      
<div className="w-full bg-[#F8F8E1] h-80 text-black pt-3 ">
    <div className="text-center mt-24">
        <h4 className="text-[#FFAB5B] font-bold text-xl mb-2  ">Testimonials</h4>
        <h1 className="text-[#0f2c52]  font-Abhaya Libre ExtraBold ">Take a look at what our amazing Clients </h1>
        <h1 className="text-[#0f2c52]  font-Abhaya Libre ExtraBold ">have said!</h1>
    </div>
</div>
      <div className="bg-[#f79c50] px-8 py-12 ">
        <Carousel>
          {[1, 2, 3].map((slide, index) => (
            <Carousel.Item key={index}>
              <div className="flex justify-center gap-8 flex-wrap min-h-[400px]">
                {[1, 2, 3].map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-white text-black rounded-[25px] shadow-lg relative max-w-[410px] min-h-[200px] p-6 pt-2"
                  >
                    <p className="text-[5rem] text-gray-400 text-center leading-none mb-0">“</p>
                    <p className="text-base text-gray-800 mb-6 max-h-[140px] overflow-y-auto">
                      We've been sourcing tools and building materials from [Company Name] for over three years...
                    </p>
                    <div className="absolute bottom-0 left-0 w-[250px] bg-[#122f52] text-white flex items-center gap-2 p-4 rounded-bl-[25px] rounded-tr-[20px]">
                      <img src="newton.jpg" alt="Customer" className="w-10 h-10 rounded-full" />
                      <div className="flex flex-col">
                        <strong className="text-sm">Rohit</strong>
                        <span className="text-xs text-[#c0cde5]">Trusted Customer</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="w-full bg-[#F8F8E1] h-55"></div>

    </div>
  );
};
export default About;




