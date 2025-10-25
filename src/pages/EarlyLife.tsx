import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Navigation } from '@/components/Navigation';
import { Scene3D } from '@/components/Scene3D';
import hitlerPaintingLandscape from '@/assets/hitler-painting-landscape.jpg';
import hitlerPaintingBuilding from '@/assets/hitler-painting-building.jpg';

const EarlyLife = () => {
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
                The Early Years
              </h1>
              <p className="text-memorial-red text-xl font-cinzel tracking-wider">
                1889 - 1918: Austria to the Trenches
              </p>
            </div>

            {/* Birth and Childhood */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12 bg-card/50 backdrop-blur-sm border border-border p-8 rounded-sm"
            >
              <h2 className="text-3xl font-cinzel mb-6 text-memorial-light">Born in Braunau am Inn, Austria</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    On April 20, 1889, in a small Austrian town near the German border, a child was born who would grow to become history's most destructive figure. Adolf Hitler entered a world of modest means, the son of Alois Hitler, a stern customs official, and Klara Hitler, a devoted but fragile mother.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    His childhood was marked by his father's harsh discipline and his mother's affection. Young Adolf was reportedly a bright but rebellious student who clashed with authority. The death of his younger brother Edmund in 1900 deeply affected him, and historians suggest this loss contributed to his increasingly withdrawn and moody nature.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    After his father's death in 1903, Hitler became more difficult to control. He dreamed of becoming an artist, spending hours sketching buildings and landscapes, but his mother and teachers saw little exceptional talent in his work.
                  </p>
                </div>
                <div className="bg-memorial-dark/50 p-6 rounded-sm border border-memorial-red/30">
                  <h3 className="text-xl font-cinzel mb-4 text-memorial-red">Early Family Life</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• <strong>Father:</strong> Alois Hitler - Authoritarian customs official</li>
                    <li>• <strong>Mother:</strong> Klara Hitler - Doting, protective</li>
                    <li>• <strong>Siblings:</strong> 5 siblings, only he and sister Paula survived to adulthood</li>
                    <li>• <strong>Education:</strong> Struggled in school, expelled from Realschule</li>
                    <li>• <strong>Dream:</strong> To become an artist and architect</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Art School Rejection */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-12 bg-card/50 backdrop-blur-sm border border-border p-8 rounded-sm"
            >
              <h2 className="text-3xl font-cinzel mb-6 text-memorial-light">The Failed Artist</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <img src={hitlerPaintingBuilding} alt="Hitler's architectural painting from Vienna period" className="w-full rounded-sm border border-memorial-red/30" />
                <img src={hitlerPaintingLandscape} alt="Hitler's landscape painting" className="w-full rounded-sm border border-memorial-red/30" />
              </div>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  In 1907, Hitler moved to Vienna with dreams of attending the prestigious Academy of Fine Arts. He was confident, even arrogant about his abilities. But fate had other plans. He was rejected. Not once, but twice.
                </p>
                <div className="bg-memorial-red/10 border-l-4 border-memorial-red p-6">
                  <p className="text-memorial-light italic text-lg">
                    "The committee deemed his work 'unsatisfactory' and told him he had more talent for architecture than painting. But he lacked the academic credentials to pursue architecture."
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  This rejection became a defining wound. Hitler spent the next years in Vienna living in poverty, selling postcards and paintings on the street. He slept in homeless shelters and developed a deep bitterness toward the world. Vienna, a multicultural city filled with Jewish intellectuals, liberal artists, and socialists, became the breeding ground for his hatred.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  It was during these years that Hitler began reading anti-Semitic pamphlets and conspiracy theories. He blamed Jews, Marxists, and "degenerates" for his failures and for Germany's perceived decline. The seeds of his ideology were planted in the gutters of Vienna.
                </p>
              </div>
            </motion.div>

            {/* World War I */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-12 bg-card/50 backdrop-blur-sm border border-border p-8 rounded-sm"
            >
              <h2 className="text-3xl font-cinzel mb-6 text-memorial-light">The Soldier: World War I</h2>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  In 1913, Hitler left Austria for Munich, Germany. When World War I broke out in 1914, he volunteered for the Bavarian Army with enthusiasm. For Hitler, the war was a purpose, an identity, and an escape from his failures.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  He served as a dispatch runner on the Western Front, a dangerous role that exposed him to constant shellfire. He was wounded twice and awarded the Iron Cross First Class for bravery — a rare honor for a corporal. His comrades described him as odd and fanatical, obsessed with the war and Germany's glory.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-memorial-dark/50 p-6 rounded-sm border border-memorial-red/30">
                    <h3 className="text-xl font-cinzel mb-4 text-memorial-red">Military Service</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>1914:</strong> Volunteered for Bavarian Army</li>
                      <li>• <strong>Role:</strong> Dispatch runner (messenger)</li>
                      <li>• <strong>Wounded:</strong> 1916 (leg) and 1918 (gas attack)</li>
                      <li>• <strong>Awards:</strong> Iron Cross First and Second Class</li>
                      <li>• <strong>Rank:</strong> Corporal (never promoted)</li>
                    </ul>
                  </div>
                  <div className="bg-memorial-dark/50 p-6 rounded-sm border border-memorial-red/30">
                    <h3 className="text-xl font-cinzel mb-4 text-memorial-red">Psychological Impact</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The war gave Hitler a sense of belonging he never had. The trenches, death, and destruction hardened him. When Germany surrendered in 1918, he was temporarily blinded by a British gas attack and hospitalized. Learning of Germany's defeat while recovering, he wept with rage. He believed Germany had been "stabbed in the back" by Jews and communists — a conspiracy theory that fueled his later politics.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* The Man Emerges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
              className="bg-memorial-red/10 border border-memorial-red p-8 rounded-sm text-center"
            >
              <p className="text-memorial-light text-xl font-cinzel italic leading-relaxed">
                "From the ashes of a failed artist and bitter soldier, a dangerous ideologue was being born. His hatred now had direction. His resentment now had targets. And history would pay the price."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EarlyLife;
