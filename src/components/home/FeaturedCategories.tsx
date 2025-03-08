
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedLink from '@/components/ui/AnimatedLink';

const categories = [
  {
    id: 1,
    name: 'Camisetas',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800',
    count: 120,
    color: 'from-blue-500/20 to-blue-400/10',
  },
  {
    id: 2,
    name: 'Canecas',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800',
    count: 85,
    color: 'from-amber-500/20 to-amber-400/10',
  },
  {
    id: 3,
    name: 'Presentes',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800',
    count: 94,
    color: 'from-rose-500/20 to-rose-400/10',
  },
  {
    id: 4,
    name: 'Acessórios',
    image: '/acessorios.png',
    count: 76,
    color: 'from-emerald-500/20 to-emerald-400/10',
  },
];

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Categorias populares</h2>
            <p className="text-lg text-muted-foreground mt-2">
              Explore nossa seleção de produtos personalizáveis
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <AnimatedLink href="/produtos" className="group inline-flex items-center text-primary font-medium">
              Ver todas as categorias 
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </AnimatedLink>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              <AnimatedLink 
                href={`/produtos/categoria/${category.id}`} 
                className="block rounded-xl overflow-hidden relative"
                underline={false}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-60 z-10 transition-opacity group-hover:opacity-70`} />
                
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white text-shadow-sm">{category.name}</h3>
                  <p className="text-sm text-white/90">{category.count} produtos</p>
                </div>
              </AnimatedLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
