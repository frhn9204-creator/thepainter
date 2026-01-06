import { Link } from 'react-router-dom';

const Epilogue = () => (
  <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center text-center">
    <h1 className="text-3xl font-bold mb-4">Epilogue</h1>
    <p className="text-gray-400 mb-4 max-w-md">12 years of terror. Millions dead. A continent in ruins. From the ashes came a promise: Never Again.</p>
    <p className="text-gray-500 italic mb-6">"Those who cannot remember the past are condemned to repeat it."</p>
    <Link to="/" className="text-yellow-500">← Return to Beginning</Link>
  </div>
);

export default Epilogue;
