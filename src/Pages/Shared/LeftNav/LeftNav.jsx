import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./LeftNav.css";
import EditorInsight from "../../News/EditorsInsight/EditorInsight";
import { Card, Col, Row } from "react-bootstrap";
import firstImage from "../../../assets/1.png";
import secondImage from "../../../assets/2.png";
import thirdImage from "../../../assets/3.png";
const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h4>All Category</h4>
      <div className="mt-4">
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className={`text-decoration-none ps-3 lh-sm ${
                location.pathname === `/category/${category.id}`
                  ? "active-link"
                  : ""
              }`}
              style={{ color: "#9F9F9F" }}
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
      <Row xs={1} md={1} lg={1} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={firstImage} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={secondImage} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={thirdImage} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LeftNav;
