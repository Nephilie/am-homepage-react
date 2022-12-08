import React, { useState } from "react";
import "./FormStyles.css";
import { Col, Form, Row, Container, Button } from "react-bootstrap";


const FormPage = (props) => {
  // input validation
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Container className="form my-5">
      <h2 className="form-headline text-center">
        {props.fromHeading} | Kontaktieren Sie uns.
      </h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {/* row 1 */}
        <Row className="mt-3 justify-content-center">
          <Col md="4">
            <Form.Label>Firma</Form.Label>
            <Form.Control type="text" />
          </Col>
          <Col md="4">
            <Form.Label>Titel</Form.Label>
            <Form.Select>
              <option>Wählen Sie eine Option</option>
              <option value="1">Dr.</option>
              <option value="2">Prof.</option>
            </Form.Select>
          </Col>
        </Row>
        {/* row 2 */}
        <Row className="mt-3 justify-content-center">
          <Col md="4">
            <Form.Label>Vorname</Form.Label>
            <Form.Control type="text" required />
          </Col>
          <Col md="4">
            <Form.Label>Nachname</Form.Label>
            <Form.Control type="text" required />
          </Col>
        </Row>
        {/* row 3 */}
        <Row className="mt-3 justify-content-center">
          <Col md="4">
            <Form.Label>Telefonnummer</Form.Label>
            <Form.Control type="text" />
          </Col>
          <Col md="4">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="mail"
              required
              placeholder="Max.Mustermann@AM-GmbH.de"
            />
          </Col>
        </Row>
        <Row className="mt-3 justify-content-center">
          <Col md="8">
            <Form.Label>Ihre Nachricht</Form.Label>
            <Form.Control as="textarea" rows={3} required></Form.Control>
          </Col>
        </Row>
        <Row className="mt-3 justify-content-center">
          <Col md="2">
            <Button variant="warning" type="submit" className="text-light">
              Senden
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default FormPage;
