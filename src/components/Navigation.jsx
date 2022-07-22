import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, NavLink} from 'react-router-dom';

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="https://reactjs.org/docs/getting-started.html">React 101</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="navLink" to="/greeter">Home</Link>
            <Link className="navLink" to="/counter">Counter</Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Navigation
