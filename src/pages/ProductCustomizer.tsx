
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { products } from '@/components/home/utils';
import ImageUploader from '@/components/customizer/ImageUploader';
import ProductMockup3D from '@/components/customizer/ProductMockup3D';

const ProductCustomizer = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Find the product by ID
    const foundProduct = products.find(p => p.id === productId);
    
    if (foundProduct) {
      setProduct(foundProduct);
      setIsLoading(false);
    } else {
      toast.error('Produto não encontrado');
      navigate('/');
    }
  }, [productId, navigate]);

  const handleImageUpload = (imageUrl: string) => {
    setCustomImage(imageUrl);
    toast.success('Imagem carregada com sucesso!');
  };

  const handleAddToCart = () => {
    if (!customImage) {
      toast.error('Por favor, adicione uma imagem primeiro');
      return;
    }
    
    toast.success('Produto adicionado ao carrinho!');
    // Here you would add the product to cart with the custom image
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse">Carregando...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-20 container mx-auto px-4 md:px-6">
        <Button 
          variant="ghost" 
          className="mb-6 gap-2" 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 3D Mockup */}
          <div className="bg-secondary/30 rounded-xl p-6 flex items-center justify-center">
            <ProductMockup3D 
              productType={product.category.toLowerCase()} 
              customImage={customImage}
            />
          </div>
          
          {/* Product Info & Customization */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.title}</h1>
            <div className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
              {product.category}
            </div>
            <div className="text-2xl font-semibold mb-8">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-medium mb-4">Personalize seu produto</h2>
                <p className="text-muted-foreground mb-4">
                  Faça o upload de uma imagem para visualizar como ficará em seu {product.title.toLowerCase()}.
                </p>
                
                <ImageUploader onImageUploaded={handleImageUpload} />
              </div>
              
              <Button 
                size="lg" 
                className="w-full mt-8" 
                onClick={handleAddToCart}
                disabled={!customImage}
              >
                Adicionar ao carrinho
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductCustomizer;
