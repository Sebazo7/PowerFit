import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"

export default function Subscribe() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now save in localStorage as mock
    const list = JSON.parse(localStorage.getItem("subscribers") || "[]")
    list.push({ email, date: new Date().toISOString() })
    localStorage.setItem("subscribers", JSON.stringify(list))
    setEmail("")
    alert("Gracias por suscribirte!")
  }

  return (
    <div className="subscribe-card p-4 mt-4 bg-white rounded shadow-sm">
      <h5 className="bad-script-regular">Suscríbete a nuestro boletín</h5>
      <p className="vend-sans-regular">
        Recibe ofertas y novedades directo en tu correo.
      </p>
      <Form onSubmit={handleSubmit} className="d-flex" style={{ gap: 8 }}>
        <Form.Control
          className="vend-sans-regular"
          type="email"
          placeholder="Tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" className="vend-sans-regular">
          Suscribirse
        </Button>
      </Form>
    </div>
  )
}
