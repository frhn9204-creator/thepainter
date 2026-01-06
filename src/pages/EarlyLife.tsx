import { Link } from 'react-router-dom';

const EarlyLife = () => (
  <div className="min-h-screen bg-black text-white p-8">
    <Link to="/" className="text-yellow-500">← Home</Link>
    <h1 className="text-3xl font-bold mt-4 mb-2">Early Years (1889-1918)</h1>
    <p className="text-gray-400 mb-3">Adolf Hitler was born on April 20, 1889, in Braunau am Inn, a small Austrian border town. His father Alois was a strict customs official who died when Adolf was 13. His mother Klara was devoted to him — her death from cancer in 1907 devastated the young Hitler.</p>
    <p className="text-gray-400 mb-3">Hitler dreamed of becoming a great artist. He applied to the Vienna Academy of Fine Arts in 1907 and again in 1908 — rejected both times. The Academy said his work lacked talent for painting humans. This failure haunted him for life.</p>
    <p className="text-gray-400 mb-3">From 1909-1913, Hitler lived in poverty in Vienna. He stayed in homeless shelters and cheap hostels, surviving by selling hand-painted postcards of buildings. During this time, he absorbed anti-Semitic ideas from pamphlets and politicians in Vienna.</p>
    <p className="text-gray-400 mb-3">When World War I erupted in 1914, Hitler was living in Munich. He eagerly enlisted in the German army as a dispatch runner — a dangerous job carrying messages between command posts and front-line trenches.</p>
    <p className="text-gray-400 mb-3">He was wounded twice: in 1916 at the Battle of the Somme (shrapnel to the leg), and in 1918 by a British mustard gas attack that left him temporarily blind. He received the Iron Cross First Class — rare for a corporal — for bravery.</p>
    <p className="text-gray-400 mb-3">Germany's defeat in November 1918 shocked Hitler. The Treaty of Versailles imposed harsh penalties: loss of territory, military restrictions, and massive reparations. Hitler, like many Germans, felt betrayed and humiliated.</p>
    <p className="text-gray-400 mb-3">He blamed the defeat on Jews and Marxists — the "stab-in-the-back" myth. This conspiracy theory claimed Germany's army wasn't defeated but was betrayed by politicians at home. It became central to Nazi ideology.</p>
    <p className="text-gray-500 italic">"From the ashes of a failed artist, a dangerous ideologue was born."</p>
    <Link to="/rise-to-power" className="text-yellow-500 block mt-6">Next →</Link>
  </div>
);

export default EarlyLife;
