import { Container, Button, Row, Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"

const Inicio = () => {
  const { estaAutenticado, usuario } = useAuth()

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        {estaAutenticado ? (
          <>
            <h1 className="bad-script-regular display-3 mb-3">
              ¡Bienvenido de nuevo, {usuario?.nombre}! 👋
            </h1>
            <p className="vend-sans-regular lead text-muted">
              Estamos felices de verte en PowerFit
            </p>
          </>
        ) : (
          <>
            <h1 className="bad-script-regular display-3 mb-3">
              Bienvenido a PowerFit
            </h1>
            <p className="vend-sans-regular lead text-muted mb-4">
              Tu tienda de suplementos deportivos de confianza
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <Link to="/registro">
                <Button
                  variant="primary"
                  size="lg"
                  className="vend-sans-regular fw-bold"
                >
                  🎯 Crear Cuenta
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="vend-sans-regular"
                >
                  👤 Iniciar Sesión
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>

      <Row className="mt-5 g-4">
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0">
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
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="text-center p-4">
              <div className="mb-3" style={{ fontSize: "3rem" }}>
                🏆
              </div>
              <h3 className="bad-script-regular h4 mb-3">Marcas Reconocidas</h3>
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
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="text-center p-4">
              <div className="mb-3" style={{ fontSize: "3rem" }}>
                🎯
              </div>
              <h3 className="bad-script-regular h4 mb-3">Ofertas Especiales</h3>
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
  )
}

export default Inicio
