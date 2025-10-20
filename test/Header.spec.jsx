import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import { describe, it, expect } from "vitest"
import Header from "../src/components/layout/Header"
import { AuthContext } from "../src/contexts/AuthContextDefinition"
import { CartContext } from "../src/contexts/CartContext"

// Mock del contexto de autenticación
const mockAuthContextNotLoggedIn = {
  estaAutenticado: false,
  usuario: null,
  cerrarSesion: () => {},
}

const mockAuthContextLoggedIn = {
  estaAutenticado: true,
  usuario: { nombre: "Juan", id: "1" },
  cerrarSesion: () => {},
}

// Mock del contexto del carrito
const mockCartContextEmpty = {
  totalItems: 0,
}

const mockCartContextWithItems = {
  totalItems: 5,
}

// Wrapper con providers necesarios
const renderWithProviders = (
  component,
  authValue = mockAuthContextNotLoggedIn,
  cartValue = mockCartContextEmpty
) => {
  return render(
    <BrowserRouter>
      <AuthContext.Provider value={authValue}>
        <CartContext.Provider value={cartValue}>
          {component}
        </CartContext.Provider>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

describe("Componente Header", () => {
  it("renderiza el logo de PowerFit", () => {
    renderWithProviders(<Header />)
    expect(screen.getByText("PowerFit")).toBeInTheDocument()
  })

  it("renderiza la letra P en el ícono del logo", () => {
    renderWithProviders(<Header />)
    expect(screen.getByText("P")).toBeInTheDocument()
  })

  it("renderiza enlaces de navegación principales", () => {
    renderWithProviders(<Header />)
    expect(screen.getByText("Productos")).toBeInTheDocument()
    expect(screen.getByText("Marcas")).toBeInTheDocument()
    expect(screen.getByText("Ofertas")).toBeInTheDocument()
  })

  it("muestra botón de iniciar sesión cuando no está autenticado", () => {
    renderWithProviders(<Header />)
    expect(screen.getByRole("button", { name: /Usuario/i })).toBeInTheDocument()
    expect(screen.getByText(/Iniciar Sesión/i)).toBeInTheDocument()
  })

  it("muestra dropdown de usuario cuando está autenticado", () => {
    renderWithProviders(<Header />, mockAuthContextLoggedIn)
    expect(screen.getByRole("button", { name: /👤/i })).toBeInTheDocument()
  })

  it("muestra el botón del carrito", () => {
    renderWithProviders(<Header />)
    const cartButtons = screen.getAllByRole("button", { name: /carrito/i })
    expect(cartButtons.length).toBeGreaterThan(0)
  })

  it("muestra el número de artículos en el carrito cuando hay productos", () => {
    renderWithProviders(
      <Header />,
      mockAuthContextNotLoggedIn,
      mockCartContextWithItems
    )
    expect(screen.getByText("5")).toBeInTheDocument()
  })

  it("no muestra badge cuando el carrito está vacío", () => {
    renderWithProviders(<Header />)
    expect(screen.queryByText("0")).not.toBeInTheDocument()
  })

  it("el logo es un enlace a la página de inicio", () => {
    renderWithProviders(<Header />)
    const logoLink = screen.getByRole("link", { name: /P PowerFit/i })
    expect(logoLink).toHaveAttribute("href", "/")
  })

  it("los enlaces de navegación tienen las rutas correctas", () => {
    renderWithProviders(<Header />)
    expect(screen.getByRole("link", { name: /Productos/i })).toHaveAttribute(
      "href",
      "/productos"
    )
    expect(screen.getByRole("link", { name: /Marcas/i })).toHaveAttribute(
      "href",
      "/marcas"
    )
    expect(screen.getByRole("link", { name: /Ofertas/i })).toHaveAttribute(
      "href",
      "/ofertas"
    )
  })

  it("muestra el menú de usuario cuando está autenticado", async () => {
    const user = userEvent.setup()
    renderWithProviders(<Header />, mockAuthContextLoggedIn)

    const userButton = screen.getByRole("button", { name: /👤/i })
    await user.click(userButton)

    expect(screen.getByText(/¡Hola, Juan!/i)).toBeInTheDocument()
  })

  it("el menú de usuario contiene opciones correctas", async () => {
    const user = userEvent.setup()
    renderWithProviders(<Header />, mockAuthContextLoggedIn)

    const userButton = screen.getByRole("button", { name: /👤/i })
    await user.click(userButton)

    expect(screen.getByText(/Mi Perfil/i)).toBeInTheDocument()
    expect(screen.getByText(/Mi Carrito/i)).toBeInTheDocument()
    expect(screen.getByText(/Mis Pedidos/i)).toBeInTheDocument()
    expect(screen.getByText(/Cerrar Sesión/i)).toBeInTheDocument()
  })
})
