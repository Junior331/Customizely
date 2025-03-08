
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 relative overflow-hidden" id="contato">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-blue-50"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-primary/10 text-primary">
              Entre em contato
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dúvidas ou sugestões? Fale conosco
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Estamos sempre disponíveis para ajudar você a criar produtos personalizados incríveis.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-4xl mx-auto glass rounded-xl p-6 md:p-8 border border-white/30 shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-5 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="flex items-center text-sm font-medium gap-1.5">
                  <User className="h-4 w-4 text-primary" />
                  Nome
                </label>
                <Input 
                  id="name" 
                  placeholder="Seu nome"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/70 border-white/30 focus-visible:ring-primary/50 transition-all duration-200 shadow-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="flex items-center text-sm font-medium gap-1.5">
                  <Mail className="h-4 w-4 text-primary" />
                  E-mail
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="seu@email.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/70 border-white/30 focus-visible:ring-primary/50 transition-all duration-200 shadow-sm"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="flex items-center text-sm font-medium gap-1.5">
                <Tag className="h-4 w-4 text-primary" />
                Assunto
              </label>
              <Input 
                id="subject" 
                placeholder="Qual o assunto?"
                required
                value={formData.subject}
                onChange={handleChange}
                className="bg-white/70 border-white/30 focus-visible:ring-primary/50 transition-all duration-200 shadow-sm"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="flex items-center text-sm font-medium gap-1.5">
                <MessageSquare className="h-4 w-4 text-primary" />
                Mensagem
              </label>
              <Textarea 
                id="message" 
                placeholder="Como podemos ajudar?"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="bg-white/70 border-white/30 focus-visible:ring-primary/50 resize-y min-h-[120px] transition-all duration-200 shadow-sm"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full py-6 text-base font-medium transition-all duration-200 hover:shadow-lg hover:translate-y-[-2px]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-pulse">Enviando...</span>
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Enviar mensagem
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
