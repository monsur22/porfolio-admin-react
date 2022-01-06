import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import {
    Nav,
    Navbar,
    Container,
    NavDropdown,

} from 'react-bootstrap'
import { logout } from '../actions/userAction'

const Header = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const logoutHandler = () => {
        // localStorage.removeItem('userInfo');
        // window.location.reload();
        dispatch(logout())

    }


    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href=""><Link to={'/'}>Home</Link></Nav.Link>
                        {
                            userInfo ? (
                            <Nav.Link href=""><Link to={'/Profile'}>{userInfo.name}</Link></Nav.Link>

                        ):
                        <Nav.Link href=""><Link to={'/Singin'}>Singin</Link></Nav.Link>


                        }

                        {
                            userInfo ? (
                                <Nav.Link href="" onClick={logoutHandler}>Logout</Nav.Link>


                        ):
                        <Nav.Link href=""><Link to={'/Singup'}>SingUp</Link></Nav.Link>
                        }

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
