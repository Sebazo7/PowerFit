import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "@styles/index.css"
import App from "./App.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import { CartProvider } from './contexts/CartContext'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
)
