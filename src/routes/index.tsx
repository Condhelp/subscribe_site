import { useEffect } from "react"
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom"

// Pages
import WhoPage from "../pages/Who"
import Home from "../pages/Home"
import ManagerPage from "../pages/Manager"
import DetailsManager from "../pages/DetailsManager"
import DetailsProvider from "../pages/DetailsProvider"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quemsomos" element={<WhoPage />} />
        <Route path="/cadastrosindico" element={<ManagerPage />} />
        <Route path="/sindico" element={<DetailsManager />} />
        <Route path="/prestador" element={<DetailsProvider />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
