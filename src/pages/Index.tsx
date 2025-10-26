import { Scene3D } from '@/components/Scene3D';
import { HeroSection } from '@/components/sections/HeroSection';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Central background image with blur and opacity */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="https://media.gettyimages.com/id/515381276/zh/%E7%85%A7%E7%89%87/adolf-hitler-closeup-shot-of-the-chancellor-speaking-over-the-radio-microphone.jpg?s=612x612&w=gi&k=20&c=JTD-yuGnQ2Dh2fNN6qtDgjwlXGOynwHRnPoMpNaGTSQ="
          alt="Central themed image"
          className="max-w-full max-h-full object-contain"
          style={{
            opacity: 0.95,
            boxShadow: 'inset 0 0 100px 50px rgba(0, 0, 0, 0.8)'
          }}
        />
      </div>
      
      {/* Existing components layered on top */}
      <div className="relative z-10">
        <Scene3D />
        <HeroSection />
      </div>
    </div>
  );
};

export default Index;
