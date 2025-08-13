import {createBrowserRouter} from "react-router"
import MainLayout from "./layouts/MainLayout"
import {About, Contact, Home, Impressum, Products, Services} from "./pages"


const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {index: true, Component: Home},
      {path: "about", Component: About},
      {path: "products", Component: Products},
      {path: "services", Component: Services},
      {path: "contact", Component: Contact},
      {path: "impressum", Component: Impressum},
    ],
  },
])

export default router
