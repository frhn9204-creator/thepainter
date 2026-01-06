import { Link } from 'react-router-dom';

const Ideology = () => (
  <div className="min-h-screen bg-black text-white p-8">
    <Link to="/" className="text-yellow-500">← Home</Link>
    <h1 className="text-3xl font-bold mt-4 mb-2">Ideology of Hatred</h1>
    <p className="text-gray-400 mb-4">Total media control. Book burnings. Nuremberg Laws 1935 stripped Jews of rights. Kristallnacht 1938: 267 synagogues destroyed, 30,000 arrested.</p>
    <p className="text-gray-500 italic">"When words become weapons, humanity becomes the casualty."</p>
    <Link to="/holocaust" className="text-yellow-500 block mt-6">Next →</Link>
  </div>
);

export default Ideology;
