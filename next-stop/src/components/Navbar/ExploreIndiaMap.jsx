import React, { useState } from 'react';
import { IoMapOutline } from "react-icons/io5";

export default function ExploreIndiaMap() {
  const [showMap, setShowMap] = useState(false);

  return (
    <>
      {/* Map Button */}
      <button
        onClick={() => setShowMap(!showMap)}
        className="flex items-center gap-2  px-4 py-2 rounded-full shadow-md text-[#800000] font-semibold hover:bg-[#e8cfa1] transition-all duration-300"
      >
        <IoMapOutline className="text-2xl" />
        
      </button>

      {/* Fullscreen Map Overlay */}
      {showMap && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-[90%] h-[80%] relative">
            <button
              onClick={() => setShowMap(false)}
              className="absolute top-2 right-4 text-2xl text-red-600 hover:text-red-800"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-center mt-4 text-[#800000]">Explore India</h2>

            <iframe
              title="India Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55920967.367000006!2d60.65150930821869!3d20.662114963600898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ffeb7a7038f%3A0x88d3b41a9c4f7a4e!2sIndia!5e0!3m2!1sen!2sin!4v1629374132709!5m2!1sen!2sin"
              className="w-full h-full border-0 rounded-b-lg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
