
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck as TruckIcon, ShieldCheck, Headset, Package, BadgeCheck, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import TestimonialSlider from '@/components/TestimonialSlider';
import FeaturesSection from '@/components/FeaturesSection';
import { featuredCategories, products, blogPosts } from '@/data/mockData';

const Index = () => {
  // Filter to get utensil products for the featured section
  const utensilProducts = products.filter(product => product.category === 'utensils');
  const newArrivals = products.filter(product => product.isNew);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Featured Categories */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-charcoal mb-3 inline-block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Shop by Category
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Explore our premium kitchenware categories, featuring our specialty in quality utensils.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredCategories.map((category, index) => (
                <CategoryCard
                  key={category.id}
                  title={category.name}
                  image={category.image}
                  link={`/shop/category/${category.id}`}
                  count={category.count}
                  isShipping={index === 3} // Add shipping badge to the last category
                />
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/shop">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View All Categories <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Utensil Products */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-charcoal mb-3 inline-block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Featured Kitchen Utensils
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Discover our premium utensil selection, chosen for exceptional quality and functionality.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {utensilProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  rating={product.rating}
                />
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/shop">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Shop All Utensils <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us (shortened) */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-charcoal mb-3 inline-block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Why Choose Our Utensils?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our utensils combine quality materials, ergonomic design, and durability for the best cooking experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal">Quality Materials</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Premium stainless steel, silicone, and hardwood materials designed to last for years.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <BadgeCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal">Ergonomic Design</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Comfortable handles and balanced weight for ease of use during long cooking sessions.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <Headset className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal">Expert Support</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Our team is ready to help you select the perfect utensils for your specific cooking needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-charcoal mb-3">
                Latest Arrivals
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Be the first to experience our newest kitchenware products.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {newArrivals.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  rating={product.rating}
                  isNew={true}
                />
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/shop">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View All New Arrivals <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features, Testimonials, Blog Posts, and Newsletter sections */}
        <FeaturesSection />
        <TestimonialSlider />

        {/* Newsletter - simplified */}
        <section className="py-12 bg-gradient-to-r from-primary to-teal-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-4">
                Join Our Newsletter
              </h2>
              <p className="mb-6">
                Subscribe to receive updates on new utensils and special offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-full text-charcoal focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <Button className="bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-full font-montserrat font-semibold">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
