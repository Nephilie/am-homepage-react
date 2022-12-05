import React from "react";

import "./DataStyles.css";
import Isometrik from "../../images/dev.png";
import opsIso from "../../images/opsIso.png";
import hlpIso from "../../images/hlp.png";
import appIso from "../../images/app.png";

import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const Data = () => {
  return (
    <Container className="data">    
      <Row className="mt-3">
        <Col md="6">
          <h3>DEV</h3>
          <p>
            Design und Entwicklung. Wir gestalten erfolgreiche digitale Produkte
            - nutzerzentriert, innovativ und agil. Mithilfe von modernsten
            Technologien setzen wir Projekte nach den Grundsätzen der agilen
            Entwicklung um.
          </p>
          <Link to="/dev" className="btn btn-warning text-light">
            Mehr Erfahren
          </Link>
        </Col>
        <Col md="6">
          <Image className="isoProp w-100" src={Isometrik} alt="devops infograph" />
        </Col>
      </Row>
      {/* row 3*/}
      <Row className="mt-3">
        <Col md="6">
          <Image className="isoProp" src={opsIso} alt="ops infograph" />
        </Col>
        <Col md="6">
          <h3>OPS</h3>
          <p>
            Cloud- und IT-Betrieb. Wir betreiben Ihre Systeme und Applikationen
            auf virtuellen Servern oder als gemanagte Container in unseren
            Rechenzentren, in den globalen Clouds, hybrid oder on premises.
          </p>
          <Link to="/ops" className="btn btn-warning text-light">
            Mehr Erfahren
          </Link>
        </Col>
      </Row>
      {/* row 4*/}
      <Row className="mt-3">
        <Col md="6">
          <h3>HLP</h3>
          <p>
            Service- und Helpdesk. Wir unterstützen Sie bei alltäglichen
            Problemen mit Ihrer IT-Umgebung sowie bei Spezialapplikationen oder
            Prozessen. Unser 1st und 2nd Level Support ist auf Wunsch 24 Stunden
            am Tag an 7 Tagen der Woche für Sie da.
          </p>
          <Link to="/hlp" className="btn btn-warning text-light">
            Mehr Erfahren
          </Link>
        </Col>
        <Col md="6">
          <Image className="isoProp" src={hlpIso} alt="hlp infograph" />
        </Col>
      </Row>
      {/* row 5*/}
      <Row className="mt-3">
        <Col md="6">
          <Image className="isoProp" src={appIso} alt="app infograph" />
        </Col>
        <Col md="6">
          <h3>APP</h3>
          <p>
            Software as a Service. Wir unterstützen Ihr Tagesgeschäft mit
            nutzungsfertigen und voll gemanagten Anwendungen. Von Backup as a
            Service über Virtual Desktop bis hin zu Mail und File Services.
            Einfach starten und direkt, produktiv loslegen.
          </p>
          <Link to="/app" className="btn btn-warning text-light">
            Mehr Erfahren
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Data;
