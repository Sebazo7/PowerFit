import React from "react"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "@/context/AuthContext"
import Encabezado from "@components/layout/Header"
import Footer from "@components/layout/Footer"
import RutasApp from "@/routes/AppRoutes"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Encabezado />
        <RutasApp />
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
