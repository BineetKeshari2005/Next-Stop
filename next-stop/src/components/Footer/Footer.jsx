import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#fbeee6] text-[#4b2e2e] pt-16 pb-8 px-6 border-t border-[#e0d8cf]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-3xl font-bold text-[#800000] mb-2">NextStop</h2>
          <p className="text-sm leading-relaxed">
            Discover, Explore, Plan. Make every journey unforgettable with <span className='text-[#800000]'>NextStop</span>.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-[#a0522d] transition">About Us </Link></li>
            <li><Link to="/explore" className="hover:text-[#a0522d] transition">Explore India </Link></li>
            <li><Link to="/events" className="hover:text-[#a0522d] transition">Events & Festivals</Link></li>
            
          </ul>
        </div>

        {/* My Travel */}
        <div>
          <h3 className="text-lg font-semibold mb-4">My Travel</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/visited" className="hover:text-[#a0522d] transition">Visited Places</Link></li>
            <li><Link to="/bucketlist" className="hover:text-[#a0522d] transition">Bucket List</Link></li>
            
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
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <div className="flex gap-4 text-[#800000]">
            <FaFacebookF className="hover:text-[#a0522d] cursor-pointer text-xl transition" />
            <FaInstagram className="hover:text-[#a0522d] cursor-pointer text-xl transition" />
            <FaTwitter className="hover:text-[#a0522d] cursor-pointer text-xl transition" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 text-center text-sm text-[#977e69] border-t border-[#e0d8cf] pt-6">
        © {new Date().getFullYear()} NextStop. Made with ♥ for passionate travelers.
      </div>
    </footer>
  );
}
