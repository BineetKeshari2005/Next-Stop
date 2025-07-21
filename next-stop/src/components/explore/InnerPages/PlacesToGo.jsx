import { useParams } from "react-router-dom";
import { travelData } from "../../../data/travelData";
import { motion } from "framer-motion";

export default function PlacesToGo() {
  const { cityName } = useParams();

  let selectedCity = null;
  for (let category of travelData) {
    const match = category.places.find(
      (place) => place.city.toLowerCase() === cityName.toLowerCase()
    );
    if (match) {
      selectedCity = match;
      break;
    }
  }

  if (!selectedCity) return <div className="text-center mt-10">City not found.</div>;

  return (
    <div className="bg-gradient-to-b from-[#fffaf0] to-[#fff3e0] py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-center mb-5 ">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight drop-shadow-sm ">{selectedCity.city}</h1>
        <p className="mt-2 text-xl md:text-2xl text-[#b05d27] italic font-medium ">{selectedCity.tagline}</p>
      </div>
        </div>

        {selectedCity.placesToVisit.map((place, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center mb-24 gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2">
              <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
                <img
                  src={selectedCity.galleryImages[8 + index]}
                  alt={place.name}
                  className="w-full h-[440px] object-cover"
                />
              </div>
            </div>

<div className="md:w-1/2 relative  p-8 rounded-3xl shadow-2xl border-l-[10px] border-[#ff966d] bg-[#fedfd2]">

  {/* Creative Number Badge */}
{/* Stylized Rotated Number Badge */}
{/* Scroll-style Number Badge */}
<div className="absolute -top-6 -left-6 flex items-center bg-[#ffedd5] text-[#9a3412] font-bold text-lg px-4 py-1 rounded-r-3xl shadow-md border-l-4 border-[#f97316] drop-shadow-sm tracking-widest z-10  hover:rotate-0 transition-transform duration-300 ease-in-out">
   #{index + 1}
</div>

  {/* Place Name */}
  <h2 className="text-2xl font-bold text-[#3e2723] mb-4 pl-2 border-l-4 border-[#e76f51]">
    {place.name}
  </h2>

  {/* Inner Description Container */}
  <div className="bg-white/70 backdrop-blur-md rounded-xl px-6 py-4 border border-[#f4a261]/40 shadow-inner">
    <p className="text-gray-700 text-[1.05rem] leading-relaxed tracking-wide">
      {place.description}
    </p>
  </div>

</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
