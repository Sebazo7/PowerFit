import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useCart } from '../../contexts/CartContext'
import { toCLP } from '../../utils/formatCurrency'

export default function ProductCard({ product }) {
    const { addItem } = useCart()

    return (
        <Card className="mb-3 flex-fill">
            <div style={{ overflow: 'hidden', height: 160 }}>
                <Card.Img variant="top" src={product.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="flex-grow-1">{product.description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <strong>{toCLP(product.price)}</strong>
                    <Button variant="primary" onClick={() => addItem(product)}>Añadir</Button>
                </div>
            </Card.Body>
        </Card>
    )
}
