import Navbar from "components/Navbar";
import Home from "pages/Home";
import Admin from "pages/Home/Admin";
import Catalog from "pages/Home/Catalog";
import { Route, BrowserRouter, Routes } from "react-router-dom";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Catalog />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}