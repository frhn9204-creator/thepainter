import { Link } from 'react-router-dom';

const Epilogue = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center">
      <nav className="absolute top-8 left-8">
        <Link to="/" className="text-yellow-500 hover:underline">← Back to Home</Link>
      </nav>

      <h1 className="text-4xl font-bold mb-8 text-center">Epilogue</h1>

      <div className="max-w-2xl text-center space-y-6">
        <p className="text-gray-300 text-lg">
          Adolf Hitler's reign lasted only 12 years, but his impact on humanity was catastrophic.
        </p>

        <p className="text-gray-300">
          Six million Jews. Millions more victims. Entire families erased. Communities destroyed. 
          A continent left in ruins.
        </p>

        <p className="text-gray-300">
          But from the ashes came a promise: <strong className="text-red-500">Never Again.</strong>
        </p>

        <div className="p-6 bg-red-900/20 border border-red-500 rounded my-8">
          <p className="text-xl italic">
            "Those who cannot remember the past are condemned to repeat it."
          </p>
          <p className="text-gray-400 text-sm mt-2">— George Santayana</p>
        </div>

        <p className="text-gray-300">
          This is why we remember. This is why we teach. This is why we must never let hatred go unchecked.
        </p>

        <p className="text-gray-400 text-sm mt-8">
          In memory of all victims of the Holocaust.
        </p>
      </div>

      <div className="mt-12">
        <Link to="/" className="px-6 py-3 bg-gray-800 border border-yellow-500 text-yellow-500 rounded hover:bg-gray-700">
          Return to Beginning
        </Link>
      </div>
    </div>
  );
};

export default Epilogue;
