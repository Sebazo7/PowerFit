import React, { useEffect } from "react"
import { Container, Button, Table, Alert } from "react-bootstrap"
import { useCart } from "../contexts/CartContext"
import { useNavigate } from "react-router-dom"
import { toCLP } from "../utils/formatCurrency"

export default function Checkout() {
  const { items, totalPrice, createOrder, shipping } = useCart()
  const navigate = useNavigate()

  // Validar que haya items en el carrito
  useEffect(() => {
    if (items.length === 0) {
      navigate("/carrito")
    }
  }, [items.length, navigate])

  const handlePay = () => {
    // Doble validación
    if (items.length === 0) {
      alert("El carrito está vacío")
      navigate("/carrito")
      return
    }

    const order = createOrder()
    alert(
      `¡Pago realizado exitosamente! Total: ${toCLP(
        totalPrice
      )}\nID de pedido: ${order.id}`
    )
    navigate("/pedidos")
  }

  if (items.length === 0) {
    return null // Evitar render mientras redirige
  }

  return (
    <Container style={{ padding: "2rem 0" }}>
      <h2 className="bad-script-regular mb-4">Checkout</h2>

      {/* Información de envío */}
      {shipping && (
        <Alert variant="info" className="vend-sans-regular">
          <strong>Envío a:</strong> {shipping.name}<br />
          {shipping.address}, {shipping.city} - {shipping.postal}
        </Alert>
      )}

      {/* Resumen del pedido */}
      <h4 className="vend-sans-regular mb-3">Resumen del Pedido</h4>
      <Table striped bordered className="vend-sans-regular mb-4">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{toCLP(item.price)}</td>
              <td>{toCLP(item.price * item.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="vend-sans-regular mb-0">Total a pagar:</h4>
        <h3 className="vend-sans-regular text-success mb-0">
          {toCLP(totalPrice)}
        </h3>
      </div>

      <div className="d-flex gap-2">
        <Button
          variant="outline-secondary"
          onClick={() => navigate("/carrito")}
          className="vend-sans-regular"
        >
          Volver al carrito
        </Button>
        <Button
          variant="success"
          onClick={handlePay}
          className="vend-sans-regular"
        >
          Confirmar y Pagar
        </Button>
      </div>
    </Container>
  )
}
