import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

// Pages
import Subscribe from "../pages/Subscribe"
import WhoPage from "../pages/Who"
import Home from "../pages/Home"
import ManagerPage from "../pages/Manager"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Subscribe />} />
        <Route path="/who" element={<WhoPage />} />
        <Route path="/sindico" element={<ManagerPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
