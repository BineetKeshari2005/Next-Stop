import { useRef } from 'react';
import { useAnimationFrame } from 'framer-motion';

const historicPlaces = [
  {
    name: "Machu Picchu",
    image: "/images/machu.jpg",
    desc: "Ancient Incan city in the Andes mountains of Peru.",
  },
  {
    name: "Great Wall of China",
    image: "/images/greatwall.jpg",
    desc: "Iconic ancient wall stretching across northern China.",
  },
  {
    name: "Petra",
    image: "/images/petra.jpg",
    desc: "Rock-cut architecture in Jordan’s desert canyons.",
  },
  {
    name: "Colosseum",
    image: "/images/colosseum.jpg",
    desc: "Historic Roman amphitheatre in the heart of Rome.",
  },
];

const duplicatedPlaces = [...historicPlaces, ...historicPlaces];

export default function HistoricPlaces() {
  const containerRef = useRef(null);
  const x = useRef(0);

  useAnimationFrame((_, delta) => {
    if (containerRef.current) {
      x.current -= delta * 0.05; // adjust speed here
      if (x.current <= -containerRef.current.scrollWidth / 2) {
        x.current = 0; // Loop back for seamless scrolling
      }
      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  return (
    <section className="py-16 px-6 bg-[#fffaf0] text-[#800000] overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-10">Historic Places</h2>
      <div className="relative w-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-8 w-max"
          style={{
            transition: "transform 0.5s linear", // Smooth transition for scroll effect
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


