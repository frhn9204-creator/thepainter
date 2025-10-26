import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 2000;

  const [positions, sizes, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
      
      sizes[i] = Math.random() * 0.1 + 0.03;
      
      // Ash-like colors - grays, browns, subtle reds
      const colorType = Math.random();
      if (colorType < 0.6) {
        // Gray ash
        const gray = Math.random() * 0.3 + 0.3;
        colors[i * 3] = gray;
        colors[i * 3 + 1] = gray;
        colors[i * 3 + 2] = gray;
      } else if (colorType < 0.9) {
        // Brown/sepia tone
        const brown = Math.random() * 0.3 + 0.2;
        colors[i * 3] = brown * 1.2;
        colors[i * 3 + 1] = brown * 0.8;
        colors[i * 3 + 2] = brown * 0.5;
      } else {
        // Subtle dark red ember
        colors[i * 3] = 0.4;
        colors[i * 3 + 1] = 0.05;
        colors[i * 3 + 2] = 0.05;
      }
    }
    
    return [positions, sizes, colors];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.elapsedTime;
      pointsRef.current.rotation.y = time * 0.03;
      pointsRef.current.rotation.x = Math.sin(time * 0.05) * 0.3;
      pointsRef.current.rotation.z = Math.cos(time * 0.03) * 0.1;
      
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(time + i * 0.1) * 0.005;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleCount}
          array={sizes}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};
