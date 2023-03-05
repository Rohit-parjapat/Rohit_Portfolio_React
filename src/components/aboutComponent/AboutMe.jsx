import React from "react";
import MyInfo from "./Info";
import Skills from "./Skills";
import "../../CSS/aboutSection.css";
const AboutSection = () => {
  return (
    <section id="about">
      <MyInfo />
      <Skills />
    </section>
  );
};

export default AboutSection;
