import { Link } from 'react-router-dom';

const EarlyLife = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link to="/" className="text-yellow-500 hover:underline">← Back to Home</Link>
      </nav>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">The Early Years</h1>
      <p className="text-red-500 mb-8">1889 - 1918: Austria to the Trenches</p>

      {/* Birth Section */}
      <section className="mb-8 p-6 border border-gray-700 rounded">
        <h2 className="text-2xl text-yellow-500 mb-4">Born in Braunau am Inn, Austria</h2>
        <p className="text-gray-300 mb-4">
          On April 20, 1889, Adolf Hitler was born in a small Austrian town. His father Alois was a stern customs official, his mother Klara was devoted but fragile.
        </p>
        <p className="text-gray-300">
          His childhood was marked by his father's harsh discipline. After his father's death in 1903, Hitler dreamed of becoming an artist.
        </p>
      </section>

      {/* Art School Section */}
      <section className="mb-8 p-6 border border-gray-700 rounded">
        <h2 className="text-2xl text-yellow-500 mb-4">The Failed Artist</h2>
        <p className="text-gray-300 mb-4">
          In 1907, Hitler moved to Vienna to attend the Academy of Fine Arts. He was rejected twice.
        </p>
        <p className="text-gray-300 mb-4">
          He spent years in poverty, selling postcards on the street. He developed deep bitterness and began reading anti-Semitic pamphlets.
        </p>
        <blockquote className="border-l-4 border-red-500 pl-4 text-gray-400 italic">
          "The seeds of his ideology were planted in the gutters of Vienna."
        </blockquote>
      </section>

      {/* WWI Section */}
      <section className="mb-8 p-6 border border-gray-700 rounded">
        <h2 className="text-2xl text-yellow-500 mb-4">World War I</h2>
        <p className="text-gray-300 mb-4">
          In 1914, Hitler volunteered for the German Army. He served as a dispatch runner on the Western Front.
        </p>
        <ul className="text-gray-300 space-y-2 mb-4">
          <li>• Wounded twice (1916 leg, 1918 gas attack)</li>
          <li>• Awarded Iron Cross First and Second Class</li>
          <li>• Never promoted above Corporal</li>
        </ul>
        <p className="text-gray-300">
          When Germany surrendered, he was hospitalized and wept with rage. He believed Germany had been "stabbed in the back."
        </p>
      </section>

      {/* Quote */}
      <div className="p-6 bg-red-900/20 border border-red-500 rounded text-center">
        <p className="text-xl italic">
          "From the ashes of a failed artist and bitter soldier, a dangerous ideologue was being born."
        </p>
      </div>

      {/* Next Page */}
      <div className="mt-8 text-center">
        <Link to="/rise-to-power" className="text-yellow-500 hover:underline">
          Next: Rise to Power →
        </Link>
      </div>
    </div>
  );
};

export default EarlyLife;
