
import React from 'react';

const Scalability: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
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
            <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#4CB4E3 0.5px, transparent 0.5px)', backgroundSize: '24px 24px'}}></div>
            
            {/* Flow Indicator Arrow: Positioned halfway between origin and growth nodes */}
            <div className="absolute left-[38%] md:left-[42%] top-1/2 -translate-y-1/2 z-30 pointer-events-none animate-pulse-slow">
              <div className="bg-brand-blue/10 p-3 md:p-4 rounded-full border border-brand-blue/30 backdrop-blur-sm shadow-[0_0_30px_rgba(76,180,227,0.3)]">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
            
            {/* Flow Container */}
            <div className="relative w-full h-full flex items-center justify-between z-10 px-4 md:px-12">
              
              {/* Origin Node (Left) - Original Company (Pink/Purple Box) */}
              <div className="flex flex-col items-center relative z-20">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-brand-purple rounded-2xl flex items-center justify-center shadow-[0_0_60px_rgba(188,45,183,0.3)] border border-white/20 relative">
                  <svg className="w-8 h-8 md:w-12 md:h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div className="mt-4 w-max text-center">
                   <span className="text-[11px] font-mono text-brand-purple tracking-widest font-bold">Original Company</span>
                </div>
              </div>

              {/* Growth Nodes (Right) - Companies 1-4 */}
              <div className="flex flex-col gap-4 md:gap-8 relative z-20">
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
        @keyframes pulse-slow {
          0%, 100% { transform: translateY(-50%) scale(1); opacity: 0.8; }
          50% { transform: translateY(-50%) scale(1.05); opacity: 1; }
        }
        .animate-flow-shimmer {
          animation: flow-shimmer 2s infinite linear;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Scalability;
