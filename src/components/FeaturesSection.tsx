
import React from 'react';
import { Truck as TruckIcon, ShieldCheck, PercentCircle, Headset, Globe } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <TruckIcon className="h-10 w-10 text-primary" />,
      title: 'Local Shipping',
      description: 'Reliable delivery across all 47 counties in Kenya'
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: 'International Sourcing',
      description: 'We source premium products from global suppliers'
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: 'Quality Guarantee',
      description: 'All products backed by our quality promise'
    },
    {
      icon: <Headset className="h-10 w-10 text-primary" />,
      title: '24/7 Support',
      description: 'Customer service available around the clock'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4 bg-gradient-to-br from-primary/10 to-teal-400/10 p-4 rounded-full">
                {feature.icon}
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-2 text-charcoal">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
