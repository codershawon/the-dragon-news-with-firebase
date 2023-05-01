import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import firstImage from "../../../assets/1.png"
import secondImage from "../../../assets/2.png"
import thirdImage from "../../../assets/3.png"
const EditorInsight = () => {
  return (
    <div className="mt-3">
        <h4>Editors Insight</h4>
      <Row xs={1} md={2} lg={3} className="g-4">
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

export default EditorInsight;
