import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const AftermathSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative min-h-screen flex items-center py-20 bg-gradient-to-b from-memorial-dark to-background">
      <div className="container mx-auto px-4 md:px-8 z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="border-l-4 border-memorial-red pl-8 mb-12">
            <h2 className="text-4xl md:text-6xl font-cinzel font-bold mb-4">
              Aftermath and Reflection
            </h2>
            <p className="text-memorial-red text-lg font-cinzel tracking-wider">
              The World Awakens
            </p>
          </div>

          <div className="space-y-12 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl font-cinzel mb-4 text-memorial-light">The Trials</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                At Nuremberg, the world witnessed the first international war crimes tribunal. Nazi leaders were held accountable, establishing the principle that "following orders" is not a defense for crimes against humanity. Justice, though imperfect, was served.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-2xl font-cinzel mb-4 text-memorial-light">Survivors' Voices</h3>
              <div className="space-y-6 bg-card/50 backdrop-blur-sm border border-border p-8 rounded-sm">
                <blockquote className="border-l-4 border-memorial-red pl-6 italic text-memorial-light text-lg">
                  "In spite of everything, I still believe that people are really good at heart."
                  <footer className="text-memorial-gray mt-2 not-italic text-base">— Anne Frank</footer>
                </blockquote>
                <blockquote className="border-l-4 border-memorial-red pl-6 italic text-memorial-light text-lg">
                  "For the dead and the living, we must bear witness."
                  <footer className="text-memorial-gray mt-2 not-italic text-base">— Elie Wiesel, Holocaust Survivor</footer>
                </blockquote>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h3 className="text-2xl font-cinzel mb-4 text-memorial-light">Never Again</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                The Holocaust led to the Universal Declaration of Human Rights and the Genocide Convention. Holocaust education became mandatory in many nations. Memorials were built worldwide to ensure the world would never forget.
              </p>
              <div className="bg-memorial-red/10 border border-memorial-red p-6 rounded-sm">
                <p className="text-memorial-light text-xl font-cinzel">
                  Yet the fight against hatred, bigotry, and authoritarianism continues today. The lessons of the Holocaust remain urgent and relevant.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="text-center py-12"
            >
              <div className="inline-block">
                <div className="relative">
                  <div className="absolute inset-0 bg-memorial-red/20 blur-xl" />
                  <div className="relative bg-memorial-dark border-2 border-memorial-red p-8 rounded-sm">
                    <p className="text-3xl md:text-4xl font-cinzel text-memorial-light mb-4">
                      Remember.
                    </p>
                    <p className="text-3xl md:text-4xl font-cinzel text-memorial-light mb-4">
                      Learn.
                    </p>
                    <p className="text-3xl md:text-4xl font-cinzel text-memorial-light">
                      Never Again.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
