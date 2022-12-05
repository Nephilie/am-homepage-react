import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Footer from "../components/footer/Footer";
import FormPage from "../components/forms/FormPage";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import ListItem from "../components/list/ListItem";
import CardList from "../components/card-list/CardList";
import Card from "../components/card-list/Card";
import HeadingMiddle from "../components/header/HeadingMiddle";
import HeadingLeft from "../components/header/HeadingLeft";
import Subhead from "../components/content/Subhead";
import Paragraf from "../components/content/Paragraf";

// import Images
import KarriereImage from "../images/team.jpg";
import logoFFU from "../images/Logo-FFU-HSK.png";
import defaultImage from "../images/default.jpg";
import testCard from "../images/cardImage.jpg";
import meschede from "../images/meschede-hennesee.jpg";
import hamburg from "../images/hamburg-spreicherstadt.jpg";
import dortmundImg from "../images/durtmund-u.jpg";
import opsIso from "../images/opsIso.png";
import isoDev from "../images/dev.png";

const Karriere = () => {
  return (
    <>
      <Navbar />
      <Hero
        imageSource={KarriereImage}
        heading="KARRIERE"
        text="Jobs bei der AM-GmbH: Werde Teil des Teams!"
      />

      {/* row 1 - karriere@am */}
      <Container className="border-bottom my-5">
        <HeadingLeft heading="karriere @" spanHeading="am-gmbh" />
        <Subhead headContent="Die AM-GmbH gehört zu den Top Ten der IT-Unternehmen im Raum Südwestfalen." />
        <Paragraf
          paraContent="Wir beschäftigen über 100 Mitarbeiter (m/w/d) an den Standorten
              Meschede, Hamburg und Dortmund. In der schnelllebigen IT-Branche
              wollen wir ein langfristig orientierter und verlässlicher Partner
              sein – sowohl für unsere Kunden als auch für unsere
              Mitarbeiterinnen und Mitarbeiter."
        />
        <Paragraf
          paraContent="Für unsere weitere Expansion suchen wir Verstärkung. Wenn Sie
              motiviert sind und Spaß an Leistung und Erfolgen haben, dann
              kommen Sie zu uns!"
        />
      </Container>

      {/* vorteile */}
      <Container>
        <Row>
          <h6 className="my-5">Ihre Vorteile</h6>
          <Col md={6}>
            <ListItem text="Wir bieten Ihnen eine Festanstellung mit leistungsgerechter Vergütung" />
            <ListItem text="Flexible Arbeitszeitmodelle, Homeoffice, betr. Altersvorsorge, u. a." />
            <ListItem text="Spannende Tätigkeiten in einem wachsenden Unternehmen" />
            <ListItem text="Ein teamorientiertes Arbeitsumfeld mit einem hohen Maß an Eigenverantwortlichkeit" />
            <ListItem text="Beste berufliche Perspektiven und eine offene Kommunikation" />
            <ListItem text="Flache Hierarchien mit kurzen Entscheidungswegen" />
          </Col>
          <Col>
            <Image className="w-100" src={defaultImage} alt="default image" />
          </Col>
        </Row>
      </Container>

      {/* jobs - cardList */}
      <Container className="border-bottom my-5">
        <Row xs={1} lg={3} className="mt-5 gy-4">
          <Col>
            <CardList
              cardSource={testCard}
              imgTitle="Mitarbeiter*in IT-Servicedesk (m/w/d)"
              titleCard="Meschede/Dortmund/Homeoffice"
              textCard="Eigenständige Annahme, Analyse, Lösung und Dokumentation von IT-Serviceanfragen und IT-Störungen"
              textCard2="IT-Servicedesk mit den Schwerpunkten: Windows-Standardarbeitsplatz, Active Directory, Microsoft O365, Exchange, Anlage von Profilen für neue Mitarbeiter in diversen Systemen"
              link="Mehr Erfahren"
            />
          </Col>
          <Col>
            <CardList
              imgTitle="Senior System Engineer(m/w/d)"
              titleCard="Meschede"
              textCard="Unterstützung des Vertriebes in der Pre-Sales-Phase"
              textCard2="Beratung, Planung, Aufbau, Konfiguration von Kundensystemen"
              textCard3="Incident-, Change- und Problemmanagement"
              textCard4="Kundensupport"
              link="Mehr Erfahren"
            />
          </Col>
          <Col>
            <CardList
              imgTitle="Mitarbeiter*in IT-Support (m/w/d)"
              titleCard="Hamburg"
              textCard="Eigenständige Annahme, Analyse, Lösung und Dokumentation von IT-Serviceanfragen und IT-Störungen"
              textCard2="IT-Servicedesk mit den Schwerpunkten: Windows-Standardarbeitsplatz, Active Directory, Microsoft O365, Exchange, Anlage von Profilen für neue Mitarbeiter in diversen Systemen"
              link="Mehr Erfahren"
            />
          </Col>
          <Col>
            <CardList
              imgTitle="IT-Prozessconsultant /-manager"
              titleCard="Meschede/Dortmund/Homeoffice"
              textCard="Eigenständige Annahme, Analyse, Lösung und Dokumentation von IT-Serviceanfragen und IT-Störungen"
              textCard2="IT-Servicedesk mit den Schwerpunkten: Windows-Standardarbeitsplatz, Active Directory, Microsoft O365, Exchange, Anlage von Profilen für neue Mitarbeiter in diversen Systemen"
              link="Mehr Erfahren"
            />
          </Col>
          <Col>
            <CardList
              cardSource={opsIso}
              imgTitle="Junior IT-Projektmanager (m/w/d)"
              titleCard="Dortmund"
              textCard="Unterstützung bei der Planung, Koordination und Steuerung von Kundenprojekten (klassisch, agil, hybrid), insbesondere in den Bereichen ERP/Warenwirtschaft, CRM, Dokumentenmanagement"
              textCard2="Überwachung des aktuellen Projektstatus hinsichtlich der Zielerreichung, bestehender Risiken und Herausforderungen"
              textCard3="Mitwirkung bei der Aufnahme und Dokumentation von Geschäftsprozessen im IST und SOLL bei Kunden"
              link="Mehr Erfahren"
            />
          </Col>
          <Col>
            <CardList
              cardSource={isoDev}
              imgTitle="Softwareentwickler*in (m/w/d)"
              titleCard="Hamburg"
              textCard="Eigenständige Annahme, Analyse, Lösung und Dokumentation von IT-Serviceanfragen und IT-Störungen"
              textCard2="IT-Servicedesk mit den Schwerpunkten: Windows-Standardarbeitsplatz, Active Directory, Microsoft O365, Exchange, Anlage von Profilen für neue Mitarbeiter in diversen Systemen"
              textCard3="Evaluieren und ausprobieren von neuen Technologien für die Web-Entwicklung"
              link="Mehr Erfahren"
            />
          </Col>
          <Col>
            <CardList
              imgTitle="(Junior-) Datenbankentwickler (m/w/d)"
              titleCard="Hamburg"
              textCard="Eigenständige Annahme, Analyse, Lösung und Dokumentation von IT-Serviceanfragen und IT-Störungen"
              textCard2="IT-Servicedesk mit den Schwerpunkten: Windows-Standardarbeitsplatz, Active Directory, Microsoft O365, Exchange, Anlage von Profilen für neue Mitarbeiter in diversen Systemen"
              link="Mehr Erfahren"
            />
          </Col>
        </Row>
      </Container>

      {/* zertifikat */}
      <Container className="border-bottom">
        <Row>
          <Col>
            <Subhead headContent="Zertifikat -Familienfreundliches Unternehmen im Hochsauerlandkreis- " />
            <Paragraf paraContent="Wir freuen uns über dieses besondere Zertifikat, da die Vereinbarkeit von Familie und Beruf im Joballtag einen immer höheren Stellenwert einnimmt. Die Auszeichnung bestärkt uns in unserer Firmenphilosophie, familienfreundliche Strukturen zu schaffen und so die Attraktivität als Arbeitgeber zu steigern. Wir bieten unseren Mitarbeiterinnen und Mitarbeitern flexible Arbeitszeiten/Arbeitszeitkonten, Teilzeitarbeitsplätze, Home-Office Arbeitsplätze und Unterstützung bei besonderen familiären Belastungssituationen. Regelmäßige Mitarbeitergespräche, individuelle, fachspezifische Fortbildungen und Firmenevents erzeugen Mitarbeiterzufriedenheit und unterstützen die Identifikation mit dem Arbeitgeber AM-GmbH." />
          </Col>
          <Col>
            <img src={logoFFU} />
          </Col>
        </Row>
      </Container>

      {/* Unsere Standorte - intro text */}
      <Container className="text-center">
        <HeadingMiddle heading="Unsere standorte" />
        <Paragraf paraContent="Im Herzen des Sauerlandes, nur 10 Minuten vom malerischen Hennesee entfernt, befindet sich seit 2007 der Hauptsitz der AM-GmbH. Dort sind wir mit unseren Rechenzentren direkt an einen Internet-Netzknotenpunkt (Point of Presence = PoP) angeschlossen. Im Herbst 2012 haben wir unsere Niederlassung in Hamburg eröffnet. Wir sehen in Hamburg großes Potenzial und wollen als Unternehmen weiter wachsen. Schließlich gilt die Elbmetropole ja nicht von ungefähr als Tür zur „Daten“-Welt und lädt als Hansestadt mit maritimen Charme zum Leben und Arbeiten ein. Seit Anfang 2017 ist die AM-GmbH auch am Standort Dortmund in der Stadtkrone Ost vertreten. Besonders attraktiv wird der Standort Dortmund durch die fortschreitende Entwicklung zum IT-Zentrum der Metropolregion Ruhr." />
      </Container>

      {/* unsere Standorte - cards */}
      <Container>
        <Row xs={1} lg={3} className="mt-5 gy-4">
          <Col>
            <Card
              cardSource2={meschede}
              imgTitle="Meschede"
              text="Im Herzen des Sauerlandes befindet sich der Hauptsitz der AM-GmbH. Von hier aus werden alle Projekte gesteuert. Neben unseren Rechenzentren, der Cloud-Plattform und den skalierbaren SaaS-Lösungen [APP] sind hier unser qualifiziertes IT-Betriebsteam [OPS] und unser kundenfreundlicher Service- und HelpDesk [HLP] angesiedelt."
            />
          </Col>
          <Col>
            <Card
              cardSource2={hamburg}
              imgTitle="Hamburg"
              text="2012 gründeten wir unseren Standort in Hamburg. Bereits kurze Zeit später setzten wir ein komplexes Projekt für einen Konzernkunden um. Die Konzipierung und Entwicklung eines interaktiven Kundenportals war die Aufgabenstellung. Mit viel Herzblut und hoher Kompetenz ist unser IT-Spezialisten-Team in Hamburg für die Bereiche Development und Design [DEV] zuständig."
            />
          </Col>
          <Col>
            <Card
              cardSource2={dortmundImg}
              imgTitle="Dortmund"
              text="Seit 2017 ist die AM-GmbH auch in Dortmund mit einer Niederlassung vertreten. Mit dem Ziel den deutschen Mittelstand bei der Sicherung ihrer IT-Strukturen zu unterstützen, liegt in Dortmund der Fokus auf IT-Security. Die 4sConsult GmbH als Joint Venture der AM mit einer führenden Wirtschaftskanzlei bildet mit wirtschaftsnaher IT-Beratung einen weiteren Schwerpunkt am Standort Dortmund."
            />
          </Col>
        </Row>
      </Container>

      <FormPage fromHeading="ÜBER AM" />
      <Footer />
    </>
  );
};

export default Karriere;
