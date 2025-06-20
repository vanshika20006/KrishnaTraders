// import React from "react";

// interface CategoryCardProps {
//   image: string;
//   label: string;
// }

// const CategoryCard: React.FC<CategoryCardProps> = ({ image, label }) => (
//   <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-3 hover:shadow-lg transition-shadow min-w-[116px] min-h-[132px] max-w-[140px]">
//     <div className="rounded-lg overflow-hidden w-20 h-20 mb-2 bg-gray-200 border border-gray-100 flex items-center justify-center">
//       <img
//         src={image}
//         alt={label}
//         className="object-cover w-full h-full"
//         loading="lazy"
//       />
//     </div>
//     <span className="text-gray-700 text-sm font-medium text-center">{label}</span>
//   </div>
// );

// export default CategoryCard;

import React from "react";

const CategoryCard = ({ image, label }) => (
  <div className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-shadow duration-200 p-2 text-center">
    <img src={image} alt={label} className="w-full h-32 object-cover rounded-md mb-2" />
    <p className="text-sm font-medium text-gray-700">{label}</p>
  </div>
);

export default CategoryCard;



