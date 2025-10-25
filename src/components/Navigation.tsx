import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: '/', label: 'Prologue' },
    { path: '/early-life', label: 'Early Life' },
    { path: '/rise-to-power', label: 'Rise to Power' },
    { path: '/ideology', label: 'Ideology' },
    { path: '/holocaust', label: 'The Holocaust' },
    { path: '/aftermath', label: 'Aftermath' },
    { path: '/epilogue', label: 'Epilogue' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-memorial-dark/95 backdrop-blur-sm border-b border-memorial-red/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-cinzel font-bold text-memorial-light">
          Echoes
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-cinzel text-sm tracking-wider transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-memorial-red'
                  : 'text-memorial-light hover:text-memorial-red'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-memorial-light"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-memorial-dark border-t border-memorial-red/20"
        >
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 font-cinzel text-sm tracking-wider border-b border-border ${
                location.pathname === link.path
                  ? 'text-memorial-red bg-memorial-red/10'
                  : 'text-memorial-light'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};
