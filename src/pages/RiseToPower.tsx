import { Link } from 'react-router-dom';
import PageNavigation from '@/components/PageNavigation';

const RiseToPower = () => (
  <div className="min-h-screen bg-black text-white p-8">
    <PageNavigation />
    <Link to="/" className="text-yellow-500">← Home</Link>
    <h1 className="text-3xl font-bold mt-4 mb-2">Rise to Power (1919-1933)</h1>
    <p className="text-gray-400 mb-3">In September 1919, Hitler was sent by the German army to spy on the German Workers' Party (DAP). Instead, he was captivated by their nationalist ideas and joined as member #555. His fiery speeches quickly drew crowds.</p>
    <p className="text-gray-400 mb-3">By 1920, the party was renamed the National Socialist German Workers' Party (NSDAP) — the Nazis. Hitler designed their flag: a black swastika in a white circle on a red background. He created the "Heil Hitler" salute.</p>
    <p className="text-gray-400 mb-3">In 1921, Hitler became party chairman with dictatorial powers. He formed the SA (Sturmabteilung) — "Brownshirts" — paramilitary thugs who intimidated opponents and protected Nazi rallies through violence.</p>
    <p className="text-gray-400 mb-3">November 8-9, 1923: The Beer Hall Putsch. Hitler and 2,000 Nazis attempted to overthrow the Bavarian government in Munich as the first step toward seizing national power. Police fired on the marchers, killing 16 Nazis and 4 police officers. Hitler fled but was arrested two days later.</p>
    <p className="text-gray-400 mb-3">His trial became a propaganda platform. Hitler used it to spread his ideology nationally. Sentenced to 5 years, he served only 9 months in comfortable conditions at Landsberg Prison.</p>
    <p className="text-gray-400 mb-3">In prison, Hitler dictated "Mein Kampf" (My Struggle) to Rudolf Hess. The book outlined his racist worldview, hatred of Jews, belief in German racial superiority, and plans for territorial expansion — "Lebensraum" (living space) in Eastern Europe.</p>
    <p className="text-gray-400 mb-3">The 1920s were difficult for the Nazis. Germany stabilized economically, and extremism lost appeal. In 1928, the Nazi Party won only 2.6% of votes (12 seats).</p>
    <p className="text-gray-400 mb-3">Then came the Great Depression. Beginning in 1929, it devastated Germany: 6 million unemployed, banks collapsed, families starved. Hitler blamed Jews, Communists, and the Weimar Republic. He promised jobs, bread, and German greatness.</p>
    <p className="text-gray-400 mb-3">Nazi support exploded. In 1930: 18% (107 seats). In July 1932: 37% (230 seats) — the largest party in Germany. Hitler demanded the chancellorship.</p>
    <p className="text-gray-400 mb-3">After months of political scheming, President Hindenburg appointed Hitler Chancellor on January 30, 1933. The Nazis celebrated with torchlight parades through Berlin.</p>
    <p className="text-gray-400 mb-3">Within weeks, the Reichstag (parliament) burned — likely set by Nazis. Hitler used it as pretext to suspend civil liberties. The Enabling Act gave him dictatorial powers. Opposition parties were banned. Democracy in Germany was dead.</p>
    <p className="text-gray-500 italic">"He promised greatness. He delivered death."</p>
    <Link to="/ideology" className="text-yellow-500 block mt-6">Next →</Link>
  </div>
);

export default RiseToPower;
