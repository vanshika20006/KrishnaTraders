import React from "react";
import { Hammer, HardHat, Truck, ShieldCheck } from "lucide-react";

const WhyExpertTutor = () => {
  return (
    <section className="bg-[#fcfcfc] font-sans px-6 lg:px-12 pt-16 text-center w-full">
      {/* Section Heading */}
      <h1 className="text-4xl font-bold pl-8 text-gray-800 mb-8">WHY KRISHNA TRADERS?</h1>
      {/* <h1 className="text-4xl font-extrabold tracking-wide pl-8 text-gray-800 mb-10 font-serif uppercase">WHY KRISHNA TRADERS?</h1> */}
      {/* Background Container */}
      <div
        className="relative bg-no-repeat bg-center bg-contain py-20"
        style={{
          backgroundImage: "url('question_mark.jpg')",
          backgroundSize: "550px",
          minHeight: "550px",
        }}
      >
        <div className="flex flex-col pt-10 lg:flex-row justify-between items-center mt-15 gap-8 relative z-10">
          {/* Left Column */}
          <div className="flex flex-col gap-12 lg:ml-52">
            {/* Hammer: Wide Tool Range */}
            <div className="bg-[#163A6B] text-white rounded-tl-[38px] rounded-br-[38px] p-5 shadow-md flex items-center gap-5 w-[320px] h-[90px]">
              <Hammer size={65} />
              <span className="text-left text-xl font-medium">
                Wide Range of Hand Tools
              </span>
            </div>

            {/* HardHat: Safety Certified */}
            <div className="bg-[#163A6B] text-white rounded-tl-[38px] rounded-br-[38px] p-5 shadow-md flex items-center gap-5 w-[320px] h-[90px]">
              <HardHat size={65} />
              <span className="text-left text-xl font-medium">
                Safety Certified Equipment
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-12 mr-70 lg:mr-[210px]">
            {/* Truck: Fast Delivery */}
            <div className="bg-[#163A6B] text-white rounded-tl-[38px] rounded-br-[38px] p-5 shadow-md flex items-center gap-5 w-[320px] h-[90px]">
              <Truck size={65} />
              <span className="text-left text-xl font-medium">
                Fast & Reliable Delivery
              </span>
            </div>

            {/* ShieldCheck: Quality Guarantee */}
            <div className="bg-[#163A6B] text-white rounded-tl-[38px] rounded-br-[38px] p-5 shadow-md flex items-center gap-5 w-[320px] h-[90px]">
              <ShieldCheck size={65} />
              <span className="text-left text-xl font-medium">
                100% Quality Assurance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyExpertTutor;
