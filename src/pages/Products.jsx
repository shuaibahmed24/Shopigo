import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 8;
  const { addToCart } = useContext(CartContext);

  // Fetch products from fake store API and local admin API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fakeRes = await fetch("https://fakestoreapi.com/products");
        const fakeData = await fakeRes.json();

        let adminData = [];
        try {
          const adminRes = await fetch("http://localhost:5000/products");
          if (adminRes.ok) adminData = await adminRes.json();
        } catch (err) {
          console.log("Admin fetch failed:", err);
        }

        const adminProducts = adminData.map(p => ({ ...p, id: `admin-${p.id}` }));
        setProducts([...fakeData, ...adminProducts]);
      } catch (err) {
        console.error("Fetch products error:", err);
      }
    };

    fetchProducts();
  }, []);

  // Filter and sort products
  const filteredProducts = products
    .filter(product =>
      (product.title || product.name).toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const goToPage = page => setCurrentPage(page);
  const goNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const goPrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

      {/* Search + Sort */}
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="border p-2 rounded flex-1"
        />
        <select
          value={sort}
          onChange={e => {
            setSort(e.target.value);
            setCurrentPage(1);
          }}
          className="border p-2 rounded"
        >
          <option value="">Sort by Price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.length === 0 && (
          <p className="text-center col-span-full text-xl text-gray-500">No products found.</p>
        )}

        {currentProducts.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:scale-105 transform transition duration-300 flex flex-col"
          >
            <img
              src={product.image || "https://via.placeholder.com/300"}
              alt={product.title || product.name}
              className="w-full h-48 object-contain"
            />
            <h3 className="mt-3 font-semibold line-clamp-2 min-h-[3rem]">
              {product.title || product.name}
            </h3>
            <p className="mt-2 font-bold text-lg">${product.price}</p>
            <Link
              to={`/product/${product.id}`}
              className="mt-auto block bg-black text-white text-center py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              View Details
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-yellow-400 text-black py-1 rounded hover:bg-yellow-300 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-10 gap-3">
          <button
            onClick={goPrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md border ${
              currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-black text-white"
            }`}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-4 py-2 rounded-md border ${
                  currentPage === page ? "bg-yellow-400 text-black font-bold" : "bg-white"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={goNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md border ${
              currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-black text-white"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
