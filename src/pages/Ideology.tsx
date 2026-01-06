import { Link } from 'react-router-dom';

const Ideology = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <nav className="mb-8">
        <Link to="/" className="text-yellow-500 hover:underline">← Back to Home</Link>
      </nav>

      <h1 className="text-4xl font-bold mb-2">The Ideology of Hatred</h1>
      <p className="text-red-500 mb-8">How Propaganda Shaped a Nation</p>

      <section className="mb-8 p-6 border border-gray-700 rounded">
        <h2 className="text-2xl text-yellow-500 mb-4">The Mechanics of Control</h2>
        <p className="text-gray-300 mb-4">
          Joseph Goebbels controlled all media. Independent press was crushed.
        </p>
        <ul className="text-gray-300 space-y-2">
          <li>• <strong>Media Monopoly:</strong> All newspapers and radio controlled by state</li>
          <li>• <strong>Book Burnings:</strong> 25,000 books destroyed on May 10, 1933</li>
          <li>• <strong>The Big Lie:</strong> "Make the lie big, keep saying it, they will believe it"</li>
        </ul>
      </section>

      <section className="mb-8 p-6 border border-gray-700 rounded">
        <h2 className="text-2xl text-yellow-500 mb-4">The Nuremberg Laws (1935)</h2>
        <p className="text-gray-300 mb-4">
          Jews were stripped of citizenship. Hatred was codified into law.
        </p>
        <ul className="text-gray-300 space-y-2">
          <li>• Jews became "subjects," not citizens</li>
          <li>• Marriage between Jews and non-Jews forbidden</li>
          <li>• Jews excluded from professions, schools, public spaces</li>
        </ul>
      </section>

      <section className="mb-8 p-6 border border-gray-700 rounded">
        <h2 className="text-2xl text-yellow-500 mb-4">Kristallnacht (Nov 9-10, 1938)</h2>
        <p className="text-gray-300 mb-4">
          Nazi mobs destroyed Jewish homes, businesses, and synagogues across Germany.
        </p>
        <ul className="text-gray-300 space-y-2">
          <li>• 267 synagogues destroyed</li>
          <li>• 7,500 businesses looted</li>
          <li>• 91 Jews murdered</li>
          <li>• 30,000 Jewish men sent to concentration camps</li>
        </ul>
      </section>

      <div className="p-6 bg-red-900/20 border border-red-500 rounded text-center">
        <p className="text-xl italic">"When words become weapons, humanity becomes the casualty."</p>
      </div>

      <div className="mt-8 text-center">
        <Link to="/holocaust" className="text-yellow-500 hover:underline">Next: The Holocaust →</Link>
      </div>
    </div>
  );
};

export default Ideology;
