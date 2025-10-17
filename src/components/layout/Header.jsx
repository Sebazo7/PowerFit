import { Navbar, Container } from "react-bootstrap"
import "@styles/index.css"
export default function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary bad-script-regular">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/src/assets/img/logos/logo2.PNG"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}
