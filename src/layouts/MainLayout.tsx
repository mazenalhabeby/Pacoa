import {Outlet} from "react-router"
import Navbar from "../components/navbar"
import Footer from "@/components/Footer"

function MainLayout() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gray-100">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
