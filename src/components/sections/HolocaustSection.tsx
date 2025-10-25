import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flame } from 'lucide-react';

export const HolocaustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    { year: "1933-1939", event: "Persecution Begins", description: "Systematic exclusion of Jews from society, Nuremberg Laws, Kristallnacht" },
    { year: "1939-1941", event: "Ghettoization", description: "Forced relocation into overcrowded ghettos, starvation, disease" },
    { year: "1941-1945", event: "The Final Solution", description: "Mass deportations to death camps, systematic genocide of six million Jews" },
    { year: "1945", event: "Liberation", description: "Allied forces liberate camps, revealing the full horror to the world" },
  ];

  return (
    <section className="relative min-h-screen flex items-center py-20 bg-memorial-dark">
      <div className="container mx-auto px-4 md:px-8 z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 2 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="inline-block mb-8"
            >
              <Flame className="w-12 h-12 text-memorial-red animate-flicker mx-auto" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-cinzel font-bold mb-6 text-memorial-light">
              The Holocaust
            </h2>
            <p className="text-memorial-red text-lg font-cinzel tracking-wider mb-8">
              1933 - 1945
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="text-memorial-gray text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Six million Jews murdered. Millions more persecuted—Roma, disabled individuals, political dissidents, LGBTQ+ people, and others deemed "undesirable." This was systematic, industrial-scale genocide.
            </motion.p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className="relative pl-8 border-l-2 border-memorial-red"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-memorial-red" />
                <div className="bg-card/30 backdrop-blur-sm border border-border/50 p-6 rounded-sm">
                  <p className="text-memorial-red font-cinzel text-sm tracking-wider mb-2">
                    {item.year}
                  </p>
                  <h3 className="text-2xl font-cinzel font-bold mb-3 text-memorial-light">
                    {item.event}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 2 }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-memorial-red to-transparent mb-8" />
            <blockquote className="text-memorial-light text-2xl font-cinzel italic leading-relaxed">
              "Those who cannot remember the past are condemned to repeat it."
            </blockquote>
            <p className="text-memorial-gray mt-4">— George Santayana</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
