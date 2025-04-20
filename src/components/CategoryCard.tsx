
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
  count: number;
  className?: string;
  isShipping?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  image,
  link,
  count,
  className,
  isShipping = false,
}) => {
  return (
    <Link 
      to={link}
      className={cn(
        "group relative overflow-hidden rounded-2xl shadow-md aspect-square block", 
        className
      )}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
        {isShipping && (
          <span className="absolute top-3 right-3 bg-primary/90 text-white text-xs px-2 py-1 rounded-full font-bold">
            Shipping
          </span>
        )}
        <h3 className="font-montserrat font-bold text-xl text-white mb-1">{title}</h3>
        <p className="text-white/80 text-sm">{count} Products</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
