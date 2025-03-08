
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { products } from './utils';
import AnimatedLink from '@/components/ui/AnimatedLink';
import ProductCard from '@/components/ui/ProductCard';

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Nossos produtos</h2>
            <p className="text-lg text-muted-foreground mt-2">
              Personalize cada detalhe para criar algo único
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <AnimatedLink href="/produtos" className="group inline-flex items-center text-primary font-medium">
              Ver todos os produtos 
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </AnimatedLink>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
