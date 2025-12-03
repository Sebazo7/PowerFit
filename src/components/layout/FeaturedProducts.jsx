import React, { useState, useEffect } from "react"
import { Row, Col, Spinner, Alert } from "react-bootstrap"
import ProductCard from "./ProductCard"
import { productoService } from "@/services"

export default function FeaturedProducts({ count = 4 }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productoService.obtenerTodos()
        const mappedProducts = data.map(p => ({
          id: p.id,
          name: p.nombre,
          category: p.categoria,
          price: p.precio,
          description: p.descripcion,
          image: p.image
        }))
        setProducts(mappedProducts)
      } catch (err) {
        console.error(err)
        setError("No se pudieron cargar los productos destacados.")
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const featured = products.slice(0, count)

  if (loading) return <div className="text-center"><Spinner animation="border" /></div>
  if (error) return <Alert variant="danger">{error}</Alert>

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
