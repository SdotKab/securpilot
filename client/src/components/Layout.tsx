import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";


export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinkClasses =
    "block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";

  const links = [
    { to: "/", label: "Home" },
    { to: "/questionnaire", label: "Questionnaire" },
    { to: "/report", label: "Report" },
  ];

  // At top of Layout.tsx
  const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
      document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);


  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
      <header className="bg-blue-700 dark:bg-gray-800 text-white sticky top-0 shadow z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/logo.svg" className="h-8 w-8" alt="Logo" />
              <span className="font-bold text-lg">SecurPilot</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-4">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `${navLinkClasses} ${
                      isActive ? "bg-blue-900" : "hover:bg-blue-800"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 text-sm bg-white text-blue-700 rounded px-2 py-1 hover:bg-gray-100 dark:bg-gray-900 dark:text-white"
              >
                {darkMode ? "☀️ Light" : "🌙 Dark"}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <XMarkIcon className="h-6 w-6 text-white" />
                ) : (
                  <Bars3Icon className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-blue-700 px-4 pb-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `${navLinkClasses} ${
                    isActive ? "bg-blue-900" : "hover:bg-blue-800"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
