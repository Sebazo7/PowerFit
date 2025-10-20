import React from "react"
import { Container, Table } from "react-bootstrap"
import { useCart } from "../contexts/CartContext"
import { toCLP } from "../utils/formatCurrency"

export default function Orders() {
  const { orders } = useCart()

  return (
    <Container style={{ padding: "2rem 0" }}>
      <h2 className="bad-script-regular mb-4">Mis Pedidos</h2>
      {orders.length === 0 ? (
        <p className="vend-sans-regular text-muted">
          No hay pedidos recientes.
        </p>
      ) : (
        <Table striped bordered className="vend-sans-regular">
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha</th>
              <th>Total</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{new Date(o.createdAt).toLocaleString()}</td>
                <td>{toCLP(o.total)}</td>
                <td>{o.items.length}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  )
}
