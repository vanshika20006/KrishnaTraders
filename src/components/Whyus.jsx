import React from "react";
import { Hammer, HardHat, Truck, ShieldCheck } from "lucide-react";

const MobileWhyExpertTutor = () => {
  return (
    <section className="bg-[#fcfcfc] px-4 pt-10 pb-16 lg:hidden block text-center">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-8">
        WHY KRISHNA TRADERS?
      </h1>

      {/* BG image container */}
      <div
        className="relative bg-no-repeat bg-center bg-contain py-10"
        style={{
          backgroundImage: "url('question_mark.jpg')",
          backgroundSize: "220px", // smaller size for mobile
          minHeight: "400px",
        }}
      >
        <div className="flex justify-between items-start relative z-10 px-2">
          {/* Left 2 Cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#163A6B] text-white rounded-xl p-4 shadow-md w-[150px] flex items-center gap-3">
              <Hammer size={30} />
              <span className="text-left text-sm font-medium">
                Tools
              </span>
            </div>

            <div className="bg-[#163A6B] text-white rounded-xl p-4 shadow-md w-[150px] flex items-center gap-3">
              <HardHat size={30} />
              <span className="text-left text-sm font-medium">
                Safety
              </span>
            </div>
          </div>

          {/* Right 2 Cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#163A6B] text-white rounded-xl p-4 shadow-md w-[150px] flex items-center gap-3">
              <Truck size={30} />
              <span className="text-left text-sm font-medium">
                Delivery
              </span>
            </div>

            <div className="bg-[#163A6B] text-white rounded-xl p-4 shadow-md w-[150px] flex items-center gap-3">
              <ShieldCheck size={30} />
              <span className="text-left text-sm font-medium">
                Quality
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




const WhyExpertTutor = () => {
  return (
    <>
      {/* Desktop View */}
      <section className="bg-[#fcfcfc] font-sans px-6 lg:px-12 pt-16 text-center w-full hidden lg:block">
        <h1 className="text-4xl font-bold pl-8 text-gray-800 mb-8">
          WHY KRISHNA TRADERS?
        </h1>

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
              <div className="bg-[#163A6B] text-white rounded-tl-[38px] rounded-br-[38px] p-5 shadow-md flex items-center gap-5 w-[320px] h-[90px]">
                <Hammer size={65} />
                <span className="text-left text-xl font-medium">
                  Wide Range of Hand Tools
                </span>
              </div>
              <div className="bg-[#163A6B] text-white rounded-tl-[38px] rounded-br-[38px] p-5 shadow-md flex items-center gap-5 w-[320px] h-[90px]">
                <HardHat size={65} />
                <span className="text-left text-xl font-medium">
                  Safety Certified Equipment
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-12 mr-70 lg:mr-[210px]">
              <div className="bg-[#163A6B] text-white rounded-tl-[38px] rounded-br-[38px] p-5 shadow-md flex items-center gap-5 w-[320px] h-[90px]">
                <Truck size={65} />
                <span className="text-left text-xl font-medium">
                  Fast & Reliable Delivery
                </span>
              </div>
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

      {/* Mobile View */}
      <MobileWhyExpertTutor />
    </>
  );
};

export default WhyExpertTutor;
