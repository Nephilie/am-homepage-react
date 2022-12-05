import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import FormPage from "../components/forms/FormPage";
import Hero from "../components/hero/Hero";
import DevImage from "../images/dev.jpg";
import HeadingLeft from "../components/header/HeadingLeft";
import Paragraf from "../components/content/Paragraf";
import Subhead from "../components/content/Subhead";
import { Col, Container, Image, Row } from "react-bootstrap";
import ListItem from "../components/list/ListItem";
import Isometrik from "../images/dev.png";
import HeadingMiddle from "../components/header/HeadingMiddle";
import CardBasic from "../components/card-list/CardBasic";

const DevPage = () => {
  return (
    <>
      <Navbar />
      <Hero
        imageSource={DevImage}
        heading="DEV"
        text="Konzeption, UX Design und Programmierung – iterativ und kokreativ"
      />
      <Container className="mb-5">
        <HeadingLeft heading="design &" spanHeading="entwicklung" />
        <Subhead headContent="Wir gestalten und entwickeln erfolgreiche, digitale Produkte - nutzerzentriert, innovativ und agil." />
        <Paragraf paraContent="Digitale Produkte sollten so gestaltet sein, dass sie eine hohe Benutzerfreundlichkeit gewährleisten. Sie müssen flexibel sein und auf Änderungen Ihres Business reagieren können. Die Lösung integriert sich in Ihre Prozesse und nicht umgekehrt. Das vermeidet Insellösungen und unvorhersehbare Kosten." />
        <Paragraf paraContent="Aufgrund unserer 10-jährigen Erfahrung mit Web-Produkten/Services und durch die Analyse und Auswahl der richtigen Produkte können wir kosteneffizient individuelle Lösungen erstellen. Bei der Konzeption und Entwicklung von Webprojekten vertrauen wir auf modernste Technologien und beziehen Sie in den gesamten Entwicklungsprozess ein." />
      </Container>

      <Container>
        <Row>
          <h6>Ihre Vorteile</h6>
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
              src={Isometrik}
              alt="devops infograph"
            />
          </Col>
        </Row>
      </Container>

      {/* leistung - cards */}
      <Container>
        <HeadingMiddle heading="Leistungen im überblick" />
        <Row xs={1} lg={3} className="mt-5 gy-4">
          <Col>
            <CardBasic
              title="User Experience und UI Design"
              text="Die Erwartungshaltung Ihrer Kunden steht bei uns im Mittelpunkt jeder Produktentwicklung. Wir schaffen Lösungen nach Ihren individuellen Anforderungen, mit hohem Nutzwert von Inhalten und Funktionen, effizienter Bedienbarkeit und optischer Attraktivität für Ihre ganz spezifische Zielgruppe."
              btn="Mehr Erfahren"
            />
          </Col>
          <Col>
            <CardBasic
              title="Konzeption und Prototyping"
              text="Um eine effiziente Usability zu garantieren, liegt ein wesentlicher Schwerpunkt unserer Arbeit auf der Erstellung von Grobkonzepten, Feinkonzepten und dem anschließenden Prototyping. So nähern wir uns schrittweise dem optimalen Produkt - unter Einbeziehung von Auftraggebern und Anwendern."
              btn="Mehr Erfahren"
            />
          </Col>
          <Col>
            <CardBasic
              title="Barrierefreiheit und Usability"
              text="Durch die Verwendung erprobter und wissenschaftlich fundierter Methoden und in Verbindung mit einem interdisziplinären und nach ISO 9241 zertifizierten Team, können wir Usability und Barrierefreiheit systematisch ein- und umsetzen. Dadurch gewährleisten wir eine optimale Benutzerfreundlichkeit."
              btn="Mehr Erfahren"
            />
          </Col>
          <Col>
            <CardBasic
              title="Portallösungen"
              text="Webportale sind die digitalen Kanäle zu Ihren Kunden und Mitarbeitern. Sie ermöglichen eine personalisierte, kontextrelevante und inhaltskon-sistente Ansprache von Zielgruppen. Wir beraten, gestalten und entwickeln Portallösungen, kosten-effizient und nutzerzentriert, um Ihrer Zielgruppe das bestmögliche Kundenerlebnis zu schaffen."
              btn="Mehr Erfahren"
            />
          </Col>
          <Col>
            <CardBasic
              title="Individualprogrammierung"
              text="Wo fertige Produkte nicht mehr helfen, entwickeln wir für Sie Ihre individuelle Lösung. Komplexe Business Applikationen, Microservices oder Schnittstellen zu Partner und Lieferanten - wir designen und entwickeln maßgeschneidert für Ihr Unternehmen. Dabei setzen wir auf moderne Java Frameworks."
              btn="Mehr Erfahren"
            />
          </Col>
          <Col>
            <CardBasic
              title="Offshore Projekte"
              text="Bei großen Projekten, die sich über einen langen Zeitraum erstrecken, kann sich eine kostengünstige Offshore Entwicklung lohnen. In der Zusammenarbeit  sind dabei viele Aspekte zu berücksichtigen. Mit mehr als 10 Jahren Erfahrung in der Offshore Entwicklung beraten und managen wir Ihre Projekte zum Erfolg."
              btn="Mehr Erfahren"
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <HeadingLeft heading="Unsere" spanHeading="Erfolgsgeschichten" />
        coming soon...
      </Container>

      <FormPage fromHeading="DEV" />
      <Footer />
    </>
  );
};

export default DevPage;
