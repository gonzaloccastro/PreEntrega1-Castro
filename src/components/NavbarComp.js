import React, { Component } from 'react'
import {Button, Form, Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
import CartWidget from './CartWidget'
import Logo from '../../src/logo.png'

export default class NavbarComp extends Component {
    render () {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="/" className="justify-content-center" style={{ flex: .1}}>
                            <img width="40px" margin-left="auto" height="auto" className="img-responsive" src={Logo}  alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <NavDropdown title="Tienda" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">Remeras</NavDropdown.Item>
                                <NavDropdown.Item href="/"> Gorras</NavDropdown.Item>
                                <NavDropdown.Item href="/">Tazas</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/" ><CartWidget/></Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Buscar"
                            />
                            <Button href="/" variant="light">Buscar</Button>
                        </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}