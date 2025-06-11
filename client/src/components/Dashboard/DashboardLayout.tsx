import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Navbar from "../Navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
    <Navbar />
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className={`fixed md:relative z-20 bg-white w-64 p-4 shadow-md transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
          <div className="flex justify-between items-center mb-6">
            <Link to="/dashboard" className="text-l font-bold text-blue-600">Menu</Link>
            <button className="" onClick={() => setSidebarOpen(false)}><ChevronRightIcon /></button>
          </div>
          <nav className="space-y-4">
            <Link to="/survey" className="block text-gray-800">Asset Survey</Link>
            <Link to="/questionnaire" className="block text-gray-800">Questionnaire</Link>
            <Link to="/account-settings" className="block text-gray-800">Account Settings</Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-0 md:ml-64">
          <div className="p-4">
            {/* Mobile top bar */}
            <div className=" flex justify-between items-center mb-4">
              <button onClick={() => setSidebarOpen(true)}><ChevronLeftIcon /></button>
              <h1 className="text-lg font-bold">Dashboard</h1>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
