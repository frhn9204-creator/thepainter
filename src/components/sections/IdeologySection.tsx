import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const IdeologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const concepts = [
    { 
      word: "Power", 
      impact: "Absolute authority corrupts absolutely",
      description: "Control through fear and propaganda"
    },
    { 
      word: "Fear", 
      impact: "Terror becomes the weapon of control",
      description: "Citizens lived in constant dread"
    },
    { 
      word: "Obedience", 
      impact: "Individual thought was criminalized",
      description: "Conformity or death"
    },
    { 
      word: "Hate", 
      impact: "Dehumanization of entire peoples",
      description: "Systematic destruction of empathy"
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8 z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="border-l-4 border-memorial-red pl-8 mb-12">
            <h2 className="text-4xl md:text-6xl font-cinzel font-bold mb-4">
              Ideology and Control
            </h2>
            <p className="text-memorial-red text-lg font-cinzel tracking-wider">
              The Architecture of Evil
            </p>
          </div>

          <div className="max-w-5xl mb-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-muted-foreground leading-relaxed mb-8"
            >
              The Nazi regime didn't just seize power—it systematically dismantled humanity itself. Through propaganda, pseudo-science, and brutal enforcement, they created a society built on hatred, racism, and absolute obedience.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {concepts.map((concept, index) => (
              <motion.div
                key={concept.word}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group relative overflow-hidden"
              >
                <div className="bg-card border border-border p-8 transition-all duration-500 hover:border-memorial-red hover:bg-memorial-red/5">
                  <h3 className="text-3xl font-cinzel font-bold mb-3 text-memorial-red">
                    {concept.word}
                  </h3>
                  <p className="text-memorial-light mb-2 font-medium">
                    {concept.impact}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {concept.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 max-w-4xl bg-memorial-dark/50 border border-memorial-red/30 p-8 rounded-sm"
          >
            <p className="text-memorial-light text-lg leading-relaxed">
              Through censorship, book burnings, and state-controlled media, the Nazi regime created an echo chamber of hatred. Education became indoctrination. Science was twisted to justify genocide. And millions were taught to see their neighbors as enemies.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
