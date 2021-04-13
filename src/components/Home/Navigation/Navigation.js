import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="container">
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav " >
                    
                    <Nav className="ml-auto nav-items">
                        <Link  className="nav-link mr-3" to="/">Home</Link>
                        <Link  className="nav-link mr-3" to="/">About</Link>
                        <Link  className="nav-link mr-3" to="/">Dental Services</Link>
                        <Link  className="nav-link mr-3" to="/">Reviews</Link>
                        <Link  className="nav-link mr-3" to="/">Blog</Link>
                        <Link  className="nav-link mr-3" to="/">Contact US</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        
    );
};

export default Navigation;