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
    <div className={`${className} cursor-pointer`} style={{ filter: showGlow ? 'drop-shadow(0 0 8px rgba(0,102,204,0.1))' : 'none' }}>
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]} // 성능과 화질 밸런스
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={35} />
          
          {/* 유리 질감을 살려줄 조명 설정 */}
          <ambientLight intensity={0.8} />
          <spotLight position={[5, 5, 5]} angle={0.25} penumbra={1} intensity={2} />
          <pointLight position={[-5, -5, -5]} intensity={1} color="#0066cc" />
          
          {/* 환경 맵: 유리 반사에 필수적임 */}
          <Environment preset="city" />

          {/* 둥둥 떠있는 효과 + 미세한 회전으로 3D 입체감 강조 */}
          <Float 
            speed={2.5} 
            rotationIntensity={0.6} 
            floatIntensity={0.4}
            floatingRange={[-0.05, 0.05]}
          >
            <Model scale={scale} />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};
