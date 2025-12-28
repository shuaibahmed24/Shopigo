import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="shadow-lg p-4 rounded-lg bg-white hover:scale-105 duration-200">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain"
      />

      <h3 className="font-semibold mt-3 line-clamp-2">{product.title}</h3>

      <p className="text-lg font-bold mt-2">${product.price}</p>

      <Link
        to={`/product/${product.id}`}
        className="block bg-black text-white text-center py-2 mt-4 rounded-lg hover:bg-gray-800"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
