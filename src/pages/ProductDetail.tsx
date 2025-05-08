
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, ArrowLeft } from 'lucide-react';
import { products } from '@/data/mockData';
import { useToast } from '@/components/ui/use-toast';
import { Skeleton } from '@/components/ui/skeleton';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { toast } = useToast();
  const [currentImage, setCurrentImage] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  
  const handleAddToCollection = () => {
    toast({
      title: "Item Added",
      description: `${product?.name} has been added to your collection.`,
      duration: 3000,
    });
  };
  
  // Fallback image for when product images fail to load
  const fallbackImage = "https://images.unsplash.com/photo-1590794058231-d548fb6f7913?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80";
  
  // Convert price to KES (multiply by 85 as reduced conversion rate)
  const kesPrice = product ? Math.round(product.price * 85) : 0;
  const kesOriginalPrice = product?.originalPrice ? Math.round(product.originalPrice * 85) : undefined;
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-montserrat font-bold text-charcoal mb-4">
              Item Not Found
            </h1>
            <p className="mb-6">The item you're looking for doesn't exist or has been removed.</p>
            <Link to="/shop">
              <Button className="bg-primary hover:bg-primary/80">
                <ArrowLeft size={16} className="mr-2" /> Back to Items
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-6">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link to="/shop" className="inline-flex items-center mb-4 text-gray-600 hover:text-primary transition-colors">
            <ArrowLeft size={16} className="mr-1" /> Back to Items
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Image */}
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="relative">
                {imageLoading && (
                  <Skeleton className="w-full h-64 md:h-80" />
                )}
                <img 
                  src={product.images[currentImage]} 
                  alt={product.name} 
                  className={`w-full h-auto object-contain rounded-md ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                  style={{ maxHeight: '320px', transition: 'opacity 0.3s' }}
                  onLoad={() => setImageLoading(false)}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = fallbackImage;
                    target.onerror = null; // Prevent infinite loop if fallback also fails
                    setImageLoading(false);
                  }}
                />
              </div>
              
              {/* Thumbnail images */}
              {product.images.length > 1 && (
                <div className="flex mt-3 space-x-2 overflow-x-auto">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setImageLoading(true);
                        setCurrentImage(index);
                      }}
                      className={`rounded border-2 ${currentImage === index ? 'border-primary' : 'border-transparent'}`}
                    >
                      <img 
                        src={img} 
                        alt={`${product.name} thumbnail ${index+1}`} 
                        className="w-14 h-14 object-cover rounded"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = fallbackImage;
                          target.onerror = null;
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Details */}
            <div>
              {product.isNew && (
                <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                  New
                </span>
              )}
              
              <h1 className="text-xl font-bold text-charcoal mb-2">
                {product.name}
              </h1>
              
              <div className="flex items-center mb-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className={index < Math.round(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
                <span className="text-gray-500 text-sm ml-2">({product.rating.toFixed(1)})</span>
              </div>
              
              <div className="flex items-center mb-4">
                <span className="font-bold text-lg text-charcoal">
                  KES {kesPrice.toLocaleString()}
                </span>
                {kesOriginalPrice && (
                  <span className="text-gray-500 text-sm line-through ml-3">
                    KES {kesOriginalPrice.toLocaleString()}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded ml-3">
                    Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>
              
              <div className="border-t border-b border-gray-200 py-4 mb-4">
                <p className="text-gray-700 leading-relaxed text-sm">
                  {product.description}
                </p>
              </div>
              
              <div className="mb-5">
                <Button 
                  onClick={handleAddToCollection}
                  className="bg-primary hover:bg-primary/80 w-full sm:w-auto"
                >
                  <ShoppingCart className="mr-2" size={18} />
                  Add to Display Collection
                </Button>
                <p className="text-gray-500 text-xs mt-2">
                  Note: For display purposes only
                </p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-md border border-gray-100">
                <h3 className="font-medium mb-2 text-sm">Item Details</h3>
                <div className="grid grid-cols-1 gap-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex text-sm">
                      <span className="font-medium text-gray-700 w-1/3">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
