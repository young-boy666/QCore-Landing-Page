
import React, { useState } from 'react';
import NetworkBackground from './NetworkBackground';

const FeatureBlock = ({ label }: { label: string }) => (
  <div className="group">
    <div className="
      h-16 md:h-20 w-full bg-gray-900 rounded-2xl border border-gray-800 
      flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
      hover:scale-[1.04] hover:border-brand-purple hover:shadow-2xl hover:shadow-brand-purple/20 cursor-default
      relative overflow-hidden
    ">
      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0">
        <svg className="w-5 h-5 text-brand-purple/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.143-7.714L1 12l6.857-2.143L11 3z" />
        </svg>
      </div>

      {/* Glint effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>

      <span className="text-lg md:text-xl font-black text-brand-blue tracking-tight transition-all duration-500">
        {label}
      </span>
    </div>
  </div>
);

const FeatureShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'finance' | 'performance'>('finance');
  const [imageLoaded, setImageLoaded] = useState(false);

  const content = {
    finance: {
      title: "Working Capital Insights",
      description: "Monitor your financial health in real-time. Identify cash flow trends instantly and optimise collections.",
      image: "/Dashboard_finance.png"
    },
    performance: {
      title: "Utilisation & Performance",
      description: "Track team performance against targets. Optimise resource allocation with deep historical context.",
      image: "/Dashboard_Utilisation.png"
    }
  };

  const current = content[activeTab];

  const handleTabChange = (tab: 'finance' | 'performance') => {
    setImageLoaded(false);
    setActiveTab(tab);
  };

  return (
    <section id="features" className="py-24 bg-white relative">
      <NetworkBackground />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="w-full">
            <h2 className="text-4xl font-bold mb-4">Deep Analytics, Zero Friction.</h2>
            <p className="text-gray-600 text-lg whitespace-nowrap overflow-hidden text-ellipsis block w-full">
              Our automated pipeline transforms QCore data into interactive reports.
            </p>
          </div>
          <div className="flex bg-gray-100 p-1.5 rounded-2xl flex-shrink-0">
            <button
              onClick={() => handleTabChange('finance')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'finance' ? 'bg-white shadow-lg text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Working Capital
            </button>
            <button
              onClick={() => handleTabChange('performance')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'performance' ? 'bg-white shadow-lg text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Utilisation
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 h-full flex flex-col">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-4">{current.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{current.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-auto">
              <FeatureBlock label="KPIs" />
              <FeatureBlock label="Aesthetic Plots" />
              <FeatureBlock label="Informative Tables" />
            </div>
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-32">
            <div className="relative rounded-[3rem] border border-gray-200 shadow-2xl overflow-hidden bg-gray-50 aspect-video flex items-center justify-center group">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 animate-pulse">
                  <div className="text-gray-300 font-black tracking-widest uppercase">Initialising View...</div>
                </div>
              )}

              <img
                key={current.image}
                src={current.image}
                alt={current.title}
                className={`w-full h-full object-contain transition-all duration-1000 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                onLoad={() => setImageLoaded(true)}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.25em]">
              <div className="flex items-center gap-2">
                LIVE DATA
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
              <div>Custom Visuals</div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
              <div>Secure Access</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default FeatureShowcase;
