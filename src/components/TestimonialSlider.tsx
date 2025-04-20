
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '@/data/mockData';

const TestimonialSlider: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Update testimonial images to feature Black people with reliable Unsplash images
  const updatedTestimonials = testimonials.map(testimonial => ({
    ...testimonial,
    image: testimonial.id === 1 ? 
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" :
      testimonial.id === 2 ?
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" :
      "https://images.unsplash.com/photo-1531384370772-4031a0b4bc3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  }));

  return (
    <div className="relative py-12 px-4 bg-gradient-to-r from-[#F0F0F0] to-[#F8F8F8]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-10 text-charcoal inline-block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          What Our Customers Say
        </h2>
        
        <div className="relative">
          {updatedTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-opacity duration-700 ${
                index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
            >
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-primary/5">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 mb-6 rounded-full overflow-hidden ring-4 ring-primary/20">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`${
                          i < parseInt(testimonial.rating.toString()) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg mb-6 italic text-gray-700">
                    "{testimonial.testimonial}"
                  </blockquote>
                  
                  <div className="font-montserrat font-semibold text-charcoal">
                    {testimonial.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {updatedTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? 'bg-gradient-to-r from-primary to-purple-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} className="text-charcoal" />
        </button>
        
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} className="text-charcoal" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
