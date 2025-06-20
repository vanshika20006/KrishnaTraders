import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, name, price, discountedPrice, image, inStock, size }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/size3${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all bg-white"
    >
      {/* Image Section */}
      <div className="w-full h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-content"
        />
      </div>

      {/* Details Section */}
      <div className="bg-white p-4 text-center">
        <h6 className="font-semibold">{name}</h6>
        

        

        <p className={`text-xs ${inStock ? "text-green-600" : "text-red-600"}`}>
          {inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;




// import { useNavigate } from "react-router-dom";

// const ProductCard = ({ id, name, price, image, inStock, size }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     // Customize your route here based on id or name or anything
//     navigate(`/size${id}`); // e.g., /varients1, /varients2, etc.
//   };

//   return (
//     <div
//       onClick={handleClick}
//       className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all bg-white"
//     >
//       {/* Image Section - full width/height top part */}
//       <div className="w-full h-48">
//         <img
//           src={image}
//           alt={name}
//           className="w-full h-full object-content"
//         />
//       </div>

//       {/* Details Section */}
//       <div className="bg-white p-4 text-center">
//         <h6 className="font-semibold">{name}</h6>
//         <p className="text-blue-700 font-bold">₹{price}</p>
//         <p className={`text-xs ${inStock ? "text-green-600" : "text-red-600"}`}>
//           {inStock ? "In Stock" : "Out of Stock"}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
