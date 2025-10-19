import { Container } from "react-bootstrap"

const Marcas = () => {
  return (
    <Container className="py-5">
      <h1 className="display-5 fw-bold mb-4">Nuestras Marcas</h1>
      <p className="lead text-muted mb-5">
        Trabajamos con las marcas más reconocidas del mercado
      </p>

      <div className="row">
        <div className="col-12">
          <div className="alert alert-info">
            <strong>Próximamente:</strong> Catálogo de marcas asociadas
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Marcas
