import { useState } from "react"
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@hooks/useAuth"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [cargando, setCargando] = useState(false)
  const { iniciarSesion } = useAuth()
  const navigate = useNavigate()

  const manejarEnvio = async (e) => {
    e.preventDefault()
    setError("")
    setCargando(true)

    try {
      const resultado = await iniciarSesion(email, password)

      if (resultado.exito) {
        navigate("/")
      } else {
        setError(resultado.mensaje)
      }
    } catch (err) {
      console.error("Error en login:", err)
      setError("Error al iniciar sesión")
    } finally {
      setCargando(false)
    }
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow-lg border-0">
            <Card.Body className="p-5">
              <div className="text-center mb-4">
                <h1 className="bad-script-regular display-5 mb-2">PowerFit</h1>
                <h2 className="vend-sans-regular h4 text-muted">
                  Iniciar Sesión
                </h2>
              </div>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={manejarEnvio}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label className="vend-sans-regular">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="vend-sans-regular"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="password">
                  <Form.Label className="vend-sans-regular">
                    Contraseña
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="vend-sans-regular"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 vend-sans-regular fw-bold"
                  size="lg"
                  disabled={cargando}
                >
                  {cargando ? "Iniciando sesión..." : "Iniciar Sesión"}
                </Button>
              </Form>

              <hr className="my-4" />

              <p className="text-center text-muted vend-sans-regular mb-0">
                ¿No tienes cuenta?{" "}
                <Link
                  to="/registro"
                  className="text-primary fw-bold text-decoration-none"
                >
                  Regístrate aquí
                </Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
