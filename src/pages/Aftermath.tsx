import { Link } from 'react-router-dom';

const Aftermath = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <nav className="mb-8">
        <Link to="/" className="text-yellow-500 hover:underline">← Back to Home</Link>
      </nav>

      <h1 className="text-4xl font-bold mb-2">The Aftermath</h1>
      <p className="text-red-500 mb-8">Liberation, Justice, and "Never Again"</p>

      <section className="mb-8 p-6 border border-gray-700 rounded">
        <h2 className="text-2xl text-yellow-500 mb-4">Hitler's Final Days</h2>
        <p className="text-gray-300 mb-4">
          April 1945. Allied forces closed in on Berlin. Hitler retreated to his bunker.
        </p>
        <p className="text-gray-300 mb-4">
          On April 30, 1945, Hitler and Eva Braun committed suicide. Their bodies were burned outside the bunker.
        </p>
        <p className="text-gray-300">
          He took no responsibility. His final testament blamed Jews for everything.
        </p>
      </section>

      <section className="mb-8 p-6 border border-gray-700 rounded">
        <h2 className="text-2xl text-yellow-500 mb-4">Displaced Persons</h2>
        <p className="text-gray-300 mb-4">
          Survivors were skeletal, traumatized, with no homes to return to.
        </p>
        <ul className="text-gray-300 space-y-2">
          <li>• 7-11 million displaced persons in Europe</li>
          <li>• Many spent years in DP camps</li>
          <li>• Countries reluctant to accept Jewish refugees</li>
          <li>• Trauma passed to children and grandchildren</li>
        </ul>
      </section>

      <section className="mb-8 p-6 border border-gray-700 rounded">
        <h2 className="text-2xl text-yellow-500 mb-4">The Birth of Israel (1948)</h2>
        <p className="text-gray-300">
          On May 14, 1948, the State of Israel was declared — offering Jews a refuge and a promise: this would never happen again.
        </p>
      </section>

      <section className="mb-8 p-6 border border-gray-700 rounded">
        <h2 className="text-2xl text-yellow-500 mb-4">Memorials</h2>
        <ul className="text-gray-300 space-y-2">
          <li>• <strong>Yad Vashem</strong> — Israel's Holocaust memorial</li>
          <li>• <strong>Auschwitz Memorial</strong> — preserved as site of memory</li>
          <li>• <strong>Holocaust Museums</strong> — Washington D.C., Berlin, worldwide</li>
        </ul>
      </section>

      <div className="p-6 bg-red-900/20 border border-red-500 rounded text-center">
        <p className="text-xl italic mb-2">"He came from Austria. He dreamed of empire. He left only ashes."</p>
        <p className="text-gray-400 text-sm">Remember the victims. Remember the warning.</p>
      </div>

      <div className="mt-8 text-center">
        <Link to="/epilogue" className="text-yellow-500 hover:underline">Next: Epilogue →</Link>
      </div>
    </div>
  );
};

export default Aftermath;
