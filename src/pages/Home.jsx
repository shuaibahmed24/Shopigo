import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Reusable Trust Badge Component
const TrustBadge = ({ title, desc, delay }) => (
  <div className={`animate-fadeIn delay-${delay}`}>
    <h3 className="text-2xl font-bold">✔ {title}</h3>
    <p className="text-gray-600 mt-2">{desc}</p>
  </div>
);

const Home = () => {
  const [featured, setFeatured] = useState([]);

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

        const adminProducts = adminData.map((p) => ({ ...p, id: `admin-${p.id}` }));
        setFeatured([...fakeData, ...adminProducts]);
      } catch (err) {
        console.log("Fetch products error:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-50">

      {/* ================= HERO SECTION ================= */}
      <section className="mt-18 relative w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 py-36 md:py-44 px-6 text-center overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-200 rounded-full opacity-30 animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-10 w-72 h-72 bg-yellow-300 rounded-full opacity-20 animate-ping pointer-events-none"></div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-900 to-black drop-shadow-2xl animate-fadeIn leading-tight">
          Shop Smart, Shop Shopigo
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-900 max-w-3xl mx-auto mb-10 animate-fadeIn delay-200">
          From fashion to gadgets, discover everything you need in one place.
        </p>
        <Link
          to="/products"
          className="inline-block bg-black text-white px-14 py-5 rounded-3xl text-lg md:text-xl font-semibold shadow-2xl hover:bg-gray-900 hover:shadow-3xl transition-transform transform hover:scale-110 animate-bounce"
        >
          Shop Now
        </Link>
      </section>

      {/* ================= FEATURED PRODUCTS SLIDER ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fadeIn">
          Featured Products
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          loop
          freeMode
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
          speed={2000}
          breakpoints={{ 0: { slidesPerView: 1 }, 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
        >
          {featured.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white p-5 shadow rounded-xl flex flex-col h-[400px] hover:shadow-2xl transition transform hover:-translate-y-1">
                <div className="h-48 flex justify-center items-center">
                  <img
                    src={item.image || "https://via.placeholder.com/150"}
                    alt={item.title || item.name}
                    className="h-full object-contain"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-center text-sm line-clamp-2 min-h-[3rem]">
                  {item.title || item.name}
                </h3>
                <p className="text-xl font-bold mt-1 text-center">${item.price}</p>
                <div className="mt-auto">
                  <Link
                    to={`/product/${item.id}`}
                    className="block bg-black py-2 text-center rounded-lg text-white font-semibold hover:bg-gray-800 transition transform hover:scale-105"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ================= TRUST BADGES ================= */}
      <section className="mt-24 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 py-16 shadow-inner">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-10 px-6">
          <TrustBadge title="100% Premium Quality" desc="High-grade fabric with long-lasting durability." delay={100} />
          <TrustBadge title="Fast Nationwide Delivery" desc="Delivery within 2–4 days all over Pakistan." delay={200} />
          <TrustBadge title="Safe & Secure Payments" desc="Your payments and info are always protected." delay={300} />
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="bg-gradient-to-r from-yellow-400 via-gray-600 to-yellow-500 text-black py-20 mt-20">
        <h2 className="text-4xl font-bold text-center animate-fadeIn">Join Our Newsletter</h2>
        <p className="text-center text-gray-800 mt-2 animate-fadeIn delay-200">
          Stay updated with offers, new arrivals & discounts.
        </p>

        <div className="mt-6 flex justify-center animate-fadeIn delay-400">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 w-72 rounded-l-lg text-black outline-none"
          />
          <button className="bg-black px-6 py-3 rounded-r-lg text-white font-bold hover:bg-gray-800 transition transform hover:scale-105">
            Subscribe
          </button>
        </div>
      </section>

      {/* ================= ANIMATIONS ================= */}
      <style>
        {`
          .animate-fadeIn { opacity: 0; animation: fadeIn 1s forwards; }
          @keyframes fadeIn { to { opacity: 1; } }
        `}
      </style>
    </div>
  );
};

export default Home;
