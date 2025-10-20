import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useCart } from '../contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import { toCLP } from '../utils/formatCurrency'

export default function Checkout() {
    const { totalPrice, createOrder } = useCart()
    const navigate = useNavigate()

    const handlePay = () => {
        const order = createOrder()
        alert(`Pago simulado de $${totalPrice.toFixed(2)} realizado. ID: ${order.id}`)
        navigate('/orders')
    }

    return (
        <Container style={{ padding: '2rem 0' }}>
            <h2>Checkout</h2>
            <p>Total a pagar: <strong>{toCLP(totalPrice)}</strong></p>
            <Button variant="success" onClick={handlePay}>Pagar</Button>
        </Container>
    )
}
