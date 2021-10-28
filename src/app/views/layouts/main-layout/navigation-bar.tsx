import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Button,
    Box,
    IconButton,
    Typography
} from '@mui/material';
import { SupervisedUserCircleRounded } from '@mui/icons-material';
import { Container, Navbar, Nav, NavDropdown, Dropdown, NavLink, NavItem, Offcanvas } from 'react-bootstrap';

export default function NavigationBar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Navbar bg="brand-blue" className="navbar-scroll" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home" className="text-light">React-Crypto</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} className=""/>
                <Box className="d-none d-sm-block">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="active me-3">Home</Nav.Link>
                        <Nav.Link href="#link" className="me-3">About Us</Nav.Link>
                        <Nav.Link href="#link" className="me-3">How to Buy/Sell</Nav.Link>
                        { /* <Nav.Link href="#link">News</Nav.Link>
                        <Nav.Link href="#link">FAQ</Nav.Link>
                        <Nav.Link href="#link">Contact Us</Nav.Link> */}
                        <Nav.Link href="#home" className="me-3">Login</Nav.Link>
                        <Nav.Link href="#link" className="me-3">Register</Nav.Link>
                    </Nav> 
                </Box>
                <Offcanvas
                    show={show}
                    onHide={handleClose}
                    placement="end"
                    aria-labelledBy="offcanvasNavbarLabel"
                    tabIndex="-1"
                >
                    <Offcanvas.Header closeButton className="bg-light">
                        <Offcanvas.Title>Portfolio</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className="active">Home</Nav.Link>
                            <Nav.Link href="#link">About Us</Nav.Link>
                            <Nav.Link href="#link">FAQ</Nav.Link>
                            <Nav.Link href="#link">How to Buy/Sell</Nav.Link>
                            <Nav.Link href="#link">News</Nav.Link>
                            <Nav.Link href="#link">Contact Us</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Login</Nav.Link>
                            <Nav.Link href="#link">Register</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
    );
}
