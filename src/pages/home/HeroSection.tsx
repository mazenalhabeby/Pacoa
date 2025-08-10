import {heroImage} from "@/assets"

const HeroSection = () => {
  return (
    <section className="relative w-full h-max md:h-[90vh] bg-[#f4efe3] overflow-hidden flex flex-col md:flex-row">
      {/* LEFT SIDE: Image with diagonal clip */}
      <div className="relative w-full md:w-1/2 h-full clip-diagonal z-0">
        <img
          src={heroImage}
          alt="Pallets"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT SIDE: Content */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center px-6 md:px-12 bg-[#f4efe3] z-10 text-center py-12 md:py-0">
        <div className="max-w-md">
          <p className="uppercase text-sm font-semibold text-gray-700 tracking-wide">
            Pacoa
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 leading-tight">
            Zuverlässige Paletten.
            <br />
            Gebaut für die Ewigkeit.
          </h1>
          <p className="mt-3 text-lg font-semibold text-[#b85b16]">
            Zertifizierte Reparatur & Ersatz
          </p>
          <p className="mt-4 text-sm text-gray-700">
            Hören Sie auf, Geld für unzuverlässige Paletten zu verschwenden. Bei
            Woodbridge Pallet bieten wir hochwertige Paletten, umweltfreundliche
            Reparaturen und schnellen Ersatz, damit Ihr Unternehmen reibungslos
            weiterläuft – ganz ohne versteckte Kosten oder Aufwand. Vertraut von
            führenden Unternehmen in ganz Österreich.
          </p>
          <button className="mt-6 bg-[#b85b16] hover:bg-[#a84e12] text-white font-semibold py-3 px-6 rounded transition">
            Jetzt kostenloses Angebot anfordern
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
