
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck, Truck as TruckIcon, Headset } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-montserrat font-bold text-charcoal mb-6">
                About Lily Kitchen Haven
              </h1>
              <p className="text-gray-600 mb-8">
                We are your trusted partner in kitchen excellence, providing premium kitchenware 
                and reliable shipping solutions across Kenya and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-montserrat font-bold text-charcoal mb-4">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4">
                  Founded with a passion for culinary excellence, Lily Kitchen Haven has grown 
                  from a small local shop to a nationwide provider of premium kitchenware.
                </p>
                <p className="text-gray-600">
                  We take pride in sourcing the finest kitchen products from around the world 
                  and making them accessible to cooking enthusiasts across Kenya.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3" 
                  alt="Our story" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="mb-4 inline-block bg-primary/10 p-4 rounded-full">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-charcoal mb-2">
                  Quality First
                </h3>
                <p className="text-gray-600">
                  We carefully select each product to ensure it meets our high standards.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="mb-4 inline-block bg-primary/10 p-4 rounded-full">
                  <TruckIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-charcoal mb-2">
                  Reliable Shipping
                </h3>
                <p className="text-gray-600">
                  Our dedicated logistics team ensures safe and timely delivery.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="mb-4 inline-block bg-primary/10 p-4 rounded-full">
                  <Headset className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-charcoal mb-2">
                  Expert Support
                </h3>
                <p className="text-gray-600">
                  Our knowledgeable team is always ready to assist you.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
