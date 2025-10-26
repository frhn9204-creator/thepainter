import { Scene3D } from '@/components/Scene3D';
import { HeroSection } from '@/components/sections/HeroSection';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Central background image with blur and opacity */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Spotlight gradient overlay with enhanced blending */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 245, 200, 0.1) 0%, rgba(255, 245, 200, 0.05) 20%, rgba(0, 0, 0, 0.85) 50%, rgba(0, 0, 0, 0.98) 75%, rgba(0, 0, 0, 1) 100%)'
        }} />
        
        {/* Enlarged dark blur layer behind image */}
        <div className="absolute" style={{
          width: '105%',
          height: '105%',
          filter: 'blur(80px)',
          background: 'rgba(0, 0, 0, 0.95)',
          zIndex: 5
        }} />
        
        <img
          src="https://media.gettyimages.com/id/515381276/zh/%E7%85%A7%E7%89%87/adolf-hitler-closeup-shot-of-the-chancellor-speaking-over-the-radio-microphone.jpg?s=612x612&w=gi&k=20&c=JTD-yuGnQ2Dh2fNN6qtDgjwlXGOynwHRnPoMpNaGTSQ="
          alt="Central themed image"
          className="max-w-full max-h-full object-contain relative"
          style={{
            opacity: 0.98,
            filter: 'brightness(1.1) contrast(1.05)',
            borderRadius: '50%',
            boxShadow: 'inset 0 0 300px 200px rgba(0, 0, 0, 0.95), 0 0 400px 300px rgba(0, 0, 0, 1)',
            zIndex: 10
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
