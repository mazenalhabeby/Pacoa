export const navLinks = [
  {name: "Startseite", href: "/"},
  {name: "Über uns", href: "/about"},
  {name: "Dienstleistungen", href: "/services"},
  {name: "Produkte", href: "/products"},
  {name: "Kontakt", href: "/contact"},
]

export type NavLink = (typeof navLinks)[number]
