import { Link } from 'react-router-dom';

const RiseToPower = () => (
  <div className="min-h-screen bg-black text-white p-8">
    <Link to="/" className="text-yellow-500">← Home</Link>
    <h1 className="text-3xl font-bold mt-4 mb-2">Rise to Power (1919-1933)</h1>
    <p className="text-gray-400 mb-3">In 1919, Hitler joined the German Workers' Party (later Nazi Party). His powerful speeches attracted followers. By 1921, he became party leader.</p>
    <p className="text-gray-400 mb-3">November 1923: The Beer Hall Putsch — a failed coup attempt in Munich. Hitler was arrested and sentenced to 5 years but served only 9 months.</p>
    <p className="text-gray-400 mb-3">In prison, he wrote "Mein Kampf" (My Struggle), outlining his racist ideology and plans for German expansion. It became Nazi doctrine.</p>
    <p className="text-gray-400 mb-3">The Great Depression (1929) brought mass unemployment. Hitler blamed Jews and promised jobs, pride, and revenge. Nazi Party seats rose from 12 to 230.</p>
    <p className="text-gray-400 mb-3">January 30, 1933: Hitler was appointed Chancellor of Germany. Democracy died within months. The Third Reich had begun.</p>
    <p className="text-gray-500 italic">"He promised greatness. He delivered death."</p>
    <Link to="/ideology" className="text-yellow-500 block mt-6">Next →</Link>
  </div>
);

export default RiseToPower;
