import React, { useState } from "react"
import { Container, Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useCart } from "../contexts/CartContext"

export default function Shipping() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    postal: "",
  })
  const navigate = useNavigate()
  const { setShipping } = useCart()

  const handleSubmit = (e) => {
    e.preventDefault()
    setShipping(form)
    navigate("/checkout")
  }

  return (
    <Container style={{ padding: "2rem 0" }}>
      <h2 className="bad-script-regular mb-4">Información de Envío</h2>
      <Form
        onSubmit={handleSubmit}
        style={{ maxWidth: 600 }}
        className="vend-sans-regular"
      >
        <Form.Group className="mb-3">
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Código postal</Form.Label>
          <Form.Control
            value={form.postal}
            onChange={(e) => setForm({ ...form, postal: e.target.value })}
          />
        </Form.Group>
        <Button type="submit" variant="success" className="vend-sans-regular">
          Continuar al pago
        </Button>
      </Form>
    </Container>
  )
}
