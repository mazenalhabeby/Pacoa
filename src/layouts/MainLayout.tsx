import {Outlet} from "react-router"
import Navbar from "../components/navbar"
import Footer from "@/components/Footer"
import {Toaster} from "sonner"

function MainLayout() {
  return (
    <div>
      <Navbar />
      <main className=" bg-gray-100">
        <Outlet />
      </main>
      <Toaster />
      <Footer />
    </div>
  )
}

export default MainLayout
