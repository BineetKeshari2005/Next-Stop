import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import CityCard from "../components/explore/CityCard";
import { travelData } from "../data/travelData";

const categories = [
  { key: "All", label: "All" },
  { key: "Historic Places", label: "Historic Places" },
  { key: "Nature's Escape", label: "Nature's Escape" },
  { key: "Arts & Culture", label: "Arts & Culture" },
  { key: "Adventure Trips", label: "Adventure Trips" },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Explore() {
  const query = useQuery();
  const initialCategory = query.get("category") || "All";

  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  const filteredData =
    activeCategory === "All"
      ? travelData
      : travelData.filter((cat) => cat.category === activeCategory);

  return (
    <div className="bg-[#fffaf0] text-[#800000]">
      {/* Hero */}
      <section
        className="h-[90vh] flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/explore-hero.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Explore India
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Discover curated destinations that match your vibe.
          </p>
        </motion.div>
      </section>

      {/* Category Filter Buttons */}
      <div className="flex justify-center mt-10 space-x-4">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`${
              activeCategory === cat.key
                ? "bg-[#800000] text-white"
                : "border-2 border-[#800000]"
            } rounded-full px-5 py-2 font-medium hover:bg-[#800000] text-[#800000] transition hover:text-white`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Destination Cards */}
      <div className="px-6 py-12 max-w-7xl mx-auto">
        {filteredData.map((category) => (
          <div key={category.category} className="mb-16">
            <h2 className="text-3xl font-semibold text-[#843d1c] mb-11 mt-11 text-center">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {category.places.map((place) => (
                <CityCard key={place.id} place={place} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
