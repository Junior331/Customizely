
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  "Mais de 100 opções de produtos personalizáveis",
  "Designer intuitivo para criar sua arte",
  "Entrega para todo Brasil",
  "Produtos de alta qualidade",
  "Excelente atendimento ao cliente",
  "Satisfação garantida ou seu dinheiro de volta"
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=800"
                alt="Equipe Customizely"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-40 h-40 border-t-2 border-l-2 border-primary/30 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 border-b-2 border-r-2 border-primary/30 -z-10"></div>
            
            {/* Stats cards */}
            <motion.div 
              className="absolute -right-10 -bottom-10 glass p-4 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-3xl font-bold">15k+</p>
              <p className="text-sm text-muted-foreground">Clientes satisfeitos</p>
            </motion.div>
            
            <motion.div 
              className="absolute -left-10 top-1/3 glass p-4 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-3xl font-bold">30k+</p>
              <p className="text-sm text-muted-foreground">Produtos entregues</p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-primary/10 text-primary">
              Sobre a Customizely
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transformando suas ideias em produtos memoráveis
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Fundada em 2024, a Customizely nasceu com a missão de ajudar pessoas a criarem
              produtos personalizados de forma fácil e intuitiva. Nosso objetivo é proporcionar
              uma experiência incrível de personalização, com produtos de alta qualidade e
              preços justos.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <Button className="group">
              Conhecer mais sobre nós
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
