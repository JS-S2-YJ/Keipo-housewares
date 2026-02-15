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
    // 액션 이름을 정렬하여 순차적으로 재생 (K-E-I-P-O)
    const sortedActionNames = Object.keys(actions).sort();
    sortedActionNames.forEach((name) => {
      const action = actions[name];
      if (action) {
        action.reset().play();
        action.setLoop(THREE.LoopRepeat, Infinity);
      }
    });
  }, [actions]);

  return (
    <primitive 
      ref={group} 
      object={scene} 
      scale={scale} 
      position={[0, -0.1, 0]}
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
      className={`${className} cursor-pointer relative flex items-center justify-center overflow-hidden group`} 
      style={{ 
        // 럭셔리 다크 글래스 스타일
        background: 'rgba(10, 10, 15, 0.85)',
        borderRadius: '32px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(0, 102, 204, 0.1)',
      }}
    >
      {/* 배경 은은한 광원 */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000" style={{
        background: 'radial-gradient(circle at 50% 50%, #0066cc 0%, transparent 60%)',
        filter: 'blur(40px)',
      }} />

      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 28 }} // 멀리서 줌인하여 짤림 방지
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 15, 10]} angle={0.3} intensity={2} color="#ffffff" />
          <pointLight position={[-10, 5, 5]} intensity={1.5} color="#0088ff" />
          
          <Environment preset="city" />

          <Float 
            speed={2.2} 
            rotationIntensity={0.5} 
            floatIntensity={0.4}
            floatingRange={[-0.15, 0.15]}
          >
            <Model scale={scale} />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};
