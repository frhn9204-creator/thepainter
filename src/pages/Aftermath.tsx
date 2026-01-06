import { Link } from 'react-router-dom';

const Aftermath = () => (
  <div className="min-h-screen bg-black text-white p-8">
    <Link to="/" className="text-yellow-500">← Home</Link>
    <h1 className="text-3xl font-bold mt-4 mb-2">The Aftermath</h1>
    <p className="text-gray-400 mb-4">Hitler died April 30, 1945 in his bunker. Millions displaced. Israel founded 1948. Memorials built worldwide. The trauma continues through generations.</p>
    <p className="text-gray-500 italic">"He left only ashes."</p>
    <Link to="/epilogue" className="text-yellow-500 block mt-6">Next →</Link>
  </div>
);

export default Aftermath;
