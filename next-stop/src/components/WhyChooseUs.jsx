import { FaMapMarkedAlt, FaMoneyBillWave, FaHeadset, FaTags } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-[#fff8f0]">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-[#800000] tracking-tight">
        Why Choose Us?
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 hover:shadow-[#a0522d] transition-all duration-300 ease-in-out transform hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-4">
            <FaMapMarkedAlt className="text-3xl text-[#a0522d]" />
            <h3 className="text-xl font-bold text-[#800000]">Expert Guides</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Our experienced guides provide a personalized and safe adventure in every destination.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 hover:shadow-[#a0522d] transition-all duration-300 ease-in-out transform hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-4">
            <FaMoneyBillWave className="text-3xl text-[#a0522d]" />
            <h3 className="text-xl font-bold text-[#800000]">Affordable Packages</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We offer packages that cater to all budgets, so you can experience luxury and adventure within your means.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 hover:shadow-[#a0522d] transition-all duration-300 ease-in-out transform hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-4">
            <FaHeadset className="text-3xl text-[#a0522d]" />
            <h3 className="text-xl font-bold text-[#800000]">24/7 Support</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Our team is always here to assist you, ensuring a smooth and worry-free trip from start to finish.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 hover:shadow-[#a0522d] transition-all duration-300 ease-in-out transform hover:-translate-y-1 ">
          <div className="flex items-center gap-3 mb-4">
            <FaTags className="text-3xl text-[#a0522d]" />
            <h3 className="text-xl font-bold text-[#800000]">Exclusive Discounts</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Get exclusive discounts and deals on your trips when you book with us.
          </p>
        </div>
      </div>
    </section>
  );
}

  
  

  
  