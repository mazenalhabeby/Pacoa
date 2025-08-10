import {useLocation} from "react-router-dom"
import {navLinks, type NavLink} from "../../data"
import Logo from "../Logo"
import {Menu} from "lucide-react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
} from "@/components/ui/sheet"
import {Link} from "react-router-dom"

const Navbar = () => {
  const location = useLocation()

  return (
    <header className="w-full bg-white shadow-sm z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        <Logo
          imageClassName="h-12 w-auto"
          textClassName="text-3xl text-orange-900 font-corporatus tracking-widest"
          text="PACOA"
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link: NavLink) => {
            const isActive = location.pathname === link.href
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`relative font-semibold transition-all duration-300 group ${
                  isActive
                    ? "text-orange-900"
                    : "text-gray-700 hover:text-orange-900"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-orange-900 transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${
                    isActive && "scale-x-100"
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        {/* Mobile Nav with Sheet */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-orange-900" aria-label="Open Menu">
                <Menu size={28} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 px-6 py-6">
              <SheetHeader>
                <Logo
                  imageClassName="h-10 w-auto"
                  textClassName="text-2xl text-orange-900 font-corporatus tracking-widest"
                  text="PACOA"
                />
              </SheetHeader>

              <nav className="mt-6 flex flex-col divide-y divide-muted/40">
                {navLinks.map((link: NavLink) => {
                  const isActive = location.pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`
                        group relative py-4 text-lg font-medium transition-all
                        ${
                          isActive
                            ? "text-orange-900"
                            : "text-gray-700 hover:text-orange-900"
                        }
                      `}
                    >
                      {link.name}
                      <span
                        className={`
                          absolute left-0 bottom-1 h-[2px] w-0 bg-orange-900 transition-all duration-300 group-hover:w-full
                          ${isActive && "w-full"}
                        `}
                      />
                    </Link>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Navbar
