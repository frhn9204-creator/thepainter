import { Link } from 'react-router-dom';

const EarlyLife = () => (
  <div className="min-h-screen bg-black text-white p-8">
    <Link to="/" className="text-yellow-500">← Home</Link>
    <h1 className="text-3xl font-bold mt-4 mb-2">Early Years (1889-1918)</h1>
    <p className="text-gray-400 mb-3">Adolf Hitler was born on April 20, 1889, in Braunau am Inn, Austria. His father Alois was strict; his mother Klara was loving. He dreamed of becoming an artist.</p>
    <p className="text-gray-400 mb-3">Rejected twice by the Vienna Academy of Fine Arts in 1907 and 1908. Lived in homeless shelters, selling postcards to survive. Developed deep resentment toward society.</p>
    <p className="text-gray-400 mb-3">In 1914, WWI began. Hitler enlisted in the German army as a dispatch runner. Wounded twice, temporarily blinded by gas attack. Awarded the Iron Cross for bravery.</p>
    <p className="text-gray-400 mb-3">Germany's defeat in 1918 devastated him. He blamed Jews and Marxists for the loss, planting seeds of hatred that would later consume Europe.</p>
    <p className="text-gray-500 italic">"From the ashes of a failed artist, a dangerous ideologue was born."</p>
    <Link to="/rise-to-power" className="text-yellow-500 block mt-6">Next →</Link>
  </div>
);

export default EarlyLife;
