
import React from 'react';
import { Truck as TruckIcon, ShieldCheck, PercentCircle, Headset } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <TruckIcon className="h-10 w-10 text-primary" />,
      title: 'Free Shipping',
      description: 'Free nationwide shipping on orders over $100'
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: 'Quality Guarantee',
      description: 'All products backed by our quality promise'
    },
    {
      icon: <PercentCircle className="h-10 w-10 text-primary" />,
      title: 'Special Discounts',
      description: 'Member-exclusive offers and bulk discounts'
    },
    {
      icon: <Headset className="h-10 w-10 text-primary" />,
      title: '24/7 Support',
      description: 'Customer service available around the clock'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
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
