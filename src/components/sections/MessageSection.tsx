import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const MessageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 bg-memorial-dark">
      <div className="container mx-auto px-4 md:px-8 z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-cinzel font-bold mb-8 text-memorial-light leading-tight">
              A Museum of Memories
              <br />
              <span className="text-memorial-red">Too Heavy to Forget</span>
            </h2>
            <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-memorial-red to-transparent mb-12" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="space-y-8 mb-16"
          >
            <p className="text-xl md:text-2xl text-memorial-gray leading-relaxed">
              This digital memorial exists as a reminder that history is not just dates and numbers. 
              It is the stories of real people, real families, real lives destroyed.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              When we study the Holocaust, we are not just learning about the past. 
              We are learning about the dangers of unchecked power, the fragility of democracy, 
              and the responsibility each of us carries to stand against hatred.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
            className="bg-card/30 backdrop-blur-sm border-2 border-memorial-red p-10 rounded-sm"
          >
            <p className="text-2xl md:text-3xl font-cinzel text-memorial-light mb-6 italic">
              "Power without humanity destroys all."
            </p>
            <div className="h-px w-32 mx-auto bg-memorial-red mb-6" />
            <p className="text-memorial-gray text-lg">
              Created as a reminder that history must never repeat itself.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 1.6 }}
            className="mt-16"
          >
            <p className="text-memorial-gray text-sm mb-4">
              Learn more about Holocaust education and memorials:
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a 
                href="https://www.ushmm.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-memorial-red hover:text-memorial-light transition-colors duration-300 underline"
              >
                United States Holocaust Memorial Museum
              </a>
              <a 
                href="https://www.yadvashem.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-memorial-red hover:text-memorial-light transition-colors duration-300 underline"
              >
                Yad Vashem
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Fade to black at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};
