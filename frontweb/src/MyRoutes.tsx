import Navbar from "components/Navbar";
import Home from "pages/Home";
import Admin from "pages/Home/Admin";
import Catalog from "pages/Home/Catalog";
import { ProductDetails } from "pages/Home/ProductDetails";
import { Route, BrowserRouter, Routes } from "react-router-dom";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Catalog />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>
    </BrowserRouter>
  )
}