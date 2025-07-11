// src/data/pallets.ts
import {palletA, palletB, palletC, palletD, palletE, palletF} from "@/assets"

export const palletQualities = [
  {
    grade: "A",
    image: palletA,
    description:
      "Paletten in Top-Qualität und nahezu neuwertigem Zustand. Kaum gebraucht, stabil und langlebig – ideal für hochwertige Lieferungen.",
    price: 25.99,
  },
  {
    grade: "B",
    image: palletB,
    description:
      "Guter Zustand mit leichten Gebrauchsspuren. Strukturell einwandfrei und hervorragend für den wiederholten Einsatz in der Logistik geeignet.",
    price: 19.99,
  },
  {
    grade: "C",
    image: palletC,
    description:
      "Mäßige Abnutzung, aber weiterhin nutzbar. Optimal für den internen Lagergebrauch oder Kurzstreckentransporte.",
    price: 14.99,
  },
  {
    grade: "D",
    image: palletD,
    description:
      "Deutlich sichtbare Abnutzung, eventuell mit kleinen Reparaturen. Geeignet für unkritische Transportanwendungen.",
    price: 9.99,
  },
  {
    grade: "E",
    image: palletE,
    description:
      "Ältere oder stark beanspruchte Paletten. Kostengünstige Lösung für den einmaligen Gebrauch oder lokale Transporte.",
    price: 5.99,
  },
  {
    grade: "F",
    image: palletF,
    description:
      "Niedrigste Qualitätsstufe – hauptsächlich zur Weiterverwertung oder Holzrecycling geeignet. Nicht für den Versand empfohlen.",
    price: 2.99,
  },
]
