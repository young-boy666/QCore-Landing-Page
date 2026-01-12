
import React, { useState } from 'react';

const FeatureShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'finance' | 'performance'>('finance');

  const features = {
    finance: {
      title: "Working Capital Insights",
      description: "Monitor your financial health in real-time. Identify cash flow trends instantly and optimize collections.",
      metrics: [
        { label: "Net Bill YTD", value: "£323.0k", change: "+1.44%" },
        { label: "WIP Value YTD", value: "£254.0k", change: "-14.52%" },
        { label: "Avg Days to Pay", value: "488.7", change: "-118.2" },
      ],
      image: "https://picsum.photos/seed/finance/1200/800"
    },
    performance: {
      title: "Utilisation & Performance",
      description: "Track team performance against targets. Optimize resource allocation with deep historical context.",
      metrics: [
        { label: "Avg Hours/Week", value: "21.1", change: "-8.1%" },
        { label: "Overtime %", value: "100.0%", change: "+0.0%" },
        { label: "Productivity %", value: "69.3%", change: "-4.5%" },
      ],
      image: "https://picsum.photos/seed/performance/1200/800"
    }
  };

  const current = features[activeTab];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4">Deep Analytics, Zero Friction.</h2>
            <p className="text-gray-600 text-lg">
              We don't just show you data; we show you the story behind the numbers. Choose a module to explore our insights.
            </p>
          </div>
          <div className="flex bg-gray-100 p-1.5 rounded-2xl">
            <button 
              onClick={() => setActiveTab('finance')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'finance' ? 'bg-white shadow-lg text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Working Capital
            </button>
            <button 
              onClick={() => setActiveTab('performance')}
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
                <div key={idx} className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-pink-200 transition-colors group">
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
             <div className="relative rounded-3xl border border-gray-200 shadow-2xl overflow-hidden bg-gray-900">
                <img src={current.image} alt={current.title} className="w-full h-auto opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <span className="text-white/80 text-xs font-mono">ENCRYPTED DATA VISUALIZATION</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
