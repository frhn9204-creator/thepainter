import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Navigation } from '@/components/Navigation';
import { Scene3D } from '@/components/Scene3D';
import propagandaPoster from '@/assets/propaganda-poster.jpg';
import newspaperVintage from '@/assets/newspaper-vintage.jpg';

const RiseToPower = () => {
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
            {/* Header */}
            <div className="border-l-4 border-memorial-red pl-8 mb-16">
              <h1 className="text-5xl md:text-7xl font-cinzel font-bold mb-4">
                The Rise to Power
              </h1>
              <p className="text-memorial-red text-xl font-cinzel tracking-wider">
                1919 - 1933: From Beer Halls to the Chancellery
              </p>
            </div>

            {/* Entry into Politics */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12 bg-card/50 backdrop-blur-sm border border-border p-8 rounded-sm"
            >
              <h2 className="text-3xl font-cinzel mb-6 text-memorial-light">Discovery of Political Power</h2>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  After World War I, Hitler remained in the army and was assigned to monitor political groups in Munich. In September 1919, he attended a meeting of the German Workers' Party (DAP), a small nationalist group. He was supposed to observe, but he couldn't help himself — he spoke, and his oratory captivated the room.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Hitler discovered his gift: he could manipulate crowds with his voice. His speeches were raw, emotional, and filled with rage. He blamed Germany's problems on the Treaty of Versailles, the "November Criminals" who signed it, and above all — the Jews. He joined the party, and within two years, he was its leader.
                </p>
                <div className="bg-memorial-dark/50 p-6 rounded-sm border border-memorial-red/30">
                  <h3 className="text-xl font-cinzel mb-4 text-memorial-red">The Birth of the Nazi Party</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• <strong>1920:</strong> Party renamed to National Socialist German Workers' Party (NSDAP)</li>
                    <li>• <strong>Symbol:</strong> Adopted the swastika as the party emblem</li>
                    <li>• <strong>Paramilitary:</strong> Formed the SA (Sturmabteilung) - the "Brownshirts"</li>
                    <li>• <strong>Propaganda:</strong> Hitler became chief propagandist, drawing thousands to rallies</li>
                    <li>• <strong>Message:</strong> Restore German pride, destroy Marxism, eliminate Jewish influence</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Beer Hall Putsch */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-12 bg-card/50 backdrop-blur-sm border border-border p-8 rounded-sm"
            >
              <h2 className="text-3xl font-cinzel mb-6 text-memorial-light">The Beer Hall Putsch: A Failed Coup</h2>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  By 1923, Germany was in chaos. Hyperinflation destroyed the economy. People carried wheelbarrows of worthless money to buy bread. Hitler saw his moment. On November 8, 1923, he and his SA stormed a beer hall in Munich where Bavarian leaders were meeting. With a pistol in hand, he declared a national revolution.
                </p>
                <div className="bg-memorial-red/10 border-l-4 border-memorial-red p-6">
                  <p className="text-memorial-light italic text-lg">
                    "Tomorrow will find either a national government in Germany or us dead!"
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">— Adolf Hitler, November 8, 1923</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  The coup failed. The next day, Hitler led a march through Munich, but police opened fire. Sixteen Nazis and four police officers died. Hitler fled but was arrested two days later. He was tried for treason — and turned the trial into a propaganda spectacle. He portrayed himself as a patriot, a victim of a corrupt system. He was sentenced to only five years in prison and served less than nine months.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  In Landsberg Prison, Hitler dictated his book, <em>Mein Kampf</em> (My Struggle). It was part autobiography, part manifesto — a blueprint of his hateful ideology and his plans for Germany. Few took it seriously at the time. That would be a fatal mistake.
                </p>
              </div>
            </motion.div>

            {/* The Legal Path to Power */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-12 bg-card/50 backdrop-blur-sm border border-border p-8 rounded-sm"
            >
              <h2 className="text-3xl font-cinzel mb-6 text-memorial-light">The Legal Road to Dictatorship</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <img src={propagandaPoster} alt="Nazi propaganda poster" className="w-full rounded-sm border border-memorial-red/30" />
                  <img src={newspaperVintage} alt="Vintage newspaper about WWII" className="w-full rounded-sm border border-memorial-red/30" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  After his release, Hitler changed tactics. No more coups. He would win power through elections. The Nazi Party remained small through the 1920s, but the Great Depression of 1929 changed everything. Unemployment skyrocketed. Desperation grew. And Hitler's message of national revival found a desperate audience.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-memorial-dark/50 p-6 rounded-sm border border-memorial-red/30">
                    <h3 className="text-xl font-cinzel mb-4 text-memorial-red">Nazi Electoral Rise</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• <strong>1928:</strong> 2.6% of vote, 12 seats in Reichstag</li>
                      <li>• <strong>1930:</strong> 18.3% of vote, 107 seats</li>
                      <li>• <strong>July 1932:</strong> 37.3% of vote, 230 seats (largest party)</li>
                      <li>• <strong>Nov 1932:</strong> 33.1% of vote, 196 seats</li>
                      <li>• <strong>Jan 30, 1933:</strong> Hitler appointed Chancellor</li>
                    </ul>
                  </div>
                  <div className="bg-memorial-dark/50 p-6 rounded-sm border border-memorial-red/30">
                    <h3 className="text-xl font-cinzel mb-4 text-memorial-red">Tools of Manipulation</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Mass rallies with torches, flags, and spectacle</li>
                      <li>• Radio broadcasts spreading propaganda</li>
                      <li>• Newspapers and posters demonizing enemies</li>
                      <li>• Street violence by SA to intimidate opponents</li>
                      <li>• Simple, repetitive slogans: "Make Germany Great Again"</li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-6">
                  Hitler promised jobs, order, pride, and revenge. He blamed Jews, communists, and the Weimar Republic for Germany's suffering. And millions believed him. On January 30, 1933, aging President Paul von Hindenburg appointed Hitler as Chancellor, believing he could be controlled. It was the greatest miscalculation in history.
                </p>
              </div>
            </motion.div>

            {/* Consolidation of Power */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mb-12 bg-card/50 backdrop-blur-sm border border-border p-8 rounded-sm"
            >
              <h2 className="text-3xl font-cinzel mb-6 text-memorial-light">The Death of Democracy</h2>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Within weeks of becoming Chancellor, Hitler moved to destroy German democracy. On February 27, 1933, the Reichstag (parliament building) burned. Hitler blamed communists and used the fire as a pretext to suspend civil liberties, arrest political opponents, and crush dissent.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  In March 1933, the Enabling Act was passed, giving Hitler dictatorial powers. Political parties were banned. Trade unions dissolved. The press censored. Concentration camps opened for political prisoners. Within months, Hitler transformed Germany into a one-party totalitarian state.
                </p>
                <div className="bg-memorial-red/10 border-l-4 border-memorial-red p-6">
                  <p className="text-memorial-light italic text-lg">
                    "When Hindenburg died in 1934, Hitler merged the offices of President and Chancellor, proclaiming himself 'Führer' — the absolute leader. Democracy was dead. The nightmare had begun."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Closing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.1 }}
              className="bg-memorial-red/10 border border-memorial-red p-8 rounded-sm text-center"
            >
              <p className="text-memorial-light text-xl font-cinzel italic leading-relaxed">
                "He promised greatness. He delivered death."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RiseToPower;
