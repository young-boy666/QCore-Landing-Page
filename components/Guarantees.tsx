
import React from 'react';

const Guarantees: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                Your Success is <br />
                <span className="text-brand-purple">Our Reputation.</span>
              </h2>
              <p className="text-gray-300 text-lg mb-12">
                As consultants, we don't just make promises, we deliver results. We stand behind our work with guarantees.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Data Security First", text: "We always prioritise your data security and safety" },
                  { title: "High Quality", text: "We ensure rigorous data validation and high-standard quality control for all your reporting needs." },
                  { title: "Fast Deployment", text: "Streamlined implementation process designed for rapid setup and minimal disruption." }
                ].map((g, idx) => (
                  <div key={idx} className="flex gap-4 transition-transform duration-300 hover:scale-105 cursor-default group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-purple flex items-center justify-center text-white group-hover:bg-brand-blue transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold group-hover:text-brand-blue transition-colors duration-300">{g.title}</h4>
                      <p className="text-gray-400 text-sm">{g.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 text-center group/card transition-all duration-500 hover:bg-white/15">
              <div className="w-24 h-24 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-brand-purple/30 group-hover/card:scale-110 transition-transform duration-500">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Shield Path */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.944a11.955 11.955 0 01-8.618 3.040L3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622l-.382-3.016a11.955 11.955 0 01-8.618-3.040z" />
                  {/* Tick Path with animation */}
                  <path 
                    className="tick-path"
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2.5} 
                    d="M9 12l2 2 4-4" 
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Free Strategy Session</h3>
              <p className="text-gray-300 mb-8">
                Not sure if we are a fit? Book a free session and we will scope your current reporting and show you exactly where you're losing time.
              </p>
              <button 
                onClick={() => window.location.href = 'https://www.nexustech.je/contact/'}
                className="w-full bg-brand-purple text-white py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-brand-blue shadow-xl shadow-black/40"
              >
                Book My Strategy Session
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .tick-path {
          stroke-dasharray: 20;
          stroke-dashoffset: 20;
          transition: stroke-dashoffset 0.6s cubic-bezier(0.65, 0, 0.45, 1);
        }
        .group\\/card:hover .tick-path {
          stroke-dashoffset: 0;
        }
      `}</style>
    </section>
  );
};

export default Guarantees;
