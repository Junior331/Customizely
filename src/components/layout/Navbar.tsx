
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedLink from '@/components/ui/AnimatedLink';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Início', href: '/' },
  { name: 'Produtos', href: '/produtos' },
  { name: 'Personalizar', href: '/personalizar' },
  { name: 'Inspiração', href: '/inspiracao' },
  { name: 'Presentes', href: '/presentes' },
  { name: 'Sobre Nós', href: '/sobre' },
  { name: 'Blog', href: '/blog' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            <span className="text-primary">Customizely</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <AnimatedLink 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium"
              >
                {link.name}
              </AnimatedLink>
            ))}
          </nav>
          
          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <button className="focus:outline-none transition-transform hover:scale-110">
              <Search className="w-5 h-5" />
            </button>
            
            <Link to="/conta" className="focus:outline-none transition-transform hover:scale-110">
              <User className="w-5 h-5" />
            </Link>
            
            <Link 
              to="/carrinho" 
              className="relative focus:outline-none transition-transform hover:scale-110"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-border/50 shadow-lg overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <AnimatedLink 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </AnimatedLink>
              ))}
              <Button 
                variant="default" 
                className="mt-4"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.location.href = '/personalizar';
                }}
              >
                Criar Design Agora
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
