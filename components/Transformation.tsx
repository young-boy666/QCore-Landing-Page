
import React from 'react';
import Logo from './Logo';

const Transformation: React.FC = () => {
  return (
    <section id="pipeline" className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Your Data, Transformed.</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          The Nexus QCore pipeline takes fragmented sources and distills them through our high-performance warehouse engine.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-6 w-full md:w-1/4">
          {['Finance', 'Operations', 'Sales', 'CRM'].map((source) => (
            <div
              key={source}
              className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 flex items-center space-x-3 transform hover:scale-105 transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-purple/20 flex items-center justify-center text-brand-purple">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <span className="font-semibold">{source} Data</span>
            </div>
          ))}
        </div>

        <div className="my-12 md:my-0 relative">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-brand-purple/20 rounded-full blur-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

          <div className="relative w-44 h-44 md:w-64 md:h-64 bg-white rounded-[2.5rem] rotate-45 flex items-center justify-center shadow-[0_0_60px_rgba(188,45,183,0.4)] transition-transform hover:scale-105 duration-500 overflow-hidden border border-gray-100">
            <div className="rotate-[-45deg] flex flex-col items-center justify-center w-full h-full p-6">
              <Logo className="scale-110 md:scale-125" />
              <div className="mt-4 text-center">
                <span className="block text-[10px] font-black opacity-40 uppercase tracking-[0.3em] text-gray-900">Nexus</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block absolute -left-32 top-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent to-brand-purple"></div>
          <div className="hidden md:block absolute -right-32 top-1/2 w-32 h-[2px] bg-gradient-to-l from-transparent to-brand-blue"></div>
        </div>

        <div className="space-y-6 w-full md:w-1/4 flex flex-col justify-center">
          <div className="bg-white text-gray-900 p-6 rounded-2xl border-l-8 border-brand-blue shadow-2xl transform hover:scale-105 transition-all">
            <div className="text-2xl font-black mb-1 leading-tight">Intelligent</div>
            <div className="text-xs font-bold text-gray-400 uppercase">Data History Storage</div>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-2xl border-l-8 border-brand-blue shadow-2xl transform hover:scale-105 transition-all">
            <div className="text-2xl font-black mb-1 leading-tight">Live Reporting</div>
            <div className="text-xs font-bold text-gray-500 uppercase">DAILY DATA REFRESHES</div>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-2xl border-l-8 border-brand-blue shadow-2xl transform hover:scale-105 transition-all">
            <div className="text-2xl font-black mb-1 leading-tight">Secure</div>
            <div className="text-xs font-bold text-gray-500 uppercase">DATA HANDLING AND STORAGE</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
