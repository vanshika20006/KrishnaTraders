import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, name, price, image, inStock, size }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Customize your route here based on id or name or anything
    navigate(`/varients10${id}`); // e.g., /varients1, /varients2, etc.
  };

  return (
    <div className="cursor-pointer bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
      <img
        src={image}
        alt={name}
        onClick={handleClick}
        className="w-full h-40 object-cover mb-2 rounded"
      />
      <h6 className="font-semibold text-center">{name}</h6>
      <p className="text-sm text-gray-600">{size}</p>
      <p className="text-blue-700 font-bold">₹{price}</p>
      <p className={`text-xs ${inStock ? "text-green-600" : "text-red-600"}`}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
};

export default ProductCard;
