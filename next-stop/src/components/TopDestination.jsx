import { motion } from 'framer-motion';
import { FaMountain, FaLandmark, FaPalette, FaHiking } from 'react-icons/fa';
import varanasi from '../assets/images/varanasi.jpg';
import kolkata from '../assets/images/Kolkata.jpg';
import ziro from '../assets/images/varanasi.jpg';

const destinations = [
  {
    name: "Varanasi, Uttar Pradesh",
    image: varanasi,
    description: "The Spiritual Soul of India",
    icon: <FaLandmark className="text-3xl text-yellow-800" />,
  },
  {
    name: "Nainital, Uttarakhand",
    image:"https://res.cloudinary.com/dkybreoaz/image/upload/v1758286877/Nainital_vtsyew.jpg",
    description: "The Lake District of India",
    icon: <FaMountain className="text-3xl text-green-700" />,
  },
  {
    name: "Kolkata, West Bengal",
    image: kolkata,
    description: "City of Joy and Culture",
    icon: <FaPalette className="text-3xl text-red-700" />,
  },
  {
    name: "Ziro Valley, Arunachal Pradesh",
    image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1758287133/Ziro_fwvffx.webp",
    description: "Land of Pine Hills and Tribes",
    icon: <FaHiking className="text-3xl text-blue-700" />,
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
            whileHover={{ y: -6, boxShadow: '0px 10px 30px rgba(189, 119, 90, 0.5)'}}
            className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer transition-transform"
          >
            <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
            <div className="p-4 space-y-2">
              <div className="flex items-center gap-2">
                {dest.icon}
                <h3 className="text-lg font-semibold text-[#800000]">{dest.name}</h3>
              </div>
              <p className="text-sm text-gray-600">{dest.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
