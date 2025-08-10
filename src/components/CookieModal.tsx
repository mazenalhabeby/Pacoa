import {useState, useEffect} from "react"
import {cookieCategories} from "@/constants/cookieCategories"
import {useCookieConsent} from "@/context/CookieConsentContext"

const CookieModal = () => {
  const {setConsent} = useCookieConsent()
  const [open, setOpen] = useState(false) // initially false
  const [checked, setChecked] = useState(() =>
    cookieCategories.reduce((acc, cur) => {
      acc[cur.key] = cur.required || false
      return acc
    }, {} as Record<string, boolean>)
  )

  // ✅ Check localStorage when component mounts
  useEffect(() => {
    const stored = localStorage.getItem("cookie_consent")
    if (!stored) {
      setOpen(true) // only show banner if no consent exists
    }
  }, [])

  const handleToggle = (key: string) => {
    if (!cookieCategories.find((c) => c.key === key)?.required) {
      setChecked((prev) => ({...prev, [key]: !prev[key]}))
    }
  }

  const acceptAll = () => {
    const all = cookieCategories.reduce((acc, cur) => {
      acc[cur.key] = true
      return acc
    }, {} as Record<string, boolean>)
    setConsent(all)
    setOpen(false)
  }

  const savePreferences = () => {
    setConsent(checked)
    setOpen(false)
  }

  if (!open) return null

  return (
    <div className="fixed bottom-0 inset-x-0 bg-slate-900 text-slate-50 border-t shadow-lg p-6 z-50">
      <h3 className="text-xl font-bold mb-2">Cookie-Einstellungen</h3>
      <p className="text-sm mb-4 text-gray-100">
        Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Sie können
        auswählen, welche Kategorien Sie zulassen möchten.
      </p>
      <div className="space-y-3 mb-6">
        {cookieCategories.map(({key, label, description, required}) => (
          <div key={key} className="flex items-start gap-4">
            <input
              type="checkbox"
              checked={checked[key]}
              disabled={required}
              onChange={() => handleToggle(key)}
              className="mt-1"
            />
            <div>
              <p className="font-semibold">{label}</p>
              <p className="text-sm text-gray-400">{description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-4">
        <button
          onClick={acceptAll}
          className="bg-[#b85b16] text-white px-4 py-2 rounded font-medium"
        >
          Alle akzeptieren
        </button>
        <button
          onClick={savePreferences}
          className="border border-[#b85b16] text-[#b85b16] px-4 py-2 rounded font-medium"
        >
          Speichern
        </button>
      </div>
    </div>
  )
}

export default CookieModal
