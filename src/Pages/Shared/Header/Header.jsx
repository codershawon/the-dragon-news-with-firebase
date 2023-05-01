import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container} from "react-bootstrap";
import Marquee from "react-fast-marquee";
const Header = () => {
  return (
    <Container>
      <div className="text-center mt-3">
        <img src={logo} alt="" />
        <p className="text-secondary">Journalism Without Fear or Favour</p>
        <p className="text-secondary">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
      <div
        className="d-flex gap-2"
        style={{
          background: " #F3F3F3 ",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <Button variant="danger">Latest</Button>{" "}
        <Marquee>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
