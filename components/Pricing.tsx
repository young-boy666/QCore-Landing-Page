
import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const plans = [
    {
      name: "Fundamental",
      price: "£19,000",
      description: "Ideal for small practices looking for basic financial clarity.",
      features: ["Single Data Source", "Standard Theme", "Monthly Sync", "Email Support", "Working Capital Hub"],
      button: "Get Started"
    },
    {
      name: "Supported",
      price: "£29,000",
      description: "Our most popular plan which includes ongoing support from our team.",
      features: ["Unlimited Data Sources", "Custom Branding", "Daily Automated Sync", "Priority Support", "All Analytics Modules", "Historical Tracking"],
      button: "Get Started"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Deep integration for large organizations with complex needs.",
      features: ["Dedicated Data Engineer", "Custom Module Build", "Real-time Syncing", "On-site Training", "SLA Guarantee", "Full White-labeling"],
      button: "Contact Sales"
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

                <div className="space-y-4 mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-3 text-sm">
                      <svg className={`w-5 h-5 flex-shrink-0 ${isHovered ? 'text-brand-purple' : 'text-brand-blue'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={isHovered ? 'text-gray-700' : 'text-gray-300'}>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 rounded-xl font-bold transition-all ${isHovered ? 'bg-gray-900 text-white hover:bg-black' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                  {plan.button}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
