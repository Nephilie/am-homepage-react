import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import ClickCounter from "../components/counter/ClickCounter";
import Footer from "../components/footer/Footer";
import FormPage from "../components/forms/FormPage";

import HookImage from "../images/landing.jpg";
import Hero from "../components/hero/Hero";
import { Container } from "react-bootstrap";
// import Modal from "../components/modal/Modal";

const Hooks = () => {

  return (
    <>
      <Navbar />
      <Hero
        imageSource={HookImage}
        heading="hooks"
        text="hier werden die Hooks getestet"
      />
      <Container>
        <ClickCounter />
      </Container>
      {/* <Modal /> */}

      <FormPage fromHeading="HOOKS" />
      <Footer />
    </>
  );
};

export default Hooks;
