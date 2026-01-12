
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-indigo-600 rounded-lg"></div>
              <span className="text-xl font-bold tracking-tight text-gray-900 uppercase">Nexus Technology</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-6">
              Nexus Technology is a modern data and analytics professional services company. Our client-centric model empowers businesses to succeed through strategic data solutions.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'github'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-pink-600 hover:bg-pink-50 transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current opacity-20 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-pink-600 transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="https://www.nexustech.je/" target="_blank" className="hover:text-pink-600 transition-colors">Main Website</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Consulting Services</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
          <p>© {new Date().getFullYear()} Nexus Technology. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
            <a href="#" className="hover:text-gray-600">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
