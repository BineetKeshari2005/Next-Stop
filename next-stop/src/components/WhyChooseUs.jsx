export default function WhyChooseUs() {
    return (
      <section className="py-16 px-6 ">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#800000]">
          Why Choose Us?
        </h2>
  
        {/* Flex container for a single row */}
        <div className="max-w-7xl mx-auto flex justify-between gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-lg hover:shadow-[#a0522d] hover:ring-[#a0522d] transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] flex-1">
            <h3 className="text-2xl font-semibold text-[#800000]">Expert Guides</h3>
            <p className="text-gray-600 mt-4">
              Our experienced guides provide a personalized and safe adventure in every destination.
            </p>
          </div>
  
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-lg hover:shadow-[#a0522d]  hover:ring-[#a0522d] transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] flex-1">
            <h3 className="text-2xl font-semibold text-[#800000]">Affordable Packages</h3>
            <p className="text-gray-600 mt-4">
              We offer packages that cater to all budgets, so you can experience luxury and adventure within your means.
            </p>
          </div>
  
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-lg hover:shadow-[#a0522d]  hover:ring-[#a0522d] transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] flex-1">
            <h3 className="text-2xl font-semibold text-[#800000]">24/7 Support</h3>
            <p className="text-gray-600 mt-4">
              Our team is always here to assist you, ensuring a smooth and worry-free trip from start to finish.
            </p>
          </div>
  
          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-lg hover:shadow-[#a0522d]  hover:ring-[#a0522d] transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] flex-1">
            <h3 className="text-2xl font-semibold text-[#800000]">Exclusive Discounts</h3>
            <p className="text-gray-600 mt-4">
              Get exclusive discounts and deals on your trips when you book with us.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  

  
  