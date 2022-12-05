import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import ClickCounter from "../components/counter/ClickCounter";
import Footer from "../components/footer/Footer";
import FormPage from "../components/forms/FormPage";
import AlertContent from "../components/alert/AlertContent";
import HookImage from "../images/landing.jpg";
import Hero from "../components/hero/Hero";
import Modal from "../components/modal/Modal";

const Hooks = () => {

  return (
    <>
      <Navbar />
      <Hero
        imageSource={HookImage}
        heading="hooks"
        text="hier werden die Hooks getestet"
      />
      <AlertContent />
      <ClickCounter />
      <Modal />

      <FormPage fromHeading="HOOKS" />
      <Footer />
    </>
  );
};

export default Hooks;
