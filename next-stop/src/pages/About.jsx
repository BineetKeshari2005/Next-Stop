import { motion } from 'framer-motion';
import WhyChooseUs from '../components/WhyChooseUs';
import MissionSection from '../components/about/MissionSection';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="bg-[#fffaf0] text-[#800000]">
      {/* Hero Section */}
      <section
        className="h-[90vh] flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/about-hero.jpg')",
          backgroundAttachment: 'fixed', // Make background image static
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center z-10 px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Welcome to <span className="text-[#f7a681] font-semibold">NextStop</span> — For those who seek, we bring the world.
          </p>
        </motion.div>
      </section>


  

      {/* Mission Section */}
      <MissionSection />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Footer */}
      <Footer />
    </div>
  );
}

  