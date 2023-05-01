import React from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProviders";

const Login = () => {
  const { user,signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location=useLocation()
  console.log("Login page",location)
  const from=location.state?.from?.pathname || "/category/0"
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) =>{
        const loggedUser=result.user
        console.log(loggedUser)
        // navigate("/category/0")
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error))
  };
  return (
    <Container
      style={{ width: "752px", height: "550px" }}
      className="bg-light mx-auto pt-5"
    >
      <h3 className="text-center">Login your account</h3>
      <hr
        style={{ width: "606px", border: "1px solid #E7E7E7" }}
        className="mx-auto"
      ></hr>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email address" required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter your password" required
          />
        </Form.Group>
        <Button
          className="mt-4"
          style={{ width: "100%" }}
          variant="dark"
          type="submit"
        >
          Login
        </Button>
        <p className="text-center mt-4">
          Don't have an account?
          <Link
            className="text-danger"
            style={{ textDecoration: "none" }}
            to="/register"
          >
            Register
          </Link>
        </p>
      </Form>
    </Container>
  );
};

export default Login;
