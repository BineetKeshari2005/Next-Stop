import { useParams } from "react-router-dom";
import { travelData } from "../ExploreData/travelData";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThingsToDo() {
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

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br bg-[#fffaf0] py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#4b2e2e] tracking-tight drop-shadow-md">
            {selectedCity.city}
          </h1>
          <p className="mt-3 text-xl md:text-2xl text-[#b05d27] italic font-medium">
            {selectedCity.tagline}
          </p>
        </div>

        {selectedCity.thingsToDo.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className={`flex flex-col md:flex-row items-center mb-24 gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2">
              <div className="rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500">
                <img
                  src={selectedCity.galleryImages[5 + index]}
                  alt={activity.name}
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>

            {/* Stylish Description Box */}
            <div className="md:w-1/2 bg-[#edf1f7] relative border-l-[10px] border-[#d97246] p-8 rounded-3xl shadow-xl">
              <div className="absolute -top-5 left-4 bg-[#e28c4a] text-white px-4 py-1 rounded-full font-bold text-sm shadow-md">
                #{index + 1}
              </div>
              <h2 className="text-3xl font-extrabold text-[#2c3e50] mb-4   ">
                {activity.name}
              </h2>
              <p className="text-[#2c3e50] text-md md:text-lg leading-relaxed font-medium bg-[#ffffffcc] backdrop-blur-md border border-[#dce4ec] p-4 rounded-xl shadow-inner">
                {activity.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

