import { Navbar, Container, Nav, Button, Dropdown } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@hooks/useAuth"
import { useCart } from "@/contexts/CartContext"

const Encabezado = () => {
  const { usuario, estaAutenticado, cerrarSesion } = useAuth()
  const { totalItems } = useCart()
  const navigate = useNavigate()

  const manejarClickCarrito = () => {
    navigate("/carrito")
  }

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
    <Navbar bg="white" expand="lg" className="shadow-sm sticky-top">
      <Container fluid>
        {/* Logo y marca */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <div
            className="rounded d-flex align-items-center justify-content-center me-2"
            style={{
              width: "40px",
              height: "40px",
              background: "linear-gradient(135deg, #00d4d4, #1ea6d6)",
            }}
          >
            <span className="text-white fw-bold fs-4">P</span>
          </div>
          <h1
            className="bad-script-regular fs-2 fw-bold mb-0"
            style={{ color: "#00d4d4" }}
          >
            PowerFit
          </h1>
        </Navbar.Brand>

        {/* Botón toggle para móvil */}
        <Navbar.Toggle aria-controls="navegacion-principal" />

        <Navbar.Collapse id="navegacion-principal">
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
                    className="position-relative vend-sans-regular"
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
                    <Dropdown.Item as={Link} to="/carrito">
                      🛒 Mi Carrito
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/pedidos">
                      📦 Mis Pedidos
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
                onClick={manejarClickCarrito}
                className="position-relative vend-sans-regular"
                aria-label="Carrito de compras"
              >
                🛒
                {totalItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    {totalItems}
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
