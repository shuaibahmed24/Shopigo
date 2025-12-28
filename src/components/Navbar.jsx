import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  const navLinkClass = "hover:text-yellow-400 transition-colors";

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo + Site Name */}
        <Link to="/" className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-2xl font-bold">Shopigo</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 text-lg items-center">
          <Link to="/" className={navLinkClass}>Home</Link>
          <Link to="/products" className={navLinkClass}>Products</Link>
          <Link to="/aboutus" className="hover:text-yellow-500 transition">About Us</Link>
          
          <Link to="/cart" className={`relative ${navLinkClass}`}>
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-3 -right-4 bg-red-500 rounded-full px-2 text-sm">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Admin Panel Button */}
          <Link
            to="/admin"
            className="ml-6 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
