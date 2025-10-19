import React from 'react'
import { Container, Table, Button, Form } from 'react-bootstrap'
import { useCart } from '../contexts/CartContext'
import { toCLP } from '../utils/formatCurrency'

export default function Cart() {
    const { items, removeItem, setQuantity, totalPrice, clear } = useCart()

    return (
        <Container style={{ padding: '2rem 0' }}>
            <h2>Carrito</h2>
            {items.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(i => (
                                <tr key={i.id}>
                                    <td>{i.name}</td>
                                    <td>{toCLP(i.price)}</td>
                                    <td style={{ width: 120 }}>
                                        <Form.Control type="number" min={1} value={i.quantity} onChange={(e) => setQuantity(i.id, Number(e.target.value))} />
                                    </td>
                                    <td>{toCLP(i.price * i.quantity)}</td>
                                    <td><Button variant="danger" size="sm" onClick={() => removeItem(i.id)}>Eliminar</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="d-flex justify-content-between align-items-center">
                        <strong>Total: {toCLP(totalPrice)}</strong>
                        <div>
                            <Button variant="secondary" className="me-2" onClick={clear}>Vaciar carrito</Button>
                            <Button variant="success" href="/shipping">Proceder al pago</Button>
                        </div>
                    </div>
                </>
            )}
        </Container>
    )
}
