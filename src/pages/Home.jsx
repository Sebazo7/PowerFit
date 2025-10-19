import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FeaturedProducts from '../components/layout/FeaturedProducts'
import Subscribe from '../components/layout/Subscribe'

export default function Home() {
    return (
        <>
            <div className="hero-hero">
                <Container className="hero-container">
                    <div className="hero-left">
                        <h1 className="hero-title">PowerFit</h1>
                        <p className="hero-sub">Su tienda de confianza en suplementación y vitaminas. Productos seleccionados para tu rendimiento y salud.</p>
                        <div className="mt-3">
                            <Button as={Link} to="/productos" variant="light" className="me-2">Ver Suplementos</Button>
                            <Button as={Link} to="/shop" variant="outline-light">Tienda + Carrito</Button>
                        </div>
                    </div>
                    <div className="hero-right">
                        <img src="/src/assets/img/logos/1366_2000.jpeg" alt="gim" className="hero-image" />
                    </div>
                </Container>
            </div>

            <Container>
                <FeaturedProducts />
                <Subscribe />
            </Container>
        </>
    )
}
