import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/context/ThemeContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function FloatingShape({
  position,
  color,
  shape,
  speed = 1,
}: {
  position: [number, number, number];
  color: string;
  shape: 'box' | 'sphere' | 'torus';
  speed?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
    ref.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
  });

  const geometry =
    shape === 'box' ? (
      <boxGeometry args={[0.6, 0.6, 0.6]} />
    ) : shape === 'sphere' ? (
      <icosahedronGeometry args={[0.45, 1]} />
    ) : (
      <torusGeometry args={[0.35, 0.12, 16, 32]} />
    );

  return (
    <Float speed={1.5 * speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref} position={position}>
        {geometry}
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.85}
          distort={0.15}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function Scene({ isDark }: { isDark: boolean }) {
  const accent = isDark ? '#a3e635' : '#6D28D9';
  const accentLight = isDark ? '#34d399' : '#C4B5FD';

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color={accentLight} />
      <pointLight position={[-3, 2, 4]} intensity={0.5} color={accent} />
      <FloatingShape position={[-2, 1, -2]} color={accent} shape="box" speed={0.8} />
      <FloatingShape position={[2.5, -0.5, -1]} color={accentLight} shape="sphere" speed={1.2} />
      <FloatingShape position={[0, 1.5, -3]} color={accent} shape="torus" speed={0.6} />
      <FloatingShape position={[-1.5, -1.5, -2.5]} color={accentLight} shape="box" speed={1} />
    </>
  );
}

interface FloatingGeometriesProps {
  className?: string;
}

export function FloatingGeometries({ className }: FloatingGeometriesProps) {
  const { isDark } = useTheme();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <div className={className} aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene isDark={isDark} />
        </Suspense>
      </Canvas>
    </div>
  );
}
