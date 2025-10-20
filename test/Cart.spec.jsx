import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { describe, it, expect } from "vitest"
import Cart from "../src/pages/Cart"
import { AuthContext } from "../src/contexts/AuthContextDefinition"
import { CartContext } from "../src/contexts/CartContext"

// Mock del contexto de autenticación
const mockAuthContextNotLoggedIn = {
  estaAutenticado: false,
  usuario: null,
}

const mockAuthContextLoggedIn = {
  estaAutenticado: true,
  usuario: { nombre: "Juan", id: "1", email: "juan@test.com" },
}

// Mock del contexto del carrito
const mockCartContextEmpty = {
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

const mockCartContextWithItems = {
  items: [
    {
      id: "p1",
      name: "Proteina Whey",
      price: 29990,
      quantity: 2,
      image: "/images/Proteina.png",
    },
    {
      id: "p2",
      name: "Creatina Monohidrato",
      price: 19990,
      quantity: 1,
      image: "/images/creatina.png",
    },
  ],
  totalItems: 3,
  totalPrice: 79970,
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  setShipping: () => {},
  createOrder: () => {},
  orders: [],
}

// Wrapper con providers necesarios
const renderWithProviders = (
  component,
  authValue = mockAuthContextLoggedIn,
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

describe("Componente Cart", () => {
  it("renderiza el título del carrito", () => {
    renderWithProviders(<Cart />)
    expect(
      screen.getByRole("heading", { name: /Carrito/i })
    ).toBeInTheDocument()
  })

  it("muestra mensaje cuando el carrito está vacío", () => {
    renderWithProviders(<Cart />)
    expect(screen.getByText(/Tu carrito está vacío/i)).toBeInTheDocument()
  })

  it("muestra mensaje de carrito vacío", () => {
    renderWithProviders(<Cart />)
    expect(screen.getByText(/vacío/i)).toBeInTheDocument()
  })

  it("muestra alerta cuando el usuario no está autenticado", () => {
    renderWithProviders(
      <Cart />,
      mockAuthContextNotLoggedIn,
      mockCartContextWithItems
    )
    expect(
      screen.getByText(/Inicia sesión para continuar/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Debes iniciar sesión o registrarte/i)
    ).toBeInTheDocument()
  })

  it("renderiza los productos del carrito correctamente", () => {
    renderWithProviders(
      <Cart />,
      mockAuthContextLoggedIn,
      mockCartContextWithItems
    )
    expect(screen.getByText("Proteina Whey")).toBeInTheDocument()
    expect(screen.getByText("Creatina Monohidrato")).toBeInTheDocument()
  })

  it("muestra la cantidad correcta de productos", () => {
    renderWithProviders(
      <Cart />,
      mockAuthContextLoggedIn,
      mockCartContextWithItems
    )
    const quantityInputs = screen.getAllByRole("spinbutton")
    expect(quantityInputs[0]).toHaveValue(2)
    expect(quantityInputs[1]).toHaveValue(1)
  })

  it("muestra el subtotal correctamente", () => {
    renderWithProviders(
      <Cart />,
      mockAuthContextLoggedIn,
      mockCartContextWithItems
    )
    expect(screen.getByText(/Subtotal/i)).toBeInTheDocument()
    expect(screen.getByText(/\$79\.970/i)).toBeInTheDocument()
  })

  it("muestra botón de proceder al pago cuando hay productos", () => {
    renderWithProviders(
      <Cart />,
      mockAuthContextLoggedIn,
      mockCartContextWithItems
    )
    expect(
      screen.getByRole("button", { name: /Proceder al Pago/i })
    ).toBeInTheDocument()
  })

  it("botón de pago está deshabilitado cuando no está autenticado", () => {
    renderWithProviders(
      <Cart />,
      mockAuthContextNotLoggedIn,
      mockCartContextWithItems
    )
    const checkoutButton = screen.getByRole("button", {
      name: /Proceder al Pago/i,
    })
    expect(checkoutButton).toHaveAttribute("aria-disabled", "true")
  })

  it("renderiza botones de eliminar producto", () => {
    renderWithProviders(
      <Cart />,
      mockAuthContextLoggedIn,
      mockCartContextWithItems
    )
    const deleteButtons = screen.getAllByRole("button", { name: /eliminar/i })
    expect(deleteButtons).toHaveLength(2)
  })

  it("muestra el total de productos en el carrito", () => {
    renderWithProviders(
      <Cart />,
      mockAuthContextLoggedIn,
      mockCartContextWithItems
    )
    expect(screen.getByText(/Total:/i)).toBeInTheDocument()
    expect(screen.getByText(/\$79\.970/i)).toBeInTheDocument()
  })
})
