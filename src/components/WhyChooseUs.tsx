import React from 'react';
import { Truck, Box, Star, Building, Award, Shield } from 'lucide-react';
import '../index.css';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-blue-500 p-3 rounded-md text-white flex-shrink-0">
        {icon}
      </div>
      <div>
        <h5 className="text-sm text-navy-900 mb-1">{title}</h5>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Truck size={24} />,
      title: "Fast Delivery",
      description: "We ensure prompt and reliable shipping so your projects never face delays."
    },
    {
      icon: <Box size={24} />,
      title: "Industry Expertise",
      description: "With years of experience, we understand the hardware market inside out to serve you better."
    },
    {
      icon: <Star size={24} />,
      title: "Commitment to Quality",
      description: "We stock only trusted, high-quality products that meet industry standards."
    },
    {
      icon: <Building size={24} />,
      title: "Infrastructure",
      description: "Our robust infrastructure supports efficient operations, large inventories, and seamless service."
    },
    {
      icon: <Award size={24} />,
      title: "Authorized Distributors",
      description: "We are official distributors of top brands, guaranteeing authenticity and warranty support."
    },
    {
      icon: <Shield size={24} />,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our top priority — we go the extra mile to meet your needs."
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 pb-15 text-green-500">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


// import React from "react";

// const WhyHardwareStore = () => {
//   return (
//     <div className="bg-white w-full py-16 flex items-center h-[550px] justify-center">
//       <div className="w-[90%] max-w-6xl flex flex-col items-center">
//         {/* Header Section */}
//         <div className="mb-16">
//           <h2 className="text-2xl font-bold text-gray-800 px-8 py-4 inline-block tracking-wide">
//             Why Krishna Trader?
//           </h2>
//         </div>

//         {/* Cards Section */}
//         <div className="flex flex-col md:flex-row items-center justify-center gap-10">
//           {/* Left Cards */}
//           <div className="flex flex-col gap-6">
//             <Card
//               icon={
//                 <img
//                   src="tools.png" // 🛠️ Replace with your image path
//                   alt="Tools"
//                   className="w-12 h-12 object-contain"
//                 />
//               }
//               title="Wide Range of Tools"
//               align="left"
//             />
//             <Card
//               icon={
//                 <img
//                   src="/consult.png" // 👷 Replace with your image path
//                   alt="Consultation"
//                   className="w-12 h-12 object-contain"
//                 />
//               }
//               title="Expert Consultation"
//               align="left"
//             />
//           </div>

//           {/* Center Circle with Image */}
//           <div className="relative flex items-center justify-center">
//             <img
//               src="/Q.png" // ❓ Replace with your image path for "Why"
//               alt="Why"
//               className="w-48 h-48 object-contain"
//             />
//           </div>

//           {/* Right Cards */}
//           <div className="flex flex-col gap-6">
//             <Card
//               icon={
//                 <img
//                   src="/delivery.png" // 🚚 Replace with your image path
//                   alt="Delivery"
//                   className="w-12 h-12 object-contain"
//                 />
//               }
//               title="Flexible Delivery"
//               align="right"
//             />
//             <Card
//               icon={
//                 <img
//                   src="/warranty.png" // ✅ Replace with your image path
//                   alt="Warranty"
//                   className="w-12 h-12 object-contain"
//                 />
//               }
//               title="Warranty Assured"
//               align="right"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Card = ({ icon, title, align }) => {
//   const baseClass =
//     "flex items-center gap-4 bg-[#102C57] text-white px-6 py-4 shadow-md w-[280px] h-[100px]";

//   const rounded =
//     align === "left"
//       ? "rounded-l-full rounded-r-none"
//       : "rounded-r-full rounded-l-none";

//   return (
//     <div className={`${baseClass} ${rounded}`}>
//       <div>{icon}</div>
//       <p className="text-left text-lg font-medium">{title}</p>
//     </div>
//   );
// };

// export default WhyHardwareStore;




// import React from "react";
// import { Hammer, HardHat, Truck, ShieldCheck } from "lucide-react";

// const WhyHardwareStore = () => {
//   return (
//     <div className="bg-white w-full  py-16 flex items-center h-[550px] justify-center">
//       <div className="w-[90%] max-w-6xl flex flex-col items-center">
//         {/* Header Section */}
//         <div className="mb-16">
//           <h2 className="text-2xl font-bold text-gray-800   px-8 py-4 inline-block  tracking-wide">
//             Why Krishna Trader?
//           </h2>
//         </div>

//         {/* Cards Section */}
//         <div className="flex flex-col md:flex-row items-center justify-center gap-10">
//           {/* Left Cards */}
//           <div className="flex flex-col gap-6">
//             <Card
//               icon={<Hammer className="w-12 h-12 text-yellow-500" />}
//               title="Wide Range of Tools"
//               align="left"
//             />
//             <Card
//               icon={<HardHat className="w-12 h-12 text-orange-500" />}
//               title="Expert Consultation"
//               align="left"
//             />
//           </div>

//           {/* Center Circle with Image */}
//           <div className="relative   flex items-center justify-center ">
//             <img
//               src="Q.png" // replace this with your image file
//               alt="Why"
//               className="w-50 h-50 object-contain"
//             />
//           </div>

//           {/* Right Cards */}
//           <div className="flex flex-col gap-6">
//             <Card
//               icon={<Truck className="w-12 h-12 text-green-500" />}
//               title="Flexible Delivery"
//               align="right"
//             />
//             <Card
//               icon={<ShieldCheck className="w-12 h-12 text-blue-500" />}
//               title="Warranty Assured"
//               align="right"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Card = ({ icon, title, align }) => {
//   const baseClass =
//     "flex items-center gap-4 bg-[#102C57] text-white px-6 py-4 shadow-md w-[280px] h-[100px]";

//   const rounded =
//     align === "left"
//       ? "rounded-l-full rounded-r-none"
//       : "rounded-r-full rounded-l-none";

//   return (
//     <div className={`${baseClass} ${rounded}`}>
//       <div>{icon}</div>
//       <p className="text-left text-lg font-medium">{title}</p>
//     </div>
//   );
// };

// export default WhyHardwareStore;



// import React from "react";
// import { Hammer, HardHat, Truck, ShieldCheck } from "lucide-react";

// const WhyHardwareStore = () => {
//   return (
//     <div className=" bg-[#f9f9e6] w-full bg-gradient-to-r from-gray-100 to-white py-16 flex items-center h-[550px] justify-center">
//       <div className="w-[90%] max-w-6xl flex flex-col items-center">
//         {/* Header Section */}
//         <div className="mb-16">
//           <h2 className="text-2xl font-bold text-gray-800 border border-gray-800 rounded-lg px-8 py-4 inline-block shadow-sm tracking-wide">
//             Why Krishna Trader?
//           </h2>
//         </div>

//         {/* Cards Section */}
//         <div className="flex flex-col md:flex-row items-center justify-center gap-10">
//           {/* Left Cards */}
//           <div className="flex flex-col gap-6">
//             <Card
//               icon={<Hammer className="w-8 h-8" />}
//               title="Wide Range of Tools"
//               align="left"
//             />
//             <Card
//               icon={<HardHat className="w-8 h-8" />}
//               title="Expert Consultation"
//               align="left"
//             />
//           </div>

//           {/* Center Circle */}
//           <div className="relative w-48 h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-xl">
//             <div className="text-6xl font-bold text-white">?</div>
//           </div>

//           {/* Right Cards */}
//           <div className="flex flex-col gap-6">
//             <Card
//               icon={<Truck className="w-8 h-8" />}
//               title="Flexible Delivery"
//               align="right"
//             />
//             <Card
//               icon={<ShieldCheck className="w-8 h-8" />}
//               title="Warranty Assured"
//               align="right"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Card = ({ icon, title, align }) => {
//   const baseClass =
//     "flex items-center gap-4 bg-[#102C57] text-white px-6 py-4 shadow-md w-[280px] h-[80px]";

//   const rounded =
//     align === "left"
//       ? "rounded-l-full rounded-r-none"
//       : "rounded-r-full rounded-l-none";

//   return (
//     <div className={`${baseClass} ${rounded}`}>
//       <div>{icon}</div>
//       <p className="text-left text-lg font-medium">{title}</p>
//     </div>
//   );
// };

// export default WhyHardwareStore;
