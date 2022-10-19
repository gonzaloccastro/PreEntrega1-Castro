import React, { Component } from 'react'
import {Button, Form, Nav, Navbar, Container} from 'react-bootstrap'
import CartWidget from './CartWidget'
import Logo from '../../logo.png'
import { Link } from 'react-router-dom'

export default class NavbarComp extends Component {
    render () {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container fluid>
                        <Link to="/" className="justify-content-center" style={{ flex: .1}}>
                                <img width="40px" margin-left="auto" height="auto" className="img-responsive" src={Logo}  alt="logo" />
                        </Link>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>    
                            <Link to="/" className='url-blanco'>Tienda</Link>
                            <Link to="/category/ropa" className='url-blanco'>Ropa</Link>
                            <Link to="/category/items" className='url-blanco'> Items</Link>
                            <Link to="/category/libreria" className='url-blanco'>Libreria</Link>
                            <Link to="/cart" className='url-blanco'><CartWidget/></Link>
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