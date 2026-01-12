
import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "£1,495",
      period: "per month",
      description: "Ideal for small practices looking for basic financial clarity.",
      features: ["Single Data Source", "Standard Theme", "Monthly Sync", "Email Support", "Working Capital Hub"],
      button: "Get Started",
      featured: false
    },
    {
      name: "Professional",
      price: "£2,995",
      period: "per month",
      description: "Our most popular plan for growing multi-entity teams.",
      features: ["Unlimited Data Sources", "Custom Branding", "Daily Automated Sync", "Priority Support", "All Analytics Modules", "Historical Tracking"],
      button: "Start Free Audit",
      featured: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "annual",
      description: "Deep integration for large organizations with complex needs.",
      features: ["Dedicated Data Engineer", "Custom Module Build", "Real-time Syncing", "On-site Training", "SLA Guarantee", "Full White-labeling"],
      button: "Contact Sales",
      featured: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Transparent Pricing.</h2>
          <p className="text-gray-400">Choose the plan that fits your business scale. No hidden fees.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative p-8 rounded-[2rem] border transition-all duration-500 ${plan.featured ? 'bg-white text-gray-900 border-white scale-105 shadow-[0_0_50px_rgba(255,255,255,0.1)]' : 'bg-gray-800/50 border-gray-700 hover:border-gray-500'}`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Best Value
                </div>
              )}
              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.featured ? 'text-gray-900' : 'text-white'}`}>{plan.name}</h3>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className={`text-sm ${plan.featured ? 'text-gray-500' : 'text-gray-400'}`}>{plan.period}</span>
                </div>
                <p className={`mt-4 text-sm leading-relaxed ${plan.featured ? 'text-gray-600' : 'text-gray-400'}`}>{plan.description}</p>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center space-x-3 text-sm">
                    <svg className={`w-5 h-5 flex-shrink-0 ${plan.featured ? 'text-pink-600' : 'text-indigo-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.featured ? 'text-gray-700' : 'text-gray-300'}>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.featured ? 'bg-gray-900 text-white hover:bg-black' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
