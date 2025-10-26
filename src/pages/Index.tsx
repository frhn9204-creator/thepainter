import { Scene3D } from '@/components/Scene3D';
import { HeroSection } from '@/components/sections/HeroSection';
import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your feedback!');
    setShowModal(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      {/* Loading Spinner */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-yellow-300 border-t-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
          </div>
        </div>
      )}

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen bg-black overflow-hidden"
      >
        {/* Parallax Background Layers */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 165, 0, 0.1) 0%, transparent 50%)'
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-60 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Central background image with mouse-following spotlight */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Dynamic spotlight that follows mouse */}
          <div
            className="absolute inset-0 transition-all duration-300 ease-out"
            style={{
              background: `radial-gradient(ellipse 800px 800px at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 245, 200, 0.15) 0%, rgba(255, 245, 200, 0.08) 15%, rgba(0, 0, 0, 0.85) 40%, rgba(0, 0, 0, 0.98) 70%, rgba(0, 0, 0, 1) 100%)`
            }}
          />

          {/* Enlarged dark blur layer behind image */}
          <div
            className="absolute"
            style={{
              width: '105%',
              height: '105%',
              filter: 'blur(80px)',
              background: 'rgba(0, 0, 0, 0.95)',
              zIndex: 5
            }}
          />

          <img
            src="https://media.gettyimages.com/id/515381276/zh/%E7%85%A7%E7%89%87/adolf-hitler-closeup-shot-of-the-chancellor-speaking-over-the-radio-microphone.jpg?s=612x612&w=gi&k=20&c=JTD-yuGnQ2Dh2fNN6qtDgjwlXGOynwHRnPoMpNaGTSQ="
            alt="Central themed image"
            className="max-w-full max-h-full object-contain relative transition-transform duration-300 hover:scale-105"
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

        {/* Feedback Button */}
        <button
          onClick={() => setShowModal(true)}
          className="fixed bottom-8 right-8 z-20 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-full shadow-lg hover:shadow-2xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
        >
          Contact Us
        </button>

        {/* Feedback Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-4">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-600 rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-300 scale-100 animate-slideIn">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-yellow-500">Contact & Feedback</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-200 transform hover:scale-110 hover:rotate-90"
                >
                  <X size={24} />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-yellow-400 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-yellow-400 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-yellow-400 mb-2 font-medium">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 transition-all duration-200 resize-none"
                    placeholder="Your message or feedback..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(5px);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Index;
