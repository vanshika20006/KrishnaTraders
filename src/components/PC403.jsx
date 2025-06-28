import { useNavigate } from "react-router-dom";

const ProductCard = ({
  id,
  name,
  price,
  image,
  inStock,
  size,
  discountPercentage,
}) => {
  const navigate = useNavigate();

  const discountedPrice = discountPercentage
    ? Math.round(price - (price * discountPercentage) / 100)
    : null;

  const handleClick = () => {
    // Pass all necessary data to the product details page
    navigate(`/product42${id}`, {
      state: {
        id,
        name,
        price,
        image,
        inStock,
        size,
        discountPercentage,
        discountedPrice,
      },
    });
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all bg-white"
    >
      {/* Image Section */}
      <div className="w-full h-50">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Details Section */}
      <div className="bg-white p-4 text-center">
        <h6 className="font-semibold">{name}</h6>
        {discountedPrice ? (
          <div>
            <p className="text-red-600 font-bold">₹{discountedPrice}</p>
            <p className="line-through text-gray-500 text-sm">₹{price}</p>
          </div>
        ) : (
          <p className="text-blue-700 font-bold">₹{price}</p>
        )}
        <div className="flex justify-center gap-2 m-2">
  <span className="w-3 h-3 rounded-full bg-white border border-gray-400"></span>
  <span className="w-3 h-3 rounded-full bg-gray-400 border border-gray-600"></span>
</div>


        <p className={`text-xs ${inStock ? "text-green-600" : "text-red-600"}`}>
          {inStock ? "In Stock" : "Out of Stock"}
        </p>
        

      </div>
    </div>
  );
};

export default ProductCard;


