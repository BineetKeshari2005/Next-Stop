// src/pages/Explore.jsx
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
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(travelData);

  const NAVBAR_HEIGHT = 72; // px

  // Update category
  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  // Filter places based on category + search query
  useEffect(() => {
    let dataToFilter =
      activeCategory === "All"
        ? travelData
        : travelData.filter((cat) => cat.category === activeCategory);

    const newFilteredData = dataToFilter
      .map((category) => {
        const matchedPlaces = category.places.filter((place) =>
          place.city.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return { ...category, places: matchedPlaces };
      })
      .filter((category) => category.places.length > 0);

    setFilteredData(newFilteredData);
  }, [activeCategory, searchQuery]);

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

      {/* Sticky Filter + Search */}
      <div
        className="sticky z-20 bg-[#fffaf0] shadow-md py-4 flex flex-col items-center space-y-4"
        style={{ top: NAVBAR_HEIGHT }}
      >
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
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

        {/* Search Bar */}
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Search by city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border-2 border-[#800000] rounded-full px-12 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm transition duration-300 placeholder:text-gray-400"
          />
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>

          {/* Clear Button */}
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Destination Cards */}
      <div className="px-6 py-12 max-w-7xl mx-auto">
        {filteredData.length === 0 && (
          <p className="text-center text-xl text-gray-500 mt-20">
            No places found.
          </p>
        )}

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
