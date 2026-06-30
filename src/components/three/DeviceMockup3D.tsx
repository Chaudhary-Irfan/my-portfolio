import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/context/ThemeContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function DeviceMockup({ isDark }: { isDark: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const accent = isDark ? '#a3e635' : '#6D28D9';

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <RoundedBox args={[2.4, 1.5, 0.08]} radius={0.06} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial color={isDark ? '#1F2937' : '#f8f7ff'} metalness={0.3} roughness={0.4} />
      </RoundedBox>
      <RoundedBox args={[2.1, 1.2, 0.02]} radius={0.03} smoothness={4} position={[0, 0, 0.05]}>
        <meshStandardMaterial color={isDark ? '#273444' : '#ffffff'} metalness={0.1} roughness={0.6} />
      </RoundedBox>
      <mesh position={[0, 0, 0.07]}>
        <planeGeometry args={[1.8, 0.06]} />
        <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

interface DeviceMockup3DProps {
  className?: string;
}

export function DeviceMockup3D({ className }: DeviceMockup3DProps) {
  const { isDark } = useTheme();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <div className={className} aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.7} />
          <Environment preset="city" />
          <DeviceMockup isDark={isDark} />
        </Suspense>
      </Canvas>
    </div>
  );
}
