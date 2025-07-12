import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import {RouterProvider} from "react-router"
import router from "./router.tsx"
import "./styles/main.css"
import {CookieConsentProvider} from "./context/CookieConsentContext.tsx"
import CookieModal from "./components/CookieModal.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CookieConsentProvider>
      <RouterProvider router={router} />
      <CookieModal />
    </CookieConsentProvider>
  </StrictMode>
)
