// src/components/Footer.jsx

import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#fbeee6] text-[#4b2e2e] pt-16 pb-8 px-6 mt-20 border-t border-[#e0d8cf]">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-3xl font-bold text-[#800000] mb-2">NextStop</h2>
          <p className="text-sm">
            Your journey begins here. Discover, explore, and create memories that last a lifetime.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#a0522d] transition">Home</li>
            <li className="hover:text-[#a0522d] transition">Explore</li>
            <li className="hover:text-[#a0522d] transition">Services</li>
            <li className="hover:text-[#a0522d] transition">Blog</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> 123 Dreamland Street, Earth</li>
            <li className="flex items-center gap-2"><FaPhoneAlt /> +91 99999 99999</li>
            <li className="flex items-center gap-2"><FaEnvelope /> hello@nextstop.com</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-[#800000]">
            <FaFacebookF className="hover:text-[#a0522d] cursor-pointer text-xl transition" />
            <FaInstagram className="hover:text-[#a0522d] cursor-pointer text-xl transition" />
            <FaTwitter className="hover:text-[#a0522d] cursor-pointer text-xl transition" />
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-[#977e69]">
        © {new Date().getFullYear()} NextStop. All rights reserved.
      </div>
    </footer>
  );
}
