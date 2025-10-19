import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const NoEncontrado = () => {
  return (
    <Container className="py-5 text-center">
      <h1 className="display-1 fw-bold">404</h1>
      <h2 className="mb-4">Página no encontrada</h2>
      <p className="lead text-muted mb-4">
        Lo sentimos, la página que buscas no existe
      </p>
      <Link to="/">
        <Button variant="primary" size="lg">
          Volver al inicio
        </Button>
      </Link>
    </Container>
  )
}

export default NoEncontrado
