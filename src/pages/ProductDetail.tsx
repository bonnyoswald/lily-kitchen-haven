
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, ArrowLeft, Heart } from 'lucide-react';
import { products } from '@/data/mockData';
import { useToast } from '@/components/ui/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { toast } = useToast();
  
  const handleAddToShowcase = () => {
    toast({
      title: "Product Added",
      description: `${product?.name} has been added to your showcase collection.`,
      duration: 3000,
    });
  };
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-montserrat font-bold text-charcoal mb-4">
              Product Not Found
            </h1>
            <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
            <Link to="/shop">
              <Button className="bg-primary hover:bg-primary/80">
                <ArrowLeft size={16} className="mr-2" /> Back to Shop
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Convert price to KES (multiply by 130 as approximate conversion rate)
  const kesPrice = Math.round(product.price * 130);
  const kesOriginalPrice = product.originalPrice ? Math.round(product.originalPrice * 130) : undefined;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <Link to="/shop" className="inline-flex items-center mb-6 text-gray-600 hover:text-primary transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Products
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="rounded-xl overflow-hidden bg-white p-4 shadow-md">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-contain rounded-lg"
                style={{ maxHeight: '500px' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1590794058231-d548fb6f7913?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80";
                }}
              />
            </div>
            
            {/* Product Details */}
            <div>
              {product.isNew && (
                <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  New Arrival
                </span>
              )}
              
              <h1 className="text-3xl font-montserrat font-bold text-charcoal mb-2">
                {product.name}
              </h1>
              
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    className={index < Math.round(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
                <span className="text-gray-500 text-sm ml-2">({product.rating.toFixed(1)})</span>
              </div>
              
              <div className="flex items-center mb-6">
                <span className="font-montserrat font-bold text-2xl text-charcoal">
                  KES {kesPrice.toLocaleString()}
                </span>
                {kesOriginalPrice && (
                  <span className="text-gray-500 text-lg line-through ml-3">
                    KES {kesOriginalPrice.toLocaleString()}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded ml-3">
                    Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>
              
              <div className="border-t border-b border-gray-200 py-6 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {product.description || 
                  `Experience professional-grade kitchen equipment with the ${product.name}. 
                  Designed for durability and performance, this ${product.category} equipment 
                  delivers exceptional results every time. Perfect for commercial kitchens 
                  and serious home cooks alike.`}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  onClick={handleAddToShowcase}
                  className="bg-primary hover:bg-primary/80 flex-grow md:flex-grow-0"
                >
                  <ShoppingCart className="mr-2" size={18} />
                  Add to Showcase
                </Button>
                <Button variant="outline" className="border-gray-300 flex-grow md:flex-grow-0">
                  <Heart className="mr-2" size={18} />
                  Add to Wishlist
                </Button>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-600 text-sm">
                  <strong>Category:</strong> {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  <strong>Product ID:</strong> {product.id}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  <strong>Note:</strong> This is a showcase website. Products cannot be purchased.
                </p>
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
