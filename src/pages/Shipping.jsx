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
    
    // Validación adicional
    if (!form.name.trim() || !form.address.trim() || !form.city.trim() || !form.postal.trim()) {
      alert("Por favor, completa todos los campos")
      return
    }
    
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
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Ingresa tu nombre completo"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            required
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            placeholder="Calle, número, depto."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            required
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            placeholder="Tu ciudad"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Código postal</Form.Label>
          <Form.Control
            required
            value={form.postal}
            onChange={(e) => setForm({ ...form, postal: e.target.value })}
            placeholder="Código postal"
          />
        </Form.Group>
        <Button type="submit" variant="success" className="vend-sans-regular">
          Continuar al pago
        </Button>
      </Form>
    </Container>
  )
}
