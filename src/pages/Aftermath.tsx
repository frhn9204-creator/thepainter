import { AftermathSection } from '@/components/sections/AftermathSection';
import { Navigation } from '@/components/Navigation';
import { Scene3D } from '@/components/Scene3D';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Aftermath = () => {
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
                The Aftermath
              </h1>
              <p className="text-memorial-red text-xl font-cinzel tracking-wider">
                Liberation, Justice, and the Promise of "Never Again"
              </p>
            </div>
          </motion.div>
        </div>
        
        <AftermathSection />
        
        <div className="container mx-auto px-4 md:px-8 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-card/50 backdrop-blur-sm border border-border p-8 rounded-sm mb-12"
          >
            <h2 className="text-3xl font-cinzel mb-6 text-memorial-light">Hitler's Final Days</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                As Allied forces closed in on Berlin in April 1945, Hitler retreated to his underground bunker. The man who promised a "Thousand-Year Reich" watched as his empire collapsed in just 12 years. Germany lay in ruins. Millions were dead. And he blamed everyone but himself.
              </p>
              <div className="bg-memorial-red/10 border-l-4 border-memorial-red p-6">
                <h3 className="text-lg font-cinzel mb-3 text-memorial-red">The Führer Bunker, April 30, 1945</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  On April 30, 1945, with Soviet troops just blocks away, Adolf Hitler dictated his final testament. In it, he took no responsibility for the war or the Holocaust. Instead, he blamed Jews, claiming they had forced him into war. He ordered the German people to continue resisting. Then, at around 3:30 PM, he and his wife Eva Braun (whom he had married the day before) committed suicide. Hitler shot himself. Eva took cyanide.
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Their bodies were carried outside, doused in gasoline, and burned. The remains were later buried in a shell crater. The man who sought to conquer the world died in a concrete tomb beneath the rubble of his capital, his body reduced to ash. A coward's end to a tyrant's life.
              </p>
              <div className="bg-memorial-dark/50 p-6 rounded-sm border border-memorial-red/30">
                <h3 className="text-xl font-cinzel mb-4 text-memorial-red">His Conclusions: Delusion to the End</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Hitler never accepted responsibility. His final words to Germany were not of regret or remorse, but of continued hatred. He ordered Germans to keep fighting a war they had already lost. He blamed the Jews for everything — even his own defeat. To the very end, he believed he was right.
                </p>
                <p className="text-memorial-light italic text-sm">
                  "I came from Austria to Germany to build a greater Reich. I leave behind only ashes and hatred." — paraphrased from historical accounts
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-card/50 backdrop-blur-sm border border-border p-8 rounded-sm mb-12"
          >
            <h2 className="text-3xl font-cinzel mb-6 text-memorial-light">The World Responds: Displaced Persons</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                When the camps were liberated, the world was confronted with the full horror of the Holocaust. Survivors were skeletal, traumatized, and lost. Many had no homes to return to. Entire families had been wiped out. Communities destroyed. They were called "Displaced Persons" — a sterile term for a broken people.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-memorial-dark/50 p-6 rounded-sm border border-memorial-red/30">
                  <h3 className="text-xl font-cinzel mb-4 text-memorial-red">The Refugee Crisis</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• 7-11 million displaced persons in Europe by 1945</li>
                    <li>• Many spent years in DP camps waiting for new homes</li>
                    <li>• Countries reluctant to accept Jewish refugees</li>
                    <li>• 250,000 Jewish survivors sought refuge</li>
                    <li>• Many eventually emigrated to Israel, USA, Canada, Australia</li>
                  </ul>
                </div>
                <div className="bg-memorial-dark/50 p-6 rounded-sm border border-memorial-red/30">
                  <h3 className="text-xl font-cinzel mb-4 text-memorial-red">Psychological Scars</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Survivors struggled with survivor's guilt, PTSD, and nightmares. Many could never speak of what they endured. The trauma passed to children and grandchildren. The Holocaust didn't end in 1945 — its echoes continue.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-card/50 backdrop-blur-sm border border-border p-8 rounded-sm mb-12"
          >
            <h2 className="text-3xl font-cinzel mb-6 text-memorial-light">The Birth of Israel</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                The Holocaust changed the course of Jewish history. For centuries, Jews had been stateless, vulnerable, persecuted. After the Holocaust, the push for a Jewish homeland became undeniable. On May 14, 1948, the State of Israel was declared, offering Jews a refuge and a promise: this would never happen again.
              </p>
              <div className="bg-memorial-red/10 border-l-4 border-memorial-red p-6">
                <p className="text-memorial-light italic">
                  "For two thousand years, we were scattered. For six years, we were slaughtered. Now, we have a home."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="bg-card/50 backdrop-blur-sm border border-border p-8 rounded-sm mb-12"
          >
            <h2 className="text-3xl font-cinzel mb-6 text-memorial-light">Memorials and Memory</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Around the world, memorials stand as reminders of what happened. Museums, monuments, and days of remembrance ensure the victims are not forgotten. Every name matters. Every story matters.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-memorial-dark/50 p-4 rounded-sm border border-memorial-red/30">
                  <h3 className="text-lg font-cinzel mb-2 text-memorial-red">Yad Vashem</h3>
                  <p className="text-muted-foreground text-sm">Israel's Holocaust memorial and museum. Preserves names and stories.</p>
                </div>
                <div className="bg-memorial-dark/50 p-4 rounded-sm border border-memorial-red/30">
                  <h3 className="text-lg font-cinzel mb-2 text-memorial-red">Auschwitz Memorial</h3>
                  <p className="text-muted-foreground text-sm">The camp itself preserved as a site of memory and education.</p>
                </div>
                <div className="bg-memorial-dark/50 p-4 rounded-sm border border-memorial-red/30">
                  <h3 className="text-lg font-cinzel mb-2 text-memorial-red">Holocaust Museums</h3>
                  <p className="text-muted-foreground text-sm">Washington D.C., Berlin, and cities worldwide educate new generations.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.3 }}
            className="bg-memorial-red/10 border border-memorial-red p-8 rounded-sm text-center"
          >
            <p className="text-memorial-light text-2xl font-cinzel italic leading-relaxed mb-4">
              "He came from Austria. He dreamed of empire. He left only ashes."
            </p>
            <p className="text-muted-foreground text-sm">
              Remember the victims. Remember the warning.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Aftermath;
