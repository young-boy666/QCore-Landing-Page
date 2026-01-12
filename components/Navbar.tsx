
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-glass border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-indigo-600 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span className="text-xl font-bold tracking-tight text-gray-900">
          NEXUS <span className="font-light text-gray-500">TECHNOLOGY</span>
        </span>
      </div>
      
      <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
        <a href="#pipeline" className="hover:text-pink-600 transition-colors">Pipeline</a>
        <a href="#features" className="hover:text-pink-600 transition-colors">Insights</a>
        <a href="#process" className="hover:text-pink-600 transition-colors">Deployment</a>
        <a href="#pricing" className="hover:text-pink-600 transition-colors">Pricing</a>
      </div>

      <button className="bg-pink-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-pink-700 transition-all shadow-lg shadow-pink-200">
        Book Session
      </button>
    </nav>
  );
};

export default Navbar;
