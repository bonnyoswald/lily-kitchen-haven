
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  cta: string;
  link: string;
}

const slides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80",
    title: "Premium Kitchenware Collection",
    subtitle: "Elevate your cooking with quality products starting from KES 1,500",
    cta: "Shop Now",
    link: "/shop"
  },
  {
    image: "https://images.unsplash.com/photo-1590794058231-d548fb6f7913?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    title: "Local & International Shipping",
    subtitle: "We deliver your kitchenware anywhere in Kenya and worldwide",
    cta: "Get a Quote",
    link: "/contact"
  },
  {
    image: "https://images.unsplash.com/photo-1584269600519-46b7f16116a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    title: "Cook Like a Pro",
    subtitle: "Discover our expert-selected kitchen tools and cookware",
    cta: "Explore",
    link: "/shop"
  }
];

// Fallback image
const fallbackImage = "https://images.unsplash.com/photo-1556911220-e15b29be8f8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1970&q=80";

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => ({...prev, [index]: true}));
  };

  const handleImageError = (index: number, e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = fallbackImage;
    target.onerror = null; // Prevent infinite loop
    handleImageLoad(index);
  };

  return (
    <div className="relative h-[70vh] max-h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="absolute inset-0 hero-gradient"></div>
          {!imagesLoaded[index] && (
            <Skeleton className="w-full h-full absolute inset-0" />
          )}
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover ${imagesLoaded[index] ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => handleImageLoad(index)}
            onError={(e) => handleImageError(index, e)}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl mb-4 max-w-3xl">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl">
              {slide.subtitle}
            </p>
            <Link to={slide.link}>
              <Button className="bg-primary hover:bg-primary/90 text-white font-montserrat">
                {slide.cta}
              </Button>
            </Link>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
