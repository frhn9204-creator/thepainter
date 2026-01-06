import { Link } from 'react-router-dom';

const Index = () => (
  <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
    <h1 className="text-2xl mb-1">a painter with the</h1>
    <h2 className="text-5xl text-red-600 font-bold mb-1">colour red</h2>
    <h3 className="text-2xl text-yellow-500 mb-8">"hitler"</h3>
    <nav className="flex flex-wrap gap-3 justify-center">
      <Link to="/early-life" className="text-gray-400 hover:text-yellow-500">Early Life</Link>
      <Link to="/rise-to-power" className="text-gray-400 hover:text-yellow-500">Rise to Power</Link>
      <Link to="/ideology" className="text-gray-400 hover:text-yellow-500">Ideology</Link>
      <Link to="/holocaust" className="text-gray-400 hover:text-yellow-500">Holocaust</Link>
      <Link to="/aftermath" className="text-gray-400 hover:text-yellow-500">Aftermath</Link>
      <Link to="/epilogue" className="text-gray-400 hover:text-yellow-500">Epilogue</Link>
    </nav>
    <p className="text-gray-600 text-xs mt-8">built by farhan 9204</p>
  </div>
);

export default Index;
