import {recycleImage} from "@/assets"

const SustainabilitySection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Linker Textabschnitt */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-[#b85b16] text-2xl lg:text-5xl font-extrabold uppercase text-center lg:text-left">
            Nachhaltigkeit
          </h2>
          <h3 className="text-[#b85b16] text-2xl md:text-3xl font-bold mt-4 text-center lg:text-left">
            Holzpaletten sind umweltfreundlich
          </h3>
          <div className="h-1 w-12 bg-[#b85b16] mt-3 mb-6 mx-auto lg:mx-0" />

          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Unsere Mission ist es, umweltfreundliche Palettenlösungen
            anzubieten, um Lieferketten zu optimieren und gleichzeitig die
            Umweltbelastung zu minimieren. Unsere besten Holzpaletten bestehen
            aus nachhaltigen Rohstoffen und sind am Ende ihres Lebenszyklus
            vollständig recycelbar – ganz im Sinne einer Kreislaufwirtschaft.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Nicht mehr verwendbare Paletten werden zu alternativen
            Holzmulchprodukten verarbeitet und finden so weitere Verwendung in
            der Landwirtschaft, im Gartenbau oder als Tierstreu – für maximale
            Ressourceneffizienz.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Durch unsere vielfältigen Palettenprogramme und unseren Mulchservice
            unterstützen wir unsere Kunden dabei, ihren ökologischen Fußabdruck
            zu reduzieren.
          </p>
        </div>

        {/* Rechter Bildabschnitt */}
        <div className="lg:w-1/3 flex justify-center">
          <img
            src={recycleImage}
            alt="Holzpalette mit Recycling-Symbol"
            className="w-[260px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default SustainabilitySection
