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
        // 딥 다크 테마로 변경하여 유리 질감 강조 및 눈 보호
        background: 'linear-gradient(135deg, #0f172a 0%, #020617 100%)',
        borderRadius: '40px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        padding: '20px'
      }}
    >
      {/* 배경에 은은한 블루 광원 효과 추가 */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, rgba(0, 102, 204, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 7.5], fov: 35 }}
      >
        <Suspense fallback={null}>
          {/* 어두운 배경에 맞춘 최적화된 부드러운 조명 */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0066cc" />
          <spotLight position={[0, 5, 10]} angle={0.15} penumbra={1} intensity={2} color="#b2e5ff" />
          
          <Environment preset="night" /> {/* 부드러운 밤 조명으로 변경 */}

          <Float 
            speed={1.5} 
            rotationIntensity={0.3} 
            floatIntensity={0.3}
            floatingRange={[-0.1, 0.1]}
          >
            <Model scale={scale} />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};
