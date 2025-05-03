// src/components/ExploreCategories.jsx
import { FaTree, FaLandmark, FaUtensils, FaHiking } from 'react-icons/fa';

const categories = [
  {
    icon: <FaTree className="text-4xl text-[#a0522d]" />,
    title: "Nature Escapes",
    description: "Discover scenic retreats and natural wonders",
  },
  {
    icon: <FaLandmark className="text-4xl text-[#a0522d]" />,
    title: "Historical Places",
    description: "Walk through ancient stories and landmarks",
  },
  {
    icon: <FaHiking className="text-4xl text-[#a0522d]" />,
    title: "Adventure Trips",
    description: "Thrilling experiences and action-packed fun",
  },
  {
    icon: <FaUtensils className="text-4xl text-[#a0522d]" />,
    title: "Food Tours",
    description: "Explore global flavors and local cuisines",
  },
];

export default function ExploreCategories() {
  return (
    <section className="py-16 bg-[#fff8f0] text-center">
      <h2 className="text-4xl font-bold text-[#800000] mb-10">Explore Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-lg hover:shadow-[#a0522d] hover:ring-[#a0522d] transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col items-center"

          >
            <div className="mb-4">{cat.icon}</div>
            <h3 className="text-xl font-semibold text-[#800000]">{cat.title}</h3>
            <p className="text-gray-600 mt-2">{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
