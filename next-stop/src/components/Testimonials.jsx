import { FaStar, FaQuoteLeft, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alok Kumar",
    location: "Delhi, India",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    comment: "This was an amazing experience! Highly recommend for first-time solo travelers.",
  },
  {
    name: "Shourya Sisodiya",
    location: "Pune, India",
    image: "https://i.pravatar.cc/150?img=33",
    rating: 4,
    comment: "The trip was fantastic and very well organized. Guides were helpful and friendly!",
  },
  {
    name: "Piyush Sharma",
    location: "Jaipur, India",
    image: "https://i.pravatar.cc/150?img=25",
    rating: 5,
    comment: "Best vacation ever! I didn’t have to worry about anything — perfect from start to finish.",
  },
  {
    name: "Sneha Raj",
    location: "Mumbai, India",
    image: "https://i.pravatar.cc/150?img=48",
    rating: 5,
    comment: "Absolutely loved the weekend getaway. Will definitely plan again soon!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#fffaf0] py-20">
      <div className="text-center mb-16 px-4">
        <h2 className="text-5xl font-extrabold text-[#800000]">Traveler Testimonials</h2>
        <p className="text-[#b05d27] mt-4 italic text-xl">
          What our explorers are saying...
        </p>
      </div>

      <div className="overflow-hidden w-full">
        <div className="flex gap-12 animate-scroll-x w-max px-8">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl shadow-xl p-8 w-[370px] flex-shrink-0 space-y-5 relative"
            >
              <FaQuoteLeft className="text-[#f4a261] text-4xl absolute top-5 left-5 opacity-20" />

              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-[#800000] shadow"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-[#800000] flex items-center justify-center gap-2">
                    {testimonial.name}
                    <FaCheckCircle className="text-green-500" />
                  </h3>
                  <p className="text-gray-600 flex items-center justify-center text-sm mt-1">
                    <FaMapMarkerAlt className="mr-1" /> {testimonial.location}
                  </p>
                </div>
              </div>

              <div className="flex justify-center my-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}
                  />
                ))}
              </div>

              <p className="text-gray-700 text-center leading-relaxed text-base">
                “{testimonial.comment}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
