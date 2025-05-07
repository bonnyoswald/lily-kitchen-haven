
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { products } from '@/data/mockData';
import ProductCard from '@/components/ProductCard';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProducts = searchTerm 
    ? products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;
    
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3">
            <h1 className="text-2xl font-montserrat font-bold text-charcoal">
              Product Showcase
            </h1>
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Find products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-60 p-1.5 pl-8 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-sm"
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>

          <p className="text-gray-600 mb-5 text-sm">
            Browse our curated collection of premium kitchen essentials. All items are for display purposes only.
          </p>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  rating={product.rating}
                  isNew={product.isNew}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-montserrat text-charcoal mb-2">No products found</h2>
              <p className="text-gray-500 mb-4 text-sm">We couldn't find any products matching your search.</p>
              <Button 
                onClick={() => setSearchTerm('')}
                size="sm"
                className="bg-primary hover:bg-primary/80"
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
