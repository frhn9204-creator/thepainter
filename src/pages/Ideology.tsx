import { IdeologySection } from '@/components/sections/IdeologySection';
import { Navigation } from '@/components/Navigation';
import { Scene3D } from '@/components/Scene3D';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Ideology = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative min-h-screen">
      <Scene3D />
      <Navigation />
      
      <div className="relative pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="border-l-4 border-memorial-red pl-8 mb-16">
              <h1 className="text-5xl md:text-7xl font-cinzel font-bold mb-4">
                The Ideology of Hatred
              </h1>
              <p className="text-memorial-red text-xl font-cinzel tracking-wider">
                How Propaganda Shaped a Nation
              </p>
            </div>
          </motion.div>
        </div>
        
        <IdeologySection />
        
        <div className="container mx-auto px-4 md:px-8 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-card/50 backdrop-blur-sm border border-border p-8 rounded-sm mb-12"
          >
            <h2 className="text-3xl font-cinzel mb-6 text-memorial-light">The Mechanics of Control</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Nazi control wasn't just about violence — it was about reshaping reality itself. Joseph Goebbels, Hitler's Minister of Propaganda, understood that truth was malleable. Control the narrative, and you control the people.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-memorial-dark/50 p-6 rounded-sm border border-memorial-red/30">
                  <h3 className="text-xl font-cinzel mb-4 text-memorial-red">Media Monopoly</h3>
                  <p className="text-muted-foreground text-sm">
                    All newspapers, radio stations, and film studios were controlled by the state. Independent media was crushed. Journalists who resisted were arrested or disappeared.
                  </p>
                </div>
                <div className="bg-memorial-dark/50 p-6 rounded-sm border border-memorial-red/30">
                  <h3 className="text-xl font-cinzel mb-4 text-memorial-red">Book Burnings</h3>
                  <p className="text-muted-foreground text-sm">
                    On May 10, 1933, students burned over 25,000 books by Jewish, liberal, and foreign authors. Knowledge deemed "un-German" was destroyed in public bonfires.
                  </p>
                </div>
                <div className="bg-memorial-dark/50 p-6 rounded-sm border border-memorial-red/30">
                  <h3 className="text-xl font-cinzel mb-4 text-memorial-red">The Big Lie</h3>
                  <p className="text-muted-foreground text-sm">
                    Hitler wrote: "Make the lie big, make it simple, keep saying it, and eventually they will believe it." Repetition became truth.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-card/50 backdrop-blur-sm border border-border p-8 rounded-sm mb-12"
          >
            <h2 className="text-3xl font-cinzel mb-6 text-memorial-light">The Nuremberg Laws: Legalized Hatred</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                In 1935, the Nuremberg Laws stripped Jews of citizenship and basic rights. These weren't random acts of violence — they were systematic, legal, and bureaucratic. Hatred was codified into law.
              </p>
              <div className="bg-memorial-red/10 border-l-4 border-memorial-red p-6">
                <h3 className="text-lg font-cinzel mb-3 text-memorial-red">Key Provisions</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Jews were no longer German citizens, only "subjects"</li>
                  <li>• Marriages between Jews and non-Jews were forbidden</li>
                  <li>• Jews could not employ German women under 45 as domestic workers</li>
                  <li>• Jews could not fly the German flag</li>
                  <li>• Later expanded to exclude Jews from professions, schools, and public spaces</li>
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                These laws turned neighbors into strangers. Teachers expelled Jewish children. Doctors refused Jewish patients. Stores displayed signs: "Jews Not Welcome." A entire people were erased from society — legally, socially, morally.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-card/50 backdrop-blur-sm border border-border p-8 rounded-sm mb-12"
          >
            <h2 className="text-3xl font-cinzel mb-6 text-memorial-light">Kristallnacht: The Night of Broken Glass</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                On November 9-10, 1938, the mask came off. Nazi mobs rampaged through Germany and Austria, destroying Jewish homes, businesses, and synagogues. The streets were covered in shattered glass from broken windows — hence the name "Kristallnacht."
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-memorial-dark/50 p-6 rounded-sm border border-memorial-red/30">
                  <h3 className="text-xl font-cinzel mb-4 text-memorial-red">The Destruction</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• 267 synagogues destroyed</li>
                    <li>• 7,500 Jewish businesses looted</li>
                    <li>• 91 Jews murdered</li>
                    <li>• 30,000 Jewish men arrested and sent to concentration camps</li>
                    <li>• Countless homes vandalized and families terrorized</li>
                  </ul>
                </div>
                <div className="bg-memorial-dark/50 p-6 rounded-sm border border-memorial-red/30">
                  <h3 className="text-xl font-cinzel mb-4 text-memorial-red">The Aftermath</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The German government blamed Jews for the violence and fined the Jewish community 1 billion Reichsmarks. Jews were forced to repair the damage at their own expense. Insurance claims were confiscated by the state. The world watched — and did nothing.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.1 }}
            className="bg-memorial-red/10 border border-memorial-red p-8 rounded-sm text-center"
          >
            <p className="text-memorial-light text-xl font-cinzel italic leading-relaxed">
              "When words become weapons, humanity becomes the casualty."
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Ideology;
