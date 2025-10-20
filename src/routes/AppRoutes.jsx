import { Routes, Route } from "react-router-dom"
import RutaProtegida from "@/components/RutaProtegida"
import Inicio from "@/pages/Inicio"
import Productos from "@/pages/Productos"
import Marcas from "@/pages/Marcas"
import Ofertas from "@/pages/Ofertas"
import Login from "@/pages/Login"
import Registro from "@/pages/Registro"
import Perfil from "@/pages/Perfil"
import Cart from "@/pages/Cart"
import Checkout from "@/pages/Checkout"
import Shipping from "@/pages/Shipping"
import Orders from "@/pages/Orders"
import NoEncontrado from "@/pages/NoEncontrado"

const RutasApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/marcas" element={<Marcas />} />
      <Route path="/ofertas" element={<Ofertas />} />
      <Route path="/carrito" element={<Cart />} />
      <Route path="/envio" element={<Shipping />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route
        path="/perfil"
        element={
          <RutaProtegida>
            <Perfil />
          </RutaProtegida>
        }
      />
      <Route
        path="/pedidos"
        element={
          <RutaProtegida>
            <Orders />
          </RutaProtegida>
        }
      />
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  )
}

export default RutasApp
