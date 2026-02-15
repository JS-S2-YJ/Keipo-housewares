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
      position={[0, -0.2, 0]} 
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
      className={`${className} cursor-pointer relative flex items-center justify-center`} 
      style={{ 
        // 테스트용 회색 배경 및 입체감 강화
        backgroundColor: 'rgba(0, 0, 0, 0.03)', 
        borderRadius: '24px',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        filter: showGlow ? 'drop-shadow(0 10px 30px rgba(0,102,204,0.08))' : 'none' 
      }}
    >
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 4], fov: 30 }} // FOV를 좁혀서 모델을 더 크게 보이게 함
      >
        <Suspense fallback={null}>
          {/* 조명 세기 대폭 강화 */}
          <ambientLight intensity={1.5} />
          <directionalLight position={[2, 5, 2]} intensity={2.5} />
          <pointLight position={[-5, 2, -3]} intensity={1.5} color="#0066cc" />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={3} castShadow />
          
          <Environment preset="studio" />

          <Float 
            speed={3} 
            rotationIntensity={0.8} 
            floatIntensity={0.6}
            floatingRange={[-0.1, 0.1]}
          >
            <Model scale={scale} />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};
