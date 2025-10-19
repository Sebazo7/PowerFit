import { Container } from "react-bootstrap"

const Ofertas = () => {
  return (
    <Container className="py-5">
      <h1 className="display-5 fw-bold mb-4">Ofertas Especiales</h1>
      <p className="lead text-muted mb-5">
        Aprovecha nuestros descuentos y promociones
      </p>

      <div className="row">
        <div className="col-12">
          <div className="alert alert-success">
            <strong>¡Ofertas disponibles próximamente!</strong>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Ofertas
