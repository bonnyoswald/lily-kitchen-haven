
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

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
  // Convert price to KES (multiply by 130 as approximate conversion rate)
  const kesPrice = Math.round(price * 130);
  const kesOriginalPrice = originalPrice ? Math.round(originalPrice * 130) : undefined;
  const { toast } = useToast();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast({
      title: "Product Added",
      description: `${name} has been added to your showcase collection.`,
      duration: 3000,
    });
  };

  // Fallback image for when product images fail to load
  const fallbackImage = "https://images.unsplash.com/photo-1590794058231-d548fb6f7913?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80";
  
  return (
    <div className={cn("bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300", className)}>
      <div className="relative">
        <Link to={`/shop/${id}`}>
          <img 
            src={image} 
            alt={name} 
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = fallbackImage;
              target.onerror = null; // Prevent infinite loop if fallback also fails
            }}
          />
        </Link>
        {isNew && (
          <span className="absolute top-2 left-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            New
          </span>
        )}
        {originalPrice && (
          <span className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Save {Math.round((1 - price / originalPrice) * 100)}%
          </span>
        )}
      </div>
      
      <div className="p-3">
        <Link to={`/shop/${id}`} className="block">
          <h3 className="font-montserrat font-medium text-base text-charcoal hover:text-primary transition-colors mb-1 line-clamp-2">
            {name}
          </h3>
        </Link>
        
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={14}
              className={index < Math.round(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            />
          ))}
          <span className="text-gray-500 text-xs ml-1">({rating.toFixed(1)})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="font-montserrat font-bold text-base text-charcoal">
              KES {kesPrice.toLocaleString()}
            </span>
            {kesOriginalPrice && (
              <span className="text-gray-500 text-xs line-through ml-2 block">
                KES {kesOriginalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          <Button 
            onClick={handleAddToCart}
            variant="outline" 
            size="sm"
            className="rounded-full bg-primary text-white hover:bg-primary/80 border-none transition-colors"
          >
            <ShoppingCart size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
