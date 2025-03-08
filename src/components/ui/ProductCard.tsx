
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import AnimatedLink from '@/components/ui/AnimatedLink';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  image,
  category,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-white border border-border/40 transition-all duration-300",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.6, 0.05, 0.01, 0.99] }}
      viewport={{ once: true, margin: "-100px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <motion.img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.7, ease: [0.6, 0.05, 0.01, 0.99] }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-custom-ease">
          <Link to={`/personalizar/${id}`}>
            <Button 
              variant="default" 
              size="sm" 
              className="w-full bg-white text-foreground hover:bg-white/90"
            >
              Personalizar
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="p-4">
        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{category}</div>
        
        <h3 className="font-medium text-base mb-1 line-clamp-1">
          <AnimatedLink href={`/personalizar/${id}`} underline={false} className="hover:text-primary">
            {title}
          </AnimatedLink>
        </h3>
        
        <div className="font-semibold text-lg">
          R$ {price.toFixed(2).replace('.', ',')}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
