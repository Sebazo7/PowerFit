import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'

export default function Header() {
  const { totalItems } = useCart()
  return (
    <>
      <Navbar className="bg-body-tertiary img-fluid">
        <Container>
          <Navbar.Brand as={Link} to="/" className="bad-script-regular">
            <img
              alt=""
              src="/src/assets/img/logos/logo2.PNG"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            PowerFit
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
          </Nav>
          <div className="ms-auto d-flex align-items-center">
            <Button variant="outline-primary" className="me-2">Iniciar Sesion</Button>
            <Button as={Link} to="/carrito" variant="primary">
              Carrito {totalItems > 0 && <Badge bg="light" text="dark" className="ms-2">{totalItems}</Badge>}
            </Button>
          </div>
        </Container>
      </Navbar>
    </>
  )
}
