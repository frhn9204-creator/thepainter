import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const pages = [
  { path: '/', label: 'Home' },
  { path: '/early-life', label: 'Early Life' },
  { path: '/rise-to-power', label: 'Rise to Power' },
  { path: '/ideology', label: 'Ideology' },
  { path: '/holocaust', label: 'Holocaust' },
  { path: '/aftermath', label: 'Aftermath' },
  { path: '/epilogue', label: 'Epilogue' },
];

const PageNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-yellow-500 text-black px-4 py-2 rounded font-bold hover:bg-yellow-400 transition-colors"
      >
        ☰ Navigate
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded shadow-lg">
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 hover:bg-gray-800 transition-colors ${
                location.pathname === page.path ? 'text-yellow-500' : 'text-white'
              }`}
            >
              {page.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default PageNavigation;
