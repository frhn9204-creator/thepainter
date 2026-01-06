import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      {/* Central Image */}
      <div className="mb-8">
        <img
          src="https://media.gettyimages.com/id/515381276/zh/%E7%85%A7%E7%89%87/adolf-hitler-closeup-shot-of-the-chancellor-speaking-over-the-radio-microphone.jpg?s=612x612&w=gi&k=20&c=JTD-yuGnQ2Dh2fNN6qtDgjwlXGOynwHRnPoMpNaGTSQ="
          alt="Historical figure"
          className="w-64 h-64 object-cover rounded-full opacity-90"
        />
      </div>

      {/* Title */}
      <h1 className="text-center mb-8">
        <span className="block text-white text-2xl tracking-widest mb-2">a painter with the</span>
        <span className="block text-red-600 text-5xl font-bold mb-2">colour red</span>
        <span className="block text-yellow-500 text-3xl">"hitler"</span>
      </h1>

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-4 mb-8">
        <Link to="/early-life" className="px-4 py-2 text-gray-300 hover:text-yellow-500 border border-gray-700 rounded hover:border-yellow-500">
          Early Life
        </Link>
        <Link to="/rise-to-power" className="px-4 py-2 text-gray-300 hover:text-yellow-500 border border-gray-700 rounded hover:border-yellow-500">
          Rise to Power
        </Link>
        <Link to="/ideology" className="px-4 py-2 text-gray-300 hover:text-yellow-500 border border-gray-700 rounded hover:border-yellow-500">
          Ideology
        </Link>
        <Link to="/holocaust" className="px-4 py-2 text-gray-300 hover:text-yellow-500 border border-gray-700 rounded hover:border-yellow-500">
          Holocaust
        </Link>
        <Link to="/aftermath" className="px-4 py-2 text-gray-300 hover:text-yellow-500 border border-gray-700 rounded hover:border-yellow-500">
          Aftermath
        </Link>
        <Link to="/epilogue" className="px-4 py-2 text-gray-300 hover:text-yellow-500 border border-gray-700 rounded hover:border-yellow-500">
          Epilogue
        </Link>
      </nav>

      {/* Credits */}
      <p className="text-gray-500 text-xs">built by farhan 9204</p>
    </div>
  );
};

export default Index;
