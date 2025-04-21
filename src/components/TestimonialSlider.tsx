
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  testimonial: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alice Smith',
    title: 'Restaurant Owner',
    image: 'https://images.unsplash.com/photo-1438761681057-2025e7439498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    testimonial: 'Lily Suppliers has been a game-changer for my restaurant. The quality of their kitchenware is unmatched, and their shipping is incredibly reliable. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Bob Johnson',
    title: 'Chef',
    image: 'https://images.unsplash.com/photo-1503023345310-154ca6123c14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    testimonial: 'I love the variety and quality of products at Lily Suppliers. As a chef, I need reliable tools, and they always deliver. Plus, their customer service is top-notch.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Catherine Williams',
    title: 'Home Cook',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b2933e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    testimonial: 'I recently purchased a set of knives from Lily Suppliers, and they are fantastic! They are sharp, durable, and make cooking at home a joy. I also appreciate their fast shipping.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Brown',
    title: 'Catering Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd8b401e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    testimonial: 'As a catering manager, I rely on Lily Suppliers for all my kitchen equipment needs. Their products are high-quality, and their team is always responsive and helpful. A great partner for my business!',
    rating: 4,
  },
];

const TestimonialSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-charcoal mb-4 inline-block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Read testimonials from our satisfied customers who have experienced the quality and reliability of Lily Suppliers.
          </p>
        </div>
        
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-4 h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg text-charcoal">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className={index < Math.round(testimonial.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <p className="text-gray-700">
                  {testimonial.testimonial}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
