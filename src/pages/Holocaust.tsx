import { HolocaustSection } from '@/components/sections/HolocaustSection';
import { Navigation } from '@/components/Navigation';
import { Scene3D } from '@/components/Scene3D';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Holocaust = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative min-h-screen bg-memorial-dark">
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
              <h1 className="text-5xl md:text-7xl font-cinzel font-bold mb-4 text-memorial-light">
                The Holocaust
              </h1>
              <p className="text-memorial-red text-xl font-cinzel tracking-wider">
                The Darkest Chapter of Human History
              </p>
            </div>
          </motion.div>
        </div>
        
        <HolocaustSection />
        
        <div className="container mx-auto px-4 md:px-8 mt-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-card/50 backdrop-blur-sm border border-border p-8 rounded-sm mb-12"
          >
            <h2 className="text-3xl font-cinzel mb-6 text-memorial-light">The Scale of Evil</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                The Holocaust was not a spontaneous outburst of violence. It was systematic, industrial, and bureaucratic. It was murder as policy, genocide as administration. The Nazis turned killing into a science.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-cinzel text-memorial-red">Victims by Group</h3>
                  <div className="space-y-3">
                    <div className="bg-memorial-dark/50 p-4 rounded-sm border-l-4 border-memorial-red">
                      <p className="text-memorial-light font-bold">6 million Jews</p>
                      <p className="text-muted-foreground text-sm">Two-thirds of Europe's Jewish population</p>
                    </div>
                    <div className="bg-memorial-dark/50 p-4 rounded-sm border-l-4 border-border">
                      <p className="text-memorial-light font-bold">1.5 million children</p>
                      <p className="text-muted-foreground text-sm">Innocence destroyed</p>
                    </div>
                    <div className="bg-memorial-dark/50 p-4 rounded-sm border-l-4 border-border">
                      <p className="text-memorial-light font-bold">5 million others</p>
                      <p className="text-muted-foreground text-sm">Roma, disabled, LGBTQ+, political prisoners, Poles, Soviets</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-cinzel text-memorial-red">The Machinery of Death</h3>
                  <div className="bg-memorial-dark/50 p-6 rounded-sm border border-memorial-red/30">
                    <ul className="space-y-3 text-muted-foreground text-sm">
                      <li>• <strong>6 extermination camps</strong> designed purely for mass murder</li>
                      <li>• <strong>Gas chambers</strong> disguised as showers to deceive victims</li>
                      <li>• <strong>Crematoria</strong> running 24/7 to dispose of bodies</li>
                      <li>• <strong>Train networks</strong> transporting millions to their deaths</li>
                      <li>• <strong>Bureaucrats</strong> planning logistics like a business</li>
                      <li>• <strong>Doctors</strong> conducting horrific experiments</li>
                    </ul>
                  </div>
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
            <h2 className="text-3xl font-cinzel mb-6 text-memorial-light">Auschwitz: The Factory of Death</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Auschwitz-Birkenau was the largest and deadliest of the Nazi death camps. Located in occupied Poland, it became synonymous with the Holocaust itself. Over 1.1 million people were murdered there — 90% of them Jews.
              </p>
              <div className="bg-memorial-red/10 border-l-4 border-memorial-red p-6">
                <p className="text-memorial-light italic text-lg mb-4">
                  "Arbeit Macht Frei" — "Work Sets You Free"
                </p>
                <p className="text-muted-foreground text-sm">
                  These words greeted prisoners at the entrance to Auschwitz. It was a lie. Most were dead within hours of arrival.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-cinzel text-memorial-red">The Selection Process</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  When trains arrived at Auschwitz-Birkenau, SS doctors conducted "selections" on the platform. With a flick of a finger, they decided who would live (temporarily) and who would die immediately. The elderly, children, pregnant women, and the sick were sent directly to the gas chambers. They were told they were going to shower. They were murdered within 20 minutes.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Those deemed fit for labor were worked to death in brutal conditions. Starvation, disease, torture, and random executions were daily realities. The average life expectancy was three months.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-card/50 backdrop-blur-sm border border-border p-8 rounded-sm mb-12"
          >
            <h2 className="text-3xl font-cinzel mb-6 text-memorial-light">The Einsatzgruppen: Mobile Killing Units</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Before the gas chambers, the Nazis used mobile killing squads called Einsatzgruppen. These units followed the German army into Eastern Europe and the Soviet Union, rounding up Jews and other "undesirables" and shooting them in mass executions.
              </p>
              <div className="bg-memorial-dark/50 p-6 rounded-sm border border-memorial-red/30">
                <h3 className="text-xl font-cinzel mb-4 text-memorial-red">Babi Yar: 33,771 Dead in Two Days</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  On September 29-30, 1941, in a ravine near Kyiv, Ukraine, German forces murdered 33,771 Jews in just two days. Men, women, and children were forced to strip naked, then shot and thrown into pits. The massacre at Babi Yar is one of the largest single mass murders of the Holocaust. Over 100,000 more people — including Roma, Soviet prisoners, and Ukrainian nationalists — would be killed there over the following months.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.1 }}
            className="bg-memorial-red/10 border border-memorial-red p-8 rounded-sm text-center"
          >
            <p className="text-memorial-light text-2xl font-cinzel italic leading-relaxed mb-4">
              "Six million Jews. Eleven million total. Each one a name. A face. A story. A life."
            </p>
            <p className="text-muted-foreground text-sm">
              Never forget. Never again.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Holocaust;
