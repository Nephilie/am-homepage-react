import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Stories = () => {
  return (
    <Container className="my-5">
      <Row className="mb-3">
        <Col>
          <h2 className="text-uppercase">
            Unsere <span>Erfolgsgeschichten</span>
          </h2>
        </Col>
      </Row>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={props.img}></Card.Img>
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>{props.text}</Card.Text>
            </Card.Body>
            <Button variant="secondary">Mehr Erfahren</Button>{" "}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Stories;
