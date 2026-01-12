
import React from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white hex-pattern">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <div className="inline-flex items-center bg-brand-purple/5 border border-brand-purple/10 p-2 rounded-2xl mb-6">
            <Logo iconOnly className="opacity-100" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
            From Data Overload to <br />
            <span className="gradient-text">Decisive Clarity.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
            Transform your complex QCore datasets into an automated, interactive intelligence hub. Make better decisions, faster.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#pricing" className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all transform hover:-translate-y-1 shadow-xl text-center">
              Get Started
            </a>
            <a href="#features" className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all transform hover:-translate-y-1 text-center">
              View Sample Dashboards
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-brand-purple/20 to-brand-blue/20 rounded-[3rem] blur-3xl"></div>
          <div className="relative bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden p-4 min-h-[400px] flex items-center justify-center">
            <img 
              src="Dashboard_Finance.png" 
              alt="QCore Finance Dashboard" 
              className="rounded-2xl w-full h-auto grayscale-[0.1] hover:grayscale-0 transition-all duration-700 shadow-inner"
            />
            
            <div className="absolute top-8 right-8 bg-glass px-4 py-2 rounded-lg border border-white/50 shadow-xl">
              <div className="flex items-center space-x-2 text-brand-purple font-bold">
                <span className="animate-pulse">●</span>
                <span className="text-xs uppercase tracking-tighter">Live Data Feed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
