import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "@components/layout/Header"
import Footer from "@components/layout/Footer"
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Orders from './pages/Orders'
import Shipping from './pages/Shipping'
import CatalogWithCart from './pages/CatalogWithCart'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/shop" element={<CatalogWithCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/shipping" element={<Shipping />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
