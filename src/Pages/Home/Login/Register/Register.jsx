import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProviders";
import { useState } from "react";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted,setAccepted]=useState(false)
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const email = form.email.value;
    console.log(name, password, photo, email);
    createUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };
  const handleAccepted=e=>{
    setAccepted(e.target.checked)
  }
  return (
    <Container
      style={{ width: "752px", height: "750px" }}
      className="bg-light mx-auto pt-5"
    >
      <h3 className="text-center">Register your account</h3>
      <hr
        style={{ width: "606px", border: "1px solid #E7E7E7" }}
        className="mx-auto"
      ></hr>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter your photo url" required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email" required
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept <Link to="/termsConditions">terms & conditions</Link></>} />
        </Form.Group>
        <Button
          className="mt-4"
          style={{ width: "100%" }}
          disabled={!accepted}
          variant="dark"
          type="submit"
        >
          Register
        </Button>
        <p className="text-center mt-4">
          Already have an account?
          <Link
            className="text-danger"
            style={{ textDecoration: "none" }}
            to="/login"
          >
            Login
          </Link>
        </p>
      </Form>
    </Container>
  );
};

export default Register;
