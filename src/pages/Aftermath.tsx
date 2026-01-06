import { Link } from 'react-router-dom';

const Aftermath = () => (
  <div className="min-h-screen bg-black text-white p-8">
    <Link to="/" className="text-yellow-500">← Home</Link>
    <h1 className="text-3xl font-bold mt-4 mb-2">The Aftermath</h1>
    <p className="text-gray-400 mb-3">By early 1945, Nazi Germany was collapsing. Soviet forces approached Berlin from the east; American and British forces from the west. Hitler retreated to his underground bunker beneath the Reich Chancellery.</p>
    <p className="text-gray-400 mb-3">April 30, 1945: As Soviet troops fought street-by-street through Berlin, Adolf Hitler shot himself in his bunker. Eva Braun, whom he had married the day before, took cyanide. Their bodies were burned in the garden above.</p>
    <p className="text-gray-400 mb-3">May 8, 1945: V-E Day (Victory in Europe). Germany surrendered unconditionally. The war in Europe was over, but the Pacific war continued until August when atomic bombs were dropped on Japan.</p>
    <p className="text-gray-400 mb-3">World War II was the deadliest conflict in human history: 70-85 million dead — 3% of the world's population. The Soviet Union lost 27 million. Poland lost 17% of its population. Cities across Europe and Asia lay in ruins.</p>
    <p className="text-gray-400 mb-3">The Nuremberg Trials (1945-1946) brought justice to Nazi leaders. 24 major war criminals were tried. 12 were sentenced to death, including Hermann Göring (who committed suicide before execution), Joachim von Ribbentrop, and Wilhelm Keitel.</p>
    <p className="text-gray-400 mb-3">The trials established crucial legal precedents: "following orders" was not a defense for atrocities. Crimes against humanity became an international offense. War criminals could be prosecuted regardless of nationality.</p>
    <p className="text-gray-400 mb-3">Many Nazis escaped justice. Adolf Eichmann, architect of the Holocaust, fled to Argentina. He was captured by Israeli agents in 1960, tried in Jerusalem, and executed in 1962. Josef Mengele, the "Angel of Death" who conducted experiments at Auschwitz, died free in Brazil in 1979.</p>
    <p className="text-gray-400 mb-3">Millions of refugees — "Displaced Persons" — wandered Europe. Holocaust survivors had no homes to return to. Many faced continued anti-Semitism. Ships carrying Jewish refugees were turned away by multiple countries.</p>
    <p className="text-gray-400 mb-3">May 14, 1948: The State of Israel was established as a Jewish homeland. Survivors emigrated there, the US, and elsewhere. But they carried invisible wounds — trauma that would echo through generations.</p>
    <p className="text-gray-400 mb-3">Germany was divided: West Germany (democratic, allied with the West) and East Germany (communist, allied with the Soviet Union). The Berlin Wall (1961-1989) became the symbol of Cold War division.</p>
    <p className="text-gray-400 mb-3">Holocaust memorials now stand worldwide. Yad Vashem in Jerusalem. The US Holocaust Memorial Museum in Washington. The preserved camps at Auschwitz-Birkenau. Stumbling Stones (Stolpersteine) embedded in European sidewalks marking victims' last homes.</p>
    <p className="text-gray-400 mb-3">Every year, Holocaust survivors become fewer. Their testimonies, recorded by projects like the Shoah Foundation, preserve their stories. The last generation who witnessed these horrors is passing — making education more crucial than ever.</p>
    <p className="text-gray-500 italic">"He left only ashes."</p>
    <Link to="/epilogue" className="text-yellow-500 block mt-6">Next →</Link>
  </div>
);

export default Aftermath;
