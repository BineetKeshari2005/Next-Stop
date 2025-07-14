import { useParams } from "react-router-dom";
import { travelData } from "../ExploreData/travelData";
import { motion } from "framer-motion";

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
        <h2 className="text-3xl font-bold text-[#800000] text-center ">Find a Travel Agent</h2>
        <div className="grid gap-6">
          {planningTips.travelAgents.map((agent, index) => (
            <div key={index} className="flex items-center bg-white p-6 rounded-xl shadow-md">
              {/* Left: Circular Image */}
              <img
                src={agent.image}
                alt={agent.name}
                className="w-20 h-20 object-cover rounded-full border-2 border-yellow-500"
              />
              {/* Middle: Details */}
              <div className="flex-1 px-6 space-y-1">
                <h3 className="text-xl font-bold text-blue-900">{agent.name}</h3>
                <p className="text-sm text-gray-600">{agent.agency}</p>
                <p className="text-sm text-gray-700">
                  {agent.description} <a href="#" className="underline text-sm font-medium">View more</a>
                </p>
                <div className="flex gap-2 mt-1 flex-wrap">
                  {agent.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-yellow-200 text-yellow-900 px-2 py-0.5 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Right: Button */}
              <a
                href={agent.contactLink}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-4 py-2 rounded shadow"
              >
                Contact Agent
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Planning Tips Card */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-[#800000] text-center ">Planning Tips for Your {selectedCity.city} Trip</h2>
        <motion.a
          href={planningTips.tip.link}
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl overflow-hidden shadow-md bg-white block max-w-4xl mx-auto"
        >
          <img
            src={planningTips.tip.image}
            alt={planningTips.tip.title}
            className="w-full h-72 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-bold text-blue-900 uppercase">
              {planningTips.tip.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{planningTips.tip.description}</p>
          </div>
        </motion.a>
      </div>
    </div>
    </div>
  );
}
