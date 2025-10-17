import { Navbar, Container, Nav, Button } from "react-bootstrap"
export default function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary img-fluid">
        <Container>
          <Navbar.Brand href="#home" className="bad-script-regular">
            <img
              alt=""
              src="/src/assets/img/logos/logo2.PNG"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            PowerFit
          </Navbar.Brand>
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#productos">Productos</Nav.Link>
          <Button variant="primary">Iniciar Sesion</Button>
        </Container>
      </Navbar>
    </>
  )
}
