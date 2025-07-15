import { motion } from 'framer-motion';
import { FaCheckCircle, FaRegCheckCircle, FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTravelContext } from '../../TravelContext/TravelContext';

const CityCard = ({ place }) => {
  const {
    visitedCities,
    bucketListCities,
    toggleVisitedCity,
    toggleBucketListCity,
  } = useTravelContext();

  const visited = visitedCities.includes(place.city);
  const inBucketList = bucketListCities.includes(place.city);

  const handleVisitedClick = (e) => {
    e.stopPropagation();
    toggleVisitedCity(place.city);
  };

  const handleBucketListClick = (e) => {
    e.stopPropagation();
    toggleBucketListCity(place.city);
  };

  return (
    <motion.div
      className="relative bg-white rounded-xl shadow-lg overflow-hidden border hover:scale-105 hover:shadow-[#a0522d] transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 w-full max-w-sm cursor-pointe"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6,ease: 'easeOut' }}
    >
      {/* Visited & Bucket List buttons */}
      <div className="absolute top-2 right-2 flex gap-3 z-10">
        <button
          onClick={handleVisitedClick}
          className={`text-xl ${visited ? 'text-green-600' : 'text-gray-400'} hover:scale-110`}
          title="Mark as Visited"
        >
          {visited ? <FaCheckCircle /> : <FaRegCheckCircle />}
        </button>

        <button
          onClick={handleBucketListClick}
          className={`text-lg ${inBucketList ? 'text-blue-600' : 'text-gray-400'} hover:scale-110`}
          title="Add to Bucket List"
        >
          {inBucketList ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>

      <Link to={`/explore/${place.city.toLowerCase()}`} className="block">
        <img src={place.image} alt={place.city} className="w-full h-64 object-cover" />
        <div className="p-4 pt-2">
          <h3 className="text-xl font-bold text-[#800000]">📍 {place.city}, {place.state}</h3>
          <p className="text-sm text-gray-700 mt-1">{place.description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default CityCard;
