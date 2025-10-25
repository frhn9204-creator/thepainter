import { Scene3D } from '@/components/Scene3D';
import { HeroSection } from '@/components/sections/HeroSection';
import { RiseSection } from '@/components/sections/RiseSection';
import { IdeologySection } from '@/components/sections/IdeologySection';
import { HolocaustSection } from '@/components/sections/HolocaustSection';
import { AftermathSection } from '@/components/sections/AftermathSection';
import { MessageSection } from '@/components/sections/MessageSection';

const Index = () => {
  return (
    <div className="relative">
      <Scene3D />
      <HeroSection />
      <RiseSection />
      <IdeologySection />
      <HolocaustSection />
      <AftermathSection />
      <MessageSection />
    </div>
  );
};

export default Index;
