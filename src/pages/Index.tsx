import { useState } from 'react';
import { X } from 'lucide-react';

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
    setShowModal(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative">
      {/* Central Image */}
      <div className="relative mb-8">
        <img
          src="https://media.gettyimages.com/id/515381276/zh/%E7%85%A7%E7%89%87/adolf-hitler-closeup-shot-of-the-chancellor-speaking-over-the-radio-microphone.jpg?s=612x612&w=gi&k=20&c=JTD-yuGnQ2Dh2fNN6qtDgjwlXGOynwHRnPoMpNaGTSQ="
          alt="Historical figure"
          className="w-64 h-64 object-cover rounded-full opacity-90"
        />
      </div>

      {/* Title */}
      <h1 className="text-center mb-4">
        <span className="block text-white text-2xl tracking-widest mb-2">a painter with the</span>
        <span className="block text-red-600 text-5xl font-bold mb-2">colour red</span>
        <span className="block text-yellow-500 text-3xl">"hitler"</span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 text-sm mb-8">Scroll to explore history</p>

      {/* Credits */}
      <p className="text-gray-500 text-xs">built by farhan 9204</p>

      {/* Contact Button */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-8 right-8 px-6 py-3 bg-gray-800 border border-yellow-500 text-yellow-500 rounded-full hover:bg-gray-700"
      >
        Contact Us
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 border border-yellow-600 rounded-xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl text-yellow-500 font-bold">Contact</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
              />
              <input
                type="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
              />
              <textarea
                required
                placeholder="Message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
              />
              <button type="submit" className="w-full py-2 bg-yellow-500 text-black font-bold rounded">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
