import { useRef } from 'react';
import { useAnimationFrame } from 'framer-motion';

const naturePlaces = [
  {
    name: "Yosemite National Park",
    image: "/images/yosemite.jpg",
    desc: "Granite cliffs, waterfalls, and giant sequoias.",
  },
  {
    name: "Banff National Park",
    image: "/images/banff.jpg",
    desc: "Turquoise lakes and snowy peaks in Canada.",
  },
  {
    name: "Plitvice Lakes",
    image: "/images/plitvice.jpg",
    desc: "Stunning waterfalls and lush greenery in Croatia.",
  },
  {
    name: "Sagarmatha",
    image: "/images/everest.jpg",
    desc: "Home of Mount Everest in Nepal.",
  },
];

export default function NaturesEscape() {
  const containerRef = useRef(null);
  const x = useRef(0);

  useAnimationFrame((_, delta) => {
    if (containerRef.current) {
      x.current -= delta * 0.05; // adjust speed here
      if (x.current <= -containerRef.current.scrollWidth / 2) {
        x.current = 0;
      }
      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  return (
    <section className="py-16 px-6 bg-[#fffaf0] text-[#800000] overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-10">Nature's Escape</h2>
      <div className="relative w-full overflow-hidden">
        <div ref={containerRef} className="flex w-max gap-8">
          {[...naturePlaces, ...naturePlaces].map((place, idx) => (
            <div
              key={idx}
              className="w-[320px] h-[400px] bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-[250px] object-cover" // Ensures the image covers the div fully
              />
              <div className="p-4 h-[150px]"> {/* Adjusted height for text section */}
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

