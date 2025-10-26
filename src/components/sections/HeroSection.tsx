import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
  const navigate = useNavigate();
  
  const scrollToNext = () => {
    navigate('/early-life');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-cinzel font-bold mb-6 tracking-tight">
            A Painter with the Colour Red "Hitler"
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
            className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-memorial-red to-transparent mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2 }}
            className="text-xl md:text-2xl text-muted-foreground font-inter max-w-2xl mx-auto mb-12"
          >
            The Fall of Humanity
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2.5 }}
            className="text-sm md:text-base text-muted-foreground font-inter italic max-w-xl mx-auto mb-16"
          >
            "When power meets hate, humanity falls."
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            onClick={scrollToNext}
            className="group relative px-8 py-4 border border-memorial-red text-memorial-light hover:bg-memorial-red/10 transition-all duration-500 font-cinzel tracking-wider"
          >
            Enter the Timeline
            <ChevronDown className="inline-block ml-2 animate-bounce" size={20} />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Ambient Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-memorial-dark via-transparent to-memorial-dark pointer-events-none" />
    </section>
  );
};
