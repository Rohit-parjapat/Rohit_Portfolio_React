import React from "react";
import AboutSection from "../components/aboutComponent/AboutMe";
import Contact from "../components/Contact/Contact";
import HeroSectionInfo from "../components/heroComponents/HeroSectionInfo";
import HeroSectionPoster from "../components/heroComponents/HeroSectionPoster";
import Navbar from "../components/Navbar and footer/Navbar";
import Services from "../components/Services/MyServices";
import Footer from "../components/Navbar and footer/footer";
import Projects from "../components/project/Projects";

const HomePage = () => {
  return (
    <>
      <div className="border-none md:mt-12 md:mx-20 mx-10 mt-6 shadow-[0px_0px_15px_5px_#d1d4de]">
        <Navbar />
        <div className="flex  justify-between">
          <HeroSectionInfo />
          <HeroSectionPoster />
        </div>
      </div>
      <div className="mt-5">
        <AboutSection />
      </div>
      <div className="mt-3">
        <Services />
      </div>
      <div>
        <Projects />
      </div>
      <div className="mt-3">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
