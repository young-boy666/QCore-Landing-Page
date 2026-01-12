
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white hex-pattern">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <div className="inline-flex items-center space-x-2 bg-pink-50 border border-pink-100 px-3 py-1 rounded-full mb-6">
            <span className="flex h-2 w-2 rounded-full bg-pink-600"></span>
            <span className="text-pink-700 text-xs font-bold uppercase tracking-widest">Nexus for QCore</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
            From Data Overload to <br />
            <span className="gradient-text">Decisive Clarity.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
            Transform your complex QCore datasets into an automated, interactive intelligence hub. Make better decisions, faster.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all transform hover:-translate-y-1 shadow-xl">
              Start Free Audit
            </button>
            <button className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all transform hover:-translate-y-1">
              View Sample Dashboards
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-pink-500/10 to-indigo-500/10 rounded-[3rem] blur-3xl"></div>
          <div className="relative bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden p-4">
            <img 
              src="https://picsum.photos/seed/dashboard1/1200/800" 
              alt="Dashboard Preview" 
              className="rounded-2xl w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute top-8 right-8 bg-glass px-4 py-2 rounded-lg border border-white/50 shadow-xl">
              <div className="flex items-center space-x-2 text-pink-600 font-bold">
                <span className="animate-pulse">●</span>
                <span>Live Data Feed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Wavy Lines */}
      <div className="absolute bottom-0 left-0 w-full opacity-30 pointer-events-none">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#db2777" fillOpacity="0.2" d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,197.3C672,213,768,203,864,181.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
