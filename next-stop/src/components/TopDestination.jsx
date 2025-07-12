import { motion } from 'framer-motion';
import bali from '../assets/images/bali.jpg'
import paris from '../assets/images/paris.jpg'
import japan from '../assets/images/japan.jpg'
import capetown from '../assets/images/cape-town.jpg'
const destinations = [
  {
    name: "Bali, Indonesia",
    image: bali,
    description: "Tropical beaches and serene temples",
  },
  {
    name: "Paris, France",
    image: paris,
    description: "Romantic cityscapes and culture",
  },
  {
    name: "Tokyo, Japan",
    image:japan,
    description: "Modern skyline and rich tradition",
  },
  {
    name: "Cape Town, South Africa",
    image:capetown,
    description: "Mountains, beaches, and vibrant life",
  },
];

export default function TopDestinations() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#800000]">Top Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {destinations.map((dest, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4, boxShadow:'0px 8px 30px rgba(189, 119, 90, 0.5)'}}
            // transition={{
            //     type: 'spring',
            //     stiffness: 200,
            //     damping: 5,
            //     duration: 0.4, 
            // }}
            className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer transition-transform"
          >
            <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#800000]">{dest.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{dest.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
