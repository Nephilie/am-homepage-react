import React from "react";
import Footer from "../components/footer/Footer";
import FormPage from "../components/forms/FormPage";
import Navbar from "../components/navbar/Navbar";
import Hero from '../components/hero/Hero'
import AppImage from '../images/app.jpg'
import HeadingMiddle from "../components/header/HeadingMiddle";
import HeadingLeft from "../components/header/HeadingLeft";
import { Col, Container, Image, Row } from "react-bootstrap";
import Subhead from "../components/content/Subhead";
import Paragraf from "../components/content/Paragraf";
import ListItem from "../components/list/ListItem";
import appIso from "../images/app.png"
import CardBasic from "../components/card-list/CardBasic";


const AppPage = () => {
  return (
    <>
      <Navbar />
      <Hero imageSource={AppImage} heading='APP' text='Managed Services aus der Cloud – für einen produktiveren Business Alltag' />
      {/* software as a service */}
      <Container >
        <HeadingLeft heading="software" spanHeading="as a service"/>
        <Subhead headContent="Wir unterstützen Ihr Tagesgeschäft mit nutzungsfertigen und Managed Services aus der Cloud (SaaS)." />
        <Paragraf paraContent="Unsere Leistungen reichen von Dokumentenmanagement über CRM bis zu Produktinformationssystemen. Backup as a Service und Virtual Desktop, Mail und File Services sowie viele Weitere erleichten Ihnen die Arbeit. Direkt, skalierbar und betrieben auf unserer redundanten und hochsicheren Cloud-Plattform in unseren Rechenzentren." />
        <Paragraf paraContent="Ergänzend helfen unsere Managed IT & Security Services Ihre Unternehmens-IT zu stärken und sicherer zu machen!" />
      </Container>

      {/* vorteiel - list */}
      <Container >
        <Row>
          <h6 className="my-4">Ihre Vorteile</h6>
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
              src={appIso}
              alt="devops infograph"
            />
          </Col>
        </Row>
      </Container>

      {/* leistungen - cards */}
      <Container >
        <HeadingMiddle heading="leistungen im überblick" />
        <Row xs={1} lg={3} className="mt-5 gy-4">
          <Col>
            <CardBasic
              title="File Services"
              text="Die Cloud Storage Lösung, gehostet in unseren Rechenzentren, funktioniert wie eine Dropbox – jedoch in einer sicheren und kontrollierbaren Umgebung. Oder wir hosten für Sie einen Standard-Fileserver eingebunden in Ihre lokale Infrastruktur."
            />
          </Col>
          <Col>
            <CardBasic
              title="Mail Services"
              text="Mittels MS Exchange Multi-Tenancy können wir Ihnen schnell und einfach einen E-Mail-Dienst mit Kalendern, Ordnern und Aufgabenverwaltung in gewohnter, stabiler Microsoft-Qualität zur Verfügung stellen."
            />
          </Col>
          <Col>
            <CardBasic
              title="eMail Encryption"
              text="Unser Service bietet Ihnen eine professionelle Lösung zur Verschlüsselung Ihrer geschäftlichen eMail-Kommunikation. So können Sie sicherstellen, dass Ihre Inhalte sicher und ausschließlich beim gewünschten Empfänger ankommen."
            />
          </Col>
          <Col>
            <CardBasic
              title="DMS"
              text="Mit unserem Dokumentenmanagement archivieren Sie alle Dokumente - egal ob Mails, Rechnungen oder Bilder - rechtssicher und mit allen Informationen. inkl. vieler Funktionen, wie z.B. eine Volltextsuche oder Workflows für Freigabeprozesse."
            />
          </Col>
          <Col>
            <CardBasic
              title="CRM"
              text="Unser Customer Relationship Management System bündelt alle Vertriebs-, Marketing- und Kundendienstaktivitäten in einem einzigen, digitalen Profil und bietet Ihrem Unternehmen ein persönlicheres und besseres Kundenerlebnis."
            />
          </Col>
          <Col>
            <CardBasic
              title="PIM"
              text="Unser Customer Relationship Management System bündelt alle Vertriebs-, Marketing- und Kundendienstaktivitäten in einem einzigen, digitalen Profil und bietet Ihrem Unternehmen ein persönlicheres und besseres Kundenerlebnis."
            />
          </Col>
          <Col>
            <CardBasic
              title="Virtual Desktop"
              text="Mit unserem Terminalserver können Sie von überall auf Windows-Arbeitsplätze, mit den für Sie wichtigen Programmen, zugreifen. Durch unsere Firewall und weitere Security-Maßnahmen sind Ihre Daten besonders geschützt."
            />
          </Col>
          <Col>
            <CardBasic
              title="O365"
              text="Microsoft Office 365 ist eine Kombination bestehend aus einem Online-Dienst, einer Office-Webanwendung und einem Office-Software-Abonnement. Neben Office-Programmen gehört auch Kollabarations-Software zum Paketumfang."
            />
          </Col>
          <Col>
            <CardBasic
              title="Backup & Disaster Recovery"
              text="Mit Veeam Cloud Connect und Disaster Recovery sichern wir Backups oder Schattenkopien Ihrer virtuellen Server. Nach Ihrem Bedarf designen wir hybride Disaster Recovery Lösungen - von verteilten Datenbankclustern bis zu K-Fall Rechenzentren."
            />
          </Col>
          <Col>
            <CardBasic
              title="Cloud Server"
              text="Virtuelle Server auf unserer Cloud-Plattform.
              Server, Netzwerk Storage und Container virtualisieren wir mittels VMWare vSphere, NSX, vSAN und Red Hat Open Shift. Gemanaget mittels VMWare vROPs und LogInsight."
            />
          </Col>
          <Col>
            <CardBasic
              title="IT Service Managemant System"
              text="Das Open Technology Real Services (OTRS), ist ein Ticketsystem oder Service-Managementsystem, das u. a. als Helpdesk-System bzw. Issue-Tracking-System eingesetzt wird und transparente (Kunden-)Kommunikation schafft."
            />
          </Col>
          <Col>
            <CardBasic
              title="Monitoring as a Service"
              text="Ihre Dienste müssen für Ihre Kunden immer und überall erreichbar sein. Wir bieten Ihnen eine systematische Überwachung angefangen mit Ihren Leistungsdaten Ihrer Applikation und Server an."
            />
          </Col>
        </Row>
      </Container>

      {/* partner - carousel */}
      <Container>
        <HeadingMiddle heading="starke partner" />
        coming soon...
      </Container>
      <FormPage fromHeading="APP" />
      <Footer />
    </>
  );
};

export default AppPage;
