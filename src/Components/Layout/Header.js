import { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import HeaderCart from "../Cart/HeaderCart";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";

const Header = (props) => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
  };

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
            {isLoggedIn && (
              <Nav.Link as={Link} to="/store" className="nav-link ">
                STORE
              </Nav.Link>
            )}
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/about" className="nav-link">
              ABOUT
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {isLoggedIn && (
              <Nav.Link as={Link} to="/contactus" className="nav-link">
                CONTACT US
              </Nav.Link>
            )}
          </Nav.Item>
          <Nav.Item>
            {!isLoggedIn && (
              <Nav.Link as={Link} to="login" className="nav-link">
                LOGIN
              </Nav.Link>
            )}
          </Nav.Item>
          {isLoggedIn && (
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                className="nav-link"
                onClick={logoutHandler}
              >
                LOGOUT
              </Nav.Link>
            </Nav.Item>
          )}
        </Nav>
      </Navbar.Collapse>
      <div className="position-fixed top-0 end-0 m-1">
        <HeaderCart onClick={props.onClick} />
      </div>
    </Navbar>
  );
};

export default Header;
