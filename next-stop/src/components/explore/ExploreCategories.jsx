// src/components/ExploreCategories.jsx
import { Link } from 'react-router-dom';
import { FaTree, FaLandmark, FaHiking, FaTheaterMasks } from 'react-icons/fa';

const categories = [
  {
    icon: <FaTree className="text-5xl text-green-700 group-hover:scale-110 transition-transform duration-300" />,
    title: "Nature Escapes",
    description: "Discover scenic retreats and natural wonders",
    link: "/explore",
    color: "from-green-100 to-green-50",
  },
  {
    icon: <FaLandmark className="text-5xl text-red-700 group-hover:scale-110 transition-transform duration-300" />,
    title: "Historical Places",
    description: "Walk through ancient stories and heritage sites",
    link: "/explore",
    color: "from-red-100 to-red-50",
  },
  {
    icon: <FaHiking className="text-5xl text-yellow-700 group-hover:scale-110 transition-transform duration-300" />,
    title: "Adventure Trips",
    description: "Thrilling experiences and action-packed fun",
    link: "/explore",
    color: "from-yellow-100 to-yellow-50",
  },
  {
    icon: <FaTheaterMasks className="text-5xl text-purple-700 group-hover:scale-110 transition-transform duration-300" />,
    title: "Arts & Culture",
    description: "Celebrate traditions, festivals, and creativity",
    link: "/explore",
    color: "from-purple-100 to-purple-50",
  },
];

export default function ExploreCategories() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#fffaf5] to-[#fff0e6] text-center">
      <h2 className="text-4xl font-extrabold text-[#800000] mb-12 drop-shadow-sm">Explore Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto px-4">
        {categories.map((cat, index) => (
          <Link
            key={index}
            to={cat.link}
            className={`group bg-gradient-to-br ${cat.color} p-8 rounded-2xl shadow-xl hover:shadow-2xl  transition-all duration-300 transform hover:-translate-y-2 hover:scale-105`}
          >
            <div className="mb-6">{cat.icon}</div>
            <h3 className="text-2xl font-semibold text-[#800000] group-hover:underline decoration-[#800000] underline-offset-4">
              {cat.title}
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">{cat.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
