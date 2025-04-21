
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products } from '@/data/mockData';
import ProductCard from '@/components/ProductCard';

const Category = () => {
  const { id } = useParams();
  // Fix: use 'category' instead of 'categoryId'
  const categoryProducts = products.filter(product => product.category === id);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-montserrat font-bold text-charcoal mb-8">
            {id?.charAt(0).toUpperCase() + id?.slice(1)} Products
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Category;
