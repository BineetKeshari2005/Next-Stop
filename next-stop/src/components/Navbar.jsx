import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-3xl font-bold flex text-[#800000]">
        <img src={logo} alt="Logo" className="w-10 h-10 object-contain -mt-2" />
          <Link to="/">NextStop</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="relative text-[#800000] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#800000] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:text-[#a0522d]">Home</Link>
          <Link to="/about" className="relative text-[#800000] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#800000] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:text-[#a0522d]">About</Link>
          <Link to="/explore" className="relative text-[#800000] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#800000] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:text-[#a0522d]">Explore</Link>
          <Link to="/blog" className="relative text-[#800000] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#800000] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:text-[#a0522d]">Blog</Link>
          </div>
          <div className='hidden md:flex gap-6'>
          {/* <Link to="/login" className="text-[#800000] hover:text-gray-300">Login</Link> */}
          <Link to="/signup" className="  bg-[#F5DEB3] px-4 py-2 rounded-md shadow-md transition-all duration-300 hover:bg-[#e8cfa1] hover:scale-105 text-[#800000] ">
            Signup
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 mt-2">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
          <Link
            to="/signup"
            onClick={() => setIsOpen(false)}
            className="bg-white text-[#800000] px-3 py-1 rounded hover:bg-gray-100"
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
}

