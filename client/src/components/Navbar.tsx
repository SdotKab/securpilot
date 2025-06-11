import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Logo from '../assets/logo.svg'; // ✅ Adjust this path as needed

export default function Navbar() {
  const { session, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoRoute = session ? '/dashboard' : '/welcome';

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and title - Conditional Route */}
        <Link to={logoRoute} className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-gray-800">SecureAgents</span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          {session ? (
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2">
                  {session.user.user_metadata.company?.charAt(0) ?? 'C'}
                </div>
                {session.user.user_metadata.company ?? 'Company'}
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </Menu.Button>

              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/account-settings"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : ''}`}
                      >
                        Account Settings
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/company-profile"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : ''}`}
                      >
                        Company Profile
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={signOut}
                        className={`w-full text-left px-4 py-2 text-sm ${active ? 'bg-gray-100' : ''}`}
                      >
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <>
              <Link to="/signin" className="text-sm text-gray-700 hover:text-blue-600">Sign In</Link>
              <Link to="/signup" className="text-sm text-gray-700 hover:text-blue-600">Sign Up</Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {session ? (
            <>
              <Link to="/account-settings" className="block text-sm text-gray-700">Account Settings</Link>
              <Link to="/company-profile" className="block text-sm text-gray-700">Company Profile</Link>
              <button onClick={signOut} className="block text-sm text-gray-700">Logout</button>
            </>
          ) : (
            <>
              <Link to="/signin" className="block text-sm text-gray-700">Sign In</Link>
              <Link to="/signup" className="block text-sm text-gray-700">Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
