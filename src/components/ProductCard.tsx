
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isNew?: boolean;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  isNew = false,
  className,
}) => {
  return (
    <div className={cn("bg-white rounded-lg overflow-hidden shadow-md product-card-hover", className)}>
      <div className="relative">
        <Link to={`/product/${id}`}>
          <img 
            src={image} 
            alt={name} 
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>
        {isNew && (
          <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
            New Arrival
          </span>
        )}
        {originalPrice && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Save {Math.round((1 - price / originalPrice) * 100)}%
          </span>
        )}
        <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100 transition-colors">
          <Heart size={18} className="text-gray-600 hover:text-red-500 transition-colors" />
        </button>
      </div>
      
      <div className="p-4">
        <Link to={`/product/${id}`} className="block">
          <h3 className="font-montserrat font-medium text-lg text-charcoal hover:text-primary transition-colors mb-1 line-clamp-2">
            {name}
          </h3>
        </Link>
        
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={16}
              className={index < Math.round(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            />
          ))}
          <span className="text-gray-500 text-sm ml-1">({rating.toFixed(1)})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-montserrat font-bold text-lg text-charcoal">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-gray-500 text-sm line-through ml-2">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <Button variant="outline" size="icon" className="rounded-full text-primary border-primary hover:bg-primary hover:text-white transition-colors">
            <ShoppingCart size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
