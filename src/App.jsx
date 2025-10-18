import React from "react"
import { BrowserRouter } from "react-router-dom"
import Encabezado from "@components/layout/Header"
import RutasApp from "@/routes/AppRoutes"

function App() {
  return (
    <BrowserRouter>
      <Encabezado />
      <RutasApp />
    </BrowserRouter>
  )
}

export default App
