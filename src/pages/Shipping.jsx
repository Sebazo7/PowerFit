import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function Shipping() {
    const [form, setForm] = useState({ name: '', address: '', city: '', postal: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Información de envío guardada')
    }

    return (
        <Container style={{ padding: '2rem 0' }}>
            <h2>Envío</h2>
            <Form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Código postal</Form.Label>
                    <Form.Control value={form.postal} onChange={(e) => setForm({ ...form, postal: e.target.value })} />
                </Form.Group>
                <Button type="submit">Guardar</Button>
            </Form>
        </Container>
    )
}
