import { useRef } from 'react';
import { useAnimationFrame } from 'framer-motion';

const adventurePlaces = [
  {
    name: "Everest Base Camp",
    image: "/images/everestbasecamp.jpg",
    desc: "Trekking to the base camp of Mount Everest in Nepal.",
  },
  {
    name: "Amazon Rainforest",
    image: "/images/amazon.jpg",
    desc: "Exploring the vast Amazon rainforest in South America.",
  },
  {
    name: "Grand Canyon",
    image: "/images/grandcanyon.jpg",
    desc: "Hiking the Grand Canyon's rugged trails in Arizona.",
  },
  {
    name: "Great Barrier Reef",
    image: "/images/greatbarrierreef.jpg",
    desc: "Scuba diving in the Great Barrier Reef in Australia.",
  },
];

const duplicatedPlaces = [...adventurePlaces, ...adventurePlaces];

export default function AdventureTrips() {
  const containerRef = useRef(null);
  const x = useRef(0);

  useAnimationFrame((_, delta) => {
    if (containerRef.current) {
      x.current -= delta * 0.05; // Move in the opposite direction (right to left)
      if (x.current >= containerRef.current.scrollWidth / 2) {
        x.current = 0; // Loop back to the start for continuous scrolling
      }
      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  return (
    <section className="py-16 px-6 bg-[#fffaf0] text-[#800000] overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-10">Adventure Trips</h2>
      <div className="relative w-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-8 w-max"
          style={{
            transition: "transform 0.5s linear", // Smooth transition effect for scrolling
          }}
        >
          {duplicatedPlaces.map((place, idx) => (
            <div
              key={idx}
              className="w-[320px] h-[400px] bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-4 h-[150px]">
                <h3 className="text-xl font-semibold">{place.name}</h3>
                <p className="text-gray-600">{place.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
