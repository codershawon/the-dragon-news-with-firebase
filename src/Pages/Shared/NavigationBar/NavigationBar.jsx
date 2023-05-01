import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import person from "../../../assets/player-3.png";
import { AuthContext } from "../../../Providers/AuthProviders";

const NavigationBar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link
                className="mt-2 mx-2"
                to="/category/0"
                style={{ textDecoration: "none", color: "gray" }}
              >
                Home
              </Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center gap-2">
              <img
                style={{ height: "41px", width: "41px" }}
                src={person}
                alt=""
              />
              <div>
                {user ? (
                  <Button onClick={handleLogout} variant="dark">
                    Logout
                  </Button>
                ) : (
                  <Link to="/login">
                    <Button variant="dark">Login</Button>
                  </Link>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
