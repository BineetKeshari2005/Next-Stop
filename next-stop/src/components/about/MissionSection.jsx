import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaLeaf, FaHiking } from 'react-icons/fa';


export default function MissionSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b bg-[#fffaf0]">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#800000]">
        Our Mission
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 ">
        {/* Left: Team Image */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 w-full"
        >
          <img
            src= "https://res.cloudinary.com/dkybreoaz/image/upload/v1753116945/360_F_568802778_qiJpPUOFAU3yA91IcJm4pQg07DcXKDb0_iunahj.jpg"
            alt="Team Group"
            className="rounded-2xl shadow-xl object-cover w-full h-[420px]"
          />
        </motion.div>

        {/* Right: Mission Description Divided */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full bg-white border border-[#e2cfcf] rounded-xl p-8 space-y-6"
        >
          {/* Inner Div 1: Personalized Travel */}
          <div className="flex items-start gap-4">
            <div className="text-[#800000] text-2xl mt-1">
              <FaGlobe />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#800000] mb-1">Personalized Travel</h3>
              <p className="text-gray-700 leading-relaxed">
                We tailor each journey to match your individual preferences, ensuring an experience that’s uniquely yours.
              </p>
            </div>
          </div>

          {/* Inner Div 2: Sustainable Tourism */}
          <div className="flex items-start gap-4">
            <div className="text-[#006400] text-2xl mt-1">
              <FaLeaf />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#006400] mb-1">Sustainable Tourism</h3>
              <p className="text-gray-700 leading-relaxed">
                We believe in travel that respects nature and benefits local communities, leaving a positive impact.
              </p>
            </div>
          </div>

          {/* Inner Div 3: Adventure Awaits */}
          <div className="flex items-start gap-4">
            <div className="text-[#4169e1] text-2xl mt-1">
              <FaHiking />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#4169e1] mb-1">Adventure Awaits</h3>
              <p className="text-gray-700 leading-relaxed">
                We inspire every traveler to seek out thrilling adventures — whether through nature, culture, or cuisine.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
