/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, useTexture, Environment, PerspectiveCamera } from '@react-three/drei';
import { TextureLoader } from 'three';
import { Group } from 'three';

interface ProductMockup3DProps {
  productType: string; // 'camisetas', 'canecas', etc.
  customImage: string | null;
}

const TShirtModel = ({ texture }: { texture: any }) => {
  const group = useRef<Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });
  
  return (
    <group ref={group} position={[0, 0, 0]} scale={2}>
      {/* T-shirt base */}
      <mesh castShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 1.2, 2, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Custom image on the front */}
      {texture && (
        <mesh position={[0, 0, 1]} castShadow>
          <planeGeometry args={[1.5, 1.5]} />
          <meshStandardMaterial map={texture} transparent />
        </mesh>
      )}
    </group>
  );
};

const MugModel = ({ texture }: { texture: any }) => {
  const group = useRef<Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2 + Math.PI * 0.25;
    }
  });
  
  return (
    <group ref={group} position={[0, 0, 0]} scale={1.5}>
      {/* Mug body */}
      <mesh castShadow>
        <cylinderGeometry args={[0.7, 0.7, 1.2, 32, 1, true]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Mug bottom */}
      <mesh position={[0, -0.6, 0]} castShadow>
        <cylinderGeometry args={[0.7, 0.7, 0.1, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Mug handle */}
      <mesh position={[1, 0, 0]} castShadow>
        <torusGeometry args={[0.3, 0.1, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Custom image on the mug */}
      {texture && (
        <mesh position={[0, 0, 0.7]} rotation={[0, 0, 0]} castShadow>
          <planeGeometry args={[1.2, 1]} />
          <meshStandardMaterial map={texture} transparent />
        </mesh>
      )}
    </group>
  );
};

const CushionModel = ({ texture }: { texture: any }) => {
  const group = useRef<Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });
  
  return (
    <group ref={group} position={[0, 0, 0]} scale={1.5}>
      {/* Cushion base */}
      <mesh castShadow>
        <boxGeometry args={[2, 2, 0.5]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
      
      {/* Custom image on the cushion */}
      {texture && (
        <mesh position={[0, 0, 0.26]} castShadow>
          <planeGeometry args={[1.8, 1.8]} />
          <meshStandardMaterial map={texture} transparent />
        </mesh>
      )}
    </group>
  );
};

const FrameModel = ({ texture }: { texture: any }) => {
  const group = useRef<Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });
  
  return (
    <group ref={group} position={[0, 0, 0]} scale={1.5}>
      {/* Frame border */}
      <mesh castShadow>
        <boxGeometry args={[2, 2.5, 0.1]} />
        <meshStandardMaterial color="#5d4037" />
      </mesh>
      
      {/* Frame inner part */}
      <mesh position={[0, 0, 0.06]} castShadow>
        <boxGeometry args={[1.8, 2.3, 0.05]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
      
      {/* Custom image in the frame */}
      {texture && (
        <mesh position={[0, 0, 0.12]} castShadow>
          <planeGeometry args={[1.7, 2.2]} />
          <meshStandardMaterial map={texture} transparent />
        </mesh>
      )}
    </group>
  );
};

const GenericModel = ({ texture }: { texture: any }) => {
  const group = useRef<Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });
  
  return (
    <group ref={group} position={[0, 0, 0]} scale={2}>
      {/* Base object */}
      <mesh castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Custom image on the front */}
      {texture && (
        <mesh position={[0, 0, 0.51]} castShadow>
          <planeGeometry args={[0.9, 0.9]} />
          <meshStandardMaterial map={texture} transparent />
        </mesh>
      )}
    </group>
  );
};

const ProductMockup3D: React.FC<ProductMockup3DProps> = ({ productType, customImage }) => {
  const [texture, setTexture] = useState<any>(null);
  
  // Load texture whenever customImage changes
  useEffect(() => {
    if (!customImage) return;
    
    const loader = new TextureLoader();
    loader.load(
      customImage,
      (loadedTexture) => {
        setTexture(loadedTexture);
      },
      undefined,
      (err) => {
        console.error('Error loading texture:', err);
      }
    );
  }, [customImage]);
  
  const renderModel = () => {
    switch (productType) {
      case 'camisetas':
        return <TShirtModel texture={texture} />;
      case 'canecas':
        return <MugModel texture={texture} />;
      case 'casa':
        if (productType.includes('almofada')) {
          return <CushionModel texture={texture} />;
        } else if (productType.includes('porta retrato')) {
          return <FrameModel texture={texture} />;
        }
        return <GenericModel texture={texture} />;
      default:
        return <GenericModel texture={texture} />;
    }
  };
  
  return (
    <div className="w-full h-[500px]">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024}
        />
        <Suspense fallback={null}>
          <Environment preset="city" />
          {renderModel()}
        </Suspense>
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
      {!customImage && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-muted-foreground text-center bg-background/80 px-4 py-2 rounded-md">
            Faça upload de uma imagem para visualizar
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductMockup3D;