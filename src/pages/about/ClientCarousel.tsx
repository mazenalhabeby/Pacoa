import React from "react"

import {
  cocaCola,
  dbSchenker,
  hipp,
  hofer,
  lidl,
  pfanner,
  schachinger,
  smurfit,
  spar,
  obi,
  vetropack,
} from "@/assets"

const logos: string[] = [
  cocaCola,
  dbSchenker,
  hipp,
  hofer,
  lidl,
  pfanner,
  schachinger,
  smurfit,
  spar,
  obi,
  vetropack,
]

const ClientCarousel: React.FC = () => {
  const looped = [...logos, ...logos]

  return (
    <section className="bg-gray-100 py-10 overflow-hidden max-w-7xl mx-auto">
      <h2 className="text-center text-3xl font-light mb-8 font-[cursive]">
        Ein kleiner Auszug aus unserer Kundenliste
      </h2>

      <div className="w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap gap-16 px-4">
          {looped.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="w-[180px] object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientCarousel
