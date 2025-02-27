import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Icon from '../assets/icon.png';

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); 

  const toggleNav = () => setIsNavOpen(!isNavOpen); 
  const closeNav = () => setIsNavOpen(false); 

  return (
    <header className="sticky top-0 z-50 text-white py-2 bg-gradient-to-br from-neutral-950 to-neutral-900 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        
        <div className="flex items-center">
          <img src={Icon} alt="Company Logo" className="h-10 w-9 mr-2" />
          <Link to="/" className="text-2xl font-bold text-white duration-300">
            Enershas
          </Link>
        </div>

        
        <nav className="hidden md:flex space-x-6">
          <Link to="/about" className="text-zinc-50 hover:text-green-500 font-semi-bold transition duration-300">About</Link>
          <Link to="/services" className="text-zinc-50 hover:text-green-500 font-semi-bold transition duration-300">Services</Link>
          <Link to="/pricing" className="text-zinc-50 hover:text-green-500 font-semi-bold transition duration-300">Pricing</Link>
          <Link to="/contact" className="text-zinc-50 hover:text-green-500 font-semi-bold transition duration-300">Contact</Link> 
          
          
          <a href="https://enershas.site" target="_blank" rel="noopener noreferrer"
            className="bg-sky-600 hover:bg-green-500 text-white px-4 py-1.5 rounded-xl transition duration-300 font-semibold">
            Login
          </a>
        </nav>

        
        <button onClick={toggleNav} className="md:hidden text-gray-700 font-bold focus:outline-none">
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>
      </div>

      
      {isNavOpen && (
        <nav className="md:hidden bg-neutral-900 shadow-md mt-2 w-[90%] mx-auto">
          <ul className="flex flex-col items-center space-y-3 py-4">
            <li><Link to="/about" onClick={closeNav} className="text-zinc-50 hover:text-green-500 transition duration-300">About</Link></li>
            <li><Link to="/services" onClick={closeNav} className="text-zinc-50 hover:text-green-500 transition duration-300">Services</Link></li>
            <li><Link to="/pricing" onClick={closeNav} className="text-zinc-50 hover:text-green-500 transition duration-300">Pricing</Link></li>
            <li><Link to="/contact" onClick={closeNav} className="text-zinc-50 hover:text-green-500 transition duration-300">Contact</Link></li>
            
            
            <li>
              <a href="https://accounts-et.netlify.app/" target="_blank" rel="noopener noreferrer"
                className="bg-sky-600 hover:bg-green-500 text-white px-4 py-1.5 rounded-lg transition duration-300 font-semibold">
                Login
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
