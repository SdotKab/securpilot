import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/16/solid";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-gray-100 relative">
        {/* Sidebar */}
        <div
          className={`fixed md:relative z-20 bg-white w-64 h-full p-4 shadow-md transition-transform duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <div className="flex justify-between items-center mb-6">
            <Link to="/dashboard" className="text-lg font-bold text-blue-600">
              Menu
            </Link>
            {/* Hide close button on md and up */}
            <button
              className="md:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <ChevronDoubleLeftIcon className="h-5 w-5" />
            </button>
          </div>
          <nav className="space-y-4">
            <Link to="/survey" className="block text-gray-800">
              Asset Survey
            </Link>
            <Link to="/questionnaire" className="block text-gray-800">
              Questionnaire
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-0 md:ml-auto md:p-10 transition-all duration-300">
          {/* Mobile top bar */}
          <div className="md:hidden flex justify-between items-center p-4 bg-white shadow-md">
            <button onClick={() => setSidebarOpen(true)}>
              <ChevronDoubleRightIcon className="h-6 w-6 text-gray-800" />
            </button>
            <h1 className="text-lg font-bold text-gray-800">Dashboard</h1>
          </div>

          {/* Page content */}
          <div className="p-4">{children}</div>
        </div>
      </div>
    </>
  );
}
