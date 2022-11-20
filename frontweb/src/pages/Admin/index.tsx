import ButttonIcon from "components/ButtonIcon";
import ProductCard from "components/ProductCard";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../Home"
import './styles.scss'
import { ReactComponent as ArrowIcon } from 'assets/images/Seta.svg'


export default function Admin() {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Routes>
          <Route index element={<Navigate to="products" replace />} />
          <Route path="/products" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}