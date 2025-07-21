import { useParams } from "react-router-dom";
import { travelData } from "../../../data/travelData";
import { motion } from "framer-motion";
import { FaLightbulb, FaMapMarkedAlt, FaUmbrellaBeach,FaUserTie, FaPhoneAlt, FaTags } from "react-icons/fa";

export default function PlanYourTrip() {
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

  const accommodations = selectedCity.planYourTrip.accommodations.map((item) => ({
    title: item.deal || "Special Offer",
    name: item.name,
    image: item.image,
    link: item.link || "#",
  }));

  const planningTips = {
    tip: {
      title: "PLANNING TIPS",
      description: selectedCity.planYourTrip.planningTips,
      image: selectedCity.galleryImages[8] || selectedCity.galleryImages[0],
      link: "#",
    },
    travelAgents: selectedCity.planYourTrip.travelAgents.map((agent, idx) => ({
      name: agent,
      agency: `Travel Agency #${idx + 1}`,
      description: "Experienced in cultural and historic tours across Rajasthan.",
      image: selectedCity.galleryImages[9 + idx % selectedCity.galleryImages.length],
      tags: ["Cultural", "Nature", "Food"],
      contactLink: "#",
    })),
  };

  return (
    <div className= "bg-[#fffaf0]" >
       
    <div className="p-4 md:p-10 space-y-16">
         <div className="text-center mb-5 ">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight drop-shadow-sm ">{selectedCity.city}</h1>
        <p className="mt-2 text-xl md:text-2xl text-[#b05d27] italic font-medium ">{selectedCity.tagline}</p>
      </div>
      {/* Auto Sliding Accommodation Deals (CSS Animation Based) */}
      <div className="space-y-6 overflow-hidden">
        <h2 className="text-3xl font-bold text-[#800000] text-center mb-12 mt-12">Accommodation Deals</h2>
        <div className="w-full overflow-hidden">
          <div
            className="flex gap-6 animate-scroll-x w-max"
          >
            {[...accommodations, ...accommodations].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden bg-white shadow-md w-[300px] flex-shrink-0"
              >
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4 space-y-2">
                  <span className="inline-block bg-yellow-400 text-black px-2 py-1 rounded text-xs font-semibold">
                    Deal
                  </span>
                  <h3 className="text-lg font-bold text-blue-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.name}</p>
                  <a href={item.link} className="text-sm font-semibold text-gray-700 underline">
                    Learn more
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Travel Agents Section */}
      <div className="space-y-8 mt-12">
  <h2 className="text-3xl font-bold text-[#800000] text-center">
    Find a Travel Agent
  </h2>

  <div className="grid gap-6">
    {planningTips.travelAgents.map((agent, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.01 }}
        className="flex items-start bg-white p-6 rounded-2xl shadow-lg border-l-4 border-yellow-400"
      >
        {/* Icon Section */}
        <div className="flex items-center justify-center w-14 h-14 bg-[#800000] text-white rounded-full shadow-md mt-1">
          <FaUserTie size={24} />
        </div>

        {/* Text Section */}
        <div className="flex-1 pl-5 space-y-2">
          <h3 className="text-xl font-bold text-gray-800">{agent.name}</h3>
          <p className="text-sm text-blue-900 font-medium">{agent.agency}</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {agent.description}{" "}
            <a href="#" className="underline text-blue-800 font-medium">
              View more
            </a>
          </p>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap items-center">
            {agent.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1"
              >
                <FaTags size={12} /> {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <a
          href={agent.contactLink}
          className="ml-auto bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded-xl shadow flex items-center gap-2"
        >
          <FaPhoneAlt size={14} /> Contact
        </a>
      </motion.div>
    ))}
  </div>
</div>

      {/* Planning Tips Card */}
    <div className="space-y-8">
  <h2 className="text-3xl font-extrabold text-[#800000] text-center">
    Planning Tips for Your {selectedCity.city} Trip
  </h2>

  <motion.a
    href={planningTips.tip.link}
    whileHover={{ scale: 1.02 }}
    className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#fff] to-[#f9f9f9] border border-gray-200 block max-w-4xl mx-auto"
  >
    <div className="flex items-center gap-6 p-6">
      {/* Left Icon Box */}
      <div className="flex-shrink-0 bg-[#800000] text-white p-4 rounded-full shadow-md">
        <FaLightbulb size={30} />
      </div>

      {/* Right Text */}
      <div>
        <h3 className="text-lg font-semibold text-[#1f2937] uppercase tracking-wide">
          {planningTips.tip.title}
        </h3>
        <p className="text-gray-600 text-sm mt-1 leading-relaxed">
          {planningTips.tip.description}
        </p>
      </div>
    </div>
  </motion.a>
</div>
    </div>
    </div>
  );
}
