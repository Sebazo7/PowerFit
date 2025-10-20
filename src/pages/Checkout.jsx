import React from "react"
import { Container, Button } from "react-bootstrap"
import { useCart } from "../contexts/CartContext"
import { useNavigate } from "react-router-dom"
import { toCLP } from "../utils/formatCurrency"

export default function Checkout() {
  const { totalPrice, createOrder } = useCart()
  const navigate = useNavigate()

  const handlePay = () => {
    const order = createOrder()
    alert(
      `¡Pago realizado exitosamente! Total: ${toCLP(
        totalPrice
      )}\nID de pedido: ${order.id}`
    )
    navigate("/pedidos")
  }

  return (
    <Container style={{ padding: "2rem 0" }}>
      <h2 className="bad-script-regular mb-4">Checkout</h2>
      <p className="vend-sans-regular">
        Total a pagar: <strong>{toCLP(totalPrice)}</strong>
      </p>
      <Button
        variant="success"
        onClick={handlePay}
        className="vend-sans-regular"
      >
        Pagar
      </Button>
    </Container>
  )
}
