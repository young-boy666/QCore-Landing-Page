
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // Matches the scroll-padding-top in index.html
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update the URL hash without triggering a jump
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-6 scale-110 origin-left" />
            <p className="text-gray-500 max-w-sm mb-6">
              Nexus Technology is a modern data and analytics professional services company. Our client-centric model empowers businesses to succeed through strategic data solutions.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'github'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current opacity-20 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <a 
                  href="#process" 
                  onClick={(e) => handleScroll(e, 'process')}
                  className="hover:text-purple-600 transition-colors"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  onClick={(e) => handleScroll(e, 'pricing')}
                  className="hover:text-purple-600 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, 'contact')}
                  className="hover:text-purple-600 transition-colors"
                >
                  Security
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => handleScroll(e, 'features')}
                  className="hover:text-purple-600 transition-colors"
                >
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Nexus</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="https://www.nexustech.je/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">Website</a></li>
              <li><a href="https://www.nexustech.je/who-we-are/the-team/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">Our Team</a></li>
              <li><a href="https://www.nexustech.je/what-we-do/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">Consulting Services</a></li>
              <li><a href="https://www.nexustech.je/contact/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
          <p>© {new Date().getFullYear()} Nexus Technology. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
