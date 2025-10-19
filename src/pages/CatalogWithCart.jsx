import React from 'react'
import Products from './Products'
import Cart from './Cart'
import { Container, Row, Col } from 'react-bootstrap'

export default function CatalogWithCart() {
    return (
        <Container style={{ padding: '2rem 0' }}>
            <Row>
                <Col md={8}>
                    <Products />
                </Col>
                <Col md={4}>
                    <Cart />
                </Col>
            </Row>
        </Container>
    )
}
