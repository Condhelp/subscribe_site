import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

// Pages
import Home from "../pages/Home"
import Subscribe from "../pages/Subscribe"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Subscribe />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
