
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-primary/10 text-primary"
            >
              Produtos 100% personalizáveis
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Crie, personalize e <br className="hidden md:block" />
              <span className="text-gradient">surpreenda</span> com presentes únicos
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Transforme suas ideias em produtos exclusivos com nossa plataforma 
              intuitiva de personalização. Camisetas, canecas, presentes e muito mais.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Button size="lg" className="rounded-full font-medium group">
                Crie seu design agora
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full font-medium">
                Ver produtos populares
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="relative"
          >
            <div className="aspect-square relative">
              <img 
                src="https://images.unsplash.com/photo-1618354691792-d1d42acfd860?q=80&w=1000" 
                alt="Produtos personalizados" 
                className="rounded-2xl shadow-2xl object-cover w-full h-full z-10"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-5 -right-5 w-40 h-40 bg-primary/10 rounded-2xl -z-10 animate-float"></div>
              <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-blue-300/20 rounded-2xl -z-10 animate-float" style={{animationDelay: "1s"}}></div>
            </div>
            
            {/* Product preview */}
            <motion.div 
              className="absolute -right-16 bottom-12 glass p-3 rounded-xl shadow-lg flex items-center gap-3 border border-white/30"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=150" 
                alt="Camiseta personalizada" 
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <p className="text-sm font-medium">Camiseta personalizada</p>
                <p className="text-xs text-muted-foreground">A partir de R$ 49,90</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -left-12 top-10 glass p-3 rounded-xl shadow-lg inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <span className="flex items-center gap-1 text-sm">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span> 
                302 clientes personalizando agora
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
