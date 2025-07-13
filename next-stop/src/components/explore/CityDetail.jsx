import { useParams } from 'react-router-dom';
import { travelData } from './ExploreData/travelData';
import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function CityDetail() {
  const { cityName } = useParams();
  const [city, setCity] = useState(null);
  const [activeTab, setActiveTab] = useState("thingsToDo");

  useEffect(() => {
    for (let category of travelData) {
      const match = category.places.find((p) => p.city.toLowerCase() === cityName.toLowerCase());
      if (match) {
        setCity(match);
        break;
      }
    }
  }, [cityName]);

  if (!city) return <div className="text-center mt-20 text-xl">Loading...</div>;

  return (
  <>
   <div className= "bg-[#fffaf0]">

    <div className="max-w-6xl mx-auto px-4 py-12  ">
{/* Title and Tagline */}
        <div className="text-center mb-11 " >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight drop-shadow-sm ">
            {city.city}
        </h1>
        <p className="mt-2 text-xl md:text-2xl text-[#b05d27] italic font-medium">
            {city.tagline}
        </p>
        </div>

{/* Tabs */}
<div className="flex justify-center flex-wrap gap-4 mb-12">
  {[
    { label: "Things to Do", path: "things-to-do" },
    { label: "Places to Go", path: "places-to-go" },
    { label: "Plan Your Trip", path: "plan-your-trip" },
  ].map((tab, index) => (
    <a
      key={index}
      href={`/explore/${city.city.toLowerCase()}/${tab.path}`}
      className="px-6 py-2 rounded-full border-2 border-[#800000] text-[#800000] font-semibold bg-white hover:bg-[#800000] hover:text-white transition duration-200 ease-in-out"
    >
      {tab.label}
    </a>
  ))}
</div>

      {city.galleryImages?.length >= 5 && (
        <div className="flex flex-col md:flex-row gap-14 mb-10 items-start ">
{/* Left: One large image */}
            <div>
            <img
                src={city.galleryImages[0]}
                alt="Main Gallery"
                className="w-[500px] h-[500px] object-cover rounded-xl bg-green-700 "
            />
            </div>

{/* Right: 2x2 grid of square images */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {city.galleryImages.slice(1, 5).map((img, index) => (
                <div key={index}>
                <img
                    src={img}
                    alt={`Gallery ${index + 2}`}
                    className="w-[240px] h-[240px] object-cover rounded-xl bg-green-300"
                />
                </div>
            ))}
            </div>
        </div>
        )}

{/* Full Description */}
        <div className="bg-[#fffaf0] px-6 py-8 rounded-xl shadow-md max-w-4xl mx-auto mt-8">
            <h2 className="text-2xl font-semibold text-[#800000] mb-4 text-center">About {city.city}</h2>
            <p className="text-[#4b2e2e] text-lg leading-relaxed tracking-wide text-justify">
                {city.fullDescription}
            </p>
        </div>

    </div>

   </div>
  </>
  )}

