import { Link } from 'react-router-dom';
import PageNavigation from '@/components/PageNavigation';

const Ideology = () => (
  <div className="min-h-screen bg-black text-white p-8">
    <PageNavigation />
    <Link to="/" className="text-yellow-500">← Home</Link>
    <h1 className="text-3xl font-bold mt-4 mb-2">Ideology of Hatred</h1>
    <p className="text-gray-400 mb-3">Nazi ideology rested on pseudoscientific racism. Germans were "Aryans" — a mythical master race destined to rule. Jews, Roma, Slavs, Black people, and disabled individuals were "Untermenschen" (subhumans) who threatened Aryan purity.</p>
    <p className="text-gray-400 mb-3">Anti-Semitism was the core. Hitler blamed Jews for Germany's defeat in WWI, the economic crisis, Communism, and capitalism simultaneously. Jews were portrayed as both weak parasites and powerful conspirators controlling the world.</p>
    <p className="text-gray-400 mb-3">Joseph Goebbels, Propaganda Minister, controlled all information. Radio, newspapers, films, and art served the regime. The 1935 film "Triumph of the Will" glorified Hitler. Anti-Semitic films like "The Eternal Jew" dehumanized Jewish people.</p>
    <p className="text-gray-400 mb-3">On May 10, 1933, Nazi students burned 25,000 books by Jewish, Communist, and "degenerate" authors — Einstein, Freud, Hemingway. Goebbels declared: "The era of extreme Jewish intellectualism is now at an end."</p>
    <p className="text-gray-400 mb-3">Schools became indoctrination centers. Textbooks taught racial science. Teachers were required to join the Nazi Party. Jewish teachers were fired.</p>
    <p className="text-gray-400 mb-3">Hitler Youth (for boys) and League of German Girls trained children in Nazi ideology, physical fitness, and obedience. By 1939, membership was mandatory. 8 million children were enrolled.</p>
    <p className="text-gray-400 mb-3">The Nuremberg Laws (September 1935) stripped Jews of German citizenship. Jews couldn't marry or have relations with "Aryans." They were banned from public spaces, professions, and schools. Yellow Star of David badges marked them publicly.</p>
    <p className="text-gray-400 mb-3">"Aryanization" seized Jewish businesses. Jewish doctors, lawyers, and professors lost their licenses. Many Jews emigrated — but most countries, including the US, refused to accept refugees.</p>
    <p className="text-gray-400 mb-3">November 9-10, 1938: Kristallnacht — "The Night of Broken Glass." After a Jewish teenager shot a German diplomat in Paris, Nazis unleashed coordinated violence across Germany and Austria.</p>
    <p className="text-gray-400 mb-3">The toll: 267 synagogues destroyed, 7,500 Jewish businesses ransacked, 91 Jews murdered, 30,000 arrested and sent to concentration camps. Jewish communities were fined 1 billion Reichsmarks for "damages."</p>
    <p className="text-gray-400 mb-3">The T4 "euthanasia" program (1939-1941) secretly murdered 70,000+ disabled Germans — the first mass murder using gas chambers. Doctors selected victims. Families received fake death certificates. This was a rehearsal for the Holocaust.</p>
    <p className="text-gray-500 italic">"When words become weapons, humanity becomes the casualty."</p>
    <Link to="/holocaust" className="text-yellow-500 block mt-6">Next →</Link>
  </div>
);

export default Ideology;
