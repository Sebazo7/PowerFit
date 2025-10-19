import { useState } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
  Badge,
} from "react-bootstrap"
import { useAuth } from "@hooks/useAuth"

const Perfil = () => {
  const { usuario, actualizarPerfil, cerrarSesion } = useAuth()
  const [editando, setEditando] = useState(false)
  const [mensaje, setMensaje] = useState({ tipo: "", texto: "" })
  const [formData, setFormData] = useState({
    nombre: usuario?.nombre || "",
    apellido: usuario?.apellido || "",
    email: usuario?.email || "",
    password: "",
    nuevaPassword: "",
    confirmarPassword: "",
  })

  const manejarCambio = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const manejarActualizacion = (e) => {
    e.preventDefault()
    setMensaje({ tipo: "", texto: "" })

    // Si se quiere cambiar la contraseña, validar
    if (formData.nuevaPassword) {
      if (formData.nuevaPassword !== formData.confirmarPassword) {
        setMensaje({
          tipo: "danger",
          texto: "Las contraseñas nuevas no coinciden",
        })
        return
      }

      if (formData.nuevaPassword.length < 6) {
        setMensaje({
          tipo: "danger",
          texto: "La contraseña debe tener al menos 6 caracteres",
        })
        return
      }
    }

    const datosActualizar = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      email: formData.email,
      ...(formData.nuevaPassword && { password: formData.nuevaPassword }),
    }

    const resultado = actualizarPerfil(datosActualizar)

    if (resultado.exito) {
      setMensaje({ tipo: "success", texto: resultado.mensaje })
      setEditando(false)
      setFormData({
        ...formData,
        password: "",
        nuevaPassword: "",
        confirmarPassword: "",
      })
    } else {
      setMensaje({ tipo: "danger", texto: resultado.mensaje })
    }
  }

  const cancelarEdicion = () => {
    setFormData({
      nombre: usuario?.nombre || "",
      apellido: usuario?.apellido || "",
      email: usuario?.email || "",
      password: "",
      nuevaPassword: "",
      confirmarPassword: "",
    })
    setEditando(false)
    setMensaje({ tipo: "", texto: "" })
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="shadow-lg border-0">
            <Card.Header className="bg-white border-0 p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h1 className="bad-script-regular h2 mb-2">Mi Perfil</h1>
                  <p className="vend-sans-regular text-muted mb-0">
                    Gestiona tu información personal
                  </p>
                </div>
                <Badge bg="success" className="vend-sans-regular">
                  Usuario Activo
                </Badge>
              </div>
            </Card.Header>

            <Card.Body className="p-4">
              {mensaje.texto && (
                <Alert
                  variant={mensaje.tipo}
                  onClose={() => setMensaje({ tipo: "", texto: "" })}
                  dismissible
                >
                  {mensaje.texto}
                </Alert>
              )}

              <Form onSubmit={manejarActualizacion}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="nombre">
                      <Form.Label className="vend-sans-regular fw-semibold">
                        Nombre
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={manejarCambio}
                        disabled={!editando}
                        className="vend-sans-regular"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="apellido">
                      <Form.Label className="vend-sans-regular fw-semibold">
                        Apellido
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={manejarCambio}
                        disabled={!editando}
                        className="vend-sans-regular"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label className="vend-sans-regular fw-semibold">
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={manejarCambio}
                    disabled={!editando}
                    className="vend-sans-regular"
                  />
                </Form.Group>

                {editando && (
                  <>
                    <hr className="my-4" />
                    <h5 className="vend-sans-regular mb-3">
                      Cambiar Contraseña (opcional)
                    </h5>

                    <Form.Group className="mb-3" controlId="nuevaPassword">
                      <Form.Label className="vend-sans-regular">
                        Nueva Contraseña
                      </Form.Label>
                      <Form.Control
                        type="password"
                        name="nuevaPassword"
                        placeholder="Dejar en blanco para mantener la actual"
                        value={formData.nuevaPassword}
                        onChange={manejarCambio}
                        className="vend-sans-regular"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="confirmarPassword">
                      <Form.Label className="vend-sans-regular">
                        Confirmar Nueva Contraseña
                      </Form.Label>
                      <Form.Control
                        type="password"
                        name="confirmarPassword"
                        placeholder="Repite la nueva contraseña"
                        value={formData.confirmarPassword}
                        onChange={manejarCambio}
                        className="vend-sans-regular"
                      />
                    </Form.Group>
                  </>
                )}

                <div className="d-flex gap-2 justify-content-between">
                  {!editando ? (
                    <>
                      <Button
                        variant="primary"
                        onClick={() => setEditando(true)}
                        className="vend-sans-regular fw-bold"
                      >
                        ✏️ Editar Perfil
                      </Button>
                      <Button
                        variant="outline-danger"
                        onClick={cerrarSesion}
                        className="vend-sans-regular"
                      >
                        🚪 Cerrar Sesión
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="success"
                        type="submit"
                        className="vend-sans-regular fw-bold"
                      >
                        💾 Guardar Cambios
                      </Button>
                      <Button
                        variant="outline-secondary"
                        onClick={cancelarEdicion}
                        className="vend-sans-regular"
                      >
                        ❌ Cancelar
                      </Button>
                    </>
                  )}
                </div>
              </Form>
            </Card.Body>

            <Card.Footer className="bg-light p-4">
              <div className="vend-sans-regular text-muted">
                <small>
                  <strong>Miembro desde:</strong>{" "}
                  {usuario?.fechaRegistro
                    ? new Date(usuario.fechaRegistro).toLocaleDateString(
                        "es-ES",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )
                    : "N/A"}
                </small>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Perfil
