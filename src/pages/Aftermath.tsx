import { Link } from 'react-router-dom';

const Aftermath = () => (
  <div className="min-h-screen bg-black text-white p-8">
    <Link to="/" className="text-yellow-500">← Home</Link>
    <h1 className="text-3xl font-bold mt-4 mb-2">The Aftermath</h1>
    <p className="text-gray-400 mb-3">April 30, 1945: As Allied forces closed in on Berlin, Hitler committed suicide in his underground bunker. Germany surrendered days later on May 8.</p>
    <p className="text-gray-400 mb-3">World War II killed 70-85 million people — 3% of the world's population. Europe lay in ruins. Cities were destroyed. Millions were homeless.</p>
    <p className="text-gray-400 mb-3">The Nuremberg Trials (1945-46) prosecuted Nazi leaders for war crimes and crimes against humanity. Many were executed; some escaped justice.</p>
    <p className="text-gray-400 mb-3">In 1948, Israel was established as a homeland for Jews. Survivors rebuilt their lives, but trauma passed through generations. Many families were entirely wiped out.</p>
    <p className="text-gray-400 mb-3">Holocaust memorials stand worldwide: Yad Vashem, the US Holocaust Museum, Auschwitz-Birkenau. They remind us: Never Again.</p>
    <p className="text-gray-500 italic">"He left only ashes."</p>
    <Link to="/epilogue" className="text-yellow-500 block mt-6">Next →</Link>
  </div>
);

export default Aftermath;
