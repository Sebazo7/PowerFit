import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import Footer from "../src/components/layout/Footer"

describe("Componente Footer", () => {
  it("renderiza el texto de copyright", () => {
    render(<Footer />)
    expect(screen.getByText(/©/i)).toBeInTheDocument()
    expect(screen.getByText(/PowerFit/i)).toBeInTheDocument()
  })

  it("muestra el año actual dinámicamente", () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(currentYear.toString()))
    ).toBeInTheDocument()
  })

  it("contiene el mensaje 'Todos los derechos reservados'", () => {
    render(<Footer />)
    expect(
      screen.getByText(/Todos los derechos reservados/i)
    ).toBeInTheDocument()
  })

  it("tiene la clase vend-sans-regular para el estilo de fuente", () => {
    const { container } = render(<Footer />)
    const footerText = container.querySelector(".vend-sans-regular")
    expect(footerText).toBeInTheDocument()
  })

  it("renderiza como elemento footer de Bootstrap", () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector("footer")
    expect(footer).toBeInTheDocument()
  })
})
