import { Link } from 'react-router-dom';
import PageNavigation from '@/components/PageNavigation';

const Epilogue = () => (
  <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center text-center">
    <PageNavigation />
    <h1 className="text-3xl font-bold mb-4">Epilogue: Never Again</h1>
    <p className="text-gray-400 mb-3 max-w-2xl">12 years of Nazi rule. 70-85 million dead in World War II. 11 million murdered in the Holocaust — 6 million Jews and 5 million others. A continent in ruins. Millions of families torn apart forever.</p>
    <p className="text-gray-400 mb-3 max-w-2xl">Adolf Hitler rose from failed artist to absolute dictator by exploiting economic despair, spreading hatred, and destroying democratic institutions. He was enabled by millions who followed orders, looked away, or stayed silent.</p>
    <p className="text-gray-400 mb-3 max-w-2xl">From this unprecedented darkness emerged new institutions of hope. The United Nations was founded in 1945 to prevent future conflicts. The Universal Declaration of Human Rights (1948) established that all humans have inherent dignity and rights.</p>
    <p className="text-gray-400 mb-3 max-w-2xl">The Genocide Convention (1948) made genocide an international crime. The Geneva Conventions strengthened protections for civilians and prisoners of war. Never again would the world claim ignorance.</p>
    <p className="text-gray-400 mb-3 max-w-2xl">Today, Holocaust denial is a crime in 17 countries. Education programs ensure new generations understand what happened and how. Survivors continue sharing testimony so the world won't forget.</p>
    <p className="text-gray-400 mb-3 max-w-2xl">But the lessons remain urgent. Genocides have occurred since: Cambodia, Rwanda, Bosnia, Darfur. Anti-Semitism and hate crimes persist. Authoritarian leaders still rise by scapegoating minorities and attacking free press.</p>
    <p className="text-gray-400 mb-3 max-w-2xl">The Holocaust teaches us: Hate can be taught — but so can tolerance. Lies spread quickly — truth requires vigilance. Ordinary people can commit extraordinary evil — or extraordinary courage. Silence is complicity.</p>
    <p className="text-gray-400 mb-4 max-w-2xl">Democracy is fragile. Rights can be stripped away. It happened before. It can happen again. We must remain watchful, speak against injustice, and remember those who perished.</p>
    <p className="text-gray-500 italic mb-6">"Those who cannot remember the past are condemned to repeat it." — George Santayana</p>
    <p className="text-gray-600 text-sm mb-6">In memory of the 11 million victims. May their souls rest in peace.</p>
    <Link to="/" className="text-yellow-500">← Return to Beginning</Link>
  </div>
);

export default Epilogue;
