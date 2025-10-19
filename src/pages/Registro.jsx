import { useState } from "react"
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmarPassword: "",
  })
  const [error, setError] = useState("")
  const [cargando, setCargando] = useState(false)
  const { registrarUsuario } = useAuth()
  const navigate = useNavigate()

  const manejarCambio = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const manejarEnvio = async (e) => {
    e.preventDefault()
    setError("")

    // Validaciones
    if (formData.password !== formData.confirmarPassword) {
      setError("Las contraseñas no coinciden")
      return
    }

    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres")
      return
    }

    setCargando(true)

    // eslint-disable-next-line no-unused-vars
    const { confirmarPassword, ...datosRegistro } = formData
    const resultado = registrarUsuario(datosRegistro)

    if (resultado.exito) {
      navigate("/")
    } else {
      setError(resultado.mensaje)
    }

    setCargando(false)
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg border-0">
            <Card.Body className="p-5">
              <div className="text-center mb-4">
                <h1 className="bad-script-regular display-5 mb-2">PowerFit</h1>
                <h2 className="vend-sans-regular h4 text-muted">
                  Crear Cuenta
                </h2>
              </div>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={manejarEnvio}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="nombre">
                      <Form.Label className="vend-sans-regular">
                        Nombre
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="nombre"
                        placeholder="Tu nombre"
                        value={formData.nombre}
                        onChange={manejarCambio}
                        required
                        className="vend-sans-regular"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="apellido">
                      <Form.Label className="vend-sans-regular">
                        Apellido
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="apellido"
                        placeholder="Tu apellido"
                        value={formData.apellido}
                        onChange={manejarCambio}
                        required
                        className="vend-sans-regular"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label className="vend-sans-regular">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={manejarCambio}
                    required
                    className="vend-sans-regular"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label className="vend-sans-regular">
                    Contraseña
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Mínimo 6 caracteres"
                    value={formData.password}
                    onChange={manejarCambio}
                    required
                    className="vend-sans-regular"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="confirmarPassword">
                  <Form.Label className="vend-sans-regular">
                    Confirmar Contraseña
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmarPassword"
                    placeholder="Repite tu contraseña"
                    value={formData.confirmarPassword}
                    onChange={manejarCambio}
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
                  {cargando ? "Registrando..." : "Crear Cuenta"}
                </Button>
              </Form>

              <hr className="my-4" />

              <p className="text-center text-muted vend-sans-regular mb-0">
                ¿Ya tienes cuenta?{" "}
                <Link
                  to="/login"
                  className="text-primary fw-bold text-decoration-none"
                >
                  Inicia sesión aquí
                </Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Registro
