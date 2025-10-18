import { Navbar, Container, Nav, Button } from "react-bootstrap"

const Encabezado = ({
  onAuthClick,
  alClickAutenticar,
  cartItemsCount,
  cantidadArticulosCarrito,
  user,
  usuario,
  onCartClick,
  alClickCarrito,
}) => {
  const manejarClickAuth = alClickAutenticar || onAuthClick
  const cantidadCarrito =
    typeof cantidadArticulosCarrito !== "undefined"
      ? cantidadArticulosCarrito
      : cartItemsCount || 0
  const usuarioActual = usuario || user
  const manejarClickCarrito = alClickCarrito || onCartClick

  return (
    <Navbar bg="white" expand="lg" className="shadow-lg sticky-top">
      <Container fluid>
        {/* Logo y marca */}
        <Navbar.Brand href="#inicio" className="d-flex align-items-center">
          <div
            className="bg-gradient-powerfit rounded d-flex align-items-center justify-content-center me-2"
            style={{ width: "40px", height: "40px" }}
          >
            <span className="text-white fw-bold fs-4">P</span>
          </div>
          <h1 className="font-script fs-2 text-gradient fw-bold mb-0 bad-script-regular">
            PowerFit
          </h1>
        </Navbar.Brand>

        {/* Botón toggle para móvil */}
        <Navbar.Toggle aria-controls="navegacion-principal" />

        <Navbar.Collapse id="navegacion-principal">
          {/* Barra de búsqueda */}
          <div
            className="mx-auto my-2 my-lg-0"
            style={{ maxWidth: "400px", width: "100%" }}
          >
            <div className="position-relative">
              <input
                type="text"
                placeholder="Buscar suplementos..."
                className="form-control ps-5"
                aria-label="Buscar suplementos"
              />
              <span className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted">
                🔍
              </span>
            </div>
          </div>

          {/* Enlaces de navegación */}
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#productos" className="text-dark px-3">
              Productos
            </Nav.Link>
            <Nav.Link href="#marcas" className="text-dark px-3">
              Marcas
            </Nav.Link>
            <Nav.Link href="#ofertas" className="text-dark px-3">
              Ofertas
            </Nav.Link>
            <Nav.Link href="#membresias" className="text-dark px-3">
              Membresías
            </Nav.Link>

            {/* Botones de acción */}
            <div className="d-flex align-items-center gap-2 ms-3">
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={manejarClickAuth}
                className="position-relative"
                aria-label="Usuario"
              >
                👤
                {usuarioActual && (
                  <span className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                    <span className="visually-hidden">Usuario conectado</span>
                  </span>
                )}
              </Button>

              <Button
                variant="outline-secondary"
                size="sm"
                onClick={manejarClickCarrito}
                className="position-relative"
                aria-label="Carrito de compras"
              >
                🛒
                {cantidadCarrito > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    {cantidadCarrito}
                    <span className="visually-hidden">
                      artículos en el carrito
                    </span>
                  </span>
                )}
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Encabezado
