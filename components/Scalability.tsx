
import React from 'react';
import NetworkBackground from './NetworkBackground';

const Scalability: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <NetworkBackground />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8">A Foundation Built for Growth.</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold border border-brand-blue/20">1</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Scalable Architecture</h4>
                <p className="text-gray-600">Our warehousing techniques are designed to scale with you. Effortlessly add new companies, departments, or data sources.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple font-bold border border-brand-purple/20">2</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Full History Tracking</h4>
                <p className="text-gray-600">Intelligently track changes to your key data over time. Understand the complete journey, not just the latest snapshot.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-bold border border-green-100">3</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Single Source of Truth</h4>
                <p className="text-gray-600">Consolidate disparate systems into one secure, high-performance location for reliable reporting.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          {/* Scientific Expansion Visual: Flow from Left to Right */}
          <div className="bg-gray-950 rounded-[3rem] p-8 md:p-12 shadow-3xl overflow-hidden relative border border-gray-800 aspect-video md:aspect-square flex items-center justify-center">
            {/* Background Grid/Science Pattern */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4CB4E3 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

            {/* Flow Indicator: Four Flowing Lines */}
            <svg className="absolute inset-0 w-full h-full z-15 pointer-events-none" viewBox="0 0 400 400" preserveAspectRatio="none">
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#BC2DB7" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#4CB4E3" stopOpacity="1" />
                  <stop offset="100%" stopColor="#4CB4E3" stopOpacity="0.2" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Four Flow Lines */}
              {[100, 160, 240, 300].map((yEnd, i) => (
                <path
                  key={i}
                  d={`M 110 218 C 180 218, 220 ${yEnd}, 290 ${yEnd}`}
                  stroke="url(#flowGradient)"
                  strokeWidth="1.5"
                  fill="none"
                  filter="url(#glow)"
                  className="animate-flow-line"
                  style={{
                    strokeDasharray: '10, 20',
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </svg>

            {/* Flow Container */}
            <div className="relative w-full h-full flex items-center justify-between z-10 px-4 md:px-12">

              {/* Origin Node (Left) - Original Company (Pink/Purple Box) */}
              <div className="flex flex-col items-center relative z-20 translate-x-1 md:translate-x-2">
                <div className="mb-4 w-max text-center">
                  <span className="text-[11px] font-mono text-brand-purple tracking-widest font-bold">Original Company</span>
                </div>
                <div className="w-16 h-16 md:w-24 md:h-24 bg-brand-purple rounded-2xl flex items-center justify-center shadow-[0_0_60px_rgba(188,45,183,0.3)] border border-white/20 relative">
                  <svg className="w-8 h-8 md:w-12 md:h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
              </div>

              {/* Growth Nodes (Right) - Companies 1-4 */}
              <div className="flex flex-col gap-4 md:gap-8 relative z-20 -translate-x-1 md:-translate-x-2">
                {[
                  { label: "Company 1", id: "01" },
                  { label: "Company 2", id: "02" },
                  { label: "Company 3", id: "03" },
                  { label: "Company 4", id: "04" }
                ].map((node, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700 p-2 md:p-3 rounded-xl transform transition-all duration-500 hover:scale-110 hover:border-brand-blue/50 group/node cursor-default"
                    style={{ animation: `slideIn 0.8s ease-out forwards ${i * 0.15}s`, opacity: 0 }}
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue transition-all group-hover/node:bg-brand-blue group-hover/node:text-white">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-gray-500 uppercase tracking-tighter group-hover/node:text-brand-blue font-bold">{node.label}</div>
                      <div className="h-1 w-12 bg-gray-800 rounded-full mt-1 overflow-hidden">
                        <div className="h-full bg-brand-blue w-full animate-flow-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes flow-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes flow-line {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-flow-shimmer {
          animation: flow-shimmer 2s infinite linear;
        }
        .animate-flow-line {
          animation: flow-line 5s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default Scalability;
