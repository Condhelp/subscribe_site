import { ThemeProvider } from "styled-components"
import Routes from "./routes"
import { theme } from "./theme"
import { useEffect, useState } from "react"
import Modal from "./components/Modal"

const isOnMaintence = true

function App() {
  const [showCookiesModal, setShowCookiesModal] = useState(false)

  useEffect(() => {
    window.document.documentElement.style.overflow = isOnMaintence ? "hidden" : "auto"

    const hasConsented = localStorage.getItem("condhelpAcceptedCookies")

    if (
      !(hasConsented && (hasConsented === "true" || hasConsented === "false"))
    ) {
      setShowCookiesModal(true)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      {showCookiesModal && (
        <Modal
          role="cookiesAcception"
          onClose={() => setShowCookiesModal(false)}
          visible={showCookiesModal}
        />
      )}
      {isOnMaintence && (
        <Modal
          role="maintence"
          onClose={() => {}}
          visible={true}
        />
      )}
      <Routes />
    </ThemeProvider>
  )
}

export default App
