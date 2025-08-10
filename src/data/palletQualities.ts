// src/data/pallets.ts
import {palletA, palletB, palletC, palletD, palletE, industrie} from "@/assets"

export const palletQualities = [
  {
    grade: "Palette neu",
    image: palletA,
    description:
      "Nagelneue Palette in höchster Qualität – unbenutzt, besonders stabil und ideal für hochwertige oder sensible Warentransporte.",
    price: 25.99,
  },
  {
    grade: "Paletten Klasse A Neuwertig",
    image: palletB,
    description:
      "Paletten mit minimalen Gebrauchsspuren – technisch einwandfrei, sehr stabil und mehrfach wiederverwendbar.",
    price: 19.99,
  },
  {
    grade: "Palette Klasse B+ Automatenfähig",
    image: palletC,
    description:
      "Gut erhaltene Palette mit mittlerem Verschleiß – funktional, einsatzbereit und geeignet für automatische Lagersysteme.",
    price: 14.99,
  },
  {
    grade: "Palette Klasse B Speditionstauschpalette",
    image: palletD,
    description:
      "Deutlich gebrauchte Palette, stabil und tauschfähig – gängig im Speditionswesen für unkritische Lieferungen.",
    price: 9.99,
  },
  {
    grade: "Palette Defektklasse",
    image: palletE,
    description:
      "Beschädigte oder reparierte Paletten – eingeschränkt belastbar, geeignet für einfache Transporte oder kurzfristige Lagerung.",
    price: 5.99,
  },
  {
    grade: "Industrie Einweg",
    image: industrie,
    description:
      "Stabile Einwegpalette für den industriellen Gebrauch – konzipiert für einmalige Verwendung, besonders geeignet für Export und interne Logistik.",
    price: 5.49,
  },
]
