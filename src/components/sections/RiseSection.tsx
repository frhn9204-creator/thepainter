import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const RiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rise" className="relative min-h-screen flex items-center py-20 bg-gradient-to-b from-memorial-dark to-background">
      <div className="container mx-auto px-4 md:px-8 z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="border-l-4 border-memorial-red pl-8 mb-12">
            <h2 className="text-4xl md:text-6xl font-cinzel font-bold mb-4">
              The Rise of a Shadow
            </h2>
            <p className="text-memorial-red text-lg font-cinzel tracking-wider">
              1889 - 1933
            </p>
          </div>

          <div className="space-y-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-sm"
            >
              <h3 className="text-2xl font-cinzel mb-4 text-memorial-light">Early Life</h3>
              <p className="text-muted-foreground leading-relaxed">
                Born in Austria in 1889, Adolf Hitler was a failed artist who became one of history's most destructive figures. His early rejection from art schools and experiences in World War I shaped a worldview built on resentment, nationalism, and hatred.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-sm"
            >
              <h3 className="text-2xl font-cinzel mb-4 text-memorial-light">Political Ascent</h3>
              <p className="text-muted-foreground leading-relaxed">
                Through manipulation, charisma, and the exploitation of Germany's post-war desperation, Hitler rose to power. He promised restoration and greatness, but delivered only suffering and destruction. By 1933, democracy had fallen, and a dictatorship was born.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-memorial-red/10 border border-memorial-red p-6 rounded-sm"
            >
              <p className="text-memorial-light italic text-lg">
                "The road to power was paved with lies, promises, and the manipulation of fear."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
