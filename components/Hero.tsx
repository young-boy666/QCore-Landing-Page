
import React, { useState } from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

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
            {!imgError ? (
              <img 
                src="./Dashboard_Finance.png" 
                alt="Dashboard Preview" 
                className="rounded-2xl w-full h-auto grayscale-[0.1] hover:grayscale-0 transition-all duration-700 shadow-inner"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-8 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 w-full h-full">
                <div className="text-brand-purple/30 mb-4">
                  <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Asset Sync Required</h3>
                <p className="text-xs text-gray-400 mb-4">Code looking for: <code className="bg-gray-200 px-1 rounded">./Dashboard_Finance.png</code></p>
                <div className="text-[10px] font-bold text-brand-purple bg-brand-purple/5 px-3 py-1 rounded-full uppercase tracking-widest">Verify Project Root</div>
              </div>
            )}
            
            {!imgError && (
              <div className="absolute top-8 right-8 bg-glass px-4 py-2 rounded-lg border border-white/50 shadow-xl">
                <div className="flex items-center space-x-2 text-brand-purple font-bold">
                  <span className="animate-pulse">●</span>
                  <span className="text-xs uppercase tracking-tighter">Live Data Feed</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;