import React, { useMemo } from "react"
import { Container, Table } from "react-bootstrap"
import { useCart } from "../contexts/CartContext"
import { useAuth } from "../hooks/useAuth"
import { toCLP } from "../utils/formatCurrency"

export default function Orders() {
  const { orders } = useCart()
  const { usuario } = useAuth()

  // Filtrar solo los pedidos del usuario actual
  const userOrders = useMemo(() => {
    if (!usuario) return []
    return orders.filter((order) => order.userId === usuario.id)
  }, [orders, usuario])

  return (
    <Container style={{ padding: "2rem 0" }}>
      <h2 className="bad-script-regular mb-4">Mis Pedidos</h2>
      {userOrders.length === 0 ? (
        <p className="vend-sans-regular text-muted">
          No tienes pedidos recientes.
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
            {userOrders.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>
                  {new Date(o.createdAt).toLocaleString("es-ES", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td className="fw-bold">{toCLP(o.total)}</td>
                <td>
                  {o.items.length} producto{o.items.length !== 1 ? "s" : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  )
}
