import React from 'react'
import './header.css';
import {Container,Navbar,Nav } from 'react-bootstrap';
import {FaShoppingCart,FaUserAlt} from 'react-icons/fa';
import{LinkContainer} from 'react-router-bootstrap';
const Header = () => {
  return (
    <>
   <Navbar bg="dark" expand="lg" variant="dark" >
  <Container>
    <LinkContainer to="/">
     <Navbar.Brand >Proshop</Navbar.Brand>
    </LinkContainer>
   
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <LinkContainer to="/cartscreen">
                <Nav.Link className="header-icon-align"><FaShoppingCart/><span>Cart</span></Nav.Link>

        </LinkContainer>
        <LinkContainer to="/signinscreen">
        <Nav.Link  className="header-icon-align"><FaUserAlt/><span>Sing In</span></Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
  )
}

export default Header

