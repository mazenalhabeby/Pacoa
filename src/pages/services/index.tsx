import {servicesPage} from "@/data/service"

function Services() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white max-w-7xl mx-auto">
      <h2 className="text-center text-4xl font-bold text-[#b85b16] mb-2 uppercase">
        Unsere Dienstleistungen
      </h2>
      <p className="text-center text-lg text-gray-700 mb-12">
        Unser umfassender Service deckt alle Aspekte rund um Paletten ab – von
        der Neuproduktion über Reparatur bis hin zur Rücknahme und
        Wiederverwertung.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicesPage.map((service, index) => (
          <div
            key={index}
            className="bg-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-20 h-20 object-contain mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-[#b85b16] mb-2 text-center">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
