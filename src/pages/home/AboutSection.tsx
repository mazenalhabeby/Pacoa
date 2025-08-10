import {company} from "@/assets"
import {services} from "@/data/service"

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-16 flex flex-col gap-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 md:px-0">
        {/* LEFT: Image */}
        <div className="w-full h-80 md:h-full">
          <img
            src={company}
            alt="About Woodbridge Pallet"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* RIGHT: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Über Pacoa
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Seit Jahren vertrauen Unternehmen in ganz Österreich auf unsere
            zuverlässigen, langlebigen und umweltfreundlichen Palettenlösungen.
            Unser Ziel ist es, Ihre Logistik effizienter, nachhaltiger und
            kostensparender zu gestalten – mit hochwertigen Paletten,
            zertifizierten Reparaturen und maßgeschneidertem Service.
          </p>
          <p className="text-sm text-gray-600">
            Unser erfahrenes Team begleitet Sie vom ersten Angebot bis zur
            Lieferung – schnell, unkompliziert und mit Fokus auf Ihre
            Zufriedenheit. Egal ob Sie neue Paletten benötigen, beschädigte
            ersetzen oder nachhaltige Alternativen suchen: Wir sind Ihr
            zuverlässiger Partner.
          </p>
        </div>
      </div>
      <div className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-24 h-24 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-bold text-[#b85b16] mb-1">
                  {service.title}
                </h3>
                <div className="w-10 h-1 bg-[#b85b16] mb-2"></div>
                <p className="text-gray-700 text-sm max-w-xs">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
