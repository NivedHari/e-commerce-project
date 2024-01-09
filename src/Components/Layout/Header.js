import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import HeaderCart from "../Cart/HeaderCart";
import { Link } from 'react-router-dom';

const linkStyle = {
  color: "white",
};

const Header = (props) => {
  return (
    <Navbar bg="dark" variant="dark" className="fixed-top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Item>
            <Nav.Link as={Link} to="/home" className="nav-link">
              HOME
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/store" className="nav-link active">
              STORE
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/about" className="nav-link">
              ABOUT
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      <div className="position-fixed top-0 end-0 m-1">
        <HeaderCart onClick={props.onClick} />
      </div>
    </Navbar>
  );
};

export default Header;