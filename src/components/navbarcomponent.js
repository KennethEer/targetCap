import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class NavbarComponent extends Component {
    render() {
        return (
          <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">TargetCAP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/quick">Quick</Nav.Link>
                <Nav.Link href="/advanced">Advanced</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        )
    }
} 