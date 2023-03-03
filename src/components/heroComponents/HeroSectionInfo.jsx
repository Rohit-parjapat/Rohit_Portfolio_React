import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import Rohit_CV from "../../assests/CV/Rohit_CV.pdf";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroSectionInfo = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div className="flex flex-col px-12 pt-16 md:w-1/2 w-full">
        <span className="text-sm text-gray-500 font-serif">Hello,</span>
        <span className="text-3xl font-bold tracking-wide py-2">
          I'am <span className="text-red-600 tracking-wide">Rohit</span>
        </span>
        <p className="text-sm text-gray-400 leading-tight">
          Bachelor of Computer Application student at Gurugram University and a
          Full stack web developer.
        </p>
        <a
          href={Rohit_CV}
          download="Rohit_CV"
          className="py-4"
          data-aos="fade-right"
        >
          <span className="bg-gray-700 rounded-md text-white font-semibold p-2 hover:bg-green-500">
            Download CV
          </span>
        </a>
      </div>
    </>
  );
};

export default HeroSectionInfo;
