import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Navbar from "./components/navbar/Navbar";
import Data from "./components/data/Data";
import Footer from "./components/footer/Footer";
import FormPage from "./components/forms/FormPage";
import Video from "./components/video/Video";
import HeadingMiddle from "./components/header/HeadingMiddle";
import HeadingLeft from "./components/header/HeadingLeft";
import Subhead from "./components/content/Subhead";
import Paragraf from "./components/content/Paragraf";

// import images
import siegelImg from './images/siegel-rz.png' 
import webImg from './images/web-top.jpg'
import CardBasic from "./components/card-list/CardBasic";



function App() {
  return (
    <>
      <Navbar />
      <Video />

      {/* am - intro text */}
      <Container className="text-center mb-5">
        <HeadingMiddle heading="Am-gmbh: application managment" />
        <Subhead headContent="Wir entwickeln, betreiben und supporten Ihre digitalen Produkte und Systeme – beste Plattformen, neueste Technologie, engagiertes Personal, zertifizierte Prozesse und enger Kundenkontakt sind dabei die Bausteine unserer Leistungserbringung." />
        <Subhead headContent="Mit unserem innovativen Application Management Cycle können wir Sie flexibel und modular unterstützen und trotzdem das große Ganze im Blick behalten!" />
      </Container>

      {/* isograpf */}
      <Data />

      {/* rechenzentren - intro text */}
      <Container>
        <HeadingLeft heading="Unsere" spanHeading="Rechenzentren"/>   
        <Subhead headContent="Wir ermöglichen Ihnen einen wirtschaftlichen und zukunftsorientierten Betrieb von IT-Systemen." />
        <Row className="mt-5">
          <Col md={7}>
            <Paragraf paraContent="Unsere  Administratoren sorgen rund um die Uhr dafür, dass alle Services, Kundenapplikationen, Systeme und Server fehlerfrei und performant laufen. Hochverfügbar und ausfallsicher - von der Technik über eine umweltbewusste Energieversorgung bis hin zu Brandschutz und Klimatisierung  sind wir immer optimal für Sie aufgestellt." />
          </Col>
          <Col md={5} ><Image className="w-100" src={siegelImg} alt="mtc images" /></Col>
        </Row>
        <Row className="mt-5">
          <Col md={5} ><Image className="w-100" src={webImg} alt="mtc images" /></Col>
          <Col md={7}>
            <Paragraf paraContent="Die Rechenzentren in Meschede gehören mit ihrer durchsatzstarken Anbindung, den zertifizierten Betriebsprozessen sowie der state of the art Hardware zu den modernsten und sichersten RZ-Infrastrukturen Südwestfalens." />
          </Col>
        </Row>
        <Row xs={1} md={3} className="mt-5 gy-4">
          <Col>
            <CardBasic
              title="ISO/IEC 27001 (ISMS)"
              text="Informationssicherheits-Managementsystem:"
              text2="Wir stehen für herausragende Sicherheits- und Qualitätsstandards, denn nur so können wir das hohe Sicherheitsniveau dauerhaft gewährleisten."
            />
          </Col>
          <Col>
            <CardBasic
              title="TÜV InterCert Stufe 3 (24/7)"
              text="Hochverfügbare Rechenzentren mit 24/7 Betrieb:"
              text2="Wir stehen für einen hochverfügbaren und ausfallsicheren Betrieb, dem Sie jederzeit - rund um die Uhr - vertrauen können!"
            />
          </Col>
          <Col>
            <CardBasic
              title="IDW PS 951 Typ 2 (IKS)"
              text="Auslagerung rechnungslegungsrelevanter Prozesse:"
              text2="Wir stehen für einen sicheren Umgang mit Daten. Bei Ihrer Wirtschaftsprüfung müssen diese Prozesse nicht geprüft werden (IKS: internes Kontrollsystem)."
            />
          </Col>
        </Row>
      </Container>

      <Container>
        {/* Bild mit bullet points hinzufügen */}
      </Container>

      {/* erfolgsgeschichten */}
      <Container>
        <HeadingLeft heading="Unsere" spanHeading="Erfolgsgeschichten"/>     
        coming soon...
      </Container>

      <FormPage fromHeading="HOME" />
      <Footer />
    </>
  );
}

export default App;
