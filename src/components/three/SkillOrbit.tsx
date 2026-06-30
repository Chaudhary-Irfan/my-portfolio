import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/context/ThemeContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function RotatingBadge({ color }: { color: string }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef}>
        <RoundedBox args={[1.2, 1.2, 0.15]} radius={0.08} smoothness={4}>
          <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
        </RoundedBox>
        <mesh position={[0, 0, 0.1]}>
          <circleGeometry args={[0.25, 32]} />
          <meshStandardMaterial color="#ffffff" emissive={color} emissiveIntensity={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

interface SkillOrbitProps {
  className?: string;
}

export function SkillOrbit({ className }: SkillOrbitProps) {
  const { isDark } = useTheme();
  const reducedMotion = useReducedMotion();
  const accent = isDark ? '#a3e635' : '#6D28D9';

  if (reducedMotion) return null;

  return (
    <div className={className} aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 3]} intensity={0.8} />
          <RotatingBadge color={accent} />
        </Suspense>
      </Canvas>
    </div>
  );
}
