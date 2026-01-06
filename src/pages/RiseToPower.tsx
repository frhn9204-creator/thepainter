import { Link } from 'react-router-dom';

const RiseToPower = () => (
  <div className="min-h-screen bg-black text-white p-8">
    <Link to="/" className="text-yellow-500">← Home</Link>
    <h1 className="text-3xl font-bold mt-4 mb-2">Rise to Power (1919-1933)</h1>
    <p className="text-gray-400 mb-4">Joined Nazi Party 1919. Failed coup 1923. Wrote Mein Kampf in prison. Used propaganda and economic crisis to gain support. Appointed Chancellor Jan 30, 1933.</p>
    <p className="text-gray-500 italic">"He promised greatness. He delivered death."</p>
    <Link to="/ideology" className="text-yellow-500 block mt-6">Next →</Link>
  </div>
);

export default RiseToPower;
