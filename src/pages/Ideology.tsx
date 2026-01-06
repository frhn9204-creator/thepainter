import { Link } from 'react-router-dom';

const Ideology = () => (
  <div className="min-h-screen bg-black text-white p-8">
    <Link to="/" className="text-yellow-500">← Home</Link>
    <h1 className="text-3xl font-bold mt-4 mb-2">Ideology of Hatred</h1>
    <p className="text-gray-400 mb-3">Nazi ideology was built on racial supremacy. "Aryans" were the master race; Jews, Roma, disabled people, and others were deemed "subhuman."</p>
    <p className="text-gray-400 mb-3">Joseph Goebbels controlled all media. Books were burned. Art was censored. Schools taught Nazi propaganda. Children joined Hitler Youth.</p>
    <p className="text-gray-400 mb-3">The Nuremberg Laws (1935) stripped Jews of citizenship. They couldn't marry Germans, own businesses, or attend schools. Yellow stars marked them.</p>
    <p className="text-gray-400 mb-3">Kristallnacht — "Night of Broken Glass" (Nov 9-10, 1938): 267 synagogues destroyed, 7,500 businesses ransacked, 30,000 Jews arrested. 91 killed.</p>
    <p className="text-gray-400 mb-3">This was only the beginning. The ideology of hatred would soon become industrial-scale murder.</p>
    <p className="text-gray-500 italic">"When words become weapons, humanity becomes the casualty."</p>
    <Link to="/holocaust" className="text-yellow-500 block mt-6">Next →</Link>
  </div>
);

export default Ideology;
