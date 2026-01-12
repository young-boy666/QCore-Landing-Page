
import React from 'react';

const Guarantees: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-indigo-900 to-gray-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                Your Success is <br />
                <span className="text-pink-500">Our Reputation.</span>
              </h2>
              <p className="text-gray-300 text-lg mb-12">
                As consultants, we don't just sell software; we deliver results. We stand behind our work with iron-clad guarantees.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Data Security First", text: "Enterprise-grade encryption and secure private warehousing for all QCore data." },
                  { title: "Accuracy Guarantee", text: "We verify and audit every data pipeline to ensure 99.9% reporting accuracy." },
                  { title: "24-Hour Deployment", text: "Initial environment setup within one business day of connection." }
                ].map((g, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 flex items-center justify-center text-white">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{g.title}</h4>
                      <p className="text-gray-400 text-sm">{g.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 text-center">
              <div className="w-24 h-24 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-pink-600/30">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622l-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Risk-Free Strategy Session</h3>
              <p className="text-gray-300 mb-8">
                Not sure if we're a fit? Book a free session. We'll audit your current reporting and show you exactly where you're losing time.
              </p>
              <button className="w-full bg-pink-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-pink-700 transition-all shadow-xl shadow-pink-900/40">
                Book My Strategy Session
              </button>
              <p className="mt-4 text-xs text-gray-500 uppercase tracking-widest font-bold">No Credit Card Required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantees;
