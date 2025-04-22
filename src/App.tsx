import { ThemeProvider } from "styled-components"
import Routes from "./routes"
import { theme } from "./theme"
import { useEffect, useState } from "react"
import Modal from "./components/Modal"

function App() {
  const [showCookiesModal, setShowCookiesModal] = useState(false)

  useEffect(() => {
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
      <Routes />
    </ThemeProvider>
  )
}

export default App
