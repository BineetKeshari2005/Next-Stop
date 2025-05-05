// src/pages/Explore.jsx
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NaturesEscape from '../components/explore/NaturesEscape';
import HistoricPlaces from '../components/explore/HistoricPlaces';
import AdventureTrips from '../components/explore/AdventureTrips';
import FoodTours from '../components/explore/FoodTours';

export default function Explore() {
  return (
    <div className="bg-[#fffaf0] text-[#800000]">
      {/* Hero Section */}
      <section
        className="h-[90vh] flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/explore-hero.jpg')", // Replace with your own image
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
      <NaturesEscape/>
      <HistoricPlaces/>
        <AdventureTrips/>
        <FoodTours/>
      {/* Add other sections here later */}
      
      <Footer />
    </div>
  );
}
