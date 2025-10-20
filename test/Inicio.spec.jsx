import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { describe, it, expect } from "vitest"
import Inicio from "../src/pages/Inicio"
import { AuthContext } from "../src/contexts/AuthContextDefinition"
import { CartContext } from "../src/contexts/CartContext"

// Mock del contexto de autenticación
const mockAuthContextValue = {
  estaAutenticado: false,
  usuario: null,
}

const mockAuthContextValueLoggedIn = {
  estaAutenticado: true,
  usuario: { nombre: "Juan", id: "1" },
}

// Mock del contexto del carrito
const mockCartContext = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  setShipping: () => {},
  createOrder: () => {},
  orders: [],
}

// Wrapper con providers necesarios
const renderWithProviders = (component, authValue = mockAuthContextValue) => {
  return render(
    <BrowserRouter>
      <AuthContext.Provider value={authValue}>
        <CartContext.Provider value={mockCartContext}>
          {component}
        </CartContext.Provider>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

describe("Componente Inicio", () => {
  it("renderiza el título PowerFit correctamente", () => {
    renderWithProviders(<Inicio />)
    expect(screen.getByText("PowerFit")).toBeInTheDocument()
  })

  it("muestra mensaje de bienvenida para usuarios no autenticados", () => {
    renderWithProviders(<Inicio />)
    expect(
      screen.getByText(/Su tienda de confianza en suplementación y vitaminas/i)
    ).toBeInTheDocument()
  })

  it("muestra botones de registro e inicio de sesión cuando no está autenticado", () => {
    renderWithProviders(<Inicio />)
    expect(
      screen.getByRole("button", { name: /crear cuenta/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /iniciar sesión/i })
    ).toBeInTheDocument()
  })

  it("muestra mensaje personalizado cuando el usuario está autenticado", () => {
    renderWithProviders(<Inicio />, mockAuthContextValueLoggedIn)
    expect(screen.getByText(/Bienvenido de nuevo, Juan/i)).toBeInTheDocument()
  })

  it("muestra botones de productos y carrito cuando está autenticado", () => {
    renderWithProviders(<Inicio />, mockAuthContextValueLoggedIn)
    const productosButtons = screen.getAllByRole("button", {
      name: /ver productos/i,
    })
    expect(productosButtons.length).toBeGreaterThan(0)
    expect(
      screen.getByRole("button", { name: /mi carrito/i })
    ).toBeInTheDocument()
  })

  it("renderiza la imagen del hero correctamente", () => {
    renderWithProviders(<Inicio />)
    const heroImage = screen.getByAltText("PowerFit Gym")
    expect(heroImage).toBeInTheDocument()
    expect(heroImage).toHaveAttribute("src", "/images/1366_2000.jpeg")
  })

  it("renderiza las tres tarjetas de características", () => {
    renderWithProviders(<Inicio />)
    expect(screen.getByText("Productos de Calidad")).toBeInTheDocument()
    expect(screen.getByText("Marcas Reconocidas")).toBeInTheDocument()
    expect(screen.getByText("Ofertas Especiales")).toBeInTheDocument()
  })

  it("contiene enlaces de navegación a productos, marcas y ofertas", () => {
    renderWithProviders(<Inicio />)
    const links = screen.getAllByRole("link")
    const linkTexts = links.map((link) => link.textContent)
    expect(linkTexts).toContain("Ver Productos")
    expect(linkTexts).toContain("Ver Marcas")
    expect(linkTexts).toContain("Ver Ofertas")
  })
})
