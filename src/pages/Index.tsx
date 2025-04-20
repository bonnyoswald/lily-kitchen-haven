
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
  const featuredProducts = products.filter(product => product.isFeatured);
  const newArrivals = products.filter(product => product.isNew);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Dual Business Highlight */}
        <section className="py-16 bg-gradient-to-r from-[#2A5D3B]/10 to-[#F0F0F0]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-charcoal mb-4 inline-block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Two Businesses, One Solution
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Lily Suppliers combines premium kitchenware retail with reliable nationwide shipping services, giving you the best of both worlds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* E-commerce Side */}
              <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-primary/10">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Package className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-center mb-4 text-charcoal">Premium Kitchenware</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">Curated selection of high-quality kitchenware</p>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">International and local brands at competitive prices</p>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">Expert-selected products for your kitchen needs</p>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">One-year warranty on all products</p>
                  </li>
                </ul>
                <div className="text-center">
                  <Link to="/shop">
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                      Shop Now <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Shipping Side */}
              <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-primary/10">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <TruckIcon className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-center mb-4 text-charcoal">Nationwide Shipping</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">Fast delivery within 3-5 business days nationwide</p>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">Serving all 47 counties across Kenya</p>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">Secure packaging to ensure safe arrival</p>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">Real-time tracking of your shipment</p>
                  </li>
                </ul>
                <div className="text-center">
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-primary to-teal-600 hover:from-primary/90 hover:to-teal-700 text-white">
                      Get a Shipping Quote <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-charcoal mb-4 inline-block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Shop by Category
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Explore our wide range of premium kitchenware categories, from professional cookware to elegant tableware and smart kitchen appliances.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

            <div className="text-center mt-10">
              <Link to="/shop">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View All Categories <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-charcoal mb-4 inline-block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Featured Products
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Discover our most popular kitchenware selections, chosen for their exceptional quality, functionality, and customer satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
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

            <div className="text-center mt-10">
              <Link to="/shop">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Shop All Products <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-charcoal mb-4 inline-block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Why Lily Suppliers?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We combine quality products, reliable shipping, and exceptional customer service to provide you with the best kitchenware shopping experience.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1597233886683-94db5126984a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Our warehouse" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 bg-primary/10 p-3 rounded-full">
                      <TruckIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-montserrat font-semibold mb-2 text-charcoal">Reliable Shipping</h3>
                      <p className="text-gray-600">We deliver nationwide with careful packaging to ensure your kitchenware arrives safely and on time.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 bg-primary/10 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                        <path d="M18.89 11a4 4 0 0 0-5.8-3.5A4.28 4.28 0 0 0 12 8"/>
                        <path d="M2.26 12a4 4 0 0 1 5.8-3.5c.4.13.78.3 1.09.5"></path>
                        <path d="M13.17 7.42a8 8 0 0 1 9.57 9.58"></path>
                        <path d="M10.83 16.58a8 8 0 0 1-9.57-9.58"></path>
                        <path d="M12 22v-8"></path>
                        <path d="M12 14l-4-4"></path>
                        <path d="M12 14l4-4"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-montserrat font-semibold mb-2 text-charcoal">Local Pickup Available</h3>
                      <p className="text-gray-600">Save on shipping with our convenient local pickup option at our Nairobi warehouse.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 bg-primary/10 p-3 rounded-full">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-montserrat font-semibold mb-2 text-charcoal">Quality Guarantee</h3>
                      <p className="text-gray-600">Every product is carefully selected and backed by our satisfaction guarantee for your peace of mind.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 bg-primary/10 p-3 rounded-full">
                      <Headset className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-montserrat font-semibold mb-2 text-charcoal">Expert Support</h3>
                      <p className="text-gray-600">Our knowledgeable team is ready to assist with product selection and answer all your questions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-charcoal mb-4 inline-block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Latest Arrivals
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Be the first to experience our newest kitchenware products, fresh from trusted manufacturers around the world.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

            <div className="text-center mt-10">
              <Link to="/shop">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View All New Arrivals <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <FeaturesSection />

        {/* Testimonials */}
        <TestimonialSlider />

        {/* Blog Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-charcoal mb-4">
                From Our Blog
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Discover tips, tricks, and inspiration for making the most of your kitchenware.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="h-60 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between text-sm text-gray-500 mb-3">
                        <span>{post.category}</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="font-montserrat font-bold text-xl mb-2 text-charcoal group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-primary font-medium">
                        Read More <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/blog">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View All Posts <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gradient-to-r from-primary to-teal-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
                Join Our Newsletter
              </h2>
              <p className="mb-8">
                Subscribe to receive updates on new products, special offers, and kitchenware tips.
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
