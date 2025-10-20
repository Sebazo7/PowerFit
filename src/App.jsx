import React from "react"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "@/contexts/AuthContext"
import Encabezado from "@components/layout/Header"
import Footer from "@components/layout/Footer"
import RutasApp from "@/routes/AppRoutes"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Encabezado />
          <main style={{ flex: "1" }}>
            <RutasApp />
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
