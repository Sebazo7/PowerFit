import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import ProductCard from "../src/components/layout/ProductCard"
import { CartContext } from "../src/contexts/CartContext"

// Mock del producto
const mockProduct = {
  id: "p1",
  name: "Proteina Whey",
  price: 29990,
  description: "Proteína aislada de suero 1kg",
  image: "/images/Proteina.png",
  category: "Proteínas",
}

// Mock del contexto del carrito
const mockAddItem = vi.fn()

const mockCartContext = {
  addItem: mockAddItem,
  items: [],
  totalItems: 0,
  totalPrice: 0,
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  setShipping: () => {},
  createOrder: () => {},
  orders: [],
}

// Wrapper con provider del carrito
const renderWithCartProvider = (component) => {
  return render(
    <CartContext.Provider value={mockCartContext}>
      {component}
    </CartContext.Provider>
  )
}

describe("Componente ProductCard", () => {
  it("renderiza el nombre del producto", () => {
    renderWithCartProvider(<ProductCard product={mockProduct} />)
    expect(screen.getByText("Proteina Whey")).toBeInTheDocument()
  })

  it("renderiza la descripción del producto", () => {
    renderWithCartProvider(<ProductCard product={mockProduct} />)
    expect(
      screen.getByText("Proteína aislada de suero 1kg")
    ).toBeInTheDocument()
  })

  it("renderiza el precio del producto formateado", () => {
    renderWithCartProvider(<ProductCard product={mockProduct} />)
    expect(screen.getByText(/\$29\.990/i)).toBeInTheDocument()
  })

  it("renderiza la imagen del producto", () => {
    renderWithCartProvider(<ProductCard product={mockProduct} />)
    const image = screen.getByRole("img")
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute("src", "/images/Proteina.png")
  })

  it('renderiza el botón "Añadir"', () => {
    renderWithCartProvider(<ProductCard product={mockProduct} />)
    expect(screen.getByRole("button", { name: /añadir/i })).toBeInTheDocument()
  })

  it("llama a addItem cuando se hace clic en el botón Añadir", async () => {
    const user = userEvent.setup()
    renderWithCartProvider(<ProductCard product={mockProduct} />)

    const addButton = screen.getByRole("button", { name: /añadir/i })
    await user.click(addButton)

    expect(mockAddItem).toHaveBeenCalledTimes(1)
    expect(mockAddItem).toHaveBeenCalledWith(mockProduct)
  })

  it("la imagen tiene estilos de overflow y objectFit correctos", () => {
    renderWithCartProvider(<ProductCard product={mockProduct} />)
    const image = screen.getByRole("img")
    expect(image).toHaveStyle({ objectFit: "cover" })
  })
})
