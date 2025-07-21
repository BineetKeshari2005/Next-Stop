import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CityCard from '../components/explore/CityCard';
import { travelData } from '../data/travelData';

const categories = [
  { key: "Historic Places", label: "Historic Places" },
  { key: "Nature's Escape", label: "Nature's Escape" },
  { key: "Arts & Culture", label: "Arts & Culture" },
  { key: "Adventure Trips", label: "Adventure Trips" },
];

export default function Explore() {
  const [activeTab, setActiveTab] = useState("Historic Places");
  const categoryRefs = useRef({});

  const handleTabClick = (key) => {
    setActiveTab(key);
    const ref = categoryRefs.current[key];
    if (ref && ref.scrollIntoView) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#fffaf0] text-[#800000]">
      

      {/* Hero Section */}
      <section
        className="h-[90vh] flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/explore-hero.jpg')",
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Explore The World</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Discover curated destinations that match your vibe.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-[#f5deb3] text-[#800000] font-semibold px-6 py-3 rounded shadow-md hover:bg-[#e6c9a3] transition"
          >
            Start Exploring
          </motion.button>
        </motion.div>
      </section>



      {/* Categories */}
      <div className="px-6 py-12 max-w-7xl mx-auto">
        {travelData.map((category) => (
          <div key={category.category} className="mb-16">
            <h2
              ref={(el) => (categoryRefs.current[category.category] = el)}
              className="text-3xl font-semibold text-[#843d1c] mb-11 mt-11 text-center"
            >
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
