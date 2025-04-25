
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ArrowLeft, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Cart = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-montserrat font-bold text-charcoal mb-8 flex items-center">
            <ShoppingCart className="mr-3" size={28} />
            Product Showcase
          </h1>
          
          <div className="bg-white shadow-md rounded-xl p-8 mb-8">
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart size={32} className="text-gray-400" />
              </div>
              <h2 className="text-xl font-montserrat font-medium text-charcoal mb-2">Your showcase is empty</h2>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                This is a showcase website. Products added here are for demonstration purposes only.
              </p>
              <Link to="/shop">
                <Button className="bg-primary hover:bg-primary/80">
                  Browse Products
                </Button>
              </Link>
            </div>
          </div>
          
          <Card className="border-dashed border-2 border-gray-200 bg-gray-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-montserrat font-medium text-charcoal mb-3">
                Product Display Only
              </h3>
              <p className="text-gray-600">
                This website is for product showcase purposes only. No actual purchases can be made through this platform.
              </p>
              <p className="text-gray-600 mt-2">
                For actual purchases or inquiries about the products, please contact us through our contact page.
              </p>
              <div className="mt-4">
                <Link to="/contact">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
