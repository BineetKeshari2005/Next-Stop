import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";

const EventCard = ({ event }) => {
  const [inBucketList, setInBucketList] = useState(false);

  const handleBucketListClick = (e) => {
    e.preventDefault();
    setInBucketList(!inBucketList);
  };

  return (
    <motion.div
      className="relative bg-white rounded-xl shadow-lg overflow-hidden border hover:scale-105 hover:shadow-[#a0522d] transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 w-full max-w-sm cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Bucket List button only */}
      <div className="absolute top-2 right-2 flex gap-3 z-10">
        <button
          onClick={handleBucketListClick}
          className={`text-lg ${inBucketList ? "text-blue-600" : "text-gray-400"} hover:scale-110 transition-transform`}
          title="Add to Bucket List"
        >
          {inBucketList ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>

      <img
        src={event.image}
        alt={event.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-4 pt-2">
        <h3 className="text-xl font-bold text-[#800000] line-clamp-2">
          📅 {event.title}
        </h3>
        <div className="flex items-center text-gray-500 text-sm mt-2">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{event.date} • {event.time}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm mt-1">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{event.location}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
