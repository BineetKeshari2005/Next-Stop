import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { auth } from '../../Firebase/Firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { FaUserAlt, FaLock, FaSearch } from 'react-icons/fa';
import { MdMail } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { IoMapOutline } from "react-icons/io5";
import ExploreIndiaMap from './ExploreIndiaMap';
import { FaUserCircle } from "react-icons/fa"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const [showMenu, setShowMenu] = useState(false); // For left dropdown

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserName(user.displayName || user.email);
      } else {
        setIsLoggedIn(false);
        setUserName('');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const handleAuthSubmit = async (e) => {
  e.preventDefault();
  const { name, email, password } = formData;

  try {
    if (isSignup) {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Set displayName in Firebase Auth
      await updateProfile(user, { displayName: name });

      // ✅ Reload user to reflect name update
      await user.reload();

      // ✅ Update local state immediately
      setUserName(user.displayName);
    } else {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Update state with existing display name or fallback to email
      setUserName(user.displayName || user.email);
    }

    setIsLoggedIn(true);
    setShowAuthForm(false);
    setFormData({ name: '', email: '', password: '' });

    // ✅ Check output in console
    console.log("Display Name:", auth.currentUser.displayName);
  } catch (error) {
    console.error("Auth Error:", error);
    alert(error.message);
  }
};




  return (
    <>
      <nav className="bg-white text-white px-6 py-4 shadow-md sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto relative">


          {/* Logo */}
          <div className="text-3xl font-bold flex text-[#800000]">
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain -mt-2" />
            <Link to="/">NextStop</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="relative text-[#800000] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#800000] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:text-[#a0522d]">Home</Link>
            <Link to="/about" className="relative text-[#800000] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#800000] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:text-[#a0522d]">About</Link>
            <Link to="/explore" className="relative text-[#800000] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#800000] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:text-[#a0522d]">Explore</Link>
            <Link to="/events" className="relative text-[#800000] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#800000] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:text-[#a0522d]">Events</Link>
          </div>

<div className="hidden md:flex gap-6">
  {isLoggedIn ? (
    <div className="flex items-center align-middle gap-9 text-[#800000]">
      <ExploreIndiaMap />

      {/* Left Dropdown Menu */}
      <div className="relative">
<button
  onClick={() => setShowMenu(!showMenu)}
  className="group flex items-center gap-2 bg-[#F5DEB3] px-4 py-2 rounded-full shadow-md text-[#800000] font-semibold hover:bg-[#e8cfa1] transition-all duration-300"
>
  <FaUserCircle className="text-2xl group-hover:scale-110 transition-transform duration-300" />
  <span className="hidden md:inline text-sm tracking-wide">{userName}</span>
</button>

        {showMenu && (
          <div className="absolute left-0 mt-2 w-36 bg-white border border-gray-200 rounded shadow-lg z-50 flex flex-col text-[#800000]">
            <Link
              to="/bucketlist"
              className="px-4 py-2 hover:bg-gray-100"
              onClick={() => setShowMenu(false)}
            >
              Bucket List
            </Link>
            <Link
              to="/visited"
              className="px-4 py-2 hover:bg-gray-100"
              onClick={() => setShowMenu(false)}
            >
              Visited
            </Link>
            <button
              onClick={() => {
                signOut(auth);
                setShowMenu(false);
              }}
              className="px-4 py-2 text-left hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  ) : (
    <button
      onClick={() => setShowAuthForm(true)}
      className="bg-[#F5DEB3] px-8 font-semibold py-2 rounded-md shadow-md transition-all duration-300 hover:bg-[#e8cfa1] hover:scale-105 text-[#800000]"
    >
      Login
    </button>
  )}
</div>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 px-6 mt-2 text-black">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/explore" onClick={() => setIsOpen(false)}>Explore</Link>
            <Link to="/events" onClick={() => setIsOpen(false)}>Events</Link>

            {isLoggedIn ? (
              <div className="flex items-center gap-9 text-[#800000]">
                
                <ExploreIndiaMap/>
                <button
                  onClick={() => signOut(auth)}
                  className="bg-red-500 px-4 py-2 rounded-md text-white font-semibold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setShowAuthForm(true);
                  setIsOpen(false);
                }}
                className="bg-[#F5DEB3] px-1 py-1 text-[#800000] font-semibold rounded"
              >
                Login
              </button>
            )}
          </div>
        )}
      </nav>

      {/* Auth Form */}
      {showAuthForm && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
          <div className="backdrop-blur-3xl p-8 border border-gray-300 rounded-xl shadow-2xl w-96 space-y-6 animate-fade-in text-gray-900">
            <div className="absolute top-0 right-0 bg-[#162938] w-11 h-11 text-lg text-white flex justify-center items-center cursor-pointer rounded-bl-[20px] rounded-tr-xl">
              <button onClick={() => setShowAuthForm(false)}>
                <ImCross className="text-center" />
              </button>
            </div>
            <h2 className="text-3xl font-extrabold text-center flex items-center justify-center gap-2 text-[#162938]">
              {isSignup ? 'Register' : 'Login'}
            </h2>
            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {isSignup && (
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border-none outline-none rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                  <FaUserAlt className="absolute top-3 left-3 text-[#162938]" />
                </div>
              )}
              <div className="relative">
                <MdMail className="absolute top-3 left-3 text-[#162938]" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div className="relative">
                <FaLock className="absolute top-3 left-3 text-[#162938]" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#F5DEB3] text-[#800000] py-2 font-bold hover:bg-[#f9d593] transition-all rounded-lg"
              >
                {isSignup ? 'Create Account' : 'Login'}
              </button>
            </form>
            <div className="pt-2 text-sm text-center">
              <span className="text-white">{isSignup ? "" : 'Don’t have an account? '}</span>
              <button
                onClick={() => setIsSignup(!isSignup)}
                className="text-yellow-500 hover:underline font-semibold"
              >
                {isSignup ? 'Already have an account?' : ' Register'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


