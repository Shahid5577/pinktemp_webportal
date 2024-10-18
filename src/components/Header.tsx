import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Icon from '../assets/icon.png';
import Headerbg from '../assets/Headerbg.png';

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // Mobile menu state

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle mobile menu
  };

  const closeNav = () => {
    setIsNavOpen(false); // Close mobile menu when link is clicked
  };
  return (
    <header 
    className="sticky top-0 z-50 text-white py-2 bg-cover bg-center shadow-lg"
    style={{ backgroundImage: `url(${Headerbg})` }} // Inline background image
  >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={Icon} alt="Company Logo" className="h-8 mr-2" />
          <Link to="/" className="text-2xl font-bold text-zinc-900 duration-300">
            Enershas
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/about" className="text-gray-700 hover:text-purple-400 font-bold transition duration-300">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-purple-400 font-bold transition duration-300">Services</Link>
          <Link to="/pricing" className="text-gray-700 hover:text-purple-400 font-bold transition duration-300">Pricing</Link>
          <Link to="/contact" className="text-gray-700 hover:text-purple-400 font-bold transition duration-300">Contact</Link> {/* Add Contact Link */}
          </nav>

        {/* Mobile Navigation */}
        <button onClick={toggleNav} className="md:hidden text-gray-700 font-bold focus:outline-none">
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {isNavOpen && (
        <nav className="md:hidden bg-white shadow-md mt-2">
          <ul className="flex flex-col items-center space-y-2 py-4">
            <li>
              <Link to="/about" onClick={closeNav} className="text-gray-700 hover:text-purple-400 font-bold transition duration-300">About</Link>
            </li>
            <li>
              <Link to="/services" onClick={closeNav} className="text-gray-700 hover:text-purple-400 font-bold transition duration-300">Services</Link>
            </li>
            <li>
              <Link to="/pricing" onClick={closeNav} className="text-gray-700 hover:text-purple-400 font-bold transition duration-300">Pricing</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeNav} className="text-gray-700 hover:text-purple-400 font-bold transition duration-300">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
