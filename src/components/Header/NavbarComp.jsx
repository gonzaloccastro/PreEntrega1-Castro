import React , { useEffect} from 'react'
import { useState } from "react"
import {Button, Form, Nav, Navbar, Container} from 'react-bootstrap'
import CartWidget from './CartWidget'
import Logo from '../../logo.png'
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { dataBase } from '../../services/firebaseConfig'


const CargaNavbar = () => {
    const [categories, setCategories] = useState ([]);

    useEffect(()=>{
        const collectionCat = collection(dataBase, 'categorias');
        getDocs(collectionCat)
            .then((res)=>{
                const categorias = res.docs.map ((cat)=>{
                    return{
                        id: cat.id,
                        ...cat.data()
                    }
                })
                setCategories(categorias);
            })
            .catch((error)=>{
                console.log(error)
            })

    }, []);


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
                                <ul className='categoryNames'>{categories.map((cat)=>(
                                    <Link to={`/category/${cat.path}`} key={cat.id} className='url-blanco'>{cat.name}</Link>
                                ))

                                    }
                                </ul>
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

export default CargaNavbar;