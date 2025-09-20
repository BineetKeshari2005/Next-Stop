import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Events } from "../data/Events";
import EventCard from "../components/explore/InnerPages/EventCard";
import { Faqs } from "../data/Faqs.js";

const categories = ["All", "Music", "Sports", "Family", "Arts"];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topIndex, setTopIndex] = useState(0);

  const filteredEvents =
    activeCategory === "All"
      ? Events
      : Events.filter((e) => e.category === activeCategory);

  // Hero events: first event of each category
  const uniqueCategoryEvents = categories
    .filter((c) => c !== "All")
    .map((cat) => Events.find((e) => e.category === cat))
    .filter(Boolean);

  // Remove hero events from top events
  const heroEventIds = uniqueCategoryEvents.map((e) => e.id);
  const remainingEvents = Events.filter((e) => !heroEventIds.includes(e.id));

  // Top 10 events
  const topEvents = [
    ...remainingEvents.filter((e) => e.category === "Music").slice(0, 3),
    ...remainingEvents.filter((e) => e.category === "Sports").slice(0, 3),
    ...remainingEvents.filter((e) => e.category === "Family").slice(0, 2),
    ...remainingEvents.filter((e) => e.category === "Arts").slice(0, 2),
  ].slice(0, 10);

  const cardsPerPage = 5;
  const maxIndex = topEvents.length - cardsPerPage;

  const visibleEvents = topEvents.slice(topIndex, topIndex + cardsPerPage);

  // Hero auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev === uniqueCategoryEvents.length - 1 ? 0 : prev + 1)
      );
    }, 2500);
    return () => clearInterval(interval);
  }, [uniqueCategoryEvents]);

  const nextTop = () => {
    setTopIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const prevTop = () => {
    setTopIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="w-full bg-[#fffaf0] text-gray-900">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden bg-black">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
          autoPlay
          muted
          loop
          src="https://www.w3schools.com/howto/rain.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-teal-700 opacity-70"></div>

        {/* Text */}
        <div className="relative z-10 flex flex-col justify-center h-full px-10 max-w-4xl">
          <motion.h1
            className="text-white text-5xl font-bold mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Passion is the occasion
          </motion.h1>
        </div>

        {/* Peek Slider */}
        <div className="absolute top-10 right-10 z-20 w-[100%] max-w-[450px] overflow-hidden rounded-xl">
          <motion.div
            className="flex gap-5"
            animate={{ x: `-${currentIndex * 320}px` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {uniqueCategoryEvents.map((event) => (
              <div
                key={event.id}
                className="w-[300px] h-[400px] bg-white bg-opacity-90 backdrop-blur rounded-xl overflow-hidden flex-shrink-0"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-[70%] object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-base line-clamp-2">
                    {event.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">{event.date}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center mt-3 space-x-2">
            {uniqueCategoryEvents.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx === currentIndex ? "bg-emerald-500" : "bg-gray-300"
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
                className="min-w-[300px] flex-shrink-0 bg-white text-gray-900 rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.05 }}
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

      {/* Category Filters */}
      <div className="flex justify-center mt-10 space-x-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
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

      {/* Event Cards */}
      <div className="px-10 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
