import { Container } from "react-bootstrap"

const Productos = () => {
  return (
    <Container className="py-5">
      <h1 className="display-5 fw-bold mb-4">Nuestros Productos</h1>
      <p className="lead text-muted mb-5">
        Descubre nuestra amplia gama de suplementos deportivos
      </p>

      <div className="row">
        {/* Aquí puedes agregar tu catálogo de productos */}
        <div className="col-12">
          <div className="alert alert-info">
            <strong>Próximamente:</strong> Catálogo completo de productos
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Productos
