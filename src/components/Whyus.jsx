import React from "react";
import { Hammer, HardHat, Truck, ShieldCheck } from "lucide-react";

// ✅ Mobile Version Matching Desktop Style
const MobileWhyExpertTutor = () => {
  return (
    <section className="bg-[#fcfcfc] px-4 pt-10 pb-16 block lg:hidden text-center">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        WHY KRISHNA TRADERS?
      </h1>

      {/* Image & Overlapping Cards */}
      <div className="relative flex justify-center items-center h-[280px]">
        {/* Center Image */}
        <img
          src="question_mark.jpg"
          alt="question"
          className="h-[300px] z-0"
        />

        {/* Left Column Cards */}
        <div className="absolute top-[45%] left-1 flex flex-col gap-12 z-10">
          <div className="bg-[#163A6B] text-white rounded-tl-[24px] rounded-br-[24px] p-1 shadow-md flex items-center gap-2 w-[140px] h-[55px]">
            <Hammer size={18} />
            <span className="text-left text-xs font-medium">
              Wide Range of Hand Tools
            </span>
          </div>
          <div className="bg-[#163A6B] text-white rounded-tl-[24px] rounded-br-[24px] p-1 shadow-md flex items-center gap-2 w-[140px] h-[55px]">
            <HardHat size={18} />
            <span className="text-left text-xs font-medium">
              Safety Certified Equipment
            </span>
          </div>
        </div>

        {/* Right Column Cards */}
        <div className="absolute top-[25%] right-1 flex flex-col gap-12 z-10">
          <div className="bg-[#163A6B] text-white rounded-tl-[24px] rounded-br-[24px] p-1 shadow-md flex items-center gap-2 w-[140px] h-[55px]">
            <Truck size={18} />
            <span className="text-left text-xs font-medium">
              Fast & Reliable Delivery
            </span>
          </div>
          <div className="bg-[#163A6B] text-white rounded-tl-[24px] rounded-br-[24px] p-1 shadow-md flex items-center gap-2 w-[140px] h-[55px]">
            <ShieldCheck size={18} />
            <span className="text-left text-xs font-medium">
              100% Quality Assurance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};


// ✅ Desktop + Mobile Combined
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
