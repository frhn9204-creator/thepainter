import { Link } from 'react-router-dom';

const Holocaust = () => (
  <div className="min-h-screen bg-black text-white p-8">
    <Link to="/" className="text-yellow-500">← Home</Link>
    <h1 className="text-3xl font-bold mt-4 mb-2">The Holocaust (1941-1945)</h1>
    <p className="text-gray-400 mb-3">The Holocaust — "Shoah" in Hebrew — was the systematic, state-sponsored genocide of 6 million Jews by Nazi Germany. It also killed 5 million others: Roma, disabled people, Soviet POWs, homosexuals, Jehovah's Witnesses, and political prisoners.</p>
    <p className="text-gray-400 mb-3">When Germany invaded the Soviet Union in June 1941, mobile killing squads called Einsatzgruppen followed the army. They rounded up Jews in towns and villages, marched them to pits, and shot them. Over 1.5 million Jews were murdered this way.</p>
    <p className="text-gray-400 mb-3">The most infamous massacre: Babi Yar, a ravine near Kyiv, Ukraine. On September 29-30, 1941, Nazis shot 33,771 Jews in just two days. Bodies fell in layers into the pit.</p>
    <p className="text-gray-400 mb-3">January 1942: The Wannsee Conference. Senior Nazi officials met in a Berlin suburb to coordinate the "Final Solution to the Jewish Question" — the complete extermination of Europe's 11 million Jews. The meeting lasted 90 minutes.</p>
    <p className="text-gray-400 mb-3">Six extermination camps were built in occupied Poland: Auschwitz-Birkenau, Treblinka, Sobibor, Chelmno, Majdanek, and Belzec. Their sole purpose was murder on an industrial scale.</p>
    <p className="text-gray-400 mb-3">Jews were transported in overcrowded cattle cars — no food, water, or sanitation — journeys lasting days. Many died before arrival. At the camps, SS doctors conducted "selections" on the platform.</p>
    <p className="text-gray-400 mb-3">Those deemed unfit for work — the elderly, sick, pregnant women, and children — went directly to gas chambers disguised as showers. Victims were told to undress and remember their hook number. They never returned.</p>
    <p className="text-gray-400 mb-3">Auschwitz-Birkenau was the largest death camp. At its peak, 6,000 people were gassed and cremated daily. The camp killed 1.1 million people — 1 million of them Jews. The infamous gate read: "Arbeit Macht Frei" (Work Sets You Free).</p>
    <p className="text-gray-400 mb-3">Those selected for labor faced starvation, disease, brutal work, and random executions. Prisoners were tattooed with numbers, stripped of names. Medical experiments were conducted on living victims, including children.</p>
    <p className="text-gray-400 mb-3">The Warsaw Ghetto Uprising (April-May 1943): 450,000 Jews had been crammed into 1.3 square miles. When Nazis came for final deportations, Jewish fighters resisted with smuggled weapons for nearly a month before being crushed.</p>
    <p className="text-gray-400 mb-3">As Allied forces advanced in 1944-45, Nazis forced surviving prisoners on "Death Marches" — walking hundreds of miles in winter. Those who fell were shot. Tens of thousands died.</p>
    <p className="text-gray-400 mb-3">When Allied soldiers liberated the camps, they found scenes of unimaginable horror: mass graves, crematoriums, warehouses of victims' belongings — shoes, eyeglasses, human hair. Skeletal survivors barely alive.</p>
    <p className="text-gray-400 mb-3">6 million Jews murdered — two-thirds of European Jewry. 1.5 million were children who never grew up. Entire communities, cultures, and languages were erased. Poland lost 90% of its Jewish population.</p>
    <p className="text-gray-500 italic">"Each one a name. A face. A life. Never forget."</p>
    <Link to="/aftermath" className="text-yellow-500 block mt-6">Next →</Link>
  </div>
);

export default Holocaust;
