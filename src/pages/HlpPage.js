import React from "react";
import Footer from "../components/footer/Footer";
import FormPage from "../components/forms/FormPage";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import HlpImage from "../images/Hero-Hero.jpeg";
import HeadingLeft from "../components/header/HeadingLeft";
import HeadingMiddle from "../components/header/HeadingMiddle";
import { Col, Container, Image, Row } from "react-bootstrap";
import SubHead from "../components/content/Subhead";
import Paragraf from "../components/content/Paragraf";
import ListItem from "../components/list/ListItem";

import hlpIso from "../images/hlp.png";
import CardBasic from "../components/card-list/CardBasic";

const HlpPage = () => {
  return (
    <>
      <Navbar />
      <Hero
        imageSource={HlpImage}
        heading="HLP"
        text="1st und 2nd Level Support & Services - kompetent, schnell und 24/7"
      />
      <Container>
        <HeadingLeft heading="servicedek &" spanHeading="user helpdesk" />
        <SubHead headContent="Wir schaffen Freiräume. Unser ServiceDesk bietet Ihnen maßgeschneiderten Support und entlastet nachhaltig Ihre Administratoren." />
        <Paragraf paraContent="Durch Übernahme von Routine- und Support-Aufgaben gibt Ihnen unser Service den nötigen Raum für wichtige Digitalisierungsprojekte zurück - immer unter Berücksichtigung gängiger Standards und Prozesse wie z.B. IT Service Management nach ITIL v3 oder dem ITIL v4 Service Value System (SVS)." />
        <Paragraf paraContent="Wir beginnen genau da, wo Sie Unterstützung benötigen - vom User Helpdesk Support für Mitarbeiter, über Mobile-Device Management mit zugehörigen Rollout-Services, bis zur Überwachung kompletter Netzwerke und Systemlandschaften" />
      </Container>

      {/* vorteile - list */}
      <Container>
        <Row>
          <h6 className="mb-4">Ihre Vorteile</h6>
          <Col md={8}>
            <ListItem text="Neukundengewinnung und Umsatzsteigerung durch höhere Reichweite und Konversionsrate (Digitalisierung)" />
            <ListItem text="Kostensenkung durch Automatisierungen" />
            <ListItem text="Steigerung der Kundenzufriedenheit und Nutzungsmotivation Ihr Produkte/Services" />
            <ListItem text="Kundenbindung und Wettbewerbsvorteil durch nutzerfreundliche und barrierefreie Produkte und Services" />
            <ListItem text="Kostensenkung für Service und Schulungen aufgrund von nutzerzentrierten bedienbaren Produkten und Services" />
          </Col>
          <Col md={4}>
            <Image
              className="isoProp w-100"
              src={hlpIso}
              alt="devops infograph"
            />
          </Col>
        </Row>
      </Container>

      {/* leistung - card */}
      <Container>
        <HeadingMiddle heading="leistungen im überblick" />
        <Row xs={1} lg={3} className="mt-5 gy-4">
          <Col>
            <CardBasic
              title="User Helpdesk (UHD)"
              text="Wir unterstützen Sie bei alltäglichen Aufgaben vom 1st bis zum 2nd Level Support. Unser Helpdesk ist ganzjährig  24/7 über Ihre eigene Service-Rufnummer, über ein Ticketsystem oder per E-Mail erreichbar. Wir sind Ihr Ansprechpartner für Problemanalysen und Lösungen – natürlich auch besonders im Microsoft-Umfeld. Vom Standard-Arbeitsplatz-Support für Mitarbeiter bis hin zum Betrieb von Terminal-Servern Inhouse oder in unseren zertifizierten Rechenzentren."
            />
          </Col>
          <Col>
            <CardBasic
              title="Hardware-Management"
              text="Wir stehen Ihnen zur Seite bei Provisionierung, Rollout und Management umfangreicher Endgeräte-Pools. Wir werden für Sie tätig bei der Inventarisierung, Verpackung und Versand von Hardware inklusive Handling von Rücksendungen. Wir stellen eine Rollout-Plattform mit API zur Verfügung, übernehmen für Sie die Installation und Konfiguration der Hardware (auch zusammen mit Ihren Technikern vor Ort) und die Vertragsverwaltung (z.B. im Mobilfunkbereich)."
            />
          </Col>
          <Col>
            <CardBasic
              title="Monitoring & Spezialprozesse"
              text="Das Betreiben großer Applikationen oder IT-Landschaften benötigt die Koordination vieler Projektgruppen. Die Kontrolle und Administration von Hard- oder Software bindet Ressourcen und Zeit. Hier unterstützt Sie unser Servicedesk. Wir sorgen dafür, dass alle Prozesse sorgfältig und „In Time“ bearbeitet werden. Nach abgestimmten KPIs bieten wir einen 24/7 Fullservice für Ihre IT- und Geschäftsprozesse sowie die Überwachung, das Management und Koordination Ihrer Projekte."
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <HeadingLeft heading="Unsere" spanHeading="Erfolgsgeschichten" />
        coming soon...
      </Container>
      <FormPage fromHeading="HLP" />
      <Footer />
    </>
  );
};

export default HlpPage;
