import { Link } from "react-router-dom";

const Footer = () => {
  const linkClass = "hover:text-yellow-400 transition-colors";

  return (
    <footer className="bg-black text-white mt-10">
      <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">About Shopigo</h2>
          <p className="text-gray-400">
            Your one-stop online store for fashion, electronics, accessories, home essentials, and more. 
            Quality products, fast delivery, and 100% satisfaction guaranteed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className={linkClass}>Home</Link></li>
            <li><Link to="/products" className={linkClass}>Products</Link></li>
            <li><Link to="/cart" className={linkClass}>Cart</Link></li>
            <li><Link to="/aboutus" className={linkClass}>About Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400">Email: shoaibnaseer001@gmail.com</p>
          <p className="text-gray-400">Phone: +92 301 4738095</p>
          <p className="text-gray-400">Address: Lahore, Pakistan</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex gap-4 text-gray-400">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={linkClass}>Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={linkClass}>Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={linkClass}>Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={linkClass}>LinkedIn</a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
        &copy; 2025 Shopigo. All rights reserved. | Built with React & Tailwind CSS
      </div>
    </footer>
  );
};

export default Footer;
