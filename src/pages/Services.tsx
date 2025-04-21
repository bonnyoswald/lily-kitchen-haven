
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Globe, ShoppingBag, Truck, Package, Clock, CheckCircle } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-teal-500/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-charcoal mb-6">
                International Sourcing Services
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We specialize in sourcing high-quality kitchen equipment from manufacturers worldwide, 
                delivering professional solutions for your culinary needs.
              </p>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                  Request Sourcing Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-charcoal mb-6 inline-block bg-gradient-to-r from-primary to-teal-600 bg-clip-text text-transparent">
                Our International Sourcing Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From identifying the perfect equipment to handling logistics and delivery, 
                we provide end-to-end kitchen equipment sourcing solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 border border-gray-100">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-charcoal mb-4">Global Manufacturer Network</h3>
                <p className="text-gray-600 mb-4">
                  Access our extensive network of verified manufacturers and suppliers from around the world, 
                  specializing in professional kitchen equipment.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Direct manufacturer relationships</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Verified quality standards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Competitive wholesale pricing</span>
                  </li>
                </ul>
                <Link to="/contact" className="text-primary font-medium hover:text-primary/80 transition-colors">
                  Learn more →
                </Link>
              </div>

              {/* Service 2 */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 border border-gray-100">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <ShoppingBag className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-charcoal mb-4">Custom Procurement Solutions</h3>
                <p className="text-gray-600 mb-4">
                  We handle every step of the procurement process, from specification and negotiation to quality control and delivery.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Detailed product specifications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Price and terms negotiation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Pre-shipment quality inspection</span>
                  </li>
                </ul>
                <Link to="/contact" className="text-primary font-medium hover:text-primary/80 transition-colors">
                  Learn more →
                </Link>
              </div>

              {/* Service 3 */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 border border-gray-100">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-charcoal mb-4">Logistics & Delivery</h3>
                <p className="text-gray-600 mb-4">
                  Complete logistics management including shipping, customs clearance, and final delivery to your location.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">International shipping coordination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Customs documentation assistance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Last-mile delivery services</span>
                  </li>
                </ul>
                <Link to="/contact" className="text-primary font-medium hover:text-primary/80 transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-charcoal mb-6">
                How Our Sourcing Process Works
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our streamlined process ensures you get exactly what you need with minimum hassle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md relative">
                  <span className="text-2xl font-bold text-primary">1</span>
                  <div className="absolute w-full h-0.5 bg-primary right-0 top-1/2 transform -translate-y-1/2 hidden md:block"></div>
                </div>
                <h3 className="text-xl font-montserrat font-bold text-charcoal mb-4">Consultation</h3>
                <p className="text-gray-600">
                  We discuss your requirements, specifications, and budget to understand your needs.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md relative">
                  <span className="text-2xl font-bold text-primary">2</span>
                  <div className="absolute w-full h-0.5 bg-primary right-0 top-1/2 transform -translate-y-1/2 hidden md:block"></div>
                </div>
                <h3 className="text-xl font-montserrat font-bold text-charcoal mb-4">Sourcing</h3>
                <p className="text-gray-600">
                  We identify suitable suppliers, obtain quotations, and present options for your approval.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md relative">
                  <span className="text-2xl font-bold text-primary">3</span>
                  <div className="absolute w-full h-0.5 bg-primary right-0 top-1/2 transform -translate-y-1/2 hidden md:block"></div>
                </div>
                <h3 className="text-xl font-montserrat font-bold text-charcoal mb-4">Procurement</h3>
                <p className="text-gray-600">
                  We handle negotiations, place orders, and manage quality control before shipping.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-montserrat font-bold text-charcoal mb-4">Delivery</h3>
                <p className="text-gray-600">
                  We coordinate shipping, customs clearance, and final delivery to your specified location.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Start Your Sourcing Project
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Equipment Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-charcoal mb-6">
                Kitchen Equipment We Source
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We specialize in sourcing a wide range of commercial and professional kitchen equipment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Category 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-60 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1588644525273-f37b60d78512?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Commercial Cooking Equipment" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-bold text-charcoal mb-4">
                    Commercial Cooking Equipment
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Industrial stoves, ovens, fryers, grills, steamers, and other cooking appliances for commercial kitchens.
                  </p>
                  <Link to="/contact" className="text-primary font-medium hover:text-primary/80 transition-colors">
                    Request sourcing →
                  </Link>
                </div>
              </div>

              {/* Category 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-60 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1559842438-2942c907c8fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                    alt="Food Preparation Equipment" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-bold text-charcoal mb-4">
                    Food Preparation Equipment
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Mixers, slicers, food processors, blenders, and other preparation equipment for professional kitchens.
                  </p>
                  <Link to="/contact" className="text-primary font-medium hover:text-primary/80 transition-colors">
                    Request sourcing →
                  </Link>
                </div>
              </div>

              {/* Category 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-60 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1584992236310-6eedc383b449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                    alt="Refrigeration Equipment" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-bold text-charcoal mb-4">
                    Refrigeration Equipment
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Commercial refrigerators, freezers, blast chillers, wine coolers, and display cases for food storage.
                  </p>
                  <Link to="/contact" className="text-primary font-medium hover:text-primary/80 transition-colors">
                    Request sourcing →
                  </Link>
                </div>
              </div>

              {/* Category 4 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-60 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Dishwashing Equipment" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-bold text-charcoal mb-4">
                    Dishwashing Equipment
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Commercial dishwashers, glasswashers, pot washers, and related sanitation equipment.
                  </p>
                  <Link to="/contact" className="text-primary font-medium hover:text-primary/80 transition-colors">
                    Request sourcing →
                  </Link>
                </div>
              </div>

              {/* Category 5 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-60 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1561817423-c12a78db6d28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                    alt="Kitchen Workstations" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-bold text-charcoal mb-4">
                    Kitchen Workstations
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Stainless steel work tables, preparation stations, sinks, and custom fabricated items.
                  </p>
                  <Link to="/contact" className="text-primary font-medium hover:text-primary/80 transition-colors">
                    Request sourcing →
                  </Link>
                </div>
              </div>

              {/* Category 6 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-60 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80" 
                    alt="Specialty Equipment" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-bold text-charcoal mb-4">
                    Specialty Equipment
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Bakery equipment, ice makers, specialty coffee machines, and other niche kitchen appliances.
                  </p>
                  <Link to="/contact" className="text-primary font-medium hover:text-primary/80 transition-colors">
                    Request sourcing →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-teal-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
                Ready to Source Your Kitchen Equipment?
              </h2>
              <p className="text-lg mb-8">
                Contact us today to discuss your requirements and learn how our international 
                sourcing services can help you get the best equipment at competitive prices.
              </p>
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold">
                  Contact Our Sourcing Team
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
