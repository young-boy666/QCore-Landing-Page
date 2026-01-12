
import React, { useState } from 'react';

const FeatureShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'finance' | 'performance'>('finance');
  const [imageLoaded, setImageLoaded] = useState(false);

  const features = {
    finance: {
      title: "Working Capital Insights",
      description: "Monitor your financial health in real-time. Identify cash flow trends instantly and optimize collections with deep drill-downs into WIP and aging.",
      metrics: [
        { label: "Net Bill YTD", value: "£323.0k", change: "+1.44%" },
        { label: "WIP Value YTD", value: "£254.0k", change: "-14.52%" },
        { label: "Avg Days to Pay", value: "488.7", change: "-118.2" },
      ],
      image: "./Dashboard_Finance.png"
    },
    performance: {
      title: "Utilisation & Performance",
      description: "Track team performance against targets. Optimize resource allocation with deep historical context and productivity tracking across departments.",
      metrics: [
        { label: "Avg Hours/Week", value: "21.1", change: "-8.1%" },
        { label: "Overtime %", value: "100.0%", change: "+0.0%" },
        { label: "Productivity %", value: "69.3%", change: "-4.5%" },
      ],
      image: "./Dashboard_Utilisation.png"
    }
  };

  const current = features[activeTab];

  const handleTabChange = (tab: 'finance' | 'performance') => {
    setImageLoaded(false);
    setActiveTab(tab);
  };

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4">Deep Analytics, Zero Friction.</h2>
            <p className="text-gray-600 text-lg">
              Our automated pipeline distills QCore data into these interactive reporting suites. Select a view to explore the output.
            </p>
          </div>
          <div className="flex bg-gray-100 p-1.5 rounded-2xl">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="text-3xl font-bold mb-6">{current.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">{current.description}</p>
            </div>
            
            <div className="space-y-4">
              {current.metrics.map((m, idx) => (
                <div key={idx} className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-purple/30 transition-colors group">
                  <div>
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{m.label}</div>
                    <div className="text-3xl font-black text-gray-900">{m.value}</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${m.change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {m.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
             <div className="relative rounded-3xl border border-gray-200 shadow-2xl overflow-hidden bg-gray-50 aspect-video flex items-center justify-center group">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
                    <div className="text-gray-300 font-bold tracking-widest uppercase">Initializing View...</div>
                  </div>
                )}
                
                <img 
                  key={current.image}
                  src={current.image} 
                  alt={current.title} 
                  className={`w-full h-full object-contain transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="flex flex-col items-center justify-center p-12 text-center bg-gray-900 w-full h-full text-white">
                          <h4 class="text-xl font-bold mb-2">Image Load Error</h4>
                          <p class="text-gray-400 text-sm max-w-xs mb-4">Code attempted to load: <strong>${current.image}</strong></p>
                          <div class="text-[10px] font-mono bg-white/10 px-3 py-2 rounded text-brand-blue uppercase tracking-tighter">
                            Check filename case & root location
                          </div>
                        </div>
                      `;
                    }
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
