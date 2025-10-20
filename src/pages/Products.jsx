import React, { useMemo, useState } from "react"
import ProductCard from "../components/layout/ProductCard"
import { Container, Row, Col } from "react-bootstrap"
import products from "../data/products"

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = useMemo(() => {
    const cats = new Set(products.map((p) => p.category))
    return ["All", ...Array.from(cats)]
  }, [])

  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory)

  return (
    <Container style={{ padding: "2rem 0" }}>
      <h2 className="bad-script-regular mb-4">Suplementos</h2>
      <div className="mb-3 d-flex align-items-center">
        <label className="me-2 vend-sans-regular">Categoría:</label>
        <div className="me-3">
          <select
            className="form-select vend-sans-regular"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            className="btn btn-outline-secondary btn-sm vend-sans-regular"
            onClick={() => setSelectedCategory("All")}
          >
            Mostrar todos
          </button>
        </div>
      </div>
      <Row>
        {filtered.map((p) => (
          <Col key={p.id} xs={12} sm={6} md={4} lg={3} className="d-flex">
            <ProductCard product={p} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
