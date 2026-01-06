import { Link } from 'react-router-dom';

const EarlyLife = () => (
  <div className="min-h-screen bg-black text-white p-8">
    <Link to="/" className="text-yellow-500">← Home</Link>
    <h1 className="text-3xl font-bold mt-4 mb-2">Early Years (1889-1918)</h1>
    <p className="text-gray-400 mb-4">Born in Austria. Failed artist. Rejected twice from Vienna art school. Served in WWI as a dispatch runner. Wounded twice, awarded Iron Cross.</p>
    <p className="text-gray-500 italic">"From the ashes of a failed artist, a dangerous ideologue was born."</p>
    <Link to="/rise-to-power" className="text-yellow-500 block mt-6">Next →</Link>
  </div>
);

export default EarlyLife;
