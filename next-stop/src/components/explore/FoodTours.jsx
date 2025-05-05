import { useRef } from 'react';
import { useAnimationFrame } from 'framer-motion';

const foodTours = [
  {
    name: "Tokyo Food Tour",
    image: "/images/tokyo.jpg",
    desc: "Explore the vibrant street food scene of Tokyo, Japan.",
  },
  {
    name: "Rome Culinary Experience",
    image: "/images/rome.jpg",
    desc: "Taste authentic Italian pasta and pizza in Rome.",
  },
  {
    name: "Bangkok Street Food",
    image: "/images/bangkok.jpg",
    desc: "Savor Thai street food in the heart of Bangkok.",
  },
  {
    name: "Barcelona Tapas Tour",
    image: "/images/barcelona.jpg",
    desc: "Indulge in tapas and Catalan cuisine in Barcelona.",
  },
];

const duplicatedFoodTours = [...foodTours, ...foodTours];

export default function FoodTours() {
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
      <h2 className="text-4xl font-bold text-center mb-10">Food Tours</h2>
      <div className="relative w-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-8 w-max"
          style={{
            transition: "transform 0.5s linear", // Smooth transition effect for scrolling
          }}
        >
          {duplicatedFoodTours.map((tour, idx) => (
            <div
              key={idx}
              className="w-[320px] h-[400px] bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0"
            >
              <img
                src={tour.image}
                alt={tour.name}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-4 h-[150px]">
                <h3 className="text-xl font-semibold">{tour.name}</h3>
                <p className="text-gray-600">{tour.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
