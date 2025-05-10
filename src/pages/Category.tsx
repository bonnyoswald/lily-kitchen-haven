
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products } from '@/data/mockData';
import ProductCard from '@/components/ProductCard';
import { ArrowLeft } from 'lucide-react';

const Category = () => {
  const { id } = useParams();
  const categoryProducts = products.filter(product => product.category === id);
  
  // Determine if we're in the utensils category to customize the heading
  const isUtensils = id === 'utensils';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-6">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link to="/shop" className="inline-flex items-center mb-3 text-gray-600 hover:text-primary transition-colors">
            <ArrowLeft size={16} className="mr-1" /> Back to All Items
          </Link>
          
          <h1 className="text-xl font-bold text-charcoal mb-3">
            {id?.charAt(0).toUpperCase() + id?.slice(1)} Collection
            {isUtensils && " - Our Specialty"}
          </h1>
          
          <p className="text-gray-600 mb-4 text-sm">
            {isUtensils 
              ? "Browse our premium selection of kitchen utensils designed for every cooking need."
              : `Browse our selection of ${id} items for display purposes.`}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {categoryProducts.map((product) => (
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
          
          {categoryProducts.length === 0 && (
            <div className="text-center py-8 bg-gray-50 rounded-lg mt-4">
              <h2 className="text-lg font-medium text-charcoal mb-2">No items in this category</h2>
              <p className="text-gray-500 text-sm">
                We couldn't find any items in this category.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Category;
