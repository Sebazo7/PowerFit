import { describe, it, expect } from "vitest"
import { toCLP } from "../src/utils/formatCurrency"

describe("Utilidad formatCurrency", () => {
  it("formatea correctamente un precio en pesos chilenos", () => {
    const result = toCLP(29990)
    expect(result).toContain("29.990")
    expect(result).toContain("$")
  })

  it("formatea correctamente precios con decimales", () => {
    const result = toCLP(15550)
    expect(result).toContain("15.550")
  })

  it("formatea correctamente precios pequeños", () => {
    const result = toCLP(1000)
    expect(result).toContain("1.000")
  })

  it("formatea correctamente precios grandes", () => {
    const result = toCLP(999999)
    expect(result).toContain("999.999")
  })

  it("maneja el valor cero correctamente", () => {
    const result = toCLP(0)
    expect(result).toContain("0")
    expect(result).toContain("$")
  })

  it("formatea precios con separador de miles", () => {
    const result = toCLP(100000)
    expect(result).toContain("100.000")
  })

  it("usa el formato de moneda chilena (CLP)", () => {
    const result = toCLP(50000)
    // Debe contener el símbolo de peso chileno
    expect(result).toMatch(/\$/)
  })

  it("maneja números negativos (descuentos)", () => {
    const result = toCLP(-5000)
    expect(result).toContain("-")
    expect(result).toContain("5.000")
  })
})
