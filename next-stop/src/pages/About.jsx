import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import MissionSection from '../components/about/MissionSection';
import Footer from '../components/Footer/Footer';
import Team from '../components/about/Team/Team';
import Contact from '../components/about/Team/Contact';

const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default function About() {
  return (
    <div className="bg-[#fffaf0] text-[#800000]">
      {/* Hero Section */}
      <section
        className="h-[90vh] flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/about-hero.jpg')",
          backgroundAttachment: 'fixed',
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

      {/* Reveal Sections on Scroll */}
      <RevealOnScroll>
        <MissionSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <Team />
      </RevealOnScroll>

      <RevealOnScroll>
        <WhyChooseUs />
      </RevealOnScroll>

      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>
    </div>
  );
}
