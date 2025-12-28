import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 && (
        <p className="text-xl text-gray-600">Your cart is empty.</p>
      )}

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center border p-4 rounded-lg mb-4 hover:shadow-lg transition"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-20 h-20 object-contain"
          />
          <div className="ml-4 flex-1">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-lg font-bold">${item.price}</p>
            <div className="mt-2 flex items-center gap-2">
              <button
                onClick={() => updateQty(item.id, item.qty - 1)}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >-</button>
              <span>{item.qty}</span>
              <button
                onClick={() => updateQty(item.id, item.qty + 1)}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >+</button>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 mt-2 underline hover:text-red-700"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="text-right mt-6 text-xl font-bold">
          Subtotal: ${subtotal.toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default Cart;
