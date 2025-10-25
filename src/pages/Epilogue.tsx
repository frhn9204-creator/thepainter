import { MessageSection } from '@/components/sections/MessageSection';
import { Navigation } from '@/components/Navigation';
import { Scene3D } from '@/components/Scene3D';

const Epilogue = () => {
  return (
    <div className="relative min-h-screen">
      <Scene3D />
      <Navigation />
      <MessageSection />
    </div>
  );
};

export default Epilogue;
