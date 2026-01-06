import { Link } from 'react-router-dom';

const RiseToPower = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <nav className="mb-8">
        <Link to="/" className="text-yellow-500 hover:underline">← Back to Home</Link>
      </nav>

      <h1 className="text-4xl font-bold mb-2">The Rise to Power</h1>
      <p className="text-red-500 mb-8">1919 - 1933: From Beer Halls to the Chancellery</p>

      <section className="mb-8 p-6 border border-gray-700 rounded">
        <h2 className="text-2xl text-yellow-500 mb-4">Discovery of Political Power</h2>
        <p className="text-gray-300 mb-4">
          In 1919, Hitler joined the German Workers' Party. He discovered his gift for manipulating crowds with rage-filled speeches.
        </p>
        <ul className="text-gray-300 space-y-2">
          <li>• 1920: Party renamed to NSDAP (Nazi Party)</li>
          <li>• Adopted the swastika symbol</li>
          <li>• Formed the SA "Brownshirts"</li>
        </ul>
      </section>

      <section className="mb-8 p-6 border border-gray-700 rounded">
        <h2 className="text-2xl text-yellow-500 mb-4">The Beer Hall Putsch (1923)</h2>
        <p className="text-gray-300 mb-4">
          Hitler attempted a coup in Munich. It failed. He was arrested and sentenced to 5 years but served only 9 months.
        </p>
        <p className="text-gray-300">
          In prison, he wrote "Mein Kampf" — a blueprint of his hateful ideology.
        </p>
      </section>

      <section className="mb-8 p-6 border border-gray-700 rounded">
        <h2 className="text-2xl text-yellow-500 mb-4">The Legal Road to Dictatorship</h2>
        <p className="text-gray-300 mb-4">
          The Great Depression of 1929 created desperation. Hitler's message found an audience.
        </p>
        <ul className="text-gray-300 space-y-2 mb-4">
          <li>• 1928: 2.6% of vote</li>
          <li>• 1930: 18.3% of vote</li>
          <li>• 1932: 37.3% of vote (largest party)</li>
          <li>• Jan 30, 1933: Appointed Chancellor</li>
        </ul>
      </section>

      <section className="mb-8 p-6 border border-gray-700 rounded">
        <h2 className="text-2xl text-yellow-500 mb-4">The Death of Democracy</h2>
        <p className="text-gray-300 mb-4">
          The Reichstag fire (Feb 1933) gave Hitler the pretext to suspend civil liberties. The Enabling Act gave him dictatorial powers.
        </p>
        <p className="text-gray-300">
          When Hindenburg died in 1934, Hitler became "Führer" — absolute leader.
        </p>
      </section>

      <div className="p-6 bg-red-900/20 border border-red-500 rounded text-center">
        <p className="text-xl italic">"He promised greatness. He delivered death."</p>
      </div>

      <div className="mt-8 text-center">
        <Link to="/ideology" className="text-yellow-500 hover:underline">Next: Ideology →</Link>
      </div>
    </div>
  );
};

export default RiseToPower;
