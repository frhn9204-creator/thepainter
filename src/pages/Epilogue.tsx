import { Link } from 'react-router-dom';

const Epilogue = () => (
  <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center text-center">
    <h1 className="text-3xl font-bold mb-4">Epilogue</h1>
    <p className="text-gray-400 mb-3 max-w-lg">12 years of Nazi rule. 70+ million dead in WWII. 11 million murdered in the Holocaust. A continent in ruins. Families torn apart forever.</p>
    <p className="text-gray-400 mb-3 max-w-lg">From this darkness emerged the United Nations, the Universal Declaration of Human Rights, and international laws against genocide.</p>
    <p className="text-gray-400 mb-3 max-w-lg">Today, Holocaust denial is a crime in many countries. Education programs ensure new generations understand the dangers of hatred, propaganda, and silence.</p>
    <p className="text-gray-400 mb-4 max-w-lg">The lessons remain urgent: Hate can be taught. Lies can spread. Ordinary people can commit extraordinary evil. We must remain vigilant.</p>
    <p className="text-gray-500 italic mb-6">"Those who cannot remember the past are condemned to repeat it." — George Santayana</p>
    <Link to="/" className="text-yellow-500">← Return to Beginning</Link>
  </div>
);

export default Epilogue;
