import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Logo from '../assets/logo.svg'; // Adjust path if needed


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and title */}
          <Link to="/welcome" className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-gray-800">SecureAgents</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/signin" className="text-gray-600 hover:text-indigo-600">Sign in</Link>
            <Link to="/signup" className="text-gray-600 hover:text-indigo-600">Sign up</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link to="/login" className="block py-2 text-gray-600 hover:text-indigo-600">Login</Link>
          <Link to="/register" className="block py-2 text-gray-600 hover:text-indigo-600">Join</Link>
        </div>
      )}
    </nav>
  );
}
