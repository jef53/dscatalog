import Navbar from "components/Navbar";
import Home from "pages/Home";
import Admin from "pages/Admin";
import Catalog from "pages/Home/Catalog";
import { ProductDetails } from "pages/Home/ProductDetails";
import Login from "pages/Login";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Auth from "pages/Admin/Auth";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/*" element={<Catalog />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/admin/auth/*" element={<Auth />} />



      </Routes>
    </BrowserRouter>
  )
}