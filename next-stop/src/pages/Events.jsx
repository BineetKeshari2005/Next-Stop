// src/pages/EventsPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Events } from "../data/Events";
import EventCard from "../components/explore/InnerPages/EventCard";
import { Faqs } from "../data/Faqs.js";

const categories = ["All", "Music", "Sports", "Family", "Arts"];
const navbarHeight = 72; // px

export default function EventsPage() {
  const location = useLocation();
  const filterRef = useRef(null);
  const cardsRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topIndex, setTopIndex] = useState(0);

  // Hero events: first event of each category
  const uniqueCategoryEvents = categories
    .filter((c) => c !== "All")
    .map((cat) => Events.find((e) => e.category === cat))
    .filter(Boolean);

  // Remove hero events from top events
  const heroEventIds = uniqueCategoryEvents.map((e) => e.id);
  const remainingEvents = Events.filter((e) => !heroEventIds.includes(e.id));

  // Top 10 events for slider
  const topEvents = [
    ...remainingEvents.filter((e) => e.category === "Music").slice(0, 3),
    ...remainingEvents.filter((e) => e.category === "Sports").slice(0, 3),
    ...remainingEvents.filter((e) => e.category === "Family").slice(0, 2),
    ...remainingEvents.filter((e) => e.category === "Arts").slice(0, 2),
  ].slice(0, 10);

  const cardsPerPage = 5;
  const maxIndex = topEvents.length - cardsPerPage;
  const visibleEvents = topEvents.slice(topIndex, topIndex + cardsPerPage);

  // Auto-slide hero events
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev === uniqueCategoryEvents.length - 1 ? 0 : prev + 1)
      );
    }, 2500);
    return () => clearInterval(interval);
  }, [uniqueCategoryEvents]);

  const nextTop = () => setTopIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  const prevTop = () => setTopIndex((prev) => (prev > 0 ? prev - 1 : prev));

  // If coming from TopEvents, set category and scroll to filter
  useEffect(() => {
    if (location.state?.fromTopEvents && location.state.category) {
      setActiveCategory(location.state.category);
      setSearchQuery(""); // reset search
      setTimeout(() => {
        if (filterRef.current) {
          const offsetTop =
            filterRef.current.getBoundingClientRect().top +
            window.pageYOffset -
            navbarHeight -
            8;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.state]);

  // Scroll to top of event cards on category change
  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setTimeout(() => {
      if (cardsRef.current) {
        const offsetTop =
          cardsRef.current.getBoundingClientRect().top +
          window.pageYOffset -
          (filterRef.current?.offsetHeight || 0) -
          16;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }, 50);
  };

  // Filter events based on active category + search
  const filteredEvents = Events.filter((e) => {
    const matchCategory = activeCategory === "All" || e.category === activeCategory;
    const matchSearch =
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="w-full bg-[#fffaf0] text-gray-900">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden bg-black">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
          autoPlay
          muted
          loop
          src="https://res.cloudinary.com/dkybreoaz/video/upload/v1758503898/Take_It_Easy_Official_Live_Video_2_rkcb5x.mov"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-teal-700 opacity-70"></div>

        <div className="relative z-10 flex flex-col justify-center h-full px-10 max-w-4xl">
          {/* <motion.h1
            className="text-white text-5xl font-bold mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Passion is the occasion
          </motion.h1> */}
        </div>
        
{/* Peek Slider (Top Right, Responsive) */}
<div
  className="absolute z-20 
             top-4 right-4 
             sm:top-6 sm:right-6 
             md:top-10 md:right-10
             w-[180px] sm:w-[220px] md:w-[320px] 
             overflow-hidden rounded-xl shadow-lg"
>
  <motion.div
    className="flex"
    animate={{ x: `-${currentIndex * 100}%` }} // percentage instead of cardWidth
    transition={{ type: "spring", stiffness: 120, damping: 20 }}
  >
    {uniqueCategoryEvents.map((event) => (
      <div
        key={event.id}
        className="flex-shrink-0 
                   w-[180px] sm:w-[220px] md:w-[300px] 
                   h-[240px] sm:h-[300px] md:h-[380px] 
                   bg-white bg-opacity-90 backdrop-blur 
                   rounded-xl overflow-hidden mr-4"
      >
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-[60%] object-cover"
        />
        <div className="p-2 sm:p-3 md:p-4">
          <h4 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">
            {event.title}
          </h4>
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-1">
            {event.date}
          </p>
        </div>
      </div>
    ))}
  </motion.div>

  {/* Dots */}
  <div className="flex justify-center mt-2 sm:mt-3 space-x-2">
    {uniqueCategoryEvents.map((_, idx) => (
      <button
        key={idx}
        onClick={() => setCurrentIndex(idx)}
        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition ${
          idx === currentIndex ? "bg-emerald-500 scale-110" : "bg-gray-300"
        }`}
      />
    ))}
  </div>
</div>


</div>

      {/* Top 10 Slider */}
      <div className="px-10 py-12 bg-gradient-to-r from-teal-600 to-emerald-500 text-white relative">
        <h2 className="text-3xl font-bold mb-6">Top 10 must attend events</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={prevTop}
            disabled={topIndex === 0}
            className={`p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-90 transition ${
              topIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>

          <div className="flex space-x-6 pb-4 overflow-hidden">
            {visibleEvents.map((event, i) => (
              <motion.div
                key={event.id}
                className="min-w-[300px] flex-shrink-0 bg-white text-gray-900 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleCategoryClick(event.category)} // show all cards
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-emerald-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
                    #{topIndex + i + 1}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{event.title}</h3>
                  <div className="text-sm text-gray-500 mt-1">{event.date}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={nextTop}
            disabled={topIndex >= maxIndex}
            className={`p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-90 transition ${
              topIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ArrowRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Sticky Search + Filter */}
      <div
        ref={filterRef}
        className="sticky top-[72px] z-30 bg-[#fffaf0] pt-4 pb-4 px-6 shadow-md"
      >
        {/* Search */}
        <div className="max-w-xl mx-auto mb-4 relative">
          <input
            type="text"
            placeholder="Search by event or city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border-2 border-[#800000] rounded-full px-12 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm transition placeholder:text-gray-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex justify-center space-x-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`${
                activeCategory === cat
                  ? "bg-[#800000] text-white"
                  : "border-2 border-[#800000]"
              } rounded-full px-5 py-2 font-medium hover:bg-[#800000] text-[#800000] transition hover:text-white`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Event Cards */}
      <div
        ref={cardsRef}
        className="px-10 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        style={{ marginTop: "16px" }}
      >
        {filteredEvents.length === 0 && (
          <p className="text-center text-xl text-gray-500 col-span-full">
            No events found.
          </p>
        )}
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {/* FAQ */}
      <div className="px-10 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        {Faqs.map((faq) => (
          <details key={faq.id} className="border-b py-4 cursor-pointer">
            <summary className="font-semibold text-lg flex justify-between items-center">
              {faq.question}
              <span className="ml-2">▼</span>
            </summary>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
