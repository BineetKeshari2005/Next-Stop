// src/components/about-components/MissionSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function MissionSection() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#800000]">Our Mission</h2>

      <div className="max-w-7xl mx-auto flex justify-between gap-8">
        {/* Mission Point 1 */}
        <motion.div
          whileHover={{ scale: 1.05, color: '#a0522d' }}
          className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-lg hover:shadow-[#a0522d] hover:ring-[#a0522d] transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] flex-1"
        >
          <h3 className="text-2xl font-semibold text-[#800000] mb-4">Personalized Travel</h3>
          <p className="text-gray-600">
            We tailor each journey to match your individual preferences, ensuring an experience that’s uniquely yours.
          </p>
        </motion.div>

        {/* Mission Point 2 */}
        <motion.div
          whileHover={{ scale: 1.05, color: '#a0522d' }}
          className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-lg hover:shadow-[#a0522d] hover:ring-[#a0522d] transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] flex-1"
        >
          <h3 className="text-2xl font-semibold text-[#800000] mb-4">Sustainable Tourism</h3>
          <p className="text-gray-600">
            We believe in sustainable travel that preserves nature and benefits the local communities.
          </p>
        </motion.div>

        {/* Mission Point 3 */}
        <motion.div
          whileHover={{ scale: 1.05, color: '#a0522d' }}
          className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-lg hover:shadow-[#a0522d] hover:ring-[#a0522d] transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] flex-1"
        >
          <h3 className="text-2xl font-semibold text-[#800000] mb-4">Adventure Awaits</h3>
          <p className="text-gray-600">
            Our goal is to inspire every traveler to seek adventure, whether it's through nature, culture, or cuisine.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
