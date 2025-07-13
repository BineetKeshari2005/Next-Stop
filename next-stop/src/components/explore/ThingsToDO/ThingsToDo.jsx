import { useParams } from "react-router-dom";
import { travelData } from "../ExploreData/travelData";

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

  return (
    <div className="bg-[#fffaf0]">
        
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Page Title */}
      <div className="text-center mb-11">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight drop-shadow-sm">{selectedCity.city}</h1>
        <p className="mt-2 text-xl md:text-2xl text-[#b05d27] italic font-medium mb-12">{selectedCity.tagline}</p>
      </div>

      {/* Things To Do List */}
{selectedCity.thingsToDo.map((activity, index) => (
  <div
    key={index}
    className={`flex flex-col md:flex-row items-center mb-20 gap-10 ${
      index % 2 === 1 ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* Image */}
    <div className="md:w-1/2">
      <div className="rounded-3xl overflow-hidden shadow-xl">
        <img
          src={selectedCity.galleryImages[5 + index]}
          alt={activity.name}
          className="w-full h-[420px] object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>

    {/* Description Box */}
    <div className="md:w-1/2 bg-[#ffe89e] p-6 rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold text-[#875026] mb-4">
        {index + 1}. {activity.name}
      </h2>
      <div className="text-lg text-[#4b2e2e] leading-relaxed tracking-wide">
        {activity.description}
      </div>
    </div>
  </div>
))}

    </div>
    </div>
  );
}
