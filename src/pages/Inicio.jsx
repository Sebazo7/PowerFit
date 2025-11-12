import { Container, Button, Row, Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAuth } from "@hooks/useAuth"
import FeaturedProducts from "@/components/layout/FeaturedProducts"
import Subscribe from "@/components/layout/Subscribe"

const Inicio = () => {
  const { estaAutenticado, usuario } = useAuth()

  return (
    <>
      {/* Hero Section */}
      <div className="hero-hero fondo-image">
        <Container className="hero-container mt">
          <div className="hero-left">
            <h1 className="hero-title bad-script-regular">PowerFit</h1>
            <p className="hero-sub vend-sans-regular">
              {estaAutenticado
                ? `¡Bienvenido de nuevo, ${usuario?.nombre}! 👋 Tu tienda de confianza en suplementación y vitaminas.`
                : "Su tienda de confianza en suplementación y vitaminas. Productos seleccionados para tu rendimiento y salud."}
            </p>
            <div className="mt-3">
              {estaAutenticado ? (
                <>
                  <Button
                    as={Link}
                    to="/productos"
                    variant="light"
                    className="me-2 vend-sans-regular"
                  >
                    Ver Productos
                  </Button>
                  <Button
                    as={Link}
                    to="/carrito"
                    variant="outline-light"
                    className="vend-sans-regular"
                  >
                    🛒 Mi Carrito
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    as={Link}
                    to="/registro"
                    variant="light"
                    size="lg"
                    className="me-2 vend-sans-regular fw-bold mb-3 me-5"
                  >
                    🎯 Crear Cuenta
                  </Button>
                  <Button
                    as={Link}
                    to="/login"
                    variant="outline-light"
                    size="lg"
                    className="vend-sans-regular mb-3"
                  >
                    👤 Iniciar Sesión
                  </Button>
                </>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Sección de características */}
      <Container className="py-5">
        <Row className="g-4 sh">
          <Col md={4}>
            <Card className="h-100 shadow border-0 ">
              <Card.Body className="text-center p-4">
                <div className="mb-3" style={{ fontSize: "3rem" }}>
                  💪
                </div>
                <h3 className="bad-script-regular h4 mb-3">
                  Productos de Calidad
                </h3>
                <p className="vend-sans-regular text-muted">
                  Los mejores suplementos para tu rendimiento deportivo
                </p>
                <Link to="/productos">
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="vend-sans-regular"
                  >
                    Ver Productos
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow border-0">
              <Card.Body className="text-center p-4">
                <div className="mb-3" style={{ fontSize: "3rem" }}>
                  🏆
                </div>
                <h3 className="bad-script-regular h4 mb-3">
                  Marcas Reconocidas
                </h3>
                <p className="vend-sans-regular text-muted">
                  Trabajamos con las marcas líderes del mercado internacional
                </p>
                <Link to="/marcas">
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="vend-sans-regular"
                  >
                    Ver Marcas
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow border-0">
              <Card.Body className="text-center p-4">
                <div className="mb-3" style={{ fontSize: "3rem" }}>
                  🎯
                </div>
                <h3 className="bad-script-regular h4 mb-3">
                  Ofertas Especiales
                </h3>
                <p className="vend-sans-regular text-muted">
                  Descuentos exclusivos para nuestros clientes registrados
                </p>
                <Link to="/ofertas">
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="vend-sans-regular"
                  >
                    Ver Ofertas
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Productos destacados */}
      <Container>
        <FeaturedProducts count={4} />
      </Container>

      {/* Newsletter */}
      <Container className="pb-5">
        <Subscribe />
      </Container>
    </>
  )
}

export default Inicio
