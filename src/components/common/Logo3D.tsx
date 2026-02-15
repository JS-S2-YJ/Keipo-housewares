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
    // 모든 애니메이션 클립 재생 (바운스 애니메이션)
    Object.values(actions).forEach((action) => {
      if (action) {
        action.play();
        // 무한 반복 설정 (블렌더에서 만든 120프레임 기준)
        action.setLoop(THREE.LoopRepeat, Infinity);
      }
    });
  }, [actions]);

  return (
    <primitive 
      ref={group} 
      object={scene} 
      scale={scale} 
      position={[0, 0, 0]} // 수직 중앙 정렬
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
        // 테스트용 회색 배경 및 입체감 강화
        backgroundColor: 'rgba(0, 0, 0, 0.02)', 
        borderRadius: '32px',
        border: '1px solid rgba(0, 0, 0, 0.04)',
        filter: showGlow ? 'drop-shadow(0 10px 30px rgba(0,102,204,0.08))' : 'none' 
      }}
    >
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        // 카메라를 더 뒤로(8) 빼서 가로로 긴 로고가 다 보이게 조정
        camera={{ position: [0, 0, 8], fov: 35 }} 
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <pointLight position={[-5, 5, 5]} intensity={1.5} color="#0066cc" />
          <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={2} />
          
          <Environment preset="city" />

          <Float 
            speed={2} 
            rotationIntensity={0.5} 
            floatIntensity={0.5}
            floatingRange={[-0.2, 0.2]}
          >
            <Model scale={scale} />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};
