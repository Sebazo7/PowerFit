import { Container, Row, Col, Spinner, Alert } from "react-bootstrap"
import { useState, useEffect, useMemo } from "react"
import ProductCard from "@/components/layout/ProductCard"
import { productoService } from "@/services"

const Productos = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productoService.obtenerTodos()

        // Mapear datos del backend (español) al frontend (inglés)
        const mappedProducts = data.map((p) => ({
          id: p.id,
          name: p.nombre,
          category: p.categoria,
          price: p.precio,
          description: p.descripcion,
          image: p.image,
        }))
        setProducts(mappedProducts)
      } catch (err) {
        console.error(err)
        setError("No se pudieron cargar los productos del servidor.")
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const categories = useMemo(() => {
    const cats = new Set(products.map((p) => p.category))
    return ["All", ...Array.from(cats)]
  }, [products])

  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory)

  if (loading) {
    return (
      <Container style={{ padding: "2rem 0", textAlign: "center" }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </Container>
    )
  }

  if (error) {
    return (
      <Container style={{ padding: "2rem 0" }}>
        <Alert variant="danger">{error}</Alert>
      </Container>
    )
  }

  return (
    <Container style={{ padding: "2rem 0" }}>
      <h2 className="bad-script-regular mb-4">Nuestros Productos</h2>

      {/* Filtro por categoría */}
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

      {/* Catálogo de productos */}
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

export default Productos
