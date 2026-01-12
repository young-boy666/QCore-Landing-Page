
import React from 'react';

const Scalability: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8">A Foundation Built for Growth.</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold border border-indigo-100">1</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Scalable Architecture</h4>
                <p className="text-gray-600">Our warehousing engine is designed to scale with you. Effortlessly add new companies, departments, or data sources.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 font-bold border border-pink-100">2</div>
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

        <div className="relative">
          <div className="bg-gray-900 rounded-[3rem] p-10 shadow-3xl overflow-hidden relative border border-gray-800">
            {/* Visualizing Scaling (Slide 8 style) */}
            <div className="flex items-center justify-between mb-12">
               <div className="w-24 h-12 bg-indigo-500/20 rounded-lg border border-indigo-500/30 flex items-center justify-center text-xs text-indigo-300">Entity A</div>
               <div className="w-16 h-1 w-full bg-gradient-to-r from-indigo-500/50 to-pink-500 mx-4"></div>
               <div className="w-20 h-20 bg-pink-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.3)]">
                  <div className="w-6 h-6 bg-white rotate-45"></div>
               </div>
            </div>

            <div className="flex items-center space-x-4 mb-8">
               <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-700 flex items-center justify-center text-xs font-bold">
                       {String.fromCharCode(64 + i)}
                    </div>
                  ))}
               </div>
               <div className="text-gray-400 text-sm font-medium">Auto-consolidating multi-entity data</div>
            </div>

            <div className="h-40 bg-gray-800/50 rounded-2xl border border-gray-700 p-6">
               <div className="flex justify-between items-end h-full">
                  {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                    <div key={i} className="w-4 bg-gradient-to-t from-pink-500 to-indigo-500 rounded-t-sm" style={{height: `${h}%`}}></div>
                  ))}
               </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[200px]">
             <div className="text-xs font-bold text-gray-400 uppercase mb-2">Growth Metric</div>
             <div className="text-2xl font-black text-gray-900">+450%</div>
             <div className="text-xs text-green-600 font-bold">Inquiry Speed-up</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scalability;
