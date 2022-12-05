import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Card from "../components/card-list/Card";
import Paragraf from "../components/content/Paragraf";
import Subhead from "../components/content/Subhead";
import Footer from "../components/footer/Footer";
import FormPage from "../components/forms/FormPage";
import HeadingLeft from "../components/header/HeadingLeft";
import HeadingMiddle from "../components/header/HeadingMiddle";
import Hero from "../components/hero/Hero";
import ListItem from "../components/list/ListItem";
import Navbar from "../components/navbar/Navbar";
import goDigital from "../images/go-digital-Logo.png";
import profil2 from "../images/profil02.jpg"
import profil3 from "../images/profil3.jpg"

const Unternehmen = () => {
  return (
    <>
      <Navbar />
      <Hero
        heading="unternehmen"
        text="Jobs bei der AM-GmbH: Werde Teil des Teams!"
      />

      <Container>
        <HeadingLeft heading="wir sind" spanHeading="application managment" />
        <Subhead headContent="Erfolgreiches Application Management - dafür steht die AM-GmbH als DevOps Spezialist und Managed Service Provider." />
        <Paragraf paraContent="IT ist für uns ein fortlaufender Prozess: Wir beginnen bei Design und Entwicklung, gehen über zum nachhaltigen, effizienten Betrieb aller Lösungen mit persönlichem 24/7 Support, bis hin zu nutzungsfertigen Anwendungen aus der Cloud. Dabei sind wir unabhängig vom Betriebsmodell, denn unsere Cloud Architekten orchestrieren den IT-Betrieb für unsere Kunden in den eigenen High-Class-Rechenzentren, in den globalen Clouds und On-Premises. Sie erhalten alle Leistungen aus einer Hand." />
        <Paragraf paraContent="Die AM-GmbH betreut seit über 10 Jahren aus den drei Standorten Meschede, Dortmund und Hamburg mit über 100 engagierten Mitarbeitern zufriedene Mittelstands- und Konzernkunden aus ganz Deutschland." />
      </Container>

      {/* nachhaltigkeit - list */}
      <Container>
        <Row>
          <h6 className="my-4">
            Nachhaltigkeit, Umweltschutz und das Schonen von Ressourcen sind uns
            wichtig!
          </h6>
          <Col md={9}>
            <ListItem text="Wir beziehen 100% Naturstrom" />
            <ListItem text="Wir setzen auf effektive Kühlungs- und IT-Komponenten in unseren Rechenzentren" />
            <ListItem text="Reiserichtlinie mit Fokus auf Umweltschutz" />
            <ListItem text="Kompensation der CO2 Emissionen unserer Service-PKW Flotte" />
            <ListItem text="Nachhaltigkeitsbeauftragter, direkt der Geschäftsführung unterstellt" />
            <ListItem text="Bewertung unserer Lieferanten, auch auf Basis von Nachhaltigkeit" />
            <ListItem text="Förderung von Fahrgemeinschaften" />
          </Col>
        </Row>
      </Container>

      {/* geschäftsleitung - cards */}
      <Container>
        <HeadingMiddle heading="die geschäftsleitung der am-gmbh" />
        <Row xs={1} lg={3} className="mt-5 gy-4">
          <Col>
            <Card
              // style={{ width: '18rem' }}
              cardSource2={profil2}
              title="Sir Puggé II"
              text="Geschäftsführer"
              text2="T: +49 (0) 291 20256-0"
              link="info@am-gmbh.de"
              />
          </Col>
          <Col>
            <Card
              title="Pugsley Adams"
              text="Geschäftsführer"
              text2="T: +49 (0) 291 20256-0"
              link="info@am-gmbh.de"
              />
          </Col>
          <Col>
            <Card
              cardSource2={profil3}
              title="Puggy Wuggy"
              text="Geschäftsführer"
              text2="T: +49 (0) 291 20256-0"
              link="info@am-gmbh.de"
            />
          </Col>
        </Row>
      </Container>

      {/* forderung - list | image | paragraf */}
      <Container>
        <HeadingLeft heading="förderprogramm" spanHeading="go-digital" />
        <Subhead headContent="Wir begleiten Sie in die digitale Zukunft! Förderung über 50% - max. 16.500 € - für Digitalprojekte in KMUs durch das BMWi!" />
        <Paragraf paraContent="Als offizielles Beratungsunternehmen planen wir mit Ihnen das Projekt, kümmern uns um die Umsetzung und übernehmen die gesamte Antragstellung für Sie! Förderfähig sind KMUs in der BRD mit < 100 Mitarbeitern und einem Vorjahresumsatz bzw.  -bilanzsumme von max. 20 Mio. Euro. Sprechen Sie uns einfach an!" />
        <Row className="mt-5">
          <Col md={8}>
            <ListItem
              strongText="Digitalisierte Geschäftsprozesse:"
              text="Arbeitsabläufe digitalisieren und sichere mobile und elektr. Prozesse etablieren"
            />
            <ListItem
              strongText="Digitale Markterschließung:"
              text="Unterstützung bei den vielfältigen Aspekten eines professionellen Online-Auftritts"
            />
            <ListItem
              strongText="IT-Sicherheit:"
              text="Minimierung von Risiken durch Cyberkriminalität, Vermeidung wirtschaftlicher Schäden"
            />
          </Col>
          <Col md={4}>
            <Image className="w-100" src={goDigital} alt="go-digital logo" />
          </Col>
        </Row>
      </Container>

      {/* partner - carousel */}
      <Container>
        <HeadingMiddle heading="starke partner" />
        coming soon...
      </Container>
      <FormPage fromHeading="ÜBER AM" />
      <Footer />
    </>
  );
};

export default Unternehmen;
