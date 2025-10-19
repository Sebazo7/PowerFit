import { Navbar, Container, Nav, Button, Dropdown } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@hooks/useAuth"

const Encabezado = ({ cartItemsCount = 0, onCartClick }) => {
  const { usuario, estaAutenticado, cerrarSesion } = useAuth()
  const navigate = useNavigate()

  const manejarClickUsuario = () => {
    if (estaAutenticado) {
      navigate("/perfil")
    } else {
      navigate("/login")
    }
  }

  const manejarCerrarSesion = () => {
    cerrarSesion()
    navigate("/")
  }

  return (
    <Navbar bg="white" expand="lg" className="shadow-lg sticky-top">
      <Container fluid>
        {/* Logo y marca */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
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
                className="form-control ps-5 vend-sans-regular"
                aria-label="Buscar suplementos"
              />
              <span className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted">
                🔍
              </span>
            </div>
          </div>

          {/* Enlaces de navegación */}
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              as={Link}
              to="/productos"
              className="text-dark px-3 vend-sans-regular"
            >
              Productos
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/marcas"
              className="text-dark px-3 vend-sans-regular"
            >
              Marcas
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/ofertas"
              className="text-dark px-3 vend-sans-regular"
            >
              Ofertas
            </Nav.Link>

            {/* Botones de acción */}
            <div className="d-flex align-items-center gap-2 ms-3">
              {estaAutenticado ? (
                <Dropdown align="end">
                  <Dropdown.Toggle
                    variant="outline-primary"
                    size="sm"
                    className="position-relative"
                    id="dropdown-usuario"
                  >
                    👤
                    <span className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                      <span className="visually-hidden">Usuario conectado</span>
                    </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="vend-sans-regular">
                    <Dropdown.Header>¡Hola, {usuario?.nombre}!</Dropdown.Header>
                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} to="/perfil">
                      👤 Mi Perfil
                    </Dropdown.Item>
                    <Dropdown.Item onClick={onCartClick}>
                      🛒 Mi Carrito
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      onClick={manejarCerrarSesion}
                      className="text-danger"
                    >
                      🚪 Cerrar Sesión
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={manejarClickUsuario}
                  className="position-relative vend-sans-regular"
                  aria-label="Usuario"
                >
                  👤 Iniciar Sesión
                </Button>
              )}

              <Button
                variant="outline-secondary"
                size="sm"
                onClick={onCartClick}
                className="position-relative vend-sans-regular"
                aria-label="Carrito de compras"
              >
                🛒
                {cartItemsCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    {cartItemsCount}
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
