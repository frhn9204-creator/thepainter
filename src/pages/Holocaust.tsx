import { Link } from 'react-router-dom';

const Holocaust = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <nav className="mb-8">
        <Link to="/" className="text-yellow-500 hover:underline">← Back to Home</Link>
      </nav>

      <h1 className="text-4xl font-bold mb-2">The Holocaust</h1>
      <p className="text-red-500 mb-8">The Darkest Chapter of Human History</p>

      <section className="mb-8 p-6 border border-gray-700 rounded">
        <h2 className="text-2xl text-yellow-500 mb-4">The Scale of Evil</h2>
        <p className="text-gray-300 mb-4">
          The Holocaust was systematic, industrial genocide. Murder as policy.
        </p>
        <ul className="text-gray-300 space-y-2">
          <li>• <strong>6 million Jews</strong> — two-thirds of Europe's Jewish population</li>
          <li>• <strong>1.5 million children</strong></li>
          <li>• <strong>5 million others</strong> — Roma, disabled, LGBTQ+, political prisoners</li>
        </ul>
      </section>

      <section className="mb-8 p-6 border border-gray-700 rounded">
        <h2 className="text-2xl text-yellow-500 mb-4">Auschwitz: Factory of Death</h2>
        <p className="text-gray-300 mb-4">
          The largest death camp. Over 1.1 million murdered — 90% were Jews.
        </p>
        <blockquote className="border-l-4 border-red-500 pl-4 text-gray-400 italic mb-4">
          "Arbeit Macht Frei" — "Work Sets You Free" — The lie at the entrance.
        </blockquote>
        <p className="text-gray-300">
          SS doctors selected who lived (temporarily) and who died immediately. Most were gassed within hours of arrival.
        </p>
      </section>

      <section className="mb-8 p-6 border border-gray-700 rounded">
        <h2 className="text-2xl text-yellow-500 mb-4">The Einsatzgruppen</h2>
        <p className="text-gray-300 mb-4">
          Mobile killing squads that followed the German army into Eastern Europe.
        </p>
        <div className="p-4 bg-gray-800 rounded">
          <h3 className="text-red-500 font-bold mb-2">Babi Yar: 33,771 Dead in Two Days</h3>
          <p className="text-gray-400 text-sm">
            Sept 29-30, 1941. Near Kyiv, Ukraine. Men, women, and children shot and thrown into pits.
          </p>
        </div>
      </section>

      <div className="p-6 bg-red-900/20 border border-red-500 rounded text-center">
        <p className="text-xl italic mb-2">"Six million Jews. Eleven million total. Each one a name. A life."</p>
        <p className="text-gray-400 text-sm">Never forget. Never again.</p>
      </div>

      <div className="mt-8 text-center">
        <Link to="/aftermath" className="text-yellow-500 hover:underline">Next: The Aftermath →</Link>
      </div>
    </div>
  );
};

export default Holocaust;
