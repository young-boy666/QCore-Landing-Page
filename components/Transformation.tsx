
import React from 'react';

const Transformation: React.FC = () => {
  return (
    <section id="pipeline" className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Your Data, Transformed.</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          The Nexus QCore Pipeline takes fragmented sources and distills them through our high-performance warehouse engine.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Sources */}
        <div className="space-y-6 w-full md:w-1/4">
          {['Finance', 'Operations', 'Sales', 'CRM'].map((source) => (
            <div key={source} className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <span className="font-semibold">{source} Data</span>
            </div>
          ))}
        </div>

        {/* Center: The Core Crystal */}
        <div className="my-12 md:my-0 relative">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-pink-500/30 rounded-full blur-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="relative w-40 h-40 md:w-56 md:h-56 bg-gradient-to-br from-pink-400 to-indigo-600 rounded-3xl rotate-45 flex items-center justify-center shadow-[0_0_50px_rgba(236,72,153,0.5)]">
            <div className="rotate-[-45deg] text-center">
              <span className="block text-2xl font-black tracking-tighter uppercase">Nexus</span>
              <span className="block text-sm font-light opacity-80 uppercase tracking-widest">Pipeline</span>
            </div>
          </div>
          
          {/* Connecting Lines (Simulated with SVG) */}
          <div className="hidden md:block absolute -left-32 top-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent to-pink-500"></div>
          <div className="hidden md:block absolute -right-32 top-1/2 w-32 h-[2px] bg-gradient-to-l from-transparent to-indigo-500"></div>
        </div>

        {/* Right Side: Outputs */}
        <div className="space-y-6 w-full md:w-1/4">
          <div className="bg-white text-gray-900 p-6 rounded-2xl border-l-8 border-pink-500 shadow-2xl transform hover:scale-105 transition-all">
             <div className="text-3xl font-black mb-1">99%</div>
             <div className="text-xs font-bold text-gray-500 uppercase">Data Accuracy</div>
             <div className="mt-2 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
               <div className="h-full bg-pink-500 w-[99%]"></div>
             </div>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-2xl border-l-8 border-indigo-500 shadow-2xl transform hover:scale-105 transition-all">
             <div className="text-3xl font-black mb-1">Instant</div>
             <div className="text-xs font-bold text-gray-500 uppercase">Reporting Lag</div>
             <div className="flex mt-2 space-x-1">
               {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-4 w-1 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: `${i*0.1}s`}}></div>)}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
