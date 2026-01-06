import { Link } from 'react-router-dom';

const Holocaust = () => (
  <div className="min-h-screen bg-black text-white p-8">
    <Link to="/" className="text-yellow-500">← Home</Link>
    <h1 className="text-3xl font-bold mt-4 mb-2">The Holocaust</h1>
    <p className="text-gray-400 mb-4">6 million Jews murdered. 1.5 million children. 5 million others. Auschwitz alone: 1.1 million dead. Industrial genocide. Gas chambers. Mass graves.</p>
    <p className="text-gray-500 italic">"Each one a name. A face. A life. Never forget."</p>
    <Link to="/aftermath" className="text-yellow-500 block mt-6">Next →</Link>
  </div>
);

export default Holocaust;
