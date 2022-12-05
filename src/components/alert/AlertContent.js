import React, { useState } from "react";
import { Alert, Container, Button } from "react-bootstrap";

const AlertContent = () => {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <Container>
        <Alert variant="secondary" onClose={() => setShow(false)} dismissible>
          Daten wurden erfolgreich versendet.
        </Alert>
      </Container>
    );
  }
  return (
    <>
      <Button className="btn-warning text-light" onClick={() => setShow(true)}>
        Show Alert
      </Button>
    </>
  );
};

export default AlertContent;
