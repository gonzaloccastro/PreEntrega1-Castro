import React, { Component } from 'react'
import {Button, Form, Nav, Navbar, Container} from 'react-bootstrap'
import CartWidget from './CartWidget'

export default class NavbarComp extends Component {
    render () {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="/">
                            <img src="data:image/png;base64,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" alt="logo" width={70}/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Inicio</Nav.Link>
                            <Nav.Link href="#action2">Tienda</Nav.Link>
                            <Nav.Link href="#" ><CartWidget/></Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Buscar"
                            />
                            <Button variant="light">Buscar</Button>
                        </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}