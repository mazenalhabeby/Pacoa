import {paypal, sofort, vorkasse} from "@/assets"

export const FooterSections = [
  {
    title: "PACOA",
    items: [
      "Zertifizierte Qualitäts-Paletten",
      "Schnelle & Zuverlässige Lieferung",
      "3-Jahres-Strukturgarantie",
      "100% Österreichische Handwerkskunst",
    ],
  },
  {
    title: "ÖFFNUNGSZEITEN",
    items: [
      "MONTAG - DONNERSTAG : 08:00 - 15:00",
      "FREITAG : 08:00 - 12:00",
      "GESCHLOSSEN AN BRÜCKENTAGEN!",
    ],
  },
  {
    title: "ZAHLMETHODEN",
    items: [],
    images: [
      {src: paypal, alt: "Paypal"},
      {src: vorkasse, alt: "Vorkasse"},
      {src: sofort, alt: "Sofort"},
    ],
  },
]
export type FooterSectionsType = (typeof FooterSections)[number]
