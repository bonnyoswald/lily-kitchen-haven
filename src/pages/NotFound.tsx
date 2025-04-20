
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-secondary">
        <div className="container mx-auto px-4 py-16 flex items-center justify-center">
          <div className="max-w-md text-center">
            <h1 className="text-9xl font-montserrat font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-charcoal mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <Link to="/">
                  <ArrowLeft size={16} className="mr-2" /> Back to Home
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Link to="/shop">
                  Browse Our Shop
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
