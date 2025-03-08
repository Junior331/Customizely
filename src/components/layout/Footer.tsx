
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import AnimatedLink from '@/components/ui/AnimatedLink';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Newsletter */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h3 className="text-2xl font-bold mb-2">Assine nossa newsletter</h3>
          <p className="text-muted-foreground mb-6">
            Receba inspirações, novidades e promoções exclusivas em primeira mão.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Seu e-mail" 
              className="flex-grow" 
            />
            <Button>Assinar</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Customizely</h4>
            <p className="text-muted-foreground mb-4">
              Produtos personalizados para tornar seus momentos especiais únicos e inesquecíveis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Links Column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <AnimatedLink href="/produtos" className="text-muted-foreground">Produtos</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/personalizar" className="text-muted-foreground">Personalizar</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/presentes" className="text-muted-foreground">Presentes</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/sobre" className="text-muted-foreground">Sobre Nós</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/blog" className="text-muted-foreground">Blog</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/faq" className="text-muted-foreground">FAQ</AnimatedLink>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">R.Exemplo, 123, Rio de Janeiro - RJ</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary shrink-0" />
                <span className="text-muted-foreground">(21) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary shrink-0" />
                <span className="text-muted-foreground">jaja.customizely@gmail.com</span>
              </li>
            </ul>
          </div>
          
          {/* Features Column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Por que Escolher Customizely</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <ShieldCheck className="w-5 h-5 mr-2 text-primary shrink-0" />
                <span className="text-muted-foreground">Pagamento 100% Seguro</span>
              </li>
              <li className="flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-primary shrink-0" />
                <span className="text-muted-foreground">Parcelamento em até 12x</span>
              </li>
              <li className="flex items-center">
                <Truck className="w-5 h-5 mr-2 text-primary shrink-0" />
                <span className="text-muted-foreground">Entrega para Todo Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-border/50 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>©2025 Customizely. Todos os direitos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <AnimatedLink href="/termos" className="text-muted-foreground">Termos de Uso</AnimatedLink>
              <AnimatedLink href="/privacidade" className="text-muted-foreground">Política de Privacidade</AnimatedLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
