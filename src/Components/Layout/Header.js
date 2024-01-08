import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import HeaderCart from "../Cart/HeaderCart";


const linkStyle = {
  color: 'white', 
};

const Header = (props) => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="fixed-top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home" style={linkStyle}>HOME</Nav.Link>
          <Nav.Link href="#store" style={linkStyle}>STORE</Nav.Link>
          <Nav.Link href="#about" style={linkStyle}>ABOUT</Nav.Link>
        </Nav>
        <Nav>
          <HeaderCart onClick={props.onClick}/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
