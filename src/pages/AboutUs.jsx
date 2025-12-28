import { Link } from "react-router-dom";

const AboutUs = () => {
  const cardClass = "bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:scale-105";
  const yellowCardClass = "bg-yellow-100 p-6 rounded-xl text-center shadow hover:shadow-xl transition transform hover:scale-105";

  return (
    <div className="bg-gray-50">

      {/* ================= HERO SECTION ================= */}
      <section className="mt-18 relative w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 py-36 md:py-44 px-6 text-center overflow-hidden">
        {/* Background shapes */}
        <div className="absolute -top-16 -left-16 w-96 h-96 bg-yellow-200 rounded-full opacity-30 animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-16 -right-12 w-72 h-72 bg-yellow-300 rounded-full opacity-20 animate-ping pointer-events-none"></div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-900 to-black drop-shadow-2xl leading-tight animate-fadeIn">
          Endless Choices. One Store
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-900 max-w-3xl mx-auto mb-10 animate-fadeIn delay-200">
          Your one-stop online store for fashion, electronics, accessories, home essentials, and much more.
        </p>

        <Link
          to="/products"
          className="inline-block bg-black text-white px-14 py-5 rounded-3xl text-lg md:text-xl font-semibold shadow-2xl hover:bg-gray-900 hover:shadow-3xl transition-transform transform hover:scale-110 animate-bounce"
        >
          Shop Now
        </Link>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Our Mission & Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className={cardClass}>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide high-quality products across multiple categories, combining style, technology, and affordability for everyone.
            </p>
          </div>
          <div className={cardClass}>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become the go-to online store for customers seeking variety, quality, and convenience in every purchase.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUR TEAM ================= */}
      <section className="bg-white py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {[
            { name: "Ahmed Khan", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/men/32.jpg" },
            { name: "Sara Ali", role: "Marketing Head", img: "https://randomuser.me/api/portraits/women/44.jpg" },
            { name: "Bilal Raza", role: "Product Designer", img: "https://randomuser.me/api/portraits/men/56.jpg" },
            { name: "Nida Shah", role: "Customer Support", img: "https://randomuser.me/api/portraits/women/65.jpg" },
          ].map((member, idx) => (
            <div key={idx} className="text-center p-4 shadow rounded-lg hover:scale-105 transition">
              <img src={member.img} alt={member.name} className="w-32 h-32 mx-auto rounded-full object-cover" />
              <h3 className="mt-4 font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className={yellowCardClass}>
            <h3 className="text-2xl font-bold mb-4">Wide Variety</h3>
            <p className="text-gray-600">Thousands of products across fashion, electronics, home, and accessories.</p>
          </div>
          <div className={yellowCardClass}>
            <h3 className="text-2xl font-bold mb-4">Affordable Prices</h3>
            <p className="text-gray-600">High-quality products without breaking the bank.</p>
          </div>
          <div className={yellowCardClass}>
            <h3 className="text-2xl font-bold mb-4">Fast Delivery</h3>
            <p className="text-gray-600">Quick and reliable delivery across Pakistan.</p>
          </div>
        </div>
      </section>

      {/* ================= CUSTOMER TESTIMONIALS ================= */}
      <section className="bg-gray-100 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {[
            { text: `"Amazing variety and quality! Fast delivery too. Highly recommended!"`, name: "Ahmed" },
            { text: `"Great prices and a huge selection of products. I love shopping here!"`, name: "Sara" },
            { text: `"One of the best online stores for fashion, gadgets, and home essentials!"`, name: "Bilal" },
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white p-6 shadow rounded-lg">
              <p className="text-gray-600 italic">{testimonial.text}</p>
              <h4 className="mt-3 font-bold">— {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Shop?</h2>
        <Link
          to="/products"
          className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition transform hover:scale-105"
        >
          Browse Products
        </Link>
      </section>

    </div>
  );
};

export default AboutUs;
