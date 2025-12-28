import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Check if the product is from admin (id starts with "admin-")
        if (id.toString().startsWith("admin-")) {
          const adminId = id.replace("admin-", "");
          const res = await fetch(`http://localhost:5000/products/${adminId}`);
          const adminProduct = await res.json();
          setProduct(adminProduct);
        } else {
          // Otherwise, fetch from FakeStoreAPI
          const res = await fetch(`https://fakestoreapi.com/products/${id}`);
          const fakeProduct = await res.json();
          setProduct(fakeProduct);
        }
      } catch (err) {
        console.error("Fetch product error:", err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <h2 className="text-center mt-20 text-2xl font-semibold">
        Loading product...
      </h2>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      <img
        src={product.image || "https://via.placeholder.com/300"}
        alt={product.title || product.name}
        className="w-full h-96 object-contain hover:scale-105 transform transition duration-200"
      />
      <div>
        <h1 className="text-3xl font-bold">{product.title || product.name}</h1>
        <p className="text-gray-600 mt-4">
          {product.description || "No description available"}
        </p>
        <p className="text-4xl font-bold mt-6">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-black text-white px-6 py-3 mt-6 rounded-lg hover:bg-gray-800 transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
