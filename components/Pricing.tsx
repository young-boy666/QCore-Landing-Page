
import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const plans = [
    {
      name: "Fundamental",
      price: "£19,000",
      description: "Ideal for small practices looking for basic financial clarity.",
      features: [
        "Full Warehouse Deployment",
        "High Quality, Live Reporting",
        "Secure and Safe Data Management",
        "Custom Theme"
      ],
      button: "Get Started"
    },
    {
      name: "Supported",
      price: "£29,000",
      description: "Our most popular plan which includes ongoing support from our team.",
      features: [
        "Full Warehouse Deployment",
        "High Quality, Live Reporting",
        "Secure and Safe Data Management",
        "Custom Theme",
        "On Call Data Engineers After Deployment"
      ],
      button: "Get Started"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Deep integration for large organisations with complex needs.",
      features: [
        "Full Warehouse Deployment",
        "High Quality, Live Reporting",
        "Secure and Safe Data Management",
        "Custom Theme",
        "On Call Data Engineers After Deployment",
        "Custom Requests Based on Your Needs"
      ],
      button: "Get Started"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Fair and Transparent Pricing</h2>
          <p className="text-gray-400">Choose the service that fits your needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div 
                key={idx} 
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  relative p-8 rounded-[2rem] border transition-all duration-500 transform cursor-pointer
                  flex flex-col h-full
                  ${isHovered 
                    ? 'bg-white text-gray-900 border-white scale-105 shadow-[0_20px_60px_-15px_rgba(188,45,183,0.3)] z-10' 
                    : 'bg-gray-800/50 border-gray-700 z-0'
                  }
                `}
              >
                <div className="mb-8">
                  <h3 className={`text-xl font-bold mb-2 ${isHovered ? 'text-gray-900' : 'text-white'}`}>{plan.name}</h3>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-4xl font-black">{plan.price}</span>
                  </div>
                  <p className={`mt-4 text-sm leading-relaxed ${isHovered ? 'text-gray-600' : 'text-gray-400'}`}>{plan.description}</p>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-3 text-sm">
                      <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isHovered ? 'text-brand-purple' : 'text-brand-blue'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={isHovered ? 'text-gray-700' : 'text-gray-300'}>{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="https://www.nexustech.je/contact/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    block w-full py-4 rounded-xl font-bold text-center transition-all duration-300 transform mt-auto
                    hover:bg-brand-blue hover:text-white hover:animate-button-pulse
                    ${isHovered ? 'bg-gray-900 text-white' : 'bg-white/10 text-white'}
                  `}
                >
                  {plan.button}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes button-pulse {
          0% { transform: scale(1.03); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1.03); }
        }
        .hover\\:animate-button-pulse:hover {
          animation: button-pulse 1.8s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Pricing;
