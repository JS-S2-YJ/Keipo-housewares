'use client';

import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, Environment, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { BASE_PATH } from '@/lib/constants';

const Model = ({ scale = 1.2 }: { scale?: number }) => {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(`${BASE_PATH}/keipo_logo_animated.glb`);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action) => {
      if (action) {
        action.play();
        action.setLoop(THREE.LoopRepeat, Infinity);
      }
    });
  }, [actions]);

  return (
    <primitive 
      ref={group} 
      object={scene} 
      scale={scale} 
      position={[0, -0.6, 0]} // 아래쪽 여백을 줄이기 위해 모델을 살짝 내림
      rotation={[0, 0, 0]}
    />
  );
};

interface Logo3DProps {
  className?: string;
  scale?: number;
  showGlow?: boolean;
}

export const Logo3D = ({ className = "h-[40px] w-[120px]", scale = 1.2, showGlow = true }: Logo3DProps) => {
  return (
    <div 
      className={`${className} cursor-pointer relative flex items-center justify-center overflow-hidden`} 
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.025)', 
        borderRadius: '32px',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        filter: showGlow ? 'drop-shadow(0 10px 30px rgba(0,102,204,0.1))' : 'none' 
      }}
    >
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 7.5], fov: 35 }} // 약간 더 줌인하여 여백 최소화
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.0} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <pointLight position={[-5, 5, 5]} intensity={1.0} color="#0066cc" />
          
          <Environment preset="studio" />

          <Float 
            speed={2} 
            rotationIntensity={0.4} 
            floatIntensity={0.4}
            floatingRange={[-0.1, 0.1]}
          >
            <Model scale={scale} />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};
