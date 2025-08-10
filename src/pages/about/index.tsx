import ClientCarousel from "./ClientCarousel"

function About() {
  return (
    <section className="bg-white pt-6 px-6 md:px-20 flex flex-col gap-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-[#b85b16] mb-6 text-center uppercase">
          Über Uns
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          PACOA ist Ihr zuverlässiger Partner für hochwertige Palettenlösungen
          in ganz Österreich. Seit unserer Gründung haben wir uns darauf
          spezialisiert, individuelle und effiziente Logistiklösungen rund um
          den Einsatz von Holzpaletten zu entwickeln. Ob Herstellung, Reparatur
          oder Rückkauf – bei uns erhalten Sie alles aus einer Hand.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Mit einem modernen Maschinenpark, qualifiziertem Fachpersonal und
          vollautomatisierten Produktionslinien garantieren wir gleichbleibende
          Qualität, Termintreue und höchste Effizienz. Unsere Paletten erfüllen
          alle relevanten Normen und können selbstverständlich gemäß ISPM 15
          behandelt und zertifiziert werden.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Unser Fokus liegt auf Nachhaltigkeit: Wir setzen auf umweltfreundliche
          Prozesse, recyceln defekte Paletten, und fertigen auch
          Holzmulchprodukte aus nicht wiederverwendbaren Materialien. So leisten
          wir einen aktiven Beitrag zum Umweltschutz.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Dank unserer Erfahrung, Flexibilität und Innovationskraft zählen heute
          zahlreiche Unternehmen aus Industrie, Handel und Logistik zu unseren
          langjährigen Partnern. Vertrauen auch Sie auf PACOA – Ihr
          Palettenprofi mit Handschlagqualität.
        </p>
      </div>
      <ClientCarousel />
    </section>
  )
}

export default About
