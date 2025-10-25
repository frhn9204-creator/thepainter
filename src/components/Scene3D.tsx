import { Canvas } from '@react-three/fiber';
import { ParticleField } from './ParticleField';

export const Scene3D = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <ParticleField />
      </Canvas>
    </div>
  );
};
