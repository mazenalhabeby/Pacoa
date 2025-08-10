import React, {createContext, useContext, useEffect, useState} from "react"
import {cookieCategories} from "@/constants/cookieCategories"

type Consent = Record<string, boolean>

const defaultConsent: Consent = cookieCategories.reduce((acc, cur) => {
  acc[cur.key] = cur.required || false
  return acc
}, {} as Consent)

const CookieConsentContext = createContext<{
  consent: Consent
  setConsent: (consent: Consent) => void
}>({consent: defaultConsent, setConsent: () => {}})

// eslint-disable-next-line react-refresh/only-export-components
export const useCookieConsent = () => useContext(CookieConsentContext)

export const CookieConsentProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [consent, setConsentState] = useState<Consent>(defaultConsent)

  useEffect(() => {
    const stored = localStorage.getItem("cookie_consent")
    if (stored) setConsentState(JSON.parse(stored))
  }, [])

  const setConsent = (newConsent: Consent) => {
    localStorage.setItem("cookie_consent", JSON.stringify(newConsent))
    setConsentState(newConsent)
  }

  return (
    <CookieConsentContext.Provider value={{consent, setConsent}}>
      {children}
    </CookieConsentContext.Provider>
  )
}
