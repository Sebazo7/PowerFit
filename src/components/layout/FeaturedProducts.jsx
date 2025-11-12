import React from "react"
import { Row, Col } from "react-bootstrap"
import ProductCard from "./ProductCard"
import products from "../../data/products"

export default function FeaturedProducts({ count = 4 }) {
  const featured = products.slice(0, count)
  return (
    <section style={{ padding: "2rem 0" }}>
      <h3 className="bad-script-regular mb-4 texto-cyan text-center">
        Productos destacados
      </h3>
      <Row>
        {featured.map((p) => (
          <Col key={p.id} xs={12} sm={6} md={3} className="d-flex">
            <ProductCard product={p} />
          </Col>
        ))}
      </Row>
    </section>
  )
}
