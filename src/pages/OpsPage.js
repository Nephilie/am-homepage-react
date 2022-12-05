import React from "react";
import Footer from "../components/footer/Footer";
import FormPage from "../components/forms/FormPage";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import HeadingLeft from "../components/header/HeadingLeft";
import HeadingMiddle from "../components/header/HeadingMiddle";
import { Col, Container, Image, Row } from "react-bootstrap";
import Paragraf from "../components/content/Paragraf";
import Subhead from "../components/content/Subhead";
import ListItem from "../components/list/ListItem";

// images import
import opsIso from "../images/opsIso.png";
import CardBasic from "../components/card-list/CardBasic";

const OpsPage = () => {
  return (
    <>
      <Navbar />
      <Hero
        image=""
        heading="OPS"
        text="IT Operations, Cloud Orchestration – flexibel, individuell und zertifiziert"
      />

      <Container>
        <HeadingLeft heading="Cloud &" spanHeading="it-betrieb" />
        <Subhead headContent="Wir betreiben Ihre Applikationen und Systeme vollumfänglich und ganzheitlich." />
        <Paragraf paraContent="Beste Plattformen, neueste Technologie, engagiertes Personal, zertifizierte Prozesse und enger Kundenkontakt sind dabei die Bausteine unserer Leistungserbringung." />
        <Paragraf paraContent="Besprechen Sie mit uns die optimale Architektur Ihrer Anwendungen. Gemeinsam erarbeiten wir ein auf Ihr Business passendes Betriebsmodell. Hierbei wählen wir auf Basis der Anforderungen an Datenschutz/Sicherheit, Verfügbarkeit, Performance und Budget den besten Lösungsansatz." />
      </Container>

      {/* leistung - list */}
      <Container>
        <Row>
          <h6>Leistungen im Überblick</h6>
          <Col md={8}>
            <ListItem text="Management Ihrer Applikationen  - z.B. Web/eCommerce Portale" />
            <ListItem text="Sizing, Bereitstellung und Betrieb der Plattform" />
            <ListItem text="Monitoring und Reporting" />
            <ListItem text="Incident und Change Management" />
            <ListItem text="Caching, Load Balancing" />
            <ListItem text="Management der Web, App und DB Software" />
            <ListItem text="Optional: Application Performance Management" />
          </Col>
          <Col md={4}>
            <Image
              className="isoProp w-100"
              src={opsIso}
              alt="devops infograph"
            />
          </Col>
        </Row>
      </Container>

      {/* betriebsmodelle - intro text */}
      <Container className="text-center">
        <HeadingMiddle heading="VERSCHIEDENE BETRIEBSMODELLE & HYBRIDE SZENARIEN" />
        <Subhead headContent="Sie möchten Ihre Datenbanken in zertifizierten, deutschen Rechenzentren betreiben, haben aber auch Zugriffe aus Fernost? Sie sind auf der Suche nach einem Backup-Standort, möchten aber kritische Prozesse im Haus behalten?" />
        <Subhead headContent="Wir planen mit Ihnen das passende Hybrid Szenario, übernehmen das Setup und betreuen Ihre Systeme umgebungsübergreifend und unabhängig!" />
      </Container>
      {/* betriebsmodelle - cards */}
      <Container>
        <Row xs={1} lg={3} className="mt-5 gy-4">
          <Col>
            <CardBasic
              title="AMs Rechenzentren"
              text="Unsere Rechenzentren: Plattform und Cloud"
              text2="Ausgelegt für höchste Ausfallsicherheit und Performance ist unsere Plattform der richtige Ort für Ihre Anwendungen. Besonders business-kritische und individuelle Services können dank ISO 27001 Zertifizierung, TÜV Klasse 3 Rechenzentren und IDW PS 951 Typ 2 sorgenfrei ausgelagert werden."
              btn="Mehr Erfahren"
            />
          </Col>
          <Col>
            <CardBasic
              title="Hyperscaler / globale Clouds"
              text="Haben Sie weltweite Zugriffe oder extrem starke Schwankungen im Ressourcenbedarf? Dann sind Hyperscaler die passende Lösung."
              text2="Wir beraten Sie anbieterneutral und orchestrieren Ihre Anwendungen in den globalen Clouds. Unsere Cloud Architekten stehen Ihnen bei der Planung, der Einrichtung sowie dem Betrieb jederzeit zur Seite."
            />
          </Col>
          <Col>
            <CardBasic
              title="On-Premises"
              text="Sie möchten Ihre Daten lieber im Haus behalten? Wir betreuen Ihre vorhandene Umgebung remote oder planen für Sie eine On-Premises Umgebung auf Basis modernster Cloud Technologie."
              text2="Unsere Erfahrungen nutzen wir, um modernste Betriebslösungen auf Ihre konkrete Situation anzupassen, unabhängig von Größe und Umfang Ihrer IT-Umgebung."
            />
          </Col>
        </Row>
      </Container>

      {/* erfolgsgeschichten */}
      <Container>
        <HeadingLeft heading="Unsere" spanHeading="Erfolgsgeschichten" />
        coming soon...
      </Container>

      {/* technologie - intro text */}
      <Container className="text-center">
        <HeadingMiddle heading="technologie & knowhow" />
        <Subhead headContent="Beste Plattformen und neueste Technologie gehören zu den Bausteinen unserer Leistungserbringung." />
      </Container>
      {/* technologie - cards */}
      <Container>       
        <Row xs={1} lg={3} className="mt-5 gy-4">
          <Col>
            <CardBasic
              title="Container-Management"
              text="Die Erwartungshaltung Ihrer Kunden steht bei uns im Mittelpunkt jeder Produktentwicklung. Wir schaffen Lösungen nach Ihren individuellen Anforderungen, mit hohem Nutzwert von Inhalten und Funktionen, effizienter Bedienbarkeit und optischer Attraktivität für Ihre ganz spezifische Zielgruppe."
              btn="Mehr Erfahren"
            />
          </Col>
          <Col>
            <CardBasic
              title="Monitoring"
              text="Um eine effiziente Usability zu garantieren, liegt ein wesentlicher Schwerpunkt unserer Arbeit auf der Erstellung von Grobkonzepten, Feinkonzepten und dem anschließenden Prototyping. So nähern wir uns schrittweise dem optimalen Produkt - unter Einbeziehung von Auftraggebern und Anwendern."
              btn="Mehr Erfahren"
            />
          </Col>
          <Col>
            <CardBasic
              title="Webserver"
              text="Durch die Verwendung erprobter und wissenschaftlich fundierter Methoden und in Verbindung mit einem interdisziplinären und nach ISO 9241 zertifizierten Team, können wir Usability und Barrierefreiheit systematisch ein- und umsetzen. Dadurch gewährleisten wir eine optimale Benutzerfreundlichkeit."
              btn="Mehr Erfahren"
            />
          </Col>
          <Col>
            <CardBasic
              title="Datenbanken"
              text="Die Erwartungshaltung Ihrer Kunden steht bei uns im Mittelpunkt jeder Produktentwicklung. Wir schaffen Lösungen nach Ihren individuellen Anforderungen, mit hohem Nutzwert von Inhalten und Funktionen, effizienter Bedienbarkeit und optischer Attraktivität für Ihre ganz spezifische Zielgruppe."
              btn="Mehr Erfahren"
            />
          </Col>
          <Col>
            <CardBasic
              title="haProxy"
              text="Um eine effiziente Usability zu garantieren, liegt ein wesentlicher Schwerpunkt unserer Arbeit auf der Erstellung von Grobkonzepten, Feinkonzepten und dem anschließenden Prototyping. So nähern wir uns schrittweise dem optimalen Produkt - unter Einbeziehung von Auftraggebern und Anwendern."
              btn="Mehr Erfahren"
            />
          </Col>
          <Col>
            <CardBasic
              title="VMware"
              text="Durch die Verwendung erprobter und wissenschaftlich fundierter Methoden und in Verbindung mit einem interdisziplinären und nach ISO 9241 zertifizierten Team, können wir Usability und Barrierefreiheit systematisch ein- und umsetzen. Dadurch gewährleisten wir eine optimale Benutzerfreundlichkeit."
              btn="Mehr Erfahren"
            />
          </Col>
        </Row>
      </Container>

      <FormPage fromHeading="OPS" />
      <Footer />
    </>
  );
};

export default OpsPage;
