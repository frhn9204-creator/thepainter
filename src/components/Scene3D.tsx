import { Canvas } from '@react-three/fiber';
import { ParticleField } from './ParticleField';

export const Scene3D = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 opacity-40">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#ff0000" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ffffff" />
        <ParticleField />
      </Canvas>
    </div>
  );
};
