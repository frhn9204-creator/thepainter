import { Link } from 'react-router-dom';

const Holocaust = () => (
  <div className="min-h-screen bg-black text-white p-8">
    <Link to="/" className="text-yellow-500">← Home</Link>
    <h1 className="text-3xl font-bold mt-4 mb-2">The Holocaust (1941-1945)</h1>
    <p className="text-gray-400 mb-3">The "Final Solution" — Nazi Germany's plan to exterminate all Jews in Europe. It was systematic, bureaucratic, industrial-scale murder.</p>
    <p className="text-gray-400 mb-3">6 million Jews were murdered — 2/3 of Europe's Jewish population. 1.5 million were children. Additionally, 5 million others were killed: Roma, disabled, POWs, political prisoners.</p>
    <p className="text-gray-400 mb-3">Death camps like Auschwitz, Treblinka, and Sobibor used gas chambers for mass murder. Auschwitz alone killed 1.1 million people. Bodies were burned in crematoriums.</p>
    <p className="text-gray-400 mb-3">Victims were transported in cattle cars. Families were separated. The elderly, sick, and children went directly to gas chambers. Others worked until death.</p>
    <p className="text-gray-400 mb-3">Names lost. Families erased. Communities destroyed. The Holocaust remains humanity's darkest chapter — a warning that must never be forgotten.</p>
    <p className="text-gray-500 italic">"Each one a name. A face. A life. Never forget."</p>
    <Link to="/aftermath" className="text-yellow-500 block mt-6">Next →</Link>
  </div>
);

export default Holocaust;
