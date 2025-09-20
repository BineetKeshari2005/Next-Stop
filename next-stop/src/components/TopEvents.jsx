// src/components/TopEvents.jsx
import { motion } from 'framer-motion';
import { Events } from '../data/Events';
import { FaMusic, FaFutbol, FaUsers, FaPaintBrush } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const categoryIcons = {
  Music: <FaMusic className="text-[#a0522d] text-xl" />,
  Sports: <FaFutbol className="text-[#a0522d] text-xl" />,
  Family: <FaUsers className="text-[#a0522d] text-xl" />,
  Arts: <FaPaintBrush className="text-[#a0522d] text-xl" />,
};

const categories = ["Music", "Sports", "Family", "Arts"];
const topEvents = categories.map((category) =>
  Events.find((event) => event.category === category)
);

export default function TopEvents() {
  const navigate = useNavigate();

  const handleCardClick = (category) => {
    navigate("/events", { state: { fromTopEvents: true, category } });
  };

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#800000]">Top Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {topEvents.map((event) => (
          <motion.div
            key={event.id}
            onClick={() => handleCardClick(event.category)}
            whileHover={{ y: -6, boxShadow: '0px 10px 30px rgba(189, 119, 90, 0.5)' }}
            className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer transition-transform"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#800000]">{event.title}</h3>
                <span className="flex items-center gap-1 text-xs bg-[#f4a261] text-white px-2 py-0.5 rounded-full">
                  {categoryIcons[event.category]}
                  {event.category}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {event.date} • {event.time}
              </p>
              <p className="text-sm text-gray-500">{event.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
