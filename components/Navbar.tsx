
import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-glass border-b border-gray-200 px-6 py-2 flex justify-between items-center">
      <a href="#" className="hover:opacity-80 transition-opacity">
        <Logo small />
      </a>

      <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
        <a href="#pipeline" className="hover:text-brand-purple transition-colors">Pipeline</a>
        <a href="#features" className="hover:text-brand-purple transition-colors">Insights</a>
        <a href="#process" className="hover:text-brand-purple transition-colors">Deployment</a>
        <a href="#pricing" className="hover:text-brand-purple transition-colors">Pricing</a>
      </div>

      <a
        href="https://www.nexustech.je/contact/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand-purple text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all shadow-lg shadow-brand-purple/20"
      >
        Book Session
      </a>
    </nav>
  );
};

export default Navbar;
