import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Footer() {
    return (
        <footer className="bg-light py-3 mt-4">
            <div className="container text-center">
                <small className="text-muted">© {new Date().getFullYear()} PowerFit. Todos los derechos reservados.</small>
            </div>
        </footer>
    )
}