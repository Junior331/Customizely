import React, { useState, useCallback, useRef } from 'react';
import { Upload, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ImageUploaderProps {
  onImageUploaded: (imageUrl: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUploaded }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageFile(e.dataTransfer.files[0]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleImageFile(e.target.files[0]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleImageFile = (file: File) => {
    // Check if the file is an image
    if (!file.type.match('image.*')) {
      alert('Por favor, selecione uma imagem');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        const imageUrl = e.target.result as string;
        setPreview(imageUrl);
        onImageUploaded(imageUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setPreview(null);
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="space-y-4">
      {!preview ? (
        <div
          className={cn(
            "border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200",
            isDragging ? "border-primary bg-primary/5" : "border-border"
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="image-upload"
            className="hidden"
            accept="image/*"
            onChange={handleFileInput}
            ref={fileInputRef}
          />

          <div className="flex flex-col items-center justify-center gap-3">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: isDragging ? 1.05 : 1 }}
              className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center"
            >
              <Upload className="h-8 w-8 text-primary" />
            </motion.div>

            <div>
              <p className="font-medium mb-1">Arraste sua imagem aqui</p>
              <p className="text-sm text-muted-foreground">ou clique para escolher um arquivo</p>
            </div>
            <label htmlFor="image-upload" className="mt-2">
              <Button variant="outline" size="sm" onClick={openFileDialog}>
                Selecionar arquivo
              </Button>
            </label>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-xl overflow-hidden"
        >
          <img
            src={preview}
            alt="Preview"
            className="w-full h-64 object-contain bg-secondary/30 rounded-xl"
          />

          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
            onClick={removeImage}
          >
            <X className="h-4 w-4" />
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default ImageUploader;