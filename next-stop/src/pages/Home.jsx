import { motion } from 'framer-motion';
import TopDestinations from '../components/TopDestination';
import ExploreCategories from '../components/explore/ExploreCategories';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import TopEvents from '../components/TopEvents';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-[#fffaf0] text-[#800000]">
      {/* Hero Section */}
      <section
        className="h-[90vh] flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Dark overlay */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center z-10 px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Your Next Adventure Awaits</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Discover places, plan trips, and make memories.
          </p>
          <Link to="/explore"
            whileHover={{ scale: 1.1 }}
            className="bg-[#f5deb3] text-[#800000] font-semibold px-6 py-3 rounded shadow-md hover:bg-[#e6c9a3] transition"
          >
            Explore Now
          </Link>
        </motion.div>
      </section>

      {/* Top Destinations Section */}
      <TopDestinations />
      <TopEvents/>

      {/* Explore Categories Section */}
      <ExploreCategories />

      {/* Testimonials Section */}
      <Testimonials />

   
      
    </div>
  );
}
